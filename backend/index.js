import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import aiRoutes from "./routes/ai.js";

dotenv.config();

const app = express();

// CORS setup (apne frontend ka URL yahan daalna)
app.use(cors({
  origin: ["https://genai-kappa.vercel.app"], 
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("✅ API is running...");
});

// Routes
app.use("/api/ai", aiRoutes);

// PORT setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log("🔑 Gemini API Key:", process.env.GEMINI_API_KEY ? "Loaded" : "Missing!");
});
