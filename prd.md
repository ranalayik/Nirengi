[prd.md](https://github.com/user-attachments/files/26375921/prd.md)
# 📄 PRD — AIBulucu (Ürün Gereksinim Belgesi)

## Proje Özeti

**AIBulucu**, kullanıcıların yapmak istedikleri işi serbest metin olarak anlatmasına izin vererek; teknik benchmark skorları ve gerçek kullanıcı yorumlarını harmanlayan kişiselleştirilmiş bir yapay zeka aracı sıralama platformudur.

---

## Problem

- Dünyada 200+ AI aracı var, hangisinin "benim işime" uygun olduğu belirsiz
- Mevcut karşılaştırma siteleri kişiselleştirme sunmuyor — herkese aynı liste
- Türkçe, bağlama duyarlı bir AI rehber platformu bulunmuyor
- Kullanıcılar yanlış araçla zaman kaybediyor, paralı aboneliklere yönleniyor

---

## Çözüm

Kullanıcı şunları girer:
1. **Kategori** — 18 seçenek (yazı, kod, görsel, video, araştırma vb.)
2. **Serbest açıklama** — "Ne yapmak istiyorum?" detaylı metin
3. **Bütçe tercihi** — Ücretsiz / Freemium / Ücretli

Platform şunları üretir:
- Kişiselleştirilmiş sıralanmış AI aracı listesi
- Her araç için teknik skor + kullanıcı memnuniyeti + eşleşme puanı
- Her araç için "Neden bu sana uygun?" açıklaması
- Doğrudan araç sitesine yönlendirme butonu

---

## Hedef Kullanıcılar

| Segment | İhtiyaç |
|---|---|
| İçerik üreticileri | Blog, sosyal medya, reklam metni için doğru AI |
| Yazılımcılar | Kod asistanı, editör entegrasyonu |
| Tasarımcılar | Görsel, logo, UI üretim araçları |
| Öğrenciler | Araştırma, özet, ödev yardımı |
| Girişimciler | İş planı, sunum, pazarlama içeriği |
| Akademisyenler | Makale analizi, kaynak tarama |

---

## Özellikler (v1 — MVP)

### F1 — Kategori Seçimi
- 18 kategorili dropdown menü
- Her kategori için özel AI veritabanı

### F2 — Serbest Metin Girişi
- Textarea ile detaylı ihtiyaç açıklaması
- Minimum 20 karakter validasyonu

### F3 — Bütçe Filtresi
- Ücretsiz / Freemium / Ücretli / Fark etmez

### F4 — Kişiselleştirilmiş Sıralama
- Algoritma: (Teknik × 0.40) + (Kullanıcı × 0.35) + (Eşleşme × 0.25)
- Eşleşme bonusu: Kullanıcı metni ile araç açıklaması karşılaştırılır
- Sonuçlar animasyonlu kart görünümünde listelenir

### F5 — AI Araç Kartları
- Araç adı, fiyat modeli etiketi
- Teknik / kullanıcı / genel puan bar grafikleri
- Neden uygun? açıklaması
- Yıldız ortalaması ve yorum sayısı
- Araç sitesine yönlendirme

### F6 — Responsive Tasarım
- Masaüstü, tablet, mobil tam uyumluluk
- Dark mode

---

## Ekranlar

### Ekran 1 — Ana Sayfa / Arama
- Header: Logo + "Beta" etiketi
- İstatistik bar: 200+ araç, 18 kategori, 12K+ yorum
- Hero bölümü: Başlık + açıklama
- Arama formu: Kategori + açıklama + bütçe + buton

### Ekran 2 — Sonuç Listesi (Aynı Sayfa)
- "Sana Özel AI Sıralaması" başlığı + araç sayısı
- Sıralı AI kartları (animasyonlu giriş)
- Her kart: sıra rozeti, bilgiler, puanlar, ziyaret butonu
- Dipnot: Sıralama hakkında açıklama

---

## Teknik Gereksinimler

- Tek HTML dosyası (zero dependency)
- Vanilla JS — framework yok
- CSS3 custom properties, Grid, Flexbox
- Tarayıcıda direkt açılabiliyor (sunucu gerekmez)
- Google Fonts CDN (Syne + DM Sans)

---

## Başarı Kriterleri

- Kullanıcı kategorisini seçip açıklamasını yazıp 2 saniye içinde sonuç alıyor
- En az 5 kişi "Bu benim ihtiyacımı karşılıyor" diyor
- Herhangi bir kurulum veya teknik bilgi gerektirmiyor
- Mobilde sorunsuz çalışıyor

---

## Kapsam Dışı (v2'ye ertelendi)

- Kullanıcı hesabı / giriş sistemi
- Gerçek zamanlı API entegrasyonu
- Kullanıcı yorum yazma
- Gerçek zamanlı fiyat güncelleme
- Çok dilli destek (İngilizce)
