[README.md](https://github.com/user-attachments/files/26375902/README.md)
# 🤖 AIBulucu — Sana Özel Yapay Zeka Sıralaması

## Problem
Bugün 200'den fazla AI aracı var ve her gün yenileri ekleniyor. Kullanıcılar hangi aracın kendi işine uygun olduğunu bilemiyor. Mevcut karşılaştırma siteleri kişiselleştirme yapmıyor — herkese aynı genel listeyi sunuyor. Türkçe kaynak neredeyse hiç yok.

## Çözüm
AIBulucu, kullanıcının yapmak istediği işi kendi cümleleriyle anlatmasına izin veriyor. Sistem; teknik benchmark skorları ve binlerce kullanıcı yorumunu bir araya getiren algoritmasıyla **o kişiye özel** bir AI sıralaması oluşturuyor. 18 kategori, 40+ araç, bütçe filtresi.

**AI'ın Rolü:** Kullanıcının serbest metin girdisi analiz ediliyor. Teknik skor (%40) + kullanıcı memnuniyeti (%35) + kişiselleştirme bonusu (%25) formülüyle sıralama üretiliyor.

## Canlı Demo
🌐 **Yayın Linki:** `https://aibulucu.netlify.app` *(deploy sonrası güncellenecek)*
🎬 **Demo Video:** `https://loom.com/share/...` *(çekim sonrası güncellenecek)*

---


**Kullanıcıların yapmak istedikleri işlere en uygun AI aracını bulmalarını sağlayan, hem teknik skor hem kullanıcı yorumlarına dayalı kişiselleştirilmiş sıralama platformu.**

---

## 🧩 Problem

200'den fazla AI aracı var — hangisi senin işine gerçekten uygun?
Çoğu karşılaştırma sitesi ya teknik değil ya da kişisel değil.
AIBulucu, kullanıcının kendi ihtiyacını anlatmasına izin vererek ona özel bir sıralama üretir.

---

## 🚀 Nasıl Çalıştırılır?

### Yöntem 1 — Direkt Tarayıcıda Aç
```bash
# Repo'yu klonla
git clone https://github.com/kullaniciadi/aibulucu.git
cd aibulucu

# features/index.html dosyasını tarayıcıda aç
open features/index.html
```

### Yöntem 2 — Local Server (önerilen)
```bash
# Python ile basit sunucu başlat
cd aibulucu
python3 -m http.server 8080

# Tarayıcıda aç
# http://localhost:8080/features/index.html
```

### Yöntem 3 — VS Code Live Server
1. VS Code'da klasörü aç
2. `features/index.html` dosyasına sağ tıkla
3. "Open with Live Server" seç

---

## ✨ Özellikler

- 📂 **18 Kategori** — Yazı, kod, görsel, video, ses, veri, araştırma ve daha fazlası
- 🎯 **Kişiselleştirilmiş Sıralama** — Serbest metin girişiyle ihtiyaca özel algoritma
- ⭐ **Çift Skorlama** — Teknik benchmark + kullanıcı yorum/yıldız birleşimi
- 💰 **Bütçe Filtresi** — Ücretsiz, freemium veya ücretli tercihine göre filtreleme
- 🌙 **Dark Mode Tasarım** — Modern, göz yormayan arayüz
- 📱 **Responsive** — Masaüstü ve mobilde tam uyumluluk

---

## 🎬 Demo Video

> 📹 [YouTube / Loom demo linki buraya eklenecek]

---

## 🌐 Yayın Linki

> 🔗 [Netlify / Vercel / Lovable yayın linki buraya eklenecek]

---

## 📁 Repo Yapısı

```
aibulucu/
├── README.md          # Bu dosya — proje özeti
├── idea.md            # Problem tanımı ve AI'ın rolü
├── user-flow.md       # Kullanıcı akışı adım adım
├── tech-stack.md      # Kullanılan teknolojiler
└── features/
    ├── index.html     # Ana uygulama (tek dosya, self-contained)
    └── ...            # Gelecekte eklenecek bileşenler
```

---

## 👨‍💻 Geliştirici

> Bu proje [Adın Soyadın] tarafından geliştirilmiştir.

---

## 📄 Lisans

MIT License — Özgürce kullanabilirsiniz.
