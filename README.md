# 🧠 EchoCheck – AI-Powered Media Bias & Sentiment Analyzer (Chrome Extension)

**EchoCheck** is an intelligent Chrome Extension that analyzes online news articles in real-time using **AI**.  
It helps users identify **bias**, **sentiment**, **tone**, and **factual accuracy** — all while suggesting **alternative sources** for balanced perspectives.  

This project consists of:
- 🧩 A **Chrome extension (frontend)**  
- ⚙️ A **Node.js + Express backend** with AI and NewsAPI integrations  

---

## 🚀 Overview

EchoCheck aims to **promote media literacy** by helping readers understand how objective or biased a news article might be.  
When a user visits any news site, the extension analyzes the page and displays a clean, informative overlay with:

| Feature | Description |
|----------|--------------|
| 🧭 **Bias Detection** | Identifies whether the source leans Left, Right, or Center using domain analysis |
| 😊 **Sentiment Analysis** | Evaluates whether the tone is positive, negative, or neutral |
| 🎙️ **Tone Classification** | Determines if the article is factual, opinionated, sensational, or informative |
| 📊 **Fact vs Opinion Ratio** | Shows the percentage of factual vs opinionated content |
| 📝 **Summary Generation** | Summarizes the main points of the article using AI |
| 🌐 **Alternative Sources** | Suggests other outlets covering the same topic via NewsAPI |
| 🔄 **Reanalyze Button** | Lets users refresh the analysis after switching or editing articles |

---

## 🧱 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | Chrome Extension (HTML, CSS, JavaScript) |
| **Backend** | Node.js + Express |
| **AI / NLP** | OpenAI API (for sentiment, tone, and summary) |
| **News Data** | NewsAPI (for alternative source suggestions) |
| **Deployment** | Render (backend) + Chrome Web Store (frontend) |

---

## 🧩 Project Architecture

