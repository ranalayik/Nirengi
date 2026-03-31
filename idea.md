[idea.md](https://github.com/user-attachments/files/26375867/idea.md)
# 💡 Proje Fikri — AIBulucu

## 🔴 Problem Tanımı

Bugün piyasada 200'den fazla AI aracı bulunuyor. Her gün yenileri ekleniyor.
Kullanıcılar şu soruyla kalıyor:

> *"Ben içerik yazarıyım / yazılımcıyım / tasarımcıyım — benim işim için en iyi AI hangisi?"*

Mevcut karşılaştırma siteleri (G2, Product Hunt, Futurepedia vb.) bu soruyu yanıtlayamıyor çünkü:

- **Kişiselleştirme yok** — Herkese aynı listeyi sunuyorlar
- **Bağlam yok** — Kullanıcının asıl ihtiyacını anlamıyorlar
- **Skor karışıklığı** — Sadece teknik veya sadece kullanıcı yorumu esas alınıyor
- **Türkçe kaynak yok** — Türk kullanıcılar için özelleştirilmiş bir platform bulunmuyor

---

## 🎯 Çözüm

**AIBulucu**, kullanıcının:
1. Bir **kategori** seçmesine
2. Yapmak istediği işi **serbest metin** olarak detaylı anlatmasına
3. **Bütçe tercihini** belirtmesine

...izin vererek; teknik benchmark skorları ve gerçek kullanıcı yorumlarını harmanlayan **kişiselleştirilmiş bir AI sıralaması** oluşturuyor.

---

## 👤 Hedef Kullanıcı Profili

| Segment | Örnek İhtiyaç |
|---|---|
| İçerik üreticileri | "Blog ve sosyal medya içeriği üreteyim" |
| Yazılım geliştiriciler | "Kod yazarken yardımcı asistan istiyorum" |
| Tasarımcılar | "Ürünlerim için görsel üreteyim" |
| Akademisyenler | "Makale araştırması ve özet yapayım" |
| Girişimciler | "İş planı ve sunum içeriği üreteyim" |
| Öğrenciler | "Ödev ve not alma için yardımcı lazım" |

---

## 🤖 AI'ın Platformdaki Rolü

### Mevcut Sürüm (v1 — Statik)
- AI veritabanı manuel olarak hazırlanmış
- Sıralama algoritması JavaScript ile çalışıyor
- Kullanıcı girdisi anahtar kelime eşleştirmesiyle işleniyor

### Gelecek Sürüm (v2 — AI Entegreli)
- Kullanıcının serbest metin girdisi **Claude / GPT API** ile analiz edilecek
- AI, kullanıcının asıl ihtiyacını anlayarak ağırlıklı sıralama üretecek
- **Yorum analizi** için NLP modeli entegre edilecek (sentiment + topic extraction)
- Kullanıcı kendi yorumunu ekleyebilecek → model gerçek zamanlı güncellenecek

---

## 📊 Sıralama Algoritması

```
Toplam Skor = (Teknik Benchmark × 0.40) + (Kullanıcı Yorumları × 0.35) + (Kişiselleştirme Bonusu × 0.25)
```

- **Teknik Benchmark** — Model testleri, hız, doğruluk, çok dilli destek
- **Kullanıcı Yorumları** — Yıldız ortalaması × yorum sayısı ağırlıklı
- **Kişiselleştirme Bonusu** — Kullanıcı girdisindeki anahtar kelimelerin araç açıklamasıyla eşleşmesi

---

## 🚧 Kapsam Dışı (v1)

- Gerçek zamanlı fiyat takibi
- Kullanıcı hesabı / giriş sistemi
- Yorum yazma özelliği (v2'ye ertelendi)
- API entegrasyonu (v2'ye ertelendi)
