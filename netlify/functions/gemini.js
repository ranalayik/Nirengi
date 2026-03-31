export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { tools, userPrompt, category, budget, lang } = JSON.parse(event.body);

    const toolList = tools
      .map((t, i) => {
        const desc = typeof t.desc === "object" ? t.desc[lang] || t.desc.tr : t.desc;
        return `${i + 1}. ${t.name} (${t.tag}) - Tech: ${t.tech}, UX: ${t.user}, Stars: ${t.stars}\n   Desc: ${desc}`;
      })
      .join("\n");

    const systemPrompt = `Sen bir AI araç öneri uzmanısın.
SADECE geçerli JSON dizisi döndür. Hiçbir açıklama, markdown, code fence veya ek metin yazma.
Format (bu formatın TAM olarak kullan):
[{"name":"Araç Adı","overall":87,"why":"Açıklama"},...]
Kurallar:
- overall: 0-100 arası tam sayı
- Tüm araçları listele, sadece sıralamayı değiştir
- why: ${lang === "tr" ? "Türkçe" : "İngilizce"}, 1-2 cümle, kullanıcının ihtiyacına özel`;

    const userMessage = `Kategori: ${category} | Bütçe: ${budget}
Kullanıcının ihtiyacı: "${userPrompt}"

Araçlar:
${toolList}

Kullanıcının ihtiyacına göre sırala ve overall hesapla. SADECE JSON döndür.`;

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemPrompt }] },
          contents: [{ role: "user", parts: [{ text: userMessage }] }],
          generationConfig: {
            temperature: 0.2,
            responseMimeType: "application/json",
          },
        }),
      }
    );

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      console.error("Gemini HTTP error:", geminiRes.status, errText);
      return { statusCode: 502, body: JSON.stringify({ error: "Gemini API hatası: " + geminiRes.status }) };
    }

    const geminiData = await geminiRes.json();
    let raw = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || "";

    // Markdown code fence temizleme
    raw = raw.replace(/```json\s*/gi, "").replace(/```\s*/g, "").trim();

    // JSON parse
    let ranked;
    try {
      ranked = JSON.parse(raw);
    } catch (parseErr) {
      console.error("JSON parse hatası. Ham yanıt:", raw);
      return { statusCode: 500, body: JSON.stringify({ error: "Gemini geçersiz JSON döndürdü", raw }) };
    }

    if (!Array.isArray(ranked) || ranked.length === 0) {
      return { statusCode: 500, body: JSON.stringify({ error: "Gemini boş dizi döndürdü", raw }) };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ranked }),
    };
  } catch (err) {
    console.error("Function genel hata:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
