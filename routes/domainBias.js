import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  const { domain } = req.query;
  const sampleBiasMap = {
    "thehindu.com": "Center-Left",
    "foxnews.com": "Right",
    "reuters.com": "Center",
  };
  res.json({
    domain,
    bias: sampleBiasMap[domain] || "Unknown",
    confidence: 0.8,
  });
});

export default router;
