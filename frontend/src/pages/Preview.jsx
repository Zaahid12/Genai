/* eslint-disable react/prop-types */
export default function Preview({ code, language }) {
  // ✅ Agar HTML hai to iframe me render hoga
  if (language === "HTML") {
    return (
      <iframe
        title="Live Preview"
        className="w-full h-full bg-white rounded-lg"
        srcDoc={code || "<h2 style='padding:20px'>No code yet...</h2>"}
        sandbox="allow-scripts allow-same-origin"
      />
    );
  }

  // ✅ Agar React, Angular, Next.js hai to sirf code dikhayega
  return (
    <div className="w-full h-full bg-gray-800 text-green-400 p-4 rounded-lg overflow-auto font-mono text-sm">
      <h2 className="text-lg font-bold mb-2">
        ⚠️ Live Preview only works for plain HTML
      </h2>
      <p className="mb-2">You selected: <b>{language}</b></p>
      <pre>{code || "No code generated yet..."}</pre>
    </div>
  );
}