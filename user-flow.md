[user-flow.md](https://github.com/user-attachments/files/26375943/user-flow.md)
# 🔄 Kullanıcı Akışı — AIBulucu

## Adım Adım Akış

```
┌──────────────────────────────────────────────────────────────────┐
│                        KULLANICI GİRİŞİ                          │
└──────────────────────────────────────────────────────────────────┘
                                │
                                ▼
              ┌─────────────────────────────────┐
              │  1. ANA SAYFA                   │
              │     - Hero başlık               │
              │     - İstatistik bar (200+ AI,  │
              │       18 kategori, 12K yorum)   │
              └────────────────┬────────────────┘
                               │
                               ▼
              ┌─────────────────────────────────┐
              │  2. KATEGORİ SEÇİMİ             │
              │     Dropdown menü               │
              │     18 seçenek:                 │
              │     ✍️ Yazı & İçerik            │
              │     💻 Kod & Geliştirme         │
              │     🎨 Görsel & Tasarım         │
              │     🎬 Video Üretimi            │
              │     ...vb.                      │
              └────────────────┬────────────────┘
                               │
                               ▼
              ┌─────────────────────────────────┐
              │  3. DETAYLI AÇIKLAMA            │
              │     Serbest metin alanı         │
              │     Kullanıcı ne yapmak         │
              │     istediğini anlatır.         │
              │                                 │
              │     Örn: "SEO uyumlu İngilizce  │
              │     blog yazısı üretmek         │
              │     istiyorum, günde 50 içerik" │
              └────────────────┬────────────────┘
                               │
                               ▼
              ┌─────────────────────────────────┐
              │  4. BÜTÇE TERCİHİ               │
              │     - Fark etmez                │
              │     - Ücretsiz olsun            │
              │     - Freemium                  │
              │     - Ücretliye de bakarım      │
              └────────────────┬────────────────┘
                               │
                               ▼
              ┌─────────────────────────────────┐
              │  5. "SIRALAMAYI OLUŞTUR" BUTONU │
              │     → Buton tıklanır            │
              │     → Validasyon kontrolü       │
              │       (kategori seçili mi?      │
              │        açıklama yeterli mi?)    │
              └────────────────┬────────────────┘
                               │
                               ▼
              ┌─────────────────────────────────┐
              │  6. ANALİZ AŞAMASI              │
              │     Loading animasyonu          │
              │     "AI araçları analiz         │
              │      ediliyor..." mesajı        │
              │     ~1.8 sn simülasyon          │
              └────────────────┬────────────────┘
                               │
                               ▼
              ┌─────────────────────────────────┐
              │  7. SONUÇ SAYFASI               │
              │                                 │
              │  Her kart içeriği:              │
              │  ┌────────────────────────────┐ │
              │  │ #1  [AI Adı]   [Freemium]  │ │
              │  │     Açıklama metni         │ │
              │  │     "En Uygun Seçim: ..."  │ │
              │  │     Teknik: ████ 96        │ │
              │  │     Kullanıcı: ████ 89     │ │
              │  │     Genel: ████ 93         │ │
              │  │     ★★★★½ (3.2K)  [Git →] │ │
              │  └────────────────────────────┘ │
              │  Birden fazla kart sıralanır     │
              └────────────────┬────────────────┘
                               │
                    ┌──────────┴──────────┐
                    ▼                     ▼
        ┌───────────────────┐  ┌──────────────────────┐
        │  8A. Ziyaret Et   │  │  8B. Yeni Arama      │
        │  → Araç sitesine  │  │  → Forma dön         │
        │    yeni sekmede   │  │  → Farklı kategori   │
        │    gidilir        │  │    veya açıklama     │
        └───────────────────┘  └──────────────────────┘
```

---

## Hata Durumları

| Durum | Tepki |
|---|---|
| Kategori seçilmedi | Alert: "Lütfen bir kategori seç." |
| Açıklama çok kısa (<20 karakter) | Alert: "Daha detaylı anlat (en az 20 karakter)." |
| Bütçe filtresinde araç kalmadı | Otomatik fallback: tüm araçlar gösterilir |

---

## Kullanıcı Tipleri ve Beklenen Akışlar

**Hızlı Kullanıcı** → Kategori seç → Kısa açıklama yaz → Sonuçlara bak → 30 saniye
**Detaylı Kullanıcı** → Kategori seç → Uzun açıklama → Bütçe filtrele → Karşılaştır → 2-3 dakika
**Tekrarlayan Kullanıcı** → Farklı kategoriler dener → Araçları karşılaştırır
