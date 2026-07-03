const express = require("express");
const cors = require("cors");
const { GoogleGenAI } = require("@google/genai");

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.get("/", (req, res) => {
  res.send("Gemini AI Server Running...");
});

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const today = new Date().toLocaleDateString("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric"
});

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Aaj ki date ${today} hai. Is date ko current date maan kar jawab do.Tum ek smart AI assistant ho. Hamesha simple Hindi me 2-3 line me jawab do. Agar user detail maange tabhi lamba jawab dena. User: " + message,
});

    res.json({
      reply: response.text,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      reply: "⚠️ Aaj ke liye AI limit khatam ho gayi hai. Kripya thodi der baad ya kal phir try karein.",
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
