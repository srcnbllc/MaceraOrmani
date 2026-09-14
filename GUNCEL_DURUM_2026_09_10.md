# Kemerburgaz Kent Ormanı Oyunu — Güncel Durum ve Devam Kaydı
**Kayıt Tarihi:** 10 Eylül 2026  
**Durum:** Tamamlandı, kararlı ve test edilmeye hazır.  
**Komut Kuralı:** Kullanıcı *"devam edelim"* veya *"kaldığımız yerden devam et"* dediğinde bu dokümandan ve 10 Eylül 2026 tarihindeki durumdan başlanacaktır.

---

## 📌 1. Proje Genel Özeti ve Mimari
İstanbul Büyükşehir Belediyesi & Boğaziçi Yönetim A.Ş. bünyesindeki Kemerburgaz Kent Ormanı için geliştirilen çocuk dostu HTML5 / Web koşu ve macera oyunu.
- **Teknoloji:** HTML5 Canvas (60 FPS), Vanilla JavaScript (ES6+), Vanilla CSS3 (modern glassmorphism, orman yeşili ve ahşap altın teması).
- **Ana Dosyalar:**
  - `index.html` (Ana yapı, ekranlar, modallar, HUD ve kontroller)
  - `style.css` (Tüm stil ve animasyonlar, koyu yeşil-altın tema, responsive yapılar)
  - `game.js` (Canvas oyun motoru, state yönetimi, Firebase simülasyonu, başarımlar, kuponlar, harita motoru)
- **Görsel Varlıklar:** `Assets/Sprites/` (NewMap.png, MapDefaultPin.png, sonsuz_orman.png, Fox frame animasyonları, engeller, vb.)

---

## 🚀 2. Bugün Yapılan ve Entegre Edilen Sistemler (10 Eylül 2026)

### A. Çift Modlu Etap Seçimi (İnteraktif 3D Harita + Liste)
- **İnteraktif 3D Harita:**
  - `NewMap.png` (Kemerburgaz Kent Ormanı 3D hava çekimi çizim haritası) ve `MapDefaultPin.png` (orijinal ahşap palamut iğneleri) entegre edildi.
  - 10 resmi saha etabı coğrafi konumlarına göre koordinatlandı (`PIN_COORDINATES`):
    1. Mağlova Kapısı & Karşılama Meydanı (x: 16%, y: 76%)
    2. Dev Atlıkarınca & Carousel Cafe (x: 27%, y: 70%)
    3. Çocuk Parkları & Good Mood Cafe (x: 38%, y: 62%)
    4. İBB BELTUR Restoran & Kafe (x: 52%, y: 58%)
    5. Macera Parkı & Zipline Hattı (x: 68%, y: 62%)
    6. Fauna Alanı & Doğa Koridoru (x: 25%, y: 46%)
    7. Mimar Sinan Kapısı & Gölet Parkuru (x: 76%, y: 42%)
    8. Ahşap Seyir Kulesi & Günbatımı Tepesi (x: 48%, y: 38%)
    9. Yakamoz Burnu & Mimar Sinan Yolu (x: 62%, y: 25%)
    10. Mağlova Su Kemeri (Büyük Şampiyonluk) (x: 36%, y: 18%)
  - Haritada parmakla/fareyle gezinmek için sürükle-bırak (`initMapPanning()`) özelliği.
  - İğnelerin üzerinde etap numarası, durum ikonu (🔒, 📷, ▶, ✓) ve işletme etiketleri.
- **Görünüm Değiştirici Sekmeler:**
  - `[ 🗺️ Orman Haritası ]` ve `[ 📋 Etap Listesi ]` sekmeleriyle tek tıkla 3D harita ile şık kartlar arasında anında geçiş.

### B. Çocuklar İçin İnteraktif Başarımlar & Simüle Firebase Sistemi
- **Firebase Simülasyonu (`FirebaseSimService`):**
  - Sağ üstte `☁️ Firebase: Senkronize` rozeti. Ödül alındığında veya etap geçildiğinde `☁️ Firebase: Kaydediliyor...` animasyonuyla veri senkronizasyonu simüle edilir.
  - Oyuncu tecrübe puanına göre 5 kademeli Kaşif Rütbesi:
    1. 🌱 **Orman Çaylağı** (0 - 300 XP)
    2. 🐾 **Patika Kaşifi** (300 - 700 XP)
    3. 🌲 **Doğa İz Sürücüsü** (700 - 1200 XP)
    4. 🦅 **Gölet & Vadi Muhafızı** (1200 - 1800 XP)
    5. 👑 **Mağlova Baş Muhafızı** (1800+ XP)
  - İnteraktif XP ilerleme çubuğu ve görev ödülleri (`ÖDÜLÜ AL (+100 🪙)` butonu ve `✅ ALINDI` durumu).

### C. Maceracı Pasaportu & 9 Gerçek Park İşletmesi İkram Kuponu
Gerçek saha işletmelerine konumlandırılmış, etap tamamlandıkça veya QR kod okutuldukça açılan 9 adet ikram kuponu:
1. **Carousel Cafe:** Sıcak Çikolata veya Mini Waffle İkramı 🧇
2. **Good Mood Cafe:** Taze Sıkma Portakal Suyu / Limonata 🍋
3. **İBB BELTUR Restoran:** Taze Rize Çayı & Çıtır Simit İkramı 🥨
4. **Macera Parkı:** Tırmanma Duvarı %50 İndirim Kuponu 🧗
5. **Yeşil Vadi Cafe & Fauna:** Bitki Çayı & Tohumlu Kalem ✏️🌱
6. **BELTUR Burger:** Çıtır Patates & Yayık Ayranı İkramı 🍟🥛
7. **Big Forest Cafe:** Filtre Kahve veya Sıcak Salep İkramı ☕
8. **Woodbox Dinlenme Noktası:** Ahşap Hatıra Magneti 🪵
9. **Mağlova Ziyaretçi Totemi:** BÜYÜK FİNAL: ÜCRETSİZ Zipline Uçuş Kuponu & Muhafız Beratı 🏆
- Her kupon için benzersiz kod üretimi (`KB-CARO-1234`, `KB-BELT-5678`) ve tek tıkla kopyalama butonu.

### D. Gelişim Vadisi: Kaşif Üssü & Kupa Vitrini
- Kaşif seviyesi ve XP barı.
- Ahşap vitrin rafında 7 adet dinamik kupa ve rozet:
  - 🥉 Bronz Kaşif (1. ve 2. Etap)
  - ☕ BELTUR Molası (4. Etap)
  - 🧗 Macera Şampiyonu (5. Etap)
  - 🥈 Gümüş Muhafız (7. Etap)
  - 🥇 Altın Mağlova (10. Etap)
  - ⭐ Usta Kaşif (500+ XP)
  - ⛺ Kamp Kurucusu (Çadır & Ateş seviyesi)
- Kamp geliştirmeleri: Dinlenme Çadırı (+1 Can) ve Kamp Ateşi (Altın Çarpanı).

### E. Oynanış & Koşu İyileştirmeleri (Önceki Adımlardan Korunanlar)
- **7 Kareli Gerçek Adım / Ayak Tilki Koşusu:** Tilki zeminde sıfır konumda el ve ayaklarıyla koşar.
- **Kayma (Slide) Fonksiyonu:** Aşağı ok / 'S' tuşu ve ekrandaki `⬇️ KAY` butonu ile tilki zemine yatarak asılı kütük ve Macera Parkı halatlarının altından kayar.
- **Çocuk Dostu Fizik & Hitbox:** Engel boyutları ve çarpışma kutuları çocuk oyuncuları yormayacak şekilde dengelendi, ilk etaplar kolaylaştırıldı.
- **İşletme QR Mantığı:** 1. ve 2. Etap giriş/ısınma olarak ücretsiz; 3. etaptan itibaren işletmelerdeki QR kod okutulunca etaplar ücretsiz açılır ve +100 XP kazandırır.

---

## 📋 3. Yarın Devam Edildiğinde Ele Alınabilecek Maddeler / Fikirler
Kullanıcı *"devam edelim"* dediğinde doğrudan sunulabilecek veya geliştirilebilecek öneriler:
1. **Gerçek Firebase / Firestore Entegrasyonu:** Şu anda yerel depolama üzerinde simüle edilen `FirebaseSimService` yapısını, istenirse gerçek bir Firebase projesine (`firebaseConfig`) bağlama.
2. **Kamera ile Canlı QR Tarayıcı:** Sahada oyuncunun telefon kamerasını kullanarak fiziksel QR kodu doğrudan taramasını sağlayacak `html5-qrcode` kütüphanesi entegrasyonu.
3. **Yeni Karakterler ve Kostümler:** Mevcut Tilki, Maymun ve Kaplan'a ek olarak Sincap ve Orman Baykuşu karakterleri veya özel kostümler (İBB Muhafız Yeleği, Kaşif Şapkası).
4. **Mini Oyunlar / Eğitici Doğa Soruları:** Etap aralarında çocuklara Kent Ormanı bitki örtüsü ve hayvanları hakkında kısa eğlenceli sorular ve ekstra altın ödülleri.
5. **Ses ve Müzik Genişletmesi:** Farklı etaplar için hafif gölet ve kuş cıvıltısı arka plan ambiyans sesleri.

---

*Bu dosya 10.09.2026 tarihinde oluşturulmuştur. Bir sonraki oturumda doğrudan bu noktadan devam edilecektir.*
