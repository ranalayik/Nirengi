[tasks.md](https://github.com/user-attachments/files/26375972/tasks.md)
# ✅ tasks.md — AIBulucu Görev Listesi

Bu liste `prd.md` dosyasına bakılarak oluşturulmuştur.
Her görevi sırayla tamamla. Bir görev bitmeden bir sonrakine geçme.

---

## 🟢 GÖREV 1 — Temel HTML Yapısı
**Durum:** ✅ Tamamlandı

- [x] `features/index.html` dosyası oluşturuldu
- [x] Sayfa genel yapısı: header, hero, form bölümü
- [x] Google Fonts (Syne + DM Sans) CDN ile eklendi
- [x] CSS değişkenleri (renk paleti, dark mode) tanımlandı
- [x] Arka plan grid ve blob efektleri eklendi

---

## 🟢 GÖREV 2 — Arama Formu
**Durum:** ✅ Tamamlandı

- [x] Kategori dropdown (18 seçenek)
- [x] Serbest metin textarea
- [x] Bütçe filtresi dropdown
- [x] "Sıralamayı Oluştur" butonu
- [x] Form validasyonu (boş kategori, kısa açıklama kontrolü)

---

## 🟢 GÖREV 3 — AI Araç Veritabanı
**Durum:** ✅ Tamamlandı

- [x] 8 kategori için JavaScript veri nesnesi oluşturuldu
- [x] Her kategoride 5 araç tanımlandı (toplam 40 araç)
- [x] Her araç için: isim, fiyat modeli, teknik skor, kullanıcı skoru, açıklama, URL, yıldız, yorum sayısı
- [x] Kategoriler: yazı, kod, görsel, video, sohbet, araştırma, veri, ses

---

## 🟢 GÖREV 4 — Sıralama Algoritması
**Durum:** ✅ Tamamlandı

- [x] Ağırlıklı skor hesaplama: (Teknik × 0.40) + (Kullanıcı × 0.35) + (Eşleşme × 0.25)
- [x] Kullanıcı metni ile araç açıklaması karşılaştırma (anahtar kelime bonusu)
- [x] Bütçe filtrelemesi (ücretsiz/freemium/ücretli)
- [x] Fallback: filtrede araç kalmazsa tüm liste gösterilir

---

## 🟢 GÖREV 5 — Sonuç Kartları UI
**Durum:** ✅ Tamamlandı

- [x] Animasyonlu AI araç kartları (fadeUp efekti, staggered delay)
- [x] Sıralama rozetleri (#1, #2, #3... farklı renk)
- [x] Puan bar grafikleri (teknik / kullanıcı / genel)
- [x] Fiyat modeli etiketleri (ücretsiz / freemium / ücretli)
- [x] Yıldız gösterimi ve yorum sayısı
- [x] "Ziyaret Et" butonu (araç sitesine yeni sekme)
- [x] "Neden bu sana uygun?" açıklaması (ilk 3 için özel metin)

---

## 🟢 GÖREV 6 — Responsive ve Tasarım Cilası
**Durum:** ✅ Tamamlandı

- [x] Mobil breakpoint (max-width: 640px) stilleri
- [x] Loading animasyonu (spinner + metin)
- [x] Hero istatistik barı (200+ araç, 18 kategori, 12K+ yorum)
- [x] Smooth scroll sonuç bölümüne

---

## 🔵 GÖREV 7 — Yayınlama (Netlify / Lovable)
**Durum:** ⏳ Bekliyor

- [ ] `features/index.html` Lovable'a veya Netlify'a yüklendi
- [ ] Yayın linki alındı (örn: aibulucu.netlify.app)
- [ ] README.md'ye yayın linki eklendi
- [ ] Yayın linkinden uygulama çalışıyor doğrulandı

**Adımlar:**
```
1. netlify.com → "Add new site" → "Deploy manually"
2. features/ klasörünü sürükle-bırak
3. Linki kopyala → README.md'ye yapıştır
```

---

## 🔵 GÖREV 8 — Demo Video (Loom)
**Durum:** ⏳ Bekliyor

- [ ] loom.com'da hesap açıldı
- [ ] 2-3 dakikalık ekran kaydı çekildi
- [ ] Video yapısı takip edildi:
  - 0:00-0:20 → Problem tanıtımı
  - 0:20-1:30 → Canlı demo (kategori seç, açıkla, sonuçları göster)
  - 1:30-2:00 → Kullanılan teknolojiler
  - 2:00-2:30 → Test geri bildirimleri ve gelecek planlar
- [ ] Loom linki alındı → README.md'ye eklendi

---

## 🔵 GÖREV 9 — Kullanıcı Testi
**Durum:** ⏳ Bekliyor

- [ ] En az 5 kişiye yayın linki gönderildi
- [ ] Geri bildirim soruları hazırlandı (Google Forms)
- [ ] Yanıtlar toplandı
- [ ] En kritik geri bildirime göre 1 iyileştirme yapıldı

**Test soruları:**
1. Uygulamayı kullanmak ne kadar kolaydı? (1-5)
2. Sıralama sana gerçekten uygun AI'ları önerdi mi?
3. Eksik bulduğun bir şey var mı?
4. Hangi kategoriyi denedin?
5. Bu uygulamayı bir arkadaşına önerir miydin?

---

## 🔵 GÖREV 10 — GitHub Son Kontrol ve Teslim
**Durum:** ⏳ Bekliyor

- [ ] Repo Public olarak ayarlandı
- [ ] Tüm dosyalar repoda mevcut:
  - [ ] README.md (yayın linki + video linki dahil)
  - [ ] idea.md
  - [ ] prd.md
  - [ ] user-flow.md
  - [ ] tech-stack.md
  - [ ] tasks.md (bu dosya)
  - [ ] features/index.html
- [ ] Teslim formu dolduruldu ve gönderildi

---

## 📊 İlerleme Özeti

| Görev | Durum |
|---|---|
| Temel HTML Yapısı | ✅ Tamamlandı |
| Arama Formu | ✅ Tamamlandı |
| AI Araç Veritabanı | ✅ Tamamlandı |
| Sıralama Algoritması | ✅ Tamamlandı |
| Sonuç Kartları UI | ✅ Tamamlandı |
| Responsive & Tasarım | ✅ Tamamlandı |
| Yayınlama | ⏳ Bekliyor |
| Demo Video | ⏳ Bekliyor |
| Kullanıcı Testi | ⏳ Bekliyor |
| GitHub & Teslim | ⏳ Bekliyor |
