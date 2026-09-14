# Kemerburgaz Kent Ormanı Oyunu — Güncel Durum ve Devam Kaydı
**Kayıt Tarihi:** 14 Eylül 2026  
**Durum:** Mobil Uygulama (Android APK & iOS) ile Zengin Web/HTML5 Oyun Motoru Arasında %100 Görsel ve Fonksiyonel Eşitlik (Visual & Functional Parity) Tamamlandı. Canlı Firebase/Firestore (`kentormanimaceraparki`) entegrasyonu, Donanım Hızlandırmalı WebView Container, Çift Başparmak Zemin Kontrolleri (🟠 Eğil & 🟢 Zıpla), Otomatik Kalkan Kurtarma (Auto-Shield Rescue) ve Çevrimdışı (Offline) Desteği başarıyla devreye alındı.  
**Sürüm:** `v2.5.0` (Tag: `v2.5.0`)  
**GitHub Deposu:** `https://github.com/srcnbllc/MaceraOrmaniFoxAdventure`

---

## 📌 1. Bugün Gerçekleştirilen Büyük Güncellemeler (v2.5.0)

### A. Zengin Web Görselleri ve Oyun Motorunun Doğrudan Mobil Uygulamaya Taşınması
- **Kullanıcı Talebi & Problem Tespiti:** Daha önceki Compose arayüzü sadeleştirilmiş bir prototip görünümündeydi; bilgisayardaki zengin 3D hava fotoğrafı haritası (`NewMap.png`), ahşap panolar, animasyonlu tilki/maymun/kaplan koşucusu, kostüm/gardırop mağazası ve 30 soruluk doğa bilgi yarışması mobilde yoktu.
- **Çözüm & Entegrasyon:**
  - Tüm zengin oyun motoru (`index.html`, `game.js`, `style.css`), yüksek çözünürlüklü sprite ve ses varlıkları (`Assets/Sprites/` ve `Assets/Audio/`), Android varlık dizinine (`app/src/main/assets/`) ve iOS paketine entegre edildi.
  - Harici CDN bağımlılığı kaldırıldı: `html5-qrcode.min.js` yerel olarak projeye dahil edildi, böylece internetin çekmediği orman derinliklerinde bile QR kod okuma ve tüm oyun mekanikleri %100 çevrimdışı (offline) çalışabilir hale getirildi.

### B. Canlı Firebase & Firestore Köprüsü (`AndroidFirebaseBridge.kt`)
- **Canlı Proje Bağlantısı**: `kentormanimaceraparki` (Project No: `217979667804`).
- **Yerel Kotlin <-> JavaScript Entegrasyonu**:
  - `AndroidFirebaseBridge.kt` yazılarak donanım hızlandırmalı WebView'a `@JavascriptInterface` olarak enjekte edildi.
  - `getZonesJson()`: Firestore'daki `parks/kemerburgaz/zones/` koleksiyonundan çekilen 10 canlı resmi durağı dinamik olarak oyuna aktarır.
  - `getCampaignsJson()`: `campaigns/` altındaki aktif sponsor kampanyalarını ve ikram kuponlarını çeker.
  - `vibrate(durationMs)`: Engellere çarpma, zıplama ve altın toplamada Android dokunsal titreşim (Haptic Feedback) motorunu tetikler.
  - `window.onFirebaseDataReady`: Firestore'dan gelen güncel veriler anında harita pinlerine ve durak detay pencerelerine yansıtılır.

### C. Çocuk Dostu Ergonomi ve Kontroller
- **Zemin Başparmak Dock'u (Ground Layer Dock - `y > 0.78 * screenHeight`):**
  - **Sol Başparmak:** 🟠 **EĞİL** (Slide - Turuncu dairesel buton, asılı halatların ve kütüklerin altından kayma).
  - **Sağ Başparmak:** 🟢 **ZIPLA** (Jump - Yeşil dairesel buton, yerdeki kaya ve kütüklerin üzerinden atlama).
  - Ekran dokunmatik hareketleri (Swipe Up / Swipe Down) ve klavye tuşları butonlarla senkronize çalışır.
- **Otomatik Kalkan Kurtarma (Auto-Shield Rescue):**
  - 5-15 yaş hedef kitle için her seviye başlangıcında varsayılan olarak `player.hasShield = true` (`baseShields = 1`) verilir.
  - İlk çarpmada kalkan parçalanarak çocuğu yanmaktan korur, 1 saniye altın parıltılı dokunulmazlık sağlar.
- **Pozitif ve Cesaretlendirici Oyun Sonu:**
  - Hayal kırıklığı yaratan ifadeler yerine *"🦊 HAYDİ TEKRAR DENE! — Vazgeçmek Yok Küçük Kaşif! Orman seni bekliyor."* mesajı ve pozitif ahşap butonlar eklendi.

### D. iOS Desteği (`iosApp/ContentView.swift`)
- iOS tarafında `WKWebView` ile tam ekran, donanım hızlandırmalı ve `WKScriptMessageHandler` köprüsü ile donatılmış konteyner oluşturuldu.
- `index.html` ve varlıklar iOS uygulama demetinden (bundle) sıfır gecikmeyle okunacak şekilde bağlandı.

---

## 📱 2. Canlı Android Emülatör Doğrulaması (Pixel 7 / API 34)
Uygulama derlenerek `emulator-5554` üzerinde canlı test edildi ve ekran görüntüleriyle doğrulandı:
1. **Kaşif Kayıt Modalı**: Açılışta ahşap temalı kaşif adı ve maskot seçimi ekranı.
2. **Ana Menü**: 3D Mağlova Su Kemeri manzarası, ahşap butonlar (Maceraya Başla, Bölümler, Başarımlar, Gelişim Vadisi), altın ve puan sayacı, sevimli tilki maskotu.
3. **Bölümler & Park Haritası**: `NewMap.png` 3D hava fotoğrafı üzerinde 10 adet yapraklı ahşap etap iğnesi, işletme isimleri ve QR tara sekmesi.
4. **1. Orman Etabı Pop-up**: Firestore'dan canlı çekilen *"1. Orman Etabı: Mağlova Su Kemeri Girişi"*, tesis mesafeleri ve İBB ekipman dükkanı.
5. **Koşu & Parkur Ekranı**: Canlı koşan tilki animasyonu, zemin tabakasında sol 🟠 EĞİL ve sağ 🟢 ZIPLA başparmak kumandaları, zıplama ve engellerden sıyrılma mekaniği.

---

## 🛠️ 3. Derleme & Sürüm Bilgisi
- **Derleme Komutu:** `gradlew.bat assembleDebug` (37 actionable tasks, 0 hata, 0 uyarı)
- **Üretilen APK:** `app/build/outputs/apk/debug/app-debug.apk` (v2.5.0, versionCode 6)
- **Git Etiketi:** `v2.5.0`
