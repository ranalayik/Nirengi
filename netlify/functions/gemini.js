export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { tools, userPrompt, category, budget, lang } = JSON.parse(event.body);

    const toolList = tools
      .map((t, i) => {
        const desc = typeof t.desc === "object" ? t.desc[lang] || t.desc.tr : t.desc;
        return `${i + 1}. ${t.name} (${t.tag}) - Tech: ${t.tech}, UX: ${t.user}, Stars: ${t.stars}\n   Açıklama: ${desc}`;
      })
      .join("\n");

    const systemPrompt = `Sen bir AI araç öneri uzmanısın. Kullanıcının ihtiyacını analiz edip verilen araçları sıralamalısın.
Yanıtını SADECE geçerli bir JSON dizisi olarak ver. Başka hiçbir şey yazma, açıklama yapma.
Format:
[
  { "name": "Araç Adı", "overall": 87, "why": "Bu araç seçilme sebebi (1-2 cümle, kullanıcının diline göre)" },
  ...
]
- overall skoru 0-100 arası olmalı
- Tüm araçları dahil et, sadece sıralamayı değiştir
- why alanı kullanıcının diliyle (${lang === "tr" ? "Türkçe" : "İngilizce"}) yazılmalı`;

    const userMessage = `Kategori: ${category}
Bütçe: ${budget}
Kullanıcının ihtiyacı: "${userPrompt}"

Sıralanacak araçlar:
${toolList}

Bu kullanıcının ihtiyacına göre araçları en uygundan en az uygun olana sırala ve overall skorunu hesapla.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemPrompt }] },
          contents: [{ role: "user", parts: [{ text: userMessage }] }],
          generationConfig: { temperature: 0.3 },
        }),
      }
    );

    const data = await response.json();
    const raw = data.candidates?.[0]?.content?.parts?.[0]?.text || "[]";
    const clean = raw.replace(/```json|```/g, "").trim();
    const ranked = JSON.parse(clean);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ranked }),
    };
  } catch (err) {
    console.error("Gemini function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
