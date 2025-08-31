import { useState } from "react";
import Preview from "./Preview"; // ✅ import

export default function Chatbot() {
  const [prompt, setPrompt] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("HTML");

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("https://genai-kappa.vercel.app/api/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, language }),
      });

      const data = await res.json();
      if (data.success) {
        setCode(data.code);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-4">💬 AI Website Builder</h2>

      {/* ✅ Input Box */}
      <div className="flex mb-4 gap-2">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your website..."
          className="flex-1 p-3 rounded-lg text-black bg-white"
        />

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-3 bg-gray-100 rounded-lg text-black"
        >
          <option value="HTML">HTML + CSS + JS</option>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
          <option value="Next.js">Next.js</option>
        </select>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="bg-blue-600 px-6 rounded-lg hover:bg-blue-700"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>

  
      <div className="flex flex-1 gap-4">

        <textarea
          className="w-1/2 p-3 bg-gray-800 text-green-400 rounded-lg font-mono text-sm"
          value={code}
          readOnly
          placeholder="Generated code will appear here..."
        />

        {/* Right - Preview Component */}
        <div className="w-1/2">
          <Preview code={code} language={language} />
        </div>
      </div>
    </div>
  );
}
