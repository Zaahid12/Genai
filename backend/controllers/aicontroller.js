// controllers/aicontroller.js
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateCode = async (req, res) => {
  try {
    const { prompt, language } = req.body;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `
You are a professional ${language} developer.  
Task: Build a complete, fully functional ${language} project based on this prompt:

"${prompt}"

⚡ Rules:
1. Return ONLY valid ${language} code inside a single triple backtick block.
2. Use professional, modern, responsive UI (Tailwind/Material/Bootstrap).
3. Include FULL working logic (no placeholders).
4. Do not explain, only return the code.

Example:
\\\${language.toLowerCase()}
... full ${language} code ...
\\\
           `   ,
            },
          ],
        },
      ],
    });

    const responseText = result.response.text();

    // ✅ Universal Extractor (works for HTML, React, Next.js, Angular)
    function extractCode(text) {
      const regex =
        /`(?:html|javascript|css|jsx|tsx|typescript|angular|nextjs)?\n([\s\S]*?)```/i;
      const match = text.match(regex);
      return match ? match[1].trim() : text.trim();
    }

    const code = extractCode(responseText);

    res.json({
      success: true,
      code,
    });
  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};