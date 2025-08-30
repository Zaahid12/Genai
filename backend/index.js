import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();

// Middleware
app.use(express.json());

// ✅ CORS Fix
app.use(
  cors({
    origin: "*", // test ke liye sab allowed, baad me apna frontend domain likh dena
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Route: Gemini API
app.post("/api/generate", async (req, res) => {
  try {
    const { prompt, language } = req.body;

    // Gemini API request
    const response = await fetch(
      https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY},
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: ${prompt} in ${language} }] }],
        }),
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Error from Gemini API:", err);
    res.status(500).json({ error: "Something went wrong on the server" });
  }
});

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(🚀 Server running on port ${PORT} | Gemini API loaded ✅)
);
