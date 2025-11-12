import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.get("/", async (req, res) => {
  const { query } = req.query;
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&pageSize=5&apiKey=${process.env.NEWSAPI_KEY}`
    );
    const articles = response.data.articles.map((a) => ({
      source: a.source.name,
      url: a.url,
      title: a.title,
      publishedAt: a.publishedAt,
    }));
    res.json({ query, results: articles });
  } catch (err) {
    console.error("❌ searchAlternatives error:", err.message);
    res.status(500).json({ error: "Failed to fetch alternatives" });
  }
});

export default router;
