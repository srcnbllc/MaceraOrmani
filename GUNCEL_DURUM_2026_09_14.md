# Kemerburgaz Kent Ormanı Oyunu — Güncel Durum ve Devam Kaydı
**Kayıt Tarihi:** 14 Eylül 2026  
**Durum:** Canlı Firebase/Firestore (`kentormanimaceraparki`) anlık dinamik yönetim entegrasyonu (Harita Pin Koordinatları & Liderlik Tablosu), Donma/Crash korumaları, Kademeli Çocuk Dostu Akış (1->10) ve WebView eşitliği tamamlandı.  
**Sürüm:** `v2.6.0` (Tag: `v2.6.0`, Önceki Kararlı Tag: `v2.5.0`)  
**GitHub Deposu:** `https://github.com/srcnbllc/MaceraOrmaniFoxAdventure`

---

## 📌 1. Sürüm Bilgisi ve Geri Döndürülebilirlik (Rollback Safety)

Bu sürüm Git üzerinde etiketlenerek (`v2.6.0`) güvenli bir dağıtım paketi haline getirilmiştir. İhtiyaç halinde önceki herhangi bir sürüme veya bu sürüme tek komutla dönülebilir:

| Git Etiketi (Tag) | Açıklama & Kapsam | Geri Dönüş Komutu |
| :--- | :--- | :--- |
| **`v2.6.0`** *(Güncel)* | Canlı Firebase Koordinatları, Canlı Liderlik Tablosu, Donma/Loop Koruması, Kademeli Zorluk | `git checkout v2.6.0` |
| **`v2.5.0`** *(Önceki Kararlı)* | Web/Mobil Arayüz Paritesi, Zemin Başparmak Dock'u, Çevrimdışı QR ve Kalkan | `git checkout v2.5.0` |
| **`v2.4.0`** | İlk hibrit WebView prototipi | `git checkout v2.4.0` |

### Acil Geri Alma (Rollback) Prosedürü:
- **Test / İnceleme Amaçlı Geçici Dönüş:**
  ```bash
  git checkout v2.5.0
  ```
- **Kalıcı Olarak Önceki Sürüme Sıfırlama:**
  ```bash
  git reset --hard v2.5.0
  git push origin main --force
  ```
- **Tarihçeyi Korumak İçin Güvenli Geri Alma:**
  ```bash
  git revert HEAD
  git push origin main
  ```

---

## 📌 2. Bugün Gerçekleştirilen Büyük Güncellemeler (v2.6.0)

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

### D. Canlı Firebase Firestore Yönetimi & Gerçek Zamanlı Dinleyiciler (Real-Time Snapshot)
- **Harita Koordinatları (`xPercent`, `yPercent`):** Firebase panelinden koordinatlar değiştirildiği anda harita pinleri uygulamayı yeniden başlatmaya gerek kalmadan canlı olarak yeni yerine taşınır.
- **Canlı Liderlik Tablosu (`leaderboard` koleksiyonu):** Firestore konsolundan puan ve sıralamalar anlık düzenlenebilir. Oyuncunun kazandığı puan ve altınlar `submitScore` köprüsü ile anında Firestore'a yazılır.
- **10 Resmi Etap Veritabanı:** `facilities`, `fact`, `targetScore`, `qrSecretCode` ve işletme isimleri Firestore üzerinde eksiksiz tanımlanmıştır.
- **Kotlin Katmanı:** `ZoneRepository.kt` ve `LeaderboardRepository.kt` içerisine `addSnapshotListener` dinleyicileri entegre edilmiştir.

### E. Donma (Freeze), Loop ve Arayüz Çakışmalarının Giderilmesi
- **Tekil Animasyon Kare Takibi (`gameLoopId`):** Menü geçişleri ve oyun sonu durumlarında döngülerin üst üste binmesi ve donmalar engellenmiştir.
- **Kademeli Çocuk Dostu Akış (1 -> 10):** 1. etaptan 10. etaba kadar hız, parkur süresi, engel sıklığı ve puan hedefleri kademeli olarak dengelenmiştir.
- **Çıkmaz Sokaksız Süreklilik:** Herhangi bir etabı bitiren oyuncu için sonraki etap otomatik açılır; saha QR kodu ile ücretsiz açma alternatifi korunmuştur.

### F. Oyun Ekonomisi, Altın ve Puan Standartlaştırması
- **0 Başlangıç Altını Kuralı:** Yeni başlayan veya sıfırlanan oyunda artık haksız 50 bedava altın verilmez; altınlar kesinlikle **0**'dan başlar. Sadece parkurda toplanan ve ödüllerden kazanılan altınlar hesaba geçer.
- **Kümülatif Bölüm Puanları:** Ana menü kupa puanı (PUAN), yalnızca tek bir etabın yüksek skoru yerine tamamlanan tüm etapların puanlarının toplamını (`getTotalStagePoints()`) gösterir.
- **Anında Altın Düşüşü & Senkronizasyon:** Kahraman, kostüm, kalkan/mıknatıs veya kamp eşyası satın alındığında altın anında eksilir ve menü, kahraman ve kamp ekranlarındaki altın sayaçları tek noktadan güncellenir.
- **Net Vektörel Görseller:** Flu görünen kutu/palamut yerine Canvas üzerinde altın pırıltılı net vektörel madalyon (`⭐ +120`) çizimi entegre edildi.
- **Dükkan/Kostüm Kuralı:** Parkur içinde ücretsiz rastgele kostüm dağıtımı kapatıldı; kıyafetler yalnızca toplanan puan ve altınlarla mağazadan açılarak giyilebilir.
- **Şeffaf Tepe Başlığı:** Üst banttaki koyu yeşil arka plan şeridi kaldırılıp tamamen şeffaf yapıldı; İBB rozeti ve kent ormanı ek metinleri temizlenerek yalnızca saf beyaz renkte ortalanmış ve zarif gölgeli *"Boğaziçi Yönetim"* metni yerleştirildi, böylece orman arka plan teması kesintisiz görünür hale getirildi.

---

## 📱 3. Canlı Android Emülatör & Cihaz Uyumluluğu
1. **Kaşif Kayıt Modalı**: Açılışta ahşap temalı kaşif adı ve maskot seçimi ekranı.
2. **Ana Menü**: 3D Mağlova Su Kemeri manzarası, ahşap butonlar (Maceraya Başla, Bölümler, Başarımlar, Gelişim Vadisi), altın ve puan sayacı, sevimli tilki maskotu.
3. **Bölümler & Park Haritası**: `NewMap.png` 3D hava fotoğrafı üzerinde 10 adet yapraklı ahşap etap iğnesi, işletme isimleri ve QR tara sekmesi.
4. **1. Orman Etabı Pop-up**: Firestore'dan canlı çekilen *"1. Orman Etabı: Mağlova Su Kemeri Girişi"*, tesis mesafeleri ve İBB ekipman dükkanı.
5. **Koşu & Parkur Ekranı**: Canlı koşan tilki animasyonu, zemin tabakasında sol 🟠 EĞİL ve sağ 🟢 ZIPLA başparmak kumandaları, zıplama ve engellerden sıyrılma mekaniği.

## 🏕️ 4. Gelişim Vadisi & Kamp Güçlendirmeleri (3 Yıldız / Süreli Sistem)
Abartılı ve gerçekçi olmayan tüm ifadeler ("ölümsüz", "efsanevi", "3x altın") temizlenmiş; dengeli, ölçülü ve net bir 3 yıldızlı sistem kurgulanmıştır:

| Güçlendirme | Maks Seviye | Seviye Başına Etki | Başlangıç Süresi | Maliyet |
| :--- | :---: | :--- | :--- | :--- |
| ⛺ **Dinlenme Çadırı** | ⭐⭐⭐ (3 Yıldız) | Her yıldız için **+3 saniye Koruma Kalkanı** | 1⭐: 3sn \| 2⭐: 6sn \| 3⭐: 9sn | 35 / 70 / 105 🪙 |
| 🔥 **Kamp Ateşi** | ⭐⭐⭐ (3 Yıldız) | Her yıldız için **+3 saniye Manyetik Çekim** | 1⭐: 3sn \| 2⭐: 6sn \| 3⭐: 9sn | 40 / 80 / 120 🪙 |
| 👟 **Orman İzcisi Botları** | ⭐⭐⭐ (3 Yıldız) | Her yıldız için **+3 saniye Süzülme** (3⭐'da Çift Zıplama) | 1⭐: 3sn \| 2⭐: 6sn \| 3⭐: 9sn | 45 / 90 / 135 🪙 |
| 🎒 **Kaşif Sırt Çantası** | ⭐⭐⭐ (3 Yıldız) | Zafer bonusu & XP artışı | Seviye bazlı bonuslar | 50 / 100 / 150 🪙 |

* **Canlı HUD Göstergesi:** Koşu başladığında aktif perkler HUD üzerinde geri sayım ile (`🛡️ Kalkan: 9s`, `🧲 Mıknatıs: 9s`, `👟 Süzülme: 9s`) anlık olarak gösterilir. Kalkan bir engele çarptığında oyuncuyu koruyup sıfırlanır; mıknatıs ve süzülme ise süre bitene kadar aktif kalır.

---

## 🪙 5. Dinamik ve Tekil Altın Sistemi (Sabit Durmayan & Canlı Animasyon)
Kullanıcı talebi doğrultusunda altınların statik küme olarak yerinde çakılı durması engellenmiş, tekil ve canlı hareket mekaniği kazandırılmıştır:
1. **Farklı Alanlarda Tekil Konumlanma:**
   - **Asılı Engel Altı (Zemin):** Eğilip kayarak toplanan tekil altın (`groundY - 26`).
   - **Zemin Engeli Üstü (Hava):** Üzerinden zıplayarak havada toplanan tekil altın (`groundY - size - 44`).
   - **Boş Parkur (3 Farklı İrtifa):** Düz koşu zemininde (%38), orta havada zıplama hizasında (%34) veya yüksek havada süzülme/çift zıplama hizasında (%28) tekil olarak belirir.
2. **Sabit Durmayan Canlı Hareket:**
   - **Havada/Zeminde Süzülme (Hovering/Bobbing):** Her altın bağımsız bir faz dalgası ile (`Math.sin(t * 3.0) * 4.5`) dikeyde yumuşakça salınır.
   - **3 Boyutlu Eksen Dönüşü (3D Coin Spin):** Yatay eksende `Math.cos(t * 3.4)` ile dönerek derinlik hissi yaratır.
   - **Pulsing Altın Halesi & Gölge:** Nabız gibi atan altın ışık halesi ve zemine vuran yumuşak dinamik gölge.
   - **Senkronize Çarpışma Kutusu:** Toplama algılayıcısı (`checkCoinPickup`) altının anlık salınım yüksekliği (`coin.bob`) ile dinamik eşleşir.

---

## 🛠️ 6. iOS ve Android Senkronizasyon & Sürüm Bilgisi
- **Android (`app/build.gradle.kts`):** `versionCode = 7`, `versionName = "2.6.0"`
- **Android Asset Yolu:** `app/src/main/assets/` (`index.html`, `game.js`, `style.css`)
- **iOS (`iosApp/ContentView.swift`):** Web bundle (`index.html`, `game.js`, `style.css`) ile birebir senkronize çalışmaktadır.
- **Hedeflenen APK:** `app/build/outputs/apk/debug/app-debug.apk` (v2.6.0, versionCode 7)
- **GitHub Deposu:** `https://github.com/srcnbllc/MaceraOrmaniFoxAdventure`


