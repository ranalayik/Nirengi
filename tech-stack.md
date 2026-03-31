[tech-stack.md](https://github.com/user-attachments/files/26375954/tech-stack.md)
# 🛠️ Tech Stack — AIBulucu

## Genel Mimari

```
┌─────────────────────────────────────────────┐
│                  FRONTEND                   │
│    HTML5 + CSS3 + Vanilla JavaScript        │
│    (tek dosya, sıfır bağımlılık)           │
└─────────────────────────────────────────────┘
              ↕ (v2'de eklenecek)
┌─────────────────────────────────────────────┐
│                  BACKEND                    │
│    Node.js + Express (planlı)               │
└─────────────────────────────────────────────┘
              ↕ (v2'de eklenecek)
┌─────────────────────────────────────────────┐
│               AI / VERİ KATMANI             │
│    Claude API / GPT-4o API (planlı)         │
└─────────────────────────────────────────────┘
```

---

## Mevcut Sürüm (v1) — Kullanılan Teknolojiler

### Frontend

| Teknoloji | Versiyon | Seçim Gerekçesi |
|---|---|---|
| **HTML5** | Standart | Taşınabilirlik; ek kurulum gerekmez |
| **CSS3** | Standart | CSS Variables, Grid, Flexbox, Animasyonlar |
| **Vanilla JavaScript** | ES2022 | Sıfır framework bağımlılığı, hızlı yükleme |
| **Google Fonts** | CDN | Syne (başlık) + DM Sans (gövde) — özgün tipografi |

**Sıfır npm bağımlılığı.** Dosyayı tarayıcıda açmak yeterli.

### Algoritma Katmanı (JavaScript)

```js
// Sıralama formülü
Toplam = (Teknik × 0.40) + (KullanıcıMemnuniyeti × 0.35) + (EşleşmeBonusu × 0.25)

// Eşleşme bonusu: kullanıcının açıklaması ile araç açıklaması karşılaştırılır
```

### Veri Katmanı (v1)

- AI araç veritabanı `features/index.html` içinde JavaScript nesnesi olarak tutuluyor
- 8 kategori × 5 araç = 40 AI aracı
- Her araç için: isim, fiyat modeli, teknik skor, kullanıcı skoru, açıklama, URL, yıldız ortalaması, yorum sayısı

---

## Planlanan Sürüm (v2) — Eklenecek Teknolojiler

### Backend

| Teknoloji | Seçim Gerekçesi |
|---|---|
| **Node.js + Express** | Hızlı API geliştirme, geniş ekosistem |
| **Supabase (PostgreSQL)** | Kolay kurulum, gerçek zamanlı güncelleme, ücretsiz tier |
| **Redis** | Kullanıcı sorguları için önbellekleme |

### AI Entegrasyonu

| Teknoloji | Kullanım Amacı |
|---|---|
| **Anthropic Claude API** | Kullanıcı girdisini analiz et, ihtiyaçları çıkar |
| **OpenAI GPT-4o** | Alternatif model karşılaştırma |
| **Transformers.js** | Tarayıcıda çalışan hafif NLP (yorum analizi) |

### Deployment

| Teknoloji | Seçim Gerekçesi |
|---|---|
| **Vercel / Netlify** | Otomatik CI/CD, ücretsiz tier, subdomain |
| **GitHub Actions** | Otomatik test ve deploy pipeline |

---

## Neden Bu Yığın?

### v1 için "Tek Dosya" yaklaşımı
- **Hız**: Framework olmadan sayfa <100ms yükleniyor
- **Erişilebilirlik**: Herhangi bir bilgisayarda çalışıyor, sunucu gerekmez
- **Bakım kolaylığı**: Tek dosyayı güncellemek yeterli
- **Demo odaklı**: Hackathon/MVP ortamında önce çalışır hale getir

### v2 için Node.js + Supabase
- JavaScript full-stack → Aynı dil frontend+backend
- Supabase PostgreSQL → Kullanıcı yorumları ve sıralama geçmişi için ilişkisel veri

---

## Tarayıcı Desteği

| Tarayıcı | Destek |
|---|---|
| Chrome 90+ | ✅ Tam |
| Firefox 88+ | ✅ Tam |
| Safari 14+ | ✅ Tam |
| Edge 90+ | ✅ Tam |
| IE 11 | ❌ Desteklenmiyor |
