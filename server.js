import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analyzeRoute from "./routes/analyze.js";
import domainBiasRoute from "./routes/domainBias.js";
import searchRoute from "./routes/searchAlternatives.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/analyze", analyzeRoute);
app.use("/api/domain-bias", domainBiasRoute);
app.use("/api/search-alternatives", searchRoute);
app.get("/", (req, res) => {
  res.send(`
    <h1>🧠 EchoCheck Backend API</h1>
    <p>Welcome! Your AI-powered media bias and sentiment analyzer is live.</p>
    <p>Try endpoints like:</p>
    <ul>
      <li><a href="/api/domain-bias?domain=thehindu.com">/api/domain-bias</a></li>
      <li><a href="/api/analyze">/api/analyze</a> (POST request)</li>
    </ul>
  `);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ EchoCheck backend running on port ${PORT}`));
