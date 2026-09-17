# Sürüm Güncellemesi: 17 Eylül 2026 (Alıştırma Parkuru & Aksesuar Hedefleme)

## 📌 Yapılan Başlıca İyileştirmeler

1. **6 Etaplı Alıştırma Parkuru & Büyük Final (%100):**
   - **1. Adım:** Parkur Başlangıcı (%17)
   - **2. Adım:** Ahşap Çit & Zıplama (%34)
   - **3. Adım:** Macera Halatı & Eğilme (%50)
   - **4. Adım:** Altın Palamut & Canlar (%67) - Palamut öncesi can 1 azaltılır (`🤍`), palamut toplanınca yeşil kalp efektiyle tam dolup 5. adıma otomatik geçiş sağlanır.
   - **5. Adım:** Kaşif Donanımı & Kalkan (%84) - Hedefleme radarı ve yaklaşan engelde Slow-Mo devreye girer; kalkan açılınca ahşap çit paramparça edilir.
   - **6. Adım:** Büyük Final (Tebrikler!) (%100) - Konfeti ve zafer ışıltıları eşliğinde alıştırma tamamlanır, 1. Bölüm kapısı açılır.

2. **Aksesuar Etabı (5. Adım) Tam Hedefleme & Yönlendirme:**
   - Sağ üstteki `🧢 KORUMA` butonunun tam üzerine dinamik nabız radarı (`.pointer-beacon-ring`) ve işaretleme parmağı (`👇 🎯 BURAYA DOKUN!`) yerleştirildi.
   - Rehber kartının içine alternatif `[ 🛡️ 🧢 KORUMA KALKANINI AÇ (DOKUN) ]` eylem butonu eklendi.
   - Yaklaşan çitte `Slow-Mo (0.35)` devreye girerek 7-15 yaş grubundaki çocukların butonu fark edip basması kolaylaştırıldı.
   - Sağ kenar güvenli payı (`right: max(20px, ...)`) verilerek mobilde veya yatay ekranda butonun kesilmesi engellendi.

3. **Çift Kod Tabanı Eşitlemesi (Parity):**
   - Hem ana web motoru (`game.js`, `index.html`, `style.css`) hem de Android WebView motoru (`app/src/main/assets/`) birebir eşitlendi.
   - Çift modal ID (`modal-tutorial-complete`) çakışması giderildi.
