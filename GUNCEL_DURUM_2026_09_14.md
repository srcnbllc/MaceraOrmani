# Kemerburgaz Kent Ormanı Oyunu — Güncel Durum ve Devam Kaydı
**Kayıt Tarihi:** 14 Eylül 2026  
**Durum:** Modül 1 (Firebase Altyapısı & Canlı Firestore Veri Mimarisi), Modül 2 (Çocuk Dostu Oyun Ergonomisi & Kumandalar), Modül 3 (Yatay ve Dikey Ekran Uyumluluğu) ve Modül 4 (iOS Proje İskeleti & GitHub Actions CI/CD) tamamlandı. `./gradlew assembleDebug` ile 0 hata derleme doğrulaması yapıldı.  
**Sürüm:** `v2.4.0` (Tag: `v2.4.0`)

---

## 📌 1. Bugün Yapılan ve Tamamlanan Sistemler (14 Eylül 2026)

### A. Modül 1: Firebase Altyapısı & Canlı Dinamik İçerik Yönetimi
- **Firebase Proje Entegrasyonu:**
  - Canlı Firebase projesi: `kentormanimaceraparki` (Project No: `217979667804`).
  - Android için `app/google-services.json` ve iOS için `iosApp/GoogleService-Info.plist` canlı projeden indirilip projeye bağlandı.
  - Firebase BoM 33.3.0, Firestore, Firebase Auth (Anonim/Misafir Girişi) ve Remote Config bağımlılıkları kuruldu.
  - `FirebaseManager.kt` ve `MaceraApplication.kt` ile uygulama başlangıcında sessiz anonim misafir girişi sağlandı.
- **Canlı Firestore Veri Mimarisi:**
  - **`parks/kemerburgaz/zones/{zoneId}`**: 10 adet durak oluşturuldu:
    1. `zone_1_maglova` (Mağlova Su Kemeri Girişi)
    2. `zone_2_zipline` (Macera Zipline Parkuru)
    3. `zone_3_nature_quiz` (Doğa ve Keşif Alanı)
    4. `zone_4_lake_view` (Alibeyköy Gölet İskelesi)
    5. `zone_5_climbing` (İp Parkuru ve Tırmanma Duvarı)
    6. `zone_6_deer_trail` (Alageyik Yaban Hayatı Patikası)
    7. `zone_7_beehive` (Arı Kovanları ve Çiçek Vadisi)
    8. `zone_8_watchtower` (Büyük Seyir Kulesi)
    9. `zone_9_camp_valley` (Gelişim Vadisi İzcilik Kampı)
    10. `zone_10_north_forest` (Kuzey Ormanları Sınırı)
  - **`campaigns/{campaignId}`**: Dinamik kampanyalar ve kuponlar (BELTUR %10 İndirimi, Ücretsiz Zipline Turu, Doğal Meyveli Dondurma).
  - **Çocuk Güvenliği Kuralı**: `isCommercial: true` olan kampanyalar çocuk modunda otomatik olarak filtrelendi.

### B. Modül 2: Çocuk Dostu Oyun Ergonomisi & Kontroller
- **Ground Layer Dock (`ThumbDockControls.kt`):**
  - Zemin çizgisinin altına (`y > 0.78 * screenHeight`), koşan karakterin veya önüne çıkan engellerin önünü kapatmayacak şekilde konumlandırıldı.
  - **Sol Başparmak:** 🟠 **EĞİL (SLIDE)** — Turuncu/Amber dairesel buton.
  - **Sağ Başparmak:** 🟢 **ZIPLA (JUMP)** — Zümrüt Yeşili dairesel buton.
  - Ekran üzeri dikey kaydırma jestleri (Swipe Up / Swipe Down) butonlarla eşzamanlı çalışacak şekilde korundu.
- **Otomatik Kalkan Kurtarma (Auto-Shield Rescue):**
  - Koşu başında `baseShields = 1` verilir.
  - Oyuncu engele çarptığında kalkan butonuna basmayı unuttuysa dahi yedekteki kalkan otomatik devreye girerek parçalanır. Can gitmez (0 hasar) ve 1 saniye altın parıltılı dokunulmazlık aurası verilir.
- **Toleranslı Çarpışma Kutuları (Forgiving Hitboxes):**
  - Engellerin görsel sınırlarına %18 tolerans payı tanınarak çocukların kıl payı sıyrılmalarına imkan sağlandı.
- **Pozitif Oyun Sonu Ekranı:**
  - Korkutucu "KAYBETTİN" yerine *"HAYDİ TEKRAR DENE! 🦊 - Orman Muhafızı pes etmez, her adım bir macera!"* pozitif mesajı ve "Yeniden Başla" / "Haritaya Dön" ahşap butonları yerleştirildi.

### C. Modül 3: Yatay (Landscape) ve Dikey (Portrait) Ekran Uyumluluğu
- **`GameScreen.kt`:** Yatay modda kahraman boyutu `115.dp`, engeller `%82` oranında orantılı ölçeklendi. Duraklatma, Oyun Sonu ve Zafer popuplarının tümü `verticalScroll` ile donatıldı.
- **`MainMenuScreen.kt`:** İçerik `verticalScroll` ile kaydırılabilir yapıldı. Yatay modda menü butonlarının üzerine binen alt dekoratif maskotlar yalnızca dikey modda gösterilecek şekilde sınırlandı. Buton yükseklikleri yatayda `52.dp`, dikeyde `66.dp` yapıldı.
- **`ZoneDiscoveryDialog.kt`:** Dikey kaydırılabilir kompakt düzen ile "TABELADAKİ QR KODU TARA" butonu her ekranda görünür kılındı.
- **`PassportScreen.kt`:** Dikeyde 2 sütun (`GridCells.Fixed(2)`), yatayda 4 sütun (`GridCells.Fixed(4)`) duyarlı ızgara düzeni kuruldu.
- **`OnboardingScreen.kt`:** Tanıtım kartına `verticalScroll` eklendi.
- *Compose kuralı doğrulaması: `Modifier.verticalScroll` içinde `Modifier.weight()` kullanılmadı.*

### D. Modül 4: Cross-Platform (iOS) Desteği & GitHub Actions CI/CD
- **`iosApp/` İskeleti:**
  - `iosApp/iOSApp.swift` (SwiftUI ana giriş noktası)
  - `iosApp/ContentView.swift` (Compose Multiplatform UIViewController köprüsü)
  - `iosApp/Info.plist` (Kamera izni, çoklu yönelim, `com.zekaoformani.macera`)
  - `iosApp/GoogleService-Info.plist` (Canlı Firebase iOS ayarları)
  - `iosApp/iosApp.xcodeproj/project.pbxproj` (Hazır Xcode projesi)
- **GitHub Actions Otomasyonu (`.github/workflows/build.yml`):**
  - `build-android`: Ubuntu üzerinde JDK 17 ile `./gradlew assembleDebug` çalıştırıp `app-debug.apk` dosyasını artifact olarak yükler.
  - `build-ios`: macOS 14 üzerinde `xcodebuild` ile iOS Simulator derlemesini doğrular.

### E. Derleme Doğrulaması
- `./gradlew assembleDebug` komutu ile 0 hata, 0 uyarı ile derleme sağlandı.
- `app-debug.apk` (21.6 MB) başarıyla üretildi.
