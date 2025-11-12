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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ EchoCheck backend running on port ${PORT}`));
