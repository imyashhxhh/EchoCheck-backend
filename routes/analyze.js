import express from "express";
import axios from "axios";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post("/", async (req, res) => {
  try {
    const { url, domain, headline, snippet } = req.body;
    console.log("📩 Analyze request from:", domain);

    // 🧠 AI call
    const prompt = `
      You are an AI media analysis assistant. Given this text, return JSON with:
      - sentiment (positive|neutral|negative)
      - tone (informative|emotional|sensational|satirical|opinionated)
      - factual_ratio (0–1)
      - summary (neutral summary in 2 sentences)
      Text:
      """${snippet}"""
    `;

    const aiResponse = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "system", content: prompt }],
      temperature: 0.3,
    });

    let analysis;
    try {
      analysis = JSON.parse(aiResponse.choices[0].message.content);
    } catch {
      analysis = { sentiment: "neutral", tone: "informative", factual_ratio: 0.6, summary: "AI parsing failed." };
    }

    // 📰 Find alternative sources using NewsAPI
    const altResponse = await axios.get(
  `https://newsapi.org/v2/everything?q=${encodeURIComponent(headline)}&pageSize=3&apiKey=${process.env.NEWSAPI_KEY}`
);

    const alternatives = altResponse.data.articles.map((a) => ({
      source: a.source.name,
      url: a.url,
      bias: "Unknown",
    }));

    const result = {
      bias_hint: { domain_bias: "Center", confidence: 0.85 },
      sentiment: { label: analysis.sentiment },
      tone: { label: analysis.tone },
      fact_opinion_ratio: {
        factual: analysis.factual_ratio,
        opinion: 1 - analysis.factual_ratio,
      },
      summary: analysis.summary,
      alternatives,
    };

    res.json(result);
  } catch (err) {
    console.error("❌ /api/analyze error:", err.message);
    res.status(500).json({ error: "Analysis failed" });
  }
});

export default router;
