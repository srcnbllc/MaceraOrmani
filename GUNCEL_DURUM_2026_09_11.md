# Kemerburgaz Kent Ormanı Oyunu — Güncel Durum ve Devam Kaydı
**Kayıt Tarihi:** 11 Eylül 2026  
**Durum:** 1. Madde (Canlı QR Tarayıcı), Dinamik Eklemli Kahraman Hareketi, 2. Madde (Etap Arası 3 Soruluk Doğa Bilgi Yarışması) ve 3. Madde (Şık Ahşap Orman Tasarımlı Yeni Karakterler ve Kostüm Gardırobu) eksiksiz tamamlandı.  

---

## 📌 1. Bugün Yapılan ve Tamamlanan Sistemler (11 Eylül 2026)

### A. Canlı Saha QR Kod Tarayıcısı (Kamera & html5-qrcode)
- **Kamera Vizörü Modalı (`#modal-qr-scanner`):**
  - Ahşap & orman yeşili glassmorphism açılır pencere.
  - Altın köşebentler (`.qr-corner`) ve yukarı-aşağı salınan neon yeşil/altın lazer tarama çizgisi (`.qr-laser-line`).
  - Hem 3D harita / etap seçimindeki `[ 📷 QR Tara ]` sekmesinden hem de kilitli etap modallarındaki `[ 📷 ... QR Kodunu Oku ]` butonundan açılır.
- **Canlı Kamera & Yedek Doğrulama:**
  - `Html5Qrcode` kütüphanesi CDN üzerinden entegre edildi (`https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js`).
  - Çift kamera desteği: `🔄 Kamera Değiştir` butonu ile ön ve arka kamera arasında anında geçiş.
  - Masaüstü testleri veya kameraya izin verilmeyen durumlar için `⚡ QR Doğrula (Test)` simülatör butonu eklendi.
  - QR okunduğunda (`BOLUM_1` - `BOLUM_10` veya işletme adı): Etap açılır (`GameState.setLevelState(idx, 2)`), +100 XP kazanılır, `☁️ Firebase: Kaydediliyor...` senkronizasyonu çalışır ve zafer tostu gösterilir.

### B. Dinamik Eklemli Kahraman Motoru (El, Kol ve Bacaklarla Koşma & Zıplama)
- Kullanıcının talebi doğrultusunda kahramanlar artık statik resim yerine tamamen eklemli ve canlı bir şekilde çizilmektedir (`drawAnimatedHero`):
  - **Koşma Aşaması:** Ön ve arka kollar, eller ve bacaklar (patiler) koşu temposuna göre ritmik ters fazda ileri-geri adım atar; gövde koşu adımlarında tatlı bir şekilde yaylanır.
  - **Zıplama Aşaması (Yükselme):** Karakter yukarı doğru esner (`stretch: scaleY = 1.22, scaleX = 0.88`). **Kollar ve eller zafer ve neşeyle havaya kalkar (açık parmaklar/patiler havada uzanır), bacaklar itiş gücüyle geriye açılır!**
  - **Süzülme & İniş Aşaması:** Kollar denge için yana açılır, bacaklar darbeyi karşılamak üzere gövdeye doğru toplanır.
  - **Yere İniş (Landing):** Gövde yumuşakça yaylanır (`landingSquash`), ayakların altından iki yana hafif orman tozu partikülleri fırlar.
  - **Kayma (Slide):** Karakter yatay uzanır, kollar ve eller öne uzanır, bacaklar geriye uzanır.

### C. Etap Arası ve Öncesi 3 Soruluk Doğa ve Bilim Yarışması (`#modal-nature-quiz`)
- **Çocuk Dostu 30 Soruluk Zengin Kent Ormanı Soru Havuzu (`DOGA_SORU_HAVUZU`):**
  - 10 resmi etabın her biri için 3'er adet özel soru (toplam 30 soru).
  - Konular: Kemerburgaz Kent Ormanı'nın büyüklüğü, kızıl sincaplar, ağaçkakanlar, meşe palamutları, çam yaprakları, Alibeyköy göleti ve sazlık biyolojik filtresi, alageyikler, bal arıları, seyir kulesi fitonsit kokuları ve tarihi 460 yıllık Mağlova Su Kemeri.
- **2 Şıklı Dokunmatik Tasarım (A ve B Şıkları):**
  - Çocukların ekranı rahatça kullanabilmesi için büyük, ferah 2 şıklı butonlar (`.quiz-option-btn`).
  - Doğru cevaplandığında yeşil pulse efekti (`.correct`), başarı sesi ve **+20 🪙 Altın & +30 XP** ödülü.
  - Yanlış cevaplandığında kırmızı titreşim (`.wrong`) ve doğru bilginin eğlenceli kısa açıklaması.
  - 1-2-3 Adım göstergesi (`Soru 1 / 3`), soru geçiş animasyonu ve 3 sorunun sonunda toplam kazanılan ödül özeti kartı.
- **Entegre Olduğu Akışlar:**
  - **Etap Tamamlandığında (`onLevelVictory`):** Zafer ekranında `[ 🌿 DOĞA YARIŞMASINA BAŞLA (3 SORU) ⭐ ]` veya `[ SONRAKİ BÖLÜM ⏩ ]` butonuyla yarışma başlar.
  - **Etap Başlamadan Önce (`openLevelModal`):** Saha rehberinde `[ 🌿 3 Soruluk Doğa Bilgi Yarışması (+Ödül) ]` butonuyla çocuklar koşudan önce de yarışabilir.
  - **Hızlı Geçiş:** İsteyen oyuncular için `[ Yarışmayı Geç ⏭️ ]` butonuyla akış asla engellenmez.

### D. Şık Ahşap Orman Tasarımlı Yeni Karakterler ve Kostüm Gardırobu (3. Madde)
- **Kemerburgaz Yaban Hayatından 2 Yeni Kahraman Eklendi:**
  - 🐿️ **4. Kızıl Sincap (Palamut Toplayıcı & Ağaç Tırmanıcısı):**
    - Hız: ★★★★★ | Zıplama: ★★★★☆ | Dayanıklılık: ★★★☆☆ | 150 🪙
    - **Özel Yetenek (Manyetik Palamut Çekimi):** Yakındaki altınları 130px menzilden yumuşakça kendine çeker; altın toplama yarıçapı +24px geniştir.
    - **Çizim:** Sırtın üzerine kıvrılan devasa kabarık S-kuyruk, kulak ucu püskülleri, elinde tuttuğu sevimli meşe palamudu.
  - 🦉 **5. Bilge Orman Baykuşu (Kuzey Ormanları Gece Muhafızı):**
    - Hız: ★★★★☆ | Zıplama: ★★★★★ | Dayanıklılık: ★★★★☆ | 250 🪙
    - **Özel Yetenek (Kanat Süzülmesi):** Yerçekimi 0.52'ye düşer, havada uzun süre süzülür ve yumuşak iniş yapar; zıplama gücü -14.6'dır.
    - **Çizim:** Gövdeden açılan telek tüylü kanatlar (`drawHeroWing`), kalp biçimli göğüs tüyleri, geceleri parlayan büyük altın gözler ve kavisli gaga.
- **Ahşap Kaşif Gardırobu & Kostüm Sandığı (`.costume-wardrobe-box`):**
  - Orman yeşili & ahşap sandık dokusu, altın varak kenarlıklar ve dokunmatik butonlar:
    - 🌿 **Doğal Görünüm:** Hayvanın doğal ve saf kürk / tüy dokusu.
    - 🧢 **Orman Kaşif Şapkası:** Kafaya takılan geniş kenarlı haki safari şapkası, deri bant ve iliştirilmiş canlı Kemerburgaz meşe yaprağı.
    - 🦺 **İBB Muhafız Yeleği:** Gövdeye oturan orman muhafız yeşili yelek, altın dikiş kenarları, altın düğmeler ve İBB Boğaziçi orman amblemi.
    - 👑 **Altın Palamut Kolye:** Boyundan sarkan deri kordon ve göğüste pırıldayan 24K som altın meşe palamudu madalyonu (yıldız parıltılı).
  - Seçilen kostüm `localStorage` üzerinden kalıcı saklanır (`GameState.getSelectedCostume()`) ve canvas üzerindeki kahramanın üzerinde canlı olarak çizilir (`drawHeroCostume`).

---

### E. İlk Açılış Kaşif Kayıt & Profil Belirleme (Onboarding Modalı `#modal-onboarding`)
- **Otomatik Karşılama Akışı:**
  - Uygulama ilk kez açıldığında kullanıcının bir kaşif adı ve seçtiği kahramanı yoksa 450ms sonra zengin ahşap sandık çerçeveli `#modal-onboarding` açılır.
  - Kaşif Adı Girişi (`#onboarding-explorer-name`): Çocuklar ve ebeveynler için ferah, altın varak kenarlıklı input alanı (Varsayılan: "Orman Kaşifi" veya girilen isim).
  - 5 Sevimli Kahraman Seçim Grid'i (`.onboarding-heroes-grid`):
    - 🦊 Tilki Rüzgar, 🐵 Maymun Çiko, 🐯 Kaplan Pars, 🐿️ Kızıl Sincap, 🦉 Bilge Baykuş.
    - Seçilen kahraman altın ışıltılı pulse efekti ile parlar (`.selected`), kartın altında "✓ Seçildi" rozeti belirir.
  - "🌲 ORMANA ADIM AT VE PUANLARI TOPLA" butonu ile profil anında kaydedilir (`GameState.setExplorerName`, `GameState.setSelectedHero`), üst bara ve canlı puan tablosuna anında yansır.
  - İstenildiği zaman sol üstteki Ahşap Profil Hapına (`#menu-profile-pill`) dokunularak isim ve kahraman yeniden güncellenebilir.

### F. Canlı Puan Tablosu (Leaderboard Modalı `#modal-leaderboard`)
- **Gerçek Zamanlı Saha Kaşifleri Sıralaması:**
  - Kemerburgaz Kent Ormanı'ndaki diğer çocukların ve kaşiflerin canlı puanları (`SAHA_KASIFLERI`).
  - Dinamik Puan Hesaplama Modeli (`GameState.getTotalExplorerPoints`):
    - Sonsuz koşucu rekor puanı + Tamamlanan etap başına 350 puan + Kamp XP'si * 2 + Toplanan Altınlar * 2 + Doğa Bilgi Yarışması doğru cevap bonusları.
  - Kullanıcının Kendi Sıralama Kartı (`#my-leaderboard-card`):
    - Oyuncunun sıralamadaki anlık yeri (`#my-lb-rank`), seçtiği kahraman ikonu, belirlediği kaşif adı, ulaştığı etap ve toplam puanı altın çerçeveli özel bir kart olarak en üstte sabit gösterilir.
  - 🥇 Altın, 🥈 Gümüş, 🥉 Bronz Ahşap Madalyalar ve rozetler.
  - "Tüm Zamanlar" ve "Bu Hafta (Kent Ormanı Sahası)" filtreleme sekmeleri.
  - "☁️ Canlı Firebase: Senkronize" gerçek zamanlı bulut durumu etiketi.
  - Zafer ekranında (`#modal-victory`) yer alan `[ 🏆 Puan Tablosunu Gör ]` butonu ile her koşu sonrasında anında skor listesine göz atılabilir.

### G. Kemerburgaz Tesisleri Ödül Vitrini & Kupon Ekranı (`#modal-rewards` & `#modal-voucher-detail`)
- **Orman Kaşifleri İçin Gerçek Tesis İkramları (`ORMAN_ODULLERI`):**
  1. ☕ **Kemerburgaz Orman Kafe:** Sıcak Doğal Orman Çayı veya Ihlamur (600 Puan / 1. Etap)
  2. 🍎 **Kemerburgaz Doğa Manavı:** Organik Elma & Kuruyemiş Enerji Paketi (1200 Puan / 3. Etap)
  3. 🧗 **Macera Parkı & Zipline İstasyonu:** Zipline & İp Parkuru %50 İndirim Kuponu (2000 Puan / 5. Etap)
  4. 🦌 **Yaban Hayatı Gözlem Noktası:** Doğa Koruyucusu Ahşap Kaşif Rozeti (2800 Puan / 6. Etap)
  5. 🍦 **Gelişim Vadisi Sosyal Tesisi:** Doğal Orman Meyveli Dondurma (3600 Puan / 8. Etap)
  6. 🏛️ **İBB Boğaziçi Yönetim & Tarihi Mağlova:** Mağlova Su Kemeri Büyük Şampiyonluk Beratı & Ahşap Madalyon (5000 Puan / 10. Etap)
- **Dinamik İlerleme Çubuğu ve Kilit Açma:**
  - Puan veya etap şartı sağlandığında kart yeşil ışıltılı "AÇILDI" durumuna geçer ve `[ 🎟️ KUPONU GÖR ]` butonu aktifleşir.
- **Kupon ve Bilet Detay Açılır Penceresi (`#modal-voucher-detail`):**
  - İBB / Tesis logolu, tırtıklı ahşap bilet çerçevesi (`.voucher-ticket-frame`).
  - Dinamik QR Kod (`api.qrserver.com`) ve resmi EAN-13 barkod grafiği.
  - Kasada ibraz edilecek tekil kupon kodu (Örn: `KBO-CAFE-94821`).
  - "Kemerburgaz Kent Ormanı tesisi kasasında bu ekranı göstererek hediyenizi teslim alabilirsiniz" bilgilendirme notu.

### H. Başarımlar, Sıralama ve Ödüllerin Tek Bir Şık Merkezde Birleştirilmesi (`#modal-achievements`)
- **Haritadan Sıralama & Ödüller Butonları Kaldırıldı:**
  - `screen-map` görünüm geçiş çubuğu sadece `[ 🗺️ Orman Haritası ]`, `[ 📋 Etap Listesi ]` ve `[ 📷 QR Tara ]` butonlarına odaklandı; harita ekranı ferahlatıldı.
- **3 Sekmeli Birleşik Kaşif Merkezi (`.hub-tabs-row`):**
  - `[ 🎖️ Başarılar ]`: Kaşif XP seviyesi, ilerleme çubuğu ve tamamlanan görevlerin altın/XP ödül alma butonları.
  - `[ 🏆 Canlı Sıralama ]`: Genel & Haftalık saha kaşifleri sıralaması, oyuncunun kendi anlık kartı ve puan detayları.
  - `[ 🎁 Tesis Ödülleri ]`: Kemerburgaz Kent Ormanı işletme ikramları, ilerleme çubukları ve dinamik QR/Barkodlu kasa kuponu gösterimi.
- **Hızlı Erişim:** Ana menüdeki ahşap buton, üst bardaki `[ 🏆 Başarı & Sıralama ]` hapı veya zafer ekranındaki buton doğrudan ilgili sekmeyi açacak şekilde bağlandı.

### I. Gelişim Vadisi Güçlendirmelerinin Oyuna Tam Entegrasyonu & Hissedilen Avantajlar (`#modal-camp` & `#screen-game`)
- **4 Büyük Yükseltilebilir Güçlendirme & Seviye Yıldızları:**
  1. ⛺ **Dinlenme Çadırı:**
     - Koşuya ekstra canla başlar (3, 4, 5, 6 Can).
     - **3. Seviye Avantajı (🛡️ Orman Koruma Kalkanı):** Oyuncu koşuya başladığında etrafında dönen altın varaklı ve zümrüt yeşili koruyucu kalkan halesi belirir (`drawPlayerShieldAura`). Bir engele çarptığında kalkan parçalanır, can gitmez ve oyuncu hasardan korunur!
  2. 🔥 **Kamp Ateşi & Feneri:**
     - Altın çarpanını 1.5x, 2x ve 3x yapar.
     - **2. ve 3. Seviye Avantajı (🧲 Manyetik Çekim):** Yakındaki altınlar ve meşe palamutları havada süzülerek karaktere doğru çekilir ve altın kıvılcım izleri bırakır!
  3. 👟 **Orman İzcisi Botları:**
     - Zıplama yüksekliğini ve çevikliğini %15 artırır.
     - **2. Seviye Avantajı (Uzun Kayma / Slide):** Kayma süresi %35 uzar, asılı kütük ve halatların altından çok rahat ve güvenli geçilir.
     - **3. Seviye Avantajı (👟 Çift Zıplama / Double Jump):** Karakter havadayken tekrar zıplama tuşuna basarak havada ikinci bir sıçrama yapabilir!
  4. 🎒 **Kaşif Sırt Çantası:**
     - **1. Seviye Avantajı:** Her etap zaferinde ekstra +50 Altın ve +100 Kamp XP'si zafer bonusu!
     - **2. Seviye Avantajı (🌰 Altın Meşe Palamudu):** Koşuda parıldayan altın meşe palamutları doğar (`type: "golden_acorn"`). Toplandığında **+120 Skor, +5 Altın ve 3 saniye altın dokunulmazlık** verir!
     - **3. Seviye Avantajı:** Etap zafer altın ödüllerini 2 katına çıkarır!
- **Koşu Sahnesi HUD'ında Aktif Kamp Avantajları Şeridi (`#game-hud-perks`):**
  - Koşucunun can durumu, aktif kalkanı, altın çarpanı, manyetik çekimi, çevik botları ve çanta bonusu HUD altında şık ahşap rozetler olarak anlık görüntülenir.

### J. 5 Kahramanın Standart Hareketli Animasyonu, İBB Kostümleri (Şapka, Yelek, Pantolon), Seviye Kilitleri, Dokunmatik Kontroller & Step-by-Step Tutorial
1. **5 Kahramanın Tamamı Aynı Standartta Canlı & Hareketli (Kaplandaki Gibi):**
   - Kahraman seçim ekranındaki statik resim yapısı kaldırıldı; yerine 160x160 dairesel orman ambiyanslı `<canvas id="hero-preview-canvas">` entegre edildi.
   - 60 FPS çalışan `startHeroPreviewAnimation()` döngüsü ile **Tilki, Maymun, Muhafız Kaplan, Kızıl Sincap ve Bilge Baykuş**'un hepsi koşan bacakları, sallanan kolları, gövde yaylanması, kulak ve kuyruk salınımı ile kaplandaki gibi gerçek zamanlı hareketli hale getirildi.
2. **Resmi İBB Kıyafetleri & Keşif Sandığı Gardırobu:**
   - Eski "Palamut Kolye" kaldırıldı; yerine resmi İBB kıyafeti olan **İBB İzcisi Pantolonu** entegre edildi:
     - 🌿 **Doğal Görünüm:** Saf orman kürkü ve canlı tüyler (Açık/Ücretsiz).
     - 🧢 **İBB Orman Kaşif Şapkası:** İBB amblemli, safari şapkası ve taze orman meşe yaprağı (2. Bölüm veya 60 🪙).
     - 🦺 **İBB Muhafız Yeleği:** İBB orman muhafız yeşili, altın düğmeler ve resmi rozet (4. Bölüm veya 120 🪙).
     - 👖 **İBB İzcisi Pantolonu:** Haki izci kargo pantolonu, yan cepler ve altın tokalı deri kemer (6. Bölüm veya 180 🪙).
   - Kuşanılan kostümler hem seçim ekranındaki canlı koşan kahraman üzerinde hem de oyun içi koşu sahnesinde (`drawHeroCostume`) birebir giydirilerek görünür kılındı.
3. **Profil & Sıralama Maskotu ile Koşu Kahramanının Uyumu:**
   - Kullanıcının puan tablosu ve resmi yarışma için seçtiği maskot `GameState.getProfileHero()` ile saklanırken, parkurda koşturduğu kahraman `GameState.getSelectedHero()` olarak seçilir; ekranda net rehberlik sunuldu.
4. **Bölümler Geçildikçe Kademeli Kilit Açılma (Progressive Unlocks):**
   - Bölüm 1: Tilki & Doğal görünüm açık.
   - Bölüm 2 tamamlanınca: 🧢 İBB Şapkası ve 🐵 Maymun açılır.
   - Bölüm 3 tamamlanınca: 🐯 Muhafız Kaplan açılır.
   - Bölüm 4 tamamlanınca: 🦺 İBB Yeleği açılır.
   - Bölüm 5 tamamlanınca: 🐿️ Kızıl Sincap açılır.
   - Bölüm 6 tamamlanınca: 👖 İBB Pantolonu açılır.
   - Bölüm 7 tamamlanınca: 🦉 Bilge Orman Baykuşu açılır.
   - Zafer ekranında (`onLevelVictory`) kilitler otomatik açılır ve kutlama bildirimleri görüntülenir.
5. **Gelişmiş Dokunmatik Kontroller (Ekrana Dokunarak Zıpla, Aşağı Kaydırarak Kay):**
   - Ekrana herhangi bir yere tek dokunma (Tap): `playerJump()` (Zıpla).
   - Ekranda yukarı kaydırma (Swipe Up): `playerJump()` (Zıpla).
   - Ekranda aşağı kaydırma (Swipe Down): `playerSlide()` (Kay).
   - Ekrandaki dokunmatik butonlar ve klavye kısayolları da kesintisiz çalışmaya devam eder.
6. **1. Bölüm Step-by-Step Koşu Eğitimi (Tutorial Modalı `#modal-tutorial`):**
   - Oyun 1. etapta ilk kez başlatıldığında oyun duraklatılır ve şık 3 adımlı ahşap rehber kartı açılır:
     - **Adım 1:** ⬆️ Zıpla (Kütük ve kayaların üzerinden atla).
     - **Adım 2:** ⬇️ Kay (Asılı macera halatlarının altından eğilerek geç).
     - **Adım 3:** 🪙 Altın Palamut & Kostümler (Palamutları topla, İBB kıyafetlerinin ve kahramanların kilitlerini aç!).
   - "ANLADIM, PARKURA BAŞLA!" butonuna basıldığında `tutorial_completed` değeri kaydedilir ve aynı cihazda/profilde bir daha asla gösterilmez.
7. **2. Bölümden İtibaren Dinamik Hız ve Engel Zorlaşması:**
   - 1. Bölüm: `3.20` hız (Sakin, ferah aralıklı engeller, ısınma temposu).
   - 2. Bölüm ve sonrasında hız etap başına `+0.38` artar (2. Bölüm: 3.58, 5. Bölüm: 4.72, 10. Bölüm: 6.62).
   - Engel çıkış sıklığı daralır (140 aralıktan 50 aralığa iner), asılı halat engellerinin oranı ve engel boyutları dinamik olarak zorlaşır.

---

## 📋 2. Sıradaki Geliştirme Maddeleri (Sırayla Yapılacaklar)
- **4. Madde: Firebase / Firestore Doğrudan Proje Bağlantısı (Canlı Koleksiyon `leaderboard`)**
- **5. Madde: Doğa Ambiyansı ve Ses Efektlerinin Genişletilmesi (Rüzgar, Yaprak Hışırtısı, Kuş Cıvıltıları)**


