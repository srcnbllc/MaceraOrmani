/**
 * Kemerburgaz Kent Ormanı - HTML5 / Web Oyunu Motoru
 * İstanbul Büyükşehir Belediyesi & Boğaziçi Yönetim A.Ş.
 */

// ============================================================================
// 1. VERİ HAVUZU (10 RESMİ SAHA ETABI & KAHRAMANLAR)
// ============================================================================

const RESMI_ETAPLAR = [
  {
    id: 1,
    title: "1. Orman Etabı: Mağlova Kapısı & Karşılama",
    desc: "Kemerburgaz Kent Ormanı A Kapısı karşılama meydanı. Bisiklet kiralama ve danışma noktası.",
    facilities: "ℹ️ Danışma: 30m | 🚲 Bisiklet Kiralama: 40m | 🅿️ Ana Otopark | 🚻 WC: 50m",
    fact: "Kemerburgaz Kent Ormanı 5.5 milyon metrekarelik devasa alanıyla İstanbul'un en büyük açık hava rekreasyon sahasıdır.",
    business: "Mağlova Karşılama Meydanı",
    qrCode: "BOLUM_1"
  },
  {
    id: 2,
    title: "2. Orman Etabı: Dev Atlıkarınca & Carousel Cafe",
    desc: "Türkiye'nin ilk yerli ve çift katlı, 14m çapındaki 40 hareketli atlı dev atlıkarıncası!",
    facilities: "🎠 Çift Katlı Atlıkarınca: 20m | ☕ Carousel Cafe (Waffle & Sıcak Çikolata): 40m",
    fact: "Atlıkarıncanın tüm atları hareketli olup ahşap ve doğal mimariye uygun üretilmiştir.",
    business: "Carousel Cafe & Çift Katlı Atlıkarınca",
    qrCode: "BOLUM_2"
  },
  {
    id: 3,
    title: "3. Orman Etabı: Çocuk Parkları & Rotamız Orman",
    desc: "23 farklı çocuk oyun parkı noktası ve 'Rotamız Orman' ekolojik çocuk atölyesi alanı.",
    facilities: "🚸 Ahşap Oyun Parkı: 30m | 🎨 Ekolojik Doğa Atölyesi: 60m | ☕ Good Mood: 80m",
    fact: "Ormandaki dökülen meşe palamutları sincaplar tarafından saklanır ve yeni meşe ormanlarını doğurur.",
    business: "Ahşap Oyun Parkı & Good Mood Cafe",
    qrCode: "BOLUM_3"
  },
  {
    id: 4,
    title: "4. Orman Etabı: BELTUR Restoran & Kafe",
    desc: "Orman manzaralı BELTUR. 1. Büyük Aile Dinlenme Molası: Sıcak çay, yemek ve dinlenme.",
    facilities: "☕ BELTUR Kafe & Restoran: 0m | 🎭 Etkinlik Sahnesi: 50m | 🚻 WC & Bebek Bakım: 30m",
    fact: "BELTUR kafelerinde kendi mataranı kullanarak doğaya sıfır plastik atık bırakabilirsin.",
    business: "BELTUR Kafe & Restoran",
    qrCode: "BOLUM_4"
  },
  {
    id: 5,
    title: "5. Orman Etabı: Macera Parkı & Zipline Hattı",
    desc: "Ağaçlar arası ip parkurları, tırmanma duvarı ve dev Zipline! Bu etabı bitirene BELTUR İkram Kuponu hediye.",
    facilities: "🧗 Macera Parkı & Zipline: 0m | 🎟️ Bu Etabı Bitirince BELTUR İkram Kuponu Kazan!",
    fact: "İp parkurları ve Zipline, sporcuların ve gençlerin denge ve koordinasyonunu güçlendirir.",
    business: "Macera Parkı & Zipline Danışma",
    qrCode: "BOLUM_5"
  },
  {
    id: 6,
    title: "6. Orman Etabı: Fauna Alanı & Yaban Hayatı Koridoru",
    desc: "Kemerburgaz Country Club Fauna Alanı: Hayvanlarla bağ kurma, tavşanlar ve kuş gözlemi.",
    facilities: "🦌 Fauna Alanı & Hayvan Barınakları: 40m | ☕ Yeşil Vadi Cafe: 90m | 🚰 Doğal Çeşme",
    fact: "Ormanımızda alageyikler, kızıl sincaplar ve onlarca göçmen kuş türü koruma altında yaşar.",
    business: "Yeşil Vadi Cafe & Hayvan Barınakları",
    qrCode: "BOLUM_6"
  },
  {
    id: 7,
    title: "7. Orman Etabı: Mimar Sinan Kapısı & Gölet Parkuru",
    desc: "B Kapısı ve 2.4 km Alibeyköy Gölet Parkuru. Sazlıklar ve gölet su kuşları gözlem alanı.",
    facilities: "🦆 Kuş Gözlem İskelesi: 50m | 🍔 BELTUR Burger: 60m | 🚻 WC: 80m",
    fact: "Alibeyköy Deresi kıyısındaki sazlıklar ormanın doğal biyolojik su filtresidir.",
    business: "BELTUR Burger & Kuş Gözlem İskelesi",
    qrCode: "BOLUM_7"
  },
  {
    id: 8,
    title: "8. Orman Etabı: Ahşap Seyir Kulesi & Günbatımı Tepesi",
    desc: "İstanbul'un kuzey ormanlarını 360 derece panoramik izleme kulesi ve temiz hava sahası.",
    facilities: "🗼 Panoramik Seyir Kulesi: 30m | ☕ Big Forest Cafe: 80m | 🪑 Seyir Terası",
    fact: "Seyir kulesinden ormana baktığında çam ağaçlarının yaydığı taze oksijeni ciğerlerinde hissedersin.",
    business: "Big Forest Cafe & Seyir Terası",
    qrCode: "BOLUM_8"
  },
  {
    id: 9,
    title: "9. Orman Etabı: Yakamoz Burnu & Mimar Sinan Yolu",
    desc: "Alibeyköy Deresi yarımadası, suyun huzur veren sesi ve tarihi taşlı patika rotası.",
    facilities: "🌊 Alibey Deresi Kıyısı: 20m | 🪵 Woodbox Dinlenme Noktası: 60m",
    fact: "Tarihi patika, asırlar önce Mimar Sinan'ın su kemerlerini inşa ederken kullandığı kervan yoludur.",
    business: "Woodbox Dinlenme Noktası",
    qrCode: "BOLUM_9"
  },
  {
    id: 10,
    title: "10. Orman Etabı: MAĞLOVA SU KEMERİ (BÜYÜK FİNAL!)",
    desc: "Mimar Sinan'ın 1564 şaheseri (36m yükseklik, 257m uzunluk) dünya su mimarisi başyapıtı!",
    facilities: "🏛️ Mağlova Su Kemeri: 0m | 🏆 Resmi Muhafız Beratı & Macera Parkı Zipline Kuponu!",
    fact: "Mağlova Su Kemeri, iki katlı gözleri ve piramidal payandalarıyla 460 yıldır tüm deprem ve sellere meydan okumuştur.",
    business: "Mağlova Su Kemeri Ziyaretçi Totemi",
    qrCode: "BOLUM_10"
  }
];

const KAHRAMANLAR = [
  {
    id: 1,
    name: "Tilki",
    desc: "Dengeli, hızlı tepkili ve çevik orman koşucusu.",
    image: "Assets/Sprites/fox.gif",
    speed: 4,
    jump: 4,
    durability: 3,
    unlockStage: 1,
    reqPoints: 0,
    price: 0
  },
  {
    id: 2,
    name: "Maymun",
    desc: "Akrobatik hava hakimiyeti ve yüksek zıplama gücü.",
    image: "Assets/Sprites/monkey.gif",
    speed: 5,
    jump: 5,
    durability: 2,
    unlockStage: 4,
    reqPoints: 1200,
    price: 50
  },
  {
    id: 3,
    name: "Muhafız Kaplan",
    desc: "Tok yerçekimi, yüksek dayanıklılık (+1 Can bonusu).",
    image: "Assets/Sprites/tigger.gif",
    speed: 3,
    jump: 3,
    durability: 5,
    unlockStage: 7,
    reqPoints: 2600,
    price: 100
  }
];

const KOSTUMLER = [
  {
    id: "none",
    name: "Doğal",
    desc: "Doğal orman kürkü ve canlı tüyler.",
    icon: "🌿",
    unlockStage: 1,
    price: 0
  },
  {
    id: "hat",
    name: "Kaşif Şapkası",
    desc: "İBB & Boğaziçi kurumsal koyu lacivert renkli, altın amblemli kaşif şapkası.",
    icon: "🧢",
    unlockStage: 2,
    price: 60
  },
  {
    id: "vest",
    name: "Muhafız Yeleği",
    desc: "Orman muhafızı yeleği, altın düğmeler ve Boğaziçi arması.",
    icon: "🦺",
    unlockStage: 4,
    price: 120
  },
  {
    id: "pants",
    name: "İzci Pantolonu",
    desc: "İBB & Boğaziçi koyu lacivert resmi izci pantolonu, altın tokalı kemer.",
    icon: "👖",
    unlockStage: 6,
    price: 180
  }
];

// ============================================================================
// 2. STATE YÖNETİCİSİ (LOCALSTORAGE ENTEGRASYONU)
// ============================================================================

class GameState {
  static getExplorerName() {
    return localStorage.getItem("explorer_name") || "";
  }
  static setExplorerName(name) {
    localStorage.setItem("explorer_name", (name || "").trim());
  }
  static getExplorerId() {
    let id = localStorage.getItem("explorer_id");
    if (!id) {
      id = "EXP-" + Math.floor(100000 + Math.random() * 900000);
      localStorage.setItem("explorer_id", id);
    }
    return id;
  }
  static getStageScore(stageIdx) {
    return parseInt(localStorage.getItem(`StageScore_${stageIdx}`) || "0", 10);
  }
  static setStageScore(stageIdx, sc) {
    const current = this.getStageScore(stageIdx);
    if (sc > current) {
      localStorage.setItem(`StageScore_${stageIdx}`, sc.toString());
    }
    this.updateHighScore(sc);
  }
  static getTotalStagePoints() {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += this.getStageScore(i);
    }
    // Geriye dönük uyum: Eğer hiç StageScore yoksa ama önceden tamamlanmışsa
    if (sum === 0 && this.getHighScore() > 0 && this.getLevelState(0) === 3) {
      this.setStageScore(0, this.getHighScore());
      return this.getHighScore();
    }
    return sum;
  }
  static getTotalExplorerPoints() {
    return this.getTotalStagePoints();
  }
  static hasCompletedOnboarding() {
    return !!localStorage.getItem("explorer_name");
  }

  static getProfileHero() {
    return parseInt(localStorage.getItem("explorer_profile_hero") || "1", 10);
  }
  static setProfileHero(id) {
    localStorage.setItem("explorer_profile_hero", id.toString());
  }

  static isTutorialCompleted() {
    return localStorage.getItem("tutorial_completed") === "1";
  }
  static setTutorialCompleted(completed = true) {
    localStorage.setItem("tutorial_completed", completed ? "1" : "0");
  }

  static getSelectedCostume() {
    let c = localStorage.getItem("selected_costume") || "none";
    if (c === "crown") {
      c = "pants";
      localStorage.setItem("selected_costume", "pants");
    }
    return c;
  }
  static setSelectedCostume(costumeId) {
    if (costumeId === "crown") costumeId = "pants";
    localStorage.setItem("selected_costume", costumeId);
  }

  static isCostumeUnlocked(costumeId) {
    if (!costumeId || costumeId === "none") return true;
    if (costumeId === "crown") costumeId = "pants";
    return localStorage.getItem(`unlocked_costume_${costumeId}`) === "1";
  }
  static unlockCostume(costumeId) {
    if (costumeId === "crown") costumeId = "pants";
    localStorage.setItem(`unlocked_costume_${costumeId}`, "1");
  }

  static getCoins() {
    // Kullanıcı Kuralı: Başlangıçta bedava altın verilmez, kahraman 0 altınla başlar!
    return parseInt(localStorage.getItem("total_coins") || "0", 10);
  }
  static setCoins(amount) {
    const val = Math.max(0, amount);
    localStorage.setItem("total_coins", val.toString());
    const mEl = document.getElementById("menu-coin-count");
    if (mEl) mEl.textContent = val;
    const hEl = document.getElementById("heroes-coin-count");
    if (hEl) hEl.textContent = val;
    const cEl = document.getElementById("camp-user-coins-badge");
    if (cEl) cEl.textContent = `🪙 ${val} Altın`;
  }
  static addCoins(amount) {
    this.setCoins(this.getCoins() + amount);
  }

  static getHighScore() {
    return parseInt(localStorage.getItem("high_score") || "0", 10);
  }
  static updateHighScore(score) {
    if (score > this.getHighScore()) {
      localStorage.setItem("high_score", score.toString());
    }
  }

  // ⭐ Kariyer Kaşif Puanı Havuzu & Harcanabilir Puanlar (Gelişim Vadisi Alışverişi İçin)
  static getTotalExplorerPoints() {
    const stored = parseInt(localStorage.getItem("total_explorer_points") || "0", 10);
    const high = this.getHighScore();
    return Math.max(stored, high);
  }
  static addExplorerPoints(amount) {
    if (!amount || amount <= 0) return;
    const current = this.getTotalExplorerPoints();
    const next = current + Math.round(amount);
    localStorage.setItem("total_explorer_points", next.toString());
  }
  static getSpentPoints() {
    return parseInt(localStorage.getItem("spent_explorer_points") || "0", 10);
  }
  static spendExplorerPoints(amount) {
    const current = this.getSpentPoints();
    localStorage.setItem("spent_explorer_points", (current + amount).toString());
  }
  static getAvailablePoints() {
    return Math.max(0, this.getTotalExplorerPoints() - this.getSpentPoints());
  }

  static getSelectedHero() {
    return parseInt(localStorage.getItem("SelectedCharacterID") || "1", 10);
  }
  static setSelectedHero(id) {
    localStorage.setItem("SelectedCharacterID", id.toString());
  }

  static isHeroUnlocked(id) {
    if (id === 1) return true;
    if (localStorage.getItem(`unlocked_char_${id}`) === "1") return true;
    const hero = KAHRAMANLAR.find(h => h.id === id);
    if (!hero) return false;

    // Kullanıcı Kuralı: Sırayla 4 ve 7. Bölümler VE puan toplama ile açılmalı!
    const stageCompleted = this.getLevelState(hero.unlockStage - 1) === 3;
    const pointsReached = this.getTotalExplorerPoints() >= (hero.reqPoints || 0);
    if (stageCompleted && pointsReached) {
      this.unlockHero(id);
      return true;
    }
    return false;
  }
  static unlockHero(id) {
    localStorage.setItem(`unlocked_char_${id}`, "1");
  }

  static getLevelState(index) {
    if (index === 0) return parseInt(localStorage.getItem("LevelState_0") || "2", 10);
    return parseInt(localStorage.getItem(`LevelState_${index}`) || "0", 10);
  }
  static setLevelState(index, state) {
    localStorage.setItem(`LevelState_${index}`, state.toString());
  }

  static getTentLevel() {
    const v = parseInt(localStorage.getItem("tent_level") || "0", 10);
    return Math.min(3, Math.max(0, isNaN(v) ? 0 : v));
  }
  static setTentLevel(lvl) {
    const clamped = Math.min(3, Math.max(0, lvl));
    localStorage.setItem("tent_level", clamped.toString());
  }

  static getCampfireLevel() {
    const v = parseInt(localStorage.getItem("campfire_level") || "0", 10);
    return Math.min(3, Math.max(0, isNaN(v) ? 0 : v));
  }
  static setCampfireLevel(lvl) {
    const clamped = Math.min(3, Math.max(0, lvl));
    localStorage.setItem("campfire_level", clamped.toString());
  }

  static getBootsLevel() {
    const v = parseInt(localStorage.getItem("boots_level") || "0", 10);
    return Math.min(3, Math.max(0, isNaN(v) ? 0 : v));
  }
  static setBootsLevel(lvl) {
    const clamped = Math.min(3, Math.max(0, lvl));
    localStorage.setItem("boots_level", clamped.toString());
  }

  // 4. Güçlendirme: 🧭 Orman Pusulası (Bölüm Tamamlama & Kurtarma Yeteneği)
  static getCompassLevel() {
    const v = parseInt(localStorage.getItem("compass_level") || "0", 10);
    return Math.min(3, Math.max(0, isNaN(v) ? 0 : v));
  }
  static setCompassLevel(lvl) {
    const clamped = Math.min(3, Math.max(0, lvl));
    localStorage.setItem("compass_level", clamped.toString());
  }

  static getBackpackLevel() {
    return parseInt(localStorage.getItem("backpack_level") || "0", 10);
  }
  static setBackpackLevel(lvl) {
    localStorage.setItem("backpack_level", lvl.toString());
  }

  static getVoucherCode(type) {
    const key = `VoucherCode_${type}`;
    let code = localStorage.getItem(key);
    if (!code) {
      const rnd = Math.floor(1000 + Math.random() * 9000);
      const prefix = type.toUpperCase().slice(0, 4);
      code = `KB-${prefix}-${rnd}`;
      localStorage.setItem(key, code);
    }
    return code;
  }

  static isVoucherUsed(rewardId) {
    return localStorage.getItem(`voucher_used_${rewardId}`) === "1";
  }

  static markVoucherUsed(rewardId) {
    localStorage.setItem(`voucher_used_${rewardId}`, "1");
  }

  static resetData() {
    localStorage.clear();
    sessionStorage.clear();
    this.setCoins(0);
    localStorage.setItem("coins_unearned_fixed", "1");
    localStorage.setItem("unlocked_costumes", JSON.stringify(["none"]));
  }
}

// Başlangıçtaki haksız 50 bedava altını düzeltme (Tek seferlik geçiş)
try {
  if (!localStorage.getItem("coins_unearned_fixed")) {
    localStorage.setItem("coins_unearned_fixed", "1");
    if (localStorage.getItem("total_coins")) {
      const cur = parseInt(localStorage.getItem("total_coins"), 10);
      const fixed = Math.max(0, cur - 50);
      localStorage.setItem("total_coins", fixed.toString());
    }
  }

  // Başlangıçtaki hatalı 150 XP kalıntısını 0'a sıfırlama (Tek seferlik geçiş)
  if (!localStorage.getItem("xp_init_zero_fixed_v1")) {
    localStorage.setItem("xp_init_zero_fixed_v1", "1");
    if (localStorage.getItem("player_xp") === "150" && (!localStorage.getItem("LevelState_1") || localStorage.getItem("LevelState_1") === "0")) {
      localStorage.setItem("player_xp", "0");
    }
  }
} catch(e) {}

// ============================================================================
// 2.5 FİREBASE SİMÜLASYONU & GERÇEK İŞLETME İKRAM KUPONLARI
// ============================================================================

const ISLETME_KUPONLARI = [
  {
    id: "carousel",
    biz: "Carousel Cafe & Çift Katlı Atlıkarınca",
    reward: "Sıcak Çikolata veya Mini Waffle İkramı 🧇",
    icon: "🎠",
    stageId: 2,
    desc: "2. Orman Etabı'nı tamamlayın veya tesisteki QR kodu okutun.",
    isUnlocked: () => GameState.getLevelState(1) >= 2
  },
  {
    id: "goodmood",
    biz: "Good Mood Cafe & Ahşap Park",
    reward: "Taze Sıkma Portakal Suyu veya Limonata 🍋",
    icon: "🧃",
    stageId: 3,
    desc: "3. Etabı QR kod ile açın veya etabı tamamlayın.",
    isUnlocked: () => GameState.getLevelState(2) >= 2
  },
  {
    id: "beltur_tea",
    biz: "BELTUR Restoran & Kafe",
    reward: "Taze Rize Çayı & Çıtır Simit İkramı 🥨",
    icon: "☕",
    stageId: 4,
    desc: "4. Etabı açarak veya tamamlayarak BELTUR ikramını kazanın.",
    isUnlocked: () => GameState.getLevelState(3) >= 2
  },
  {
    id: "adventure_climb",
    biz: "Macera Parkı & Zipline Hattı",
    reward: "Tırmanma Duvarı %50 İndirim Kuponu 🧗",
    icon: "🎟️",
    stageId: 5,
    desc: "5. Etabı açarak veya Zipline parkurunu tamamlayarak kazanın.",
    isUnlocked: () => GameState.getLevelState(4) >= 2
  },
  {
    id: "yesilvadi_fauna",
    biz: "Yeşil Vadi Cafe & Doğa Koridoru",
    reward: "Bitki Çayı & Doğa Dostu Tohumlu Kalem ✏️🌱",
    icon: "🦌",
    stageId: 6,
    desc: "6. Etabı açarak veya Fauna Alanı parkurunu tamamlayarak kazanın.",
    isUnlocked: () => GameState.getLevelState(5) >= 2
  },
  {
    id: "beltur_burger",
    biz: "BELTUR Burger & Kuş Gözlem",
    reward: "Çıtır Patates & Yayık Ayranı İkramı 🍟🥛",
    icon: "🍔",
    stageId: 7,
    desc: "7. Etabı açarak veya Gölet Parkuru'nu tamamlayarak kazanın.",
    isUnlocked: () => GameState.getLevelState(6) >= 2
  },
  {
    id: "big_forest",
    biz: "Big Forest Cafe & Seyir Terası",
    reward: "Filtre Kahve veya Sıcak Salep İkramı ☕",
    icon: "🗼",
    stageId: 8,
    desc: "8. Etabı açarak veya Seyir Kulesi etabını geçerek kazanın.",
    isUnlocked: () => GameState.getLevelState(7) >= 2
  },
  {
    id: "woodbox",
    biz: "Woodbox Dinlenme Noktası",
    reward: "Ahşap Kent Ormanı Hatıra Magneti 🪵",
    icon: "🌲",
    stageId: 9,
    desc: "9. Etabı açarak veya Yakamoz Burnu etabını geçerek kazanın.",
    isUnlocked: () => GameState.getLevelState(8) >= 2
  },
  {
    id: "maglova_zipline",
    biz: "Mağlova Ziyaretçi Totemi",
    reward: "BÜYÜK FİNAL: ÜCRETSİZ Zipline Uçuşu & Berat 🏆",
    icon: "🦅",
    stageId: 10,
    desc: "10. Büyük Final Mağlova Su Kemeri etabını tamamlayın!",
    isUnlocked: () => GameState.getLevelState(9) === 3
  }
];

// ============================================================================
// 1.1 GERÇEK CİHAZ AĞ VE MOBİL VERİ SERVİSİ (DEVICE NETWORK SERVICE)
// ============================================================================
class DeviceNetworkService {
  static getStatus() {
    const isOnline = navigator.onLine !== false;
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    if (!isOnline) {
      return {
        online: false,
        text: "🔴 Çevrimdışı (Cihaz)",
        detail: "İnternet bağlantısı yok • İlerleme cihaza kaydediliyor",
        type: "offline",
        icon: "🔴"
      };
    }

    if (conn) {
      const eff = (conn.effectiveType || "").toUpperCase();
      const type = conn.type;

      if (type === "cellular" || (eff && eff.includes("G"))) {
        return {
          online: true,
          text: `📶 Mobil Veri (${eff || "Canlı"})`,
          detail: `Mobil Şebeke (${eff || "4G"}) • Çevrimiçi Gerçek Zamanlı`,
          type: "cellular",
          icon: "📶"
        };
      } else if (type === "wifi") {
        return {
          online: true,
          text: "📶 Wi-Fi Çevrimiçi",
          detail: "Kablosuz Wi-Fi Ağı • Canlı Senkronize",
          type: "wifi",
          icon: "📶"
        };
      } else if (eff) {
        return {
          online: true,
          text: `📶 ${eff} Çevrimiçi`,
          detail: `${eff} Hızlı Bağlantı • Canlı`,
          type: "online",
          icon: "📶"
        };
      }
    }

    return {
      online: true,
      text: "🟢 Canlı Çevrimiçi",
      detail: "Cihaz Bağlantısı Aktif • Canlı",
      type: "online",
      icon: "🟢"
    };
  }

  static updateAllBadges(customMessage = null) {
    const status = this.getStatus();
    const displayText = customMessage || status.text;

    const el = document.getElementById("firebase-cloud-indicator");
    if (el) {
      el.textContent = displayText;
      el.className = `device-network-badge ${status.online ? 'is-online' : 'is-offline'}`;
      el.title = status.detail;
    }

    const lbBadge = document.getElementById("leaderboard-sync-badge");
    if (lbBadge) {
      lbBadge.textContent = displayText;
      lbBadge.className = `device-network-badge ${status.online ? 'is-online' : 'is-offline'}`;
      lbBadge.title = status.detail;
    }
  }

  static triggerSaveFeedback() {
    const status = this.getStatus();
    const saveMsg = status.online ? "💾 Veriler Kaydedildi" : "💾 Cihaza Kaydedildi";
    this.updateAllBadges(saveMsg);
    setTimeout(() => {
      this.updateAllBadges();
    }, 700);
  }

  static init() {
    this.updateAllBadges();
    window.addEventListener("online", () => {
      this.updateAllBadges();
      if (window.showToast) window.showToast("📶 Cihaz internete bağlandı: Çevrimiçi", "success");
    });
    window.addEventListener("offline", () => {
      this.updateAllBadges();
      if (window.showToast) window.showToast("🔴 İnternet bağlantısı kesildi: Çevrimdışı (İlerleme yerel kaydediliyor)", "warning");
    });

    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (conn && conn.addEventListener) {
      conn.addEventListener("change", () => {
        this.updateAllBadges();
      });
    }
  }
}

// ============================================================================
// 1.2 CİHAZ MARKA, MODEL & PARMAK İZİ SERVİSİ (DEVICE INFO SERVICE)
// ============================================================================
const DeviceInfoService = {
  getDeviceInfo() {
    // 1. Android WebView JavascriptInterface
    try {
      const bridge = window.AndroidFirebaseBridge || window.AndroidBridge;
      if (bridge && typeof bridge.getDeviceInfoJson === 'function') {
        const jsonStr = bridge.getDeviceInfoJson();
        if (jsonStr) {
          const info = JSON.parse(jsonStr);
          const brand = (info.brand || info.manufacturer || "Android").trim();
          const model = (info.model || "Cihaz").trim();
          const os = (info.osVersion || "Android").trim();
          return {
            brand: brand.charAt(0).toUpperCase() + brand.slice(1),
            model: model,
            manufacturer: info.manufacturer || brand,
            os: os,
            summary: `${brand.toUpperCase()} ${model} (${os})`.trim()
          };
        }
      }
    } catch(e) {}

    // 2. Tarayıcı / iOS / Diğer ortamlar: User-Agent ve Client Bilgileri
    const ua = navigator.userAgent || "";
    let brand = "Web";
    let model = "Tarayıcı";
    let os = "Bilinmeyen";

    if (/android/i.test(ua)) {
      os = "Android";
      brand = "Android";
      const match = ua.match(/;\s*([^;]+?)\s*Build/i) || ua.match(/Android\s+[^;]+;\s*([^;)]+)/i);
      if (match && match[1]) {
        model = match[1].trim();
        const mLower = model.toLowerCase();
        if (mLower.includes("samsung") || mLower.startsWith("sm-")) brand = "Samsung";
        else if (mLower.includes("xiaomi") || mLower.includes("redmi") || mLower.includes("poco")) brand = "Xiaomi";
        else if (mLower.includes("huawei")) brand = "Huawei";
        else if (mLower.includes("oppo")) brand = "Oppo";
        else if (mLower.includes("pixel")) brand = "Google";
      }
    } else if (/iphone|ipad|ipod/i.test(ua)) {
      brand = "Apple";
      os = "iOS";
      model = /ipad/i.test(ua) ? "iPad" : "iPhone";
    } else if (/windows/i.test(ua)) {
      brand = "PC";
      os = "Windows";
      model = "Masaüstü";
    } else if (/macintosh|mac os x/i.test(ua)) {
      brand = "Apple";
      os = "macOS";
      model = "Mac";
    }

    return {
      brand: brand,
      model: model,
      manufacturer: brand,
      os: os,
      summary: `${brand} ${model} (${os})`.trim()
    };
  },

  getDeviceId() {
    let id = localStorage.getItem("kemerburgaz_device_id");
    if (!id) {
      id = "dev_" + Math.random().toString(36).substring(2, 9) + "_" + Date.now().toString(36);
      localStorage.setItem("kemerburgaz_device_id", id);
    }
    return id;
  }
};
window.DeviceInfoService = DeviceInfoService;

class FirebaseSimService {
  static getCloudStatusText() {
    return DeviceNetworkService.getStatus().text;
  }

  static getXp() {
    // Kullanıcı Talebi: Yeni kurulumda ve başlangıçta 0 XP ile başlar!
    return parseInt(localStorage.getItem("player_xp") || "0", 10);
  }

  static addXp(amount) {
    const current = this.getXp();
    const next = current + amount;
    localStorage.setItem("player_xp", next.toString());
    this.syncCloudFeedback();
    return next;
  }

  static syncCloudFeedback() {
    DeviceNetworkService.triggerSaveFeedback();
  }

  static getPlayerRank(xp = this.getXp()) {
    let completedCount = 0;
    let highestStage = 1;
    if (typeof GameState !== "undefined" && typeof GameState.getLevelState === "function") {
      for (let i = 0; i < 10; i++) {
        const st = GameState.getLevelState(i);
        if (st === 3) completedCount++;
        if (st >= 2) highestStage = Math.max(highestStage, i + 1);
      }
    }

    // 1. Final Tamamlandı (10. Etap Tamamlandı - Profesyonel Statü)
    const isFinalComplete = (typeof GameState !== "undefined" && GameState.getLevelState(9) === 3) || completedCount >= 10;
    if (isFinalComplete || xp >= 2500) {
      return { 
        rank: 5, 
        title: "Profesyonel Muhafız", 
        badge: "PROFESYONEL",
        minXp: 2000, 
        maxXp: 3000, 
        icon: "👑",
        tier: "profesyonel",
        description: "10 Etabı ve Büyük Finali tamamlamış resmi usta muhafız!"
      };
    }

    // 2. İleri Seviye Kaşif (8-9. Bölümler)
    if (highestStage >= 8 || completedCount >= 7 || xp >= 1800) {
      return { 
        rank: 4, 
        title: "Usta Orman Kaşifi", 
        badge: "USTA KAŞİF",
        minXp: 1400, 
        maxXp: 2000, 
        icon: "🦅",
        tier: "kasif",
        description: "Ormanın derinliklerine hakim, tecrübeli kaşif!"
      };
    }

    // 3. 5. Bölüme Gelindiğinde (5-7. Bölümler - Yeni Statü: Orman Kaşifi)
    if (highestStage >= 5 || completedCount >= 4 || xp >= 800) {
      return { 
        rank: 3, 
        title: "Orman Kaşifi", 
        badge: "ORMAN KAŞİFİ",
        minXp: 600, 
        maxXp: 1400, 
        icon: "🧭",
        tier: "kasif",
        description: "5. etaba ulaşmış, doğanın sırlarını keşfeden kaşif!"
      };
    }

    // 4. Doğa İz Sürücüsü (3-4. Bölümler)
    if (highestStage >= 3 || completedCount >= 2 || xp >= 300) {
      return { 
        rank: 2, 
        title: "Doğa İz Sürücüsü", 
        badge: "İZ SÜRÜCÜ",
        minXp: 300, 
        maxXp: 600, 
        icon: "🐾",
        tier: "izci",
        description: "Orman patikalarını öğrenen aktif iz sürücü!"
      };
    }

    // 5. Başlangıç (1-2. Bölümler - Orman Çaylağı)
    return { 
      rank: 1, 
      title: "Orman Çaylağı", 
      badge: "ÇAYLAK",
      minXp: 0, 
      maxXp: 300, 
      icon: "🌱",
      tier: "caylak",
      description: "Maceraya yeni adım atan hevesli doğa dostu!"
    };
  }

  static getAchievements() {
    return [
      {
        id: "first_run",
        title: "İlk Adım!",
        desc: "Kemerburgaz Kent Ormanı'nda ilk koşunu başlat.",
        icon: "👟",
        target: 1,
        progress: () => (GameState.getLevelState(0) > 0 ? 1 : 0),
        rewardCoins: 50,
        rewardXp: 100
      },
      {
        id: "carousel_fun",
        title: "Atlıkarınca Neşesi",
        desc: "2. Orman Etabı: Dev Atlıkarınca ve Carousel Cafe'yi tamamla.",
        icon: "🎠",
        target: 1,
        progress: () => (GameState.getLevelState(1) === 3 ? 1 : 0),
        rewardCoins: 75,
        rewardXp: 150
      },
      {
        id: "qr_pioneer",
        title: "QR Kaşifi",
        desc: "Saha işletmelerinden en az 1 QR kod okut ve etabı ücretsiz aç.",
        icon: "📷",
        target: 1,
        progress: () => {
          for (let i = 2; i < 10; i++) {
            if (GameState.getLevelState(i) >= 2) return 1;
          }
          return 0;
        },
        rewardCoins: 100,
        rewardXp: 200
      },
      {
        id: "coin_hunter",
        title: "Altın Avcısı",
        desc: "Toplam 250 veya daha fazla altın topla.",
        icon: "🪙",
        target: 250,
        progress: () => GameState.getCoins(),
        rewardCoins: 150,
        rewardXp: 250
      },
      {
        id: "beltur_break",
        title: "BELTUR Molası",
        desc: "4. Etabı geç ve BELTUR dinlenme molasını kazan.",
        icon: "☕",
        target: 1,
        progress: () => (GameState.getLevelState(3) === 3 ? 1 : 0),
        rewardCoins: 100,
        rewardXp: 200
      },
      {
        id: "zipline_brave",
        title: "Cesur Zipline Uçuşu",
        desc: "5. Etabı geçerek Macera Parkı Zipline parkurunu fethet.",
        icon: "🧗",
        target: 1,
        progress: () => (GameState.getLevelState(4) === 3 ? 1 : 0),
        rewardCoins: 120,
        rewardXp: 250
      },
      {
        id: "nature_friend",
        title: "Yaban Hayatı Dostu",
        desc: "6. Etabı geç ve Fauna Alanı hayvanlarını selamla.",
        icon: "🦌",
        target: 1,
        progress: () => (GameState.getLevelState(5) === 3 ? 1 : 0),
        rewardCoins: 100,
        rewardXp: 200
      },
      {
        id: "tower_lookout",
        title: "Kuzey Ormanları Muhafızı",
        desc: "8. Etap: Ahşap Seyir Kulesi'nin zirvesine ulaş.",
        icon: "🗼",
        target: 1,
        progress: () => (GameState.getLevelState(7) === 3 ? 1 : 0),
        rewardCoins: 150,
        rewardXp: 300
      },
      {
        id: "maglova_master",
        title: "Mağlova Efsanesi",
        desc: "10. Büyük Final: Tarihi Mağlova Su Kemeri etabını tamamla!",
        icon: "🏛️",
        target: 1,
        progress: () => (GameState.getLevelState(9) === 3 ? 1 : 0),
        rewardCoins: 300,
        rewardXp: 500
      }
    ];
  }

  static isClaimed(achievementId) {
    return localStorage.getItem(`claimed_achieve_${achievementId}`) === "1";
  }

  static claimReward(achievement) {
    if (this.isClaimed(achievement.id)) return false;
    localStorage.setItem(`claimed_achieve_${achievement.id}`, "1");
    GameState.addCoins(achievement.rewardCoins);
    this.addXp(achievement.rewardXp);
    return true;
  }
}

// ============================================================================
// 3. SES YÖNETİCİSİ (AUDIO CONTROLLER)
// ============================================================================

class SoundService {
  constructor() {
    this.sfxEnabled = true;
    this.musicEnabled = true;

    try {
      this.jumpSound = new Audio("Assets/Audio/jump.wav");
      this.collectSound = new Audio("Assets/Audio/collect.wav");
      this.gameOverSound = new Audio("Assets/Audio/game_over.wav");
      this.bgMusic = new Audio("Assets/Audio/orman_muzigi.mp3");
      this.bgMusic.loop = true;
      this.bgMusic.volume = 0.35;
    } catch (e) {
      console.warn("Ses yüklenemedi:", e);
    }
    this.ambienceGain = null;
    this.ambienceSource = null;
    this.ambienceLFO = null;
    this.ambienceFilter = null;
    this.currentAmbienceStage = null;
  }

  getAudioCtx() {
    try {
      if (!this.audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) this.audioCtx = new AudioContextClass();
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      return this.audioCtx;
    } catch (e) {
      return null;
    }
  }

  toggleAudio() {
    this.sfxEnabled = !this.sfxEnabled;
    this.musicEnabled = this.sfxEnabled;
    if (this.musicEnabled) {
      this.playMusic();
      if (typeof gameRunning !== 'undefined' && gameRunning && typeof currentLevelNumber !== 'undefined') {
        this.startWeatherAmbience(currentLevelNumber);
      }
    } else {
      this.stopMusic();
      this.stopWeatherAmbience();
    }
    return this.sfxEnabled;
  }

  startWeatherAmbience(stageNum) {
    if (!this.musicEnabled && !this.sfxEnabled) return;
    if (typeof getStageAtmosphere !== 'function') return;
    const atmos = getStageAtmosphere(stageNum);
    if (!atmos || (atmos.id !== "rainy" && atmos.id !== "winter")) {
      this.stopWeatherAmbience();
      return;
    }
    if (this.currentAmbienceStage === atmos.id && this.ambienceSource) {
      return;
    }
    this.stopWeatherAmbience();
    this.currentAmbienceStage = atmos.id;

    try {
      const ctx = this.getAudioCtx();
      if (!ctx) return;

      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.07;
        b6 = white * 0.115926;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, ctx.currentTime);

      if (atmos.id === "rainy") {
        // YAĞMUR AMBİYANSI: Çiseleyen dinlendirici yağmur ve su pıtırtısı
        filter.type = "bandpass";
        filter.frequency.setValueAtTime(1350, ctx.currentTime);
        filter.Q.setValueAtTime(0.85, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.042, ctx.currentTime + 1.2);
      } else if (atmos.id === "winter") {
        // KIŞ RÜZGARI: Masalsı hafif dağ esintisi ve uğultu
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(420, ctx.currentTime);
        filter.Q.setValueAtTime(3.0, ctx.currentTime);

        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.32, ctx.currentTime);
        lfoGain.gain.setValueAtTime(160, ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(filter.frequency);
        lfo.start();
        this.ambienceLFO = lfo;

        gain.gain.exponentialRampToValueAtTime(0.035, ctx.currentTime + 1.2);
      }

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      whiteNoise.start();

      this.ambienceSource = whiteNoise;
      this.ambienceGain = gain;
      this.ambienceFilter = filter;
    } catch (e) {
      console.warn("Weather ambience error:", e);
    }
  }

  stopWeatherAmbience() {
    this.currentAmbienceStage = null;
    if (this.ambienceLFO) {
      try { this.ambienceLFO.stop(); this.ambienceLFO.disconnect(); } catch (_) {}
      this.ambienceLFO = null;
    }
    if (this.ambienceGain && this.audioCtx) {
      try {
        const now = this.audioCtx.currentTime;
        this.ambienceGain.gain.setValueAtTime(this.ambienceGain.gain.value, now);
        this.ambienceGain.gain.linearRampToValueAtTime(0.0001, now + 0.3);
      } catch (_) {}
    }
    if (this.ambienceSource) {
      const src = this.ambienceSource;
      setTimeout(() => {
        try { src.stop(); src.disconnect(); } catch (_) {}
      }, 350);
      this.ambienceSource = null;
    }
  }

  playSplash() {
    if (!this.sfxEnabled) return;
    try {
      const ctx = this.getAudioCtx();
      if (!ctx) return;
      const now = ctx.currentTime;
      // 1. Su 'plop' damlası
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(420, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.12);
      oscGain.gain.setValueAtTime(0.20, now);
      oscGain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
      osc.connect(oscGain);
      oscGain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.13);

      // 2. Islak su şapırtı sıçraması
      const noiseBuffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.09), ctx.sampleRate);
      const out = noiseBuffer.getChannelData(0);
      for (let i = 0; i < out.length; i++) {
        out[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.022));
      }
      const nSrc = ctx.createBufferSource();
      nSrc.buffer = noiseBuffer;
      const nFilter = ctx.createBiquadFilter();
      nFilter.type = "bandpass";
      nFilter.frequency.setValueAtTime(1600, now);
      const nGain = ctx.createGain();
      nGain.gain.setValueAtTime(0.16, now);
      nGain.gain.linearRampToValueAtTime(0.01, now + 0.08);
      nSrc.connect(nFilter);
      nFilter.connect(nGain);
      nGain.connect(ctx.destination);
      nSrc.start(now);
      nSrc.stop(now + 0.09);
    } catch (_) {}
  }

  playSnowPuff() {
    if (!this.sfxEnabled) return;
    try {
      const ctx = this.getAudioCtx();
      if (!ctx) return;
      const now = ctx.currentTime;
      // Karda pofuduk adım / ezilme tonu
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(170, now);
      osc.frequency.exponentialRampToValueAtTime(75, now + 0.13);
      oscGain.gain.setValueAtTime(0.18, now);
      oscGain.gain.exponentialRampToValueAtTime(0.01, now + 0.13);
      osc.connect(oscGain);
      oscGain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.14);

      // Kar çıtırtısı / puf sesi
      const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.11), ctx.sampleRate);
      const out = buffer.getChannelData(0);
      for (let i = 0; i < out.length; i++) {
        out[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.028));
      }
      const src = ctx.createBufferSource();
      src.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(700, now);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.20, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.10);
      src.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      src.start(now);
      src.stop(now + 0.11);
    } catch (_) {}
  }

  playJump() {
    if (!this.sfxEnabled || !this.jumpSound) return;
    try {
      this.jumpSound.currentTime = 0;
      this.jumpSound.playbackRate = 1.0;
      this.jumpSound.play().catch(() => {});
    } catch (e) {}
  }

  playSlide() {
    if (!this.sfxEnabled || !this.jumpSound) return;
    try {
      this.jumpSound.currentTime = 0;
      this.jumpSound.playbackRate = 0.65;
      this.jumpSound.play().catch(() => {});
    } catch (e) {}
  }

  playCollect() {
    if (!this.sfxEnabled || !this.collectSound) return;
    try {
      this.collectSound.currentTime = 0;
      this.collectSound.play().catch(() => {});
    } catch (e) {}
  }

  playGameOver() {
    if (!this.sfxEnabled || !this.gameOverSound) return;
    try {
      this.gameOverSound.currentTime = 0;
      this.gameOverSound.play().catch(() => {});
    } catch (e) {}
  }

  playHit() {
    if (!this.sfxEnabled) return;
    try {
      // 1. Web Audio API ile çocuk dostu yumuşak darbe / tokmak sesi
      const ctx = this.getAudioCtx();
      if (ctx) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const now = ctx.currentTime;
        osc.type = "sine";
        osc.frequency.setValueAtTime(200, now);
        osc.frequency.exponentialRampToValueAtTime(45, now + 0.16);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.16);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.17);
        return;
      }
    } catch (e) {}

    // Fallback: Jump sesini pes tonla çal
    try {
      if (this.jumpSound) {
        this.jumpSound.currentTime = 0;
        this.jumpSound.playbackRate = 0.5;
        this.jumpSound.play().catch(() => {});
      }
    } catch (e) {}
  }

  playMusic() {
    if (!this.musicEnabled || !this.bgMusic) return;
    try {
      this.bgMusic.play().catch(() => {});
    } catch (e) {}
  }

  stopMusic() {
    if (this.bgMusic) {
      try { this.bgMusic.pause(); } catch (e) {}
    }
    this.stopWeatherAmbience();
  }
}

// Güvenli Ses Proxy'si: Herhangi bir tanımsız ses çağrısı asla oyunu durduramaz/kilitletemez
const rawSoundService = new SoundService();
const sounds = new Proxy(rawSoundService, {
  get(target, prop) {
    if (prop in target) {
      return typeof target[prop] === 'function' ? target[prop].bind(target) : target[prop];
    }
    return () => {};
  }
});

// ============================================================================
// 4. TOAST NOTIFICATION SERVICE
// ============================================================================

let lastToastMessage = "";
let lastToastTime = 0;

function showToast(msg, type = "info") {
  if (!msg) return;

  // 1. Mükerrer Spam Engeli (Aynı mesaj 1.8 saniye içinde tekrar gelirse yutulur)
  const now = Date.now();
  if (msg === lastToastMessage && (now - lastToastTime) < 1800) {
    return;
  }
  lastToastMessage = msg;
  lastToastTime = now;

  // 2. Korumalı Container: DOM'da yoksa otomatik oluştur
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  // 3. Maksimum Eşzamanlı Toast Sayısı (Ekranda en fazla 2 adet tut, fazlaysa eskiyi temizle)
  while (container.children.length >= 2) {
    const oldest = container.firstElementChild;
    if (oldest) oldest.remove();
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = msg;
  toast.style.pointerEvents = "auto";
  toast.style.cursor = "pointer";
  toast.title = "Kapatmak için dokun";

  // Kullanıcı dokunarak hemen kapatabilsin
  toast.onclick = () => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-15px) scale(0.95)";
    setTimeout(() => {
      if (toast.parentNode) toast.remove();
    }, 180);
  };

  container.appendChild(toast);

  // Otomatik pürüzsüz kaybolma
  setTimeout(() => {
    if (toast.parentNode) {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(-15px) scale(0.95)";
      setTimeout(() => {
        if (toast.parentNode) toast.remove();
      }, 320);
    }
  }, 2600);
}
window.showToast = showToast;

// ============================================================================
// 5. EKRAN & MODAL YÖNETİCİSİ
// ============================================================================

let currentHeroIndex = 0;
let activeLevelIndex = 0;

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const target = document.getElementById(screenId);
  if (target) target.classList.add("active");

  const runnerWrap = document.getElementById("runner-player-sprite-wrap");
  if (runnerWrap && screenId !== "screen-game") {
    runnerWrap.style.display = "none";
  }

  if (screenId !== "screen-game" && typeof gameRunning !== "undefined" && gameRunning) {
    gameRunning = false;
    if (typeof gameLoopId !== "undefined" && gameLoopId) {
      cancelAnimationFrame(gameLoopId);
      gameLoopId = null;
    }
  }

  updateMenuUI();

  if (screenId === "screen-menu") {
    sounds.playMusic();
  } else if (screenId === "screen-map") {
    renderMapScreen();
  } else if (screenId === "screen-heroes") {
    renderHeroCard();
  }
}
window.showScreen = showScreen;

function updateMenuUI() {
  const coinEl = document.getElementById("menu-coin-count");
  if (coinEl) coinEl.textContent = GameState.getCoins();

  const scoreEl = document.getElementById("menu-high-score");
  if (scoreEl) scoreEl.textContent = GameState.getTotalStagePoints();

  // Kaşif Profil Rozeti Güncellemesi (Büyük, Ortalanmış ve Dinamik Rütbeli)
  const profileNameEl = document.getElementById("menu-profile-name");
  const profileAvatarEl = document.getElementById("menu-profile-avatar");
  const profileSubEl = document.querySelector("#menu-profile-pill .profile-pill-sub");
  const profileHeroId = GameState.getProfileHero();
  const heroIcons = { 1: "🦊", 2: "🐵", 3: "🐯", 4: "🐿️", 5: "🦉" };

  if (profileAvatarEl) profileAvatarEl.textContent = heroIcons[profileHeroId] || "🦊";

  const expName = GameState.getExplorerName();
  if (profileNameEl) {
    profileNameEl.textContent = expName ? expName : "Kaşif Kaydı";
  }

  // Dinamik Rütbe Başlığı
  const rank = FirebaseSimService.getPlayerRank();
  if (profileSubEl) {
    profileSubEl.innerHTML = `${rank.icon} ${rank.title.toUpperCase()}`;
    if (rank.tier === "profesyonel") {
      profileSubEl.style.color = "#ffd700";
      profileSubEl.style.textShadow = "0 0 6px rgba(255, 215, 0, 0.7)";
    } else {
      profileSubEl.style.color = "var(--accent-gold)";
      profileSubEl.style.textShadow = "none";
    }
  }

  const heroImg = document.getElementById("menu-hero-img");
  if (heroImg) {
    const hero = KAHRAMANLAR.find(h => h.id === profileHeroId) || KAHRAMANLAR[0];
    heroImg.src = hero.image;
  }
}

// ============================================================================
// 6. KAHRAMAN SEÇİMİ MANTIĞI
// ============================================================================

let heroPreviewAnimId = null;
const previewPlayer = {
  x: 42,
  y: 50,
  w: 76,
  h: 76,
  origW: 76,
  origH: 76,
  vy: 0,
  isGrounded: true,
  wasGrounded: true,
  isSliding: false,
  landingSquash: 0,
  animTick: 0
};

function startHeroPreviewAnimation() {
  if (heroPreviewAnimId) cancelAnimationFrame(heroPreviewAnimId);

  const canvas = document.getElementById("hero-preview-canvas");
  if (!canvas) return;
  const pctx = canvas.getContext("2d");

  function loop() {
    const screenHeroes = document.getElementById("screen-heroes");
    if (!screenHeroes || !screenHeroes.classList.contains("active")) {
      heroPreviewAnimId = null;
      return;
    }

    pctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Dairesel Orman Ambiyansı ve Zemin Patikası
    pctx.save();
    pctx.beginPath();
    pctx.arc(80, 80, 78, 0, Math.PI * 2);
    pctx.clip();

    // Orman içi zengin derinlik gradyanı
    const grad = pctx.createRadialGradient(80, 68, 8, 80, 80, 80);
    grad.addColorStop(0, "#2d6a4f");
    grad.addColorStop(0.65, "#143c27");
    grad.addColorStop(1, "#071a10");
    pctx.fillStyle = grad;
    pctx.fillRect(0, 0, 160, 160);

    // Yumuşak orman patikası zemini
    pctx.fillStyle = "rgba(42, 24, 14, 0.72)";
    pctx.beginPath();
    pctx.ellipse(80, 138, 56, 14, 0, 0, Math.PI * 2);
    pctx.fill();

    // Doğal ot ve meşe yaprağı pırıltıları
    pctx.fillStyle = "#52b788";
    pctx.beginPath();
    pctx.arc(36, 135, 3.2, 0, Math.PI * 2);
    pctx.arc(124, 133, 3.8, 0, Math.PI * 2);
    pctx.arc(106, 140, 2.5, 0, Math.PI * 2);
    pctx.fill();

    // 2. Canlı Koşan Kahraman Çizimi (Kaplan, Tilki, Maymun, Sincap, Baykuş - Hepsi aynı standartta hareketli!)
    const hero = KAHRAMANLAR[currentHeroIndex] || KAHRAMANLAR[0];
    const previewGroundY = 126;
    previewPlayer.y = previewGroundY - previewPlayer.h;
    previewPlayer.isGrounded = true;
    previewPlayer.isSliding = false;

    drawAnimatedHero(pctx, previewPlayer, hero.id, previewGroundY);

    pctx.restore();

    heroPreviewAnimId = requestAnimationFrame(loop);
  }

  heroPreviewAnimId = requestAnimationFrame(loop);
}

function initHeroesScreen() {
  currentHeroIndex = KAHRAMANLAR.findIndex(h => h.id === GameState.getSelectedHero());
  if (currentHeroIndex === -1) currentHeroIndex = 0;
  renderHeroCard();
  startHeroPreviewAnimation();

  document.getElementById("btn-hero-prev").onclick = () => {
    currentHeroIndex = (currentHeroIndex - 1 + KAHRAMANLAR.length) % KAHRAMANLAR.length;
    renderHeroCard();
  };

  document.getElementById("btn-hero-next").onclick = () => {
    currentHeroIndex = (currentHeroIndex + 1) % KAHRAMANLAR.length;
    renderHeroCard();
  };

  document.getElementById("btn-hero-select").onclick = () => {
    const hero = KAHRAMANLAR[currentHeroIndex];
    if (GameState.isHeroUnlocked(hero.id)) {
      GameState.setSelectedHero(hero.id);
      showToast(`🌲 ${hero.name} oyun yoldaşın olarak seçildi!`, "success");
      renderHeroCard();
      showScreen("screen-map");
      renderMapScreen();
    } else {
      if (GameState.getCoins() >= hero.price) {
        GameState.setCoins(GameState.getCoins() - hero.price);
        GameState.unlockHero(hero.id);
        GameState.setSelectedHero(hero.id);
        showToast(`🎉 Tebrikler! ${hero.name} kilidi açıldı ve seçildi!`, "success");
        renderHeroCard();
      } else {
        const currentPts = GameState.getTotalExplorerPoints();
        showToast(`🔒 ${hero.name} kilidi için ${hero.unlockStage}. Bölümü geçmeli ve en az ${hero.reqPoints.toLocaleString()} Puan toplamalısın! (Mevcut: ${currentPts})`, "warning");
      }
    }
  };

  // Ahşap Gardırop (Özel Kostüm) Seçimi & Satın Alma
  const wardrobeButtons = document.querySelectorAll(".wardrobe-item-btn");
  wardrobeButtons.forEach(btn => {
    btn.onclick = () => {
      const costumeId = btn.getAttribute("data-costume") || "none";
      const costumeCfg = KOSTUMLER.find(c => c.id === costumeId) || KOSTUMLER[0];

      if (!GameState.isCostumeUnlocked(costumeId)) {
        // Kilitli kostüm: Altınla erken açma veya bölüm geçme
        if (GameState.getCoins() >= costumeCfg.price) {
          if (confirm(`🪵 ${costumeCfg.name} kilitli!\nBu kostüm ${costumeCfg.unlockStage}. Bölümü tamamlayınca ÜCRETSİZ açılır.\n\nŞimdi ${costumeCfg.price} 🪙 Altın harcayarak hemen açmak ister misin?`)) {
            GameState.setCoins(GameState.getCoins() - costumeCfg.price);
            GameState.unlockCostume(costumeId);
            GameState.setSelectedCostume(costumeId);
            showToast(`🎉 Tebrikler! ${costumeCfg.name} açıldı ve kuşandı!`, "success");
            renderHeroCard();
          }
        } else {
          showToast(`🔒 ${costumeCfg.name} kilitli! ${costumeCfg.unlockStage}. Bölümü tamamla veya ${costumeCfg.price} 🪙 topla.`, "warning");
        }
        return;
      }

      GameState.setSelectedCostume(costumeId);
      showToast(`✨ ${costumeCfg.name} kuşandı!`, "success");
      renderHeroCard();
    };
  });
}
window.initHeroesScreen = initHeroesScreen;

function renderHeroCard() {
  const hero = KAHRAMANLAR[currentHeroIndex];
  document.getElementById("heroes-coin-count").textContent = GameState.getCoins();
  document.getElementById("hero-name").textContent = hero.name;
  document.getElementById("hero-desc").textContent = hero.desc;

  const heroPreviewImg = document.getElementById("hero-preview-img");
  if (heroPreviewImg) {
    heroPreviewImg.src = hero.image;
    heroPreviewImg.alt = hero.name;
  }

  document.getElementById("hero-stat-speed").textContent = "★".repeat(hero.speed) + "☆".repeat(5 - hero.speed);
  document.getElementById("hero-stat-jump").textContent = "★".repeat(hero.jump) + "☆".repeat(5 - hero.jump);
  document.getElementById("hero-stat-durability").textContent = "★".repeat(hero.durability) + "☆".repeat(5 - hero.durability);

  const selectBtn = document.getElementById("btn-hero-select");
  const lockBadge = document.getElementById("hero-lock-badge");
  const lockReqText = document.getElementById("hero-lock-req");
  const isUnlocked = GameState.isHeroUnlocked(hero.id);
  const isSelected = GameState.getSelectedHero() === hero.id;

  if (isUnlocked) {
    if (lockBadge) lockBadge.classList.add("hidden");
    selectBtn.textContent = isSelected ? "SEÇİLDİ" : "SEÇ";
    selectBtn.style.opacity = "1";
  } else {
    if (lockBadge) {
      lockBadge.classList.remove("hidden");
      const currentPts = GameState.getTotalExplorerPoints();
      if (lockReqText) {
        lockReqText.textContent = `${hero.unlockStage}. Bölüm + ${hero.reqPoints.toLocaleString()} Puan (${currentPts}/${hero.reqPoints})`;
      }
    }
    selectBtn.textContent = `${hero.price} 🪙 VEYA ŞARTI SAĞLA`;
  }

  // Gardırop Kostüm Durumu Güncelleme
  const activeCostume = GameState.getSelectedCostume();
  const wardrobeBadge = document.getElementById("active-costume-badge");
  const activeCfg = KOSTUMLER.find(c => c.id === activeCostume) || KOSTUMLER[0];

  if (wardrobeBadge) {
    wardrobeBadge.textContent = `${activeCfg.icon} ${activeCfg.name}`;
  }

  const wardrobeButtons = document.querySelectorAll(".wardrobe-item-btn");
  wardrobeButtons.forEach(btn => {
    const cId = btn.getAttribute("data-costume") || "none";
    const isCostumeUnlocked = GameState.isCostumeUnlocked(cId);

    if (!isCostumeUnlocked) {
      btn.classList.add("locked");
    } else {
      btn.classList.remove("locked");
    }

    if (cId === activeCostume) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Kahraman avatar kapsayıcısına türe özel sınıf ekle (Tilki, Maymun, Kaplan)
  const avatarWrap = document.getElementById("hero-avatar-wrap") || document.querySelector(".hero-avatar-wrap");
  if (avatarWrap) {
    avatarWrap.classList.remove("hero-fox", "hero-monkey", "hero-tiger");
    if (hero.id === 2) avatarWrap.classList.add("hero-monkey");
    else if (hero.id === 3) avatarWrap.classList.add("hero-tiger");
    else avatarWrap.classList.add("hero-fox");
  }

  // Animasyonu garantile
  if (!heroPreviewAnimId) {
    startHeroPreviewAnimation();
  }
}

// 🔓 TÜM BÖLÜMLERİN KİLİDİNİ GEÇİCİ AÇMA / KİLİTLEME TEST MOTORU
window.toggleUnlockAllStages = function() {
  let allUnlocked = true;
  for (let i = 0; i < 10; i++) {
    if (GameState.getLevelState(i) === 0) {
      allUnlocked = false;
      break;
    }
  }

  if (!allUnlocked) {
    for (let i = 0; i < 10; i++) {
      if (GameState.getLevelState(i) === 0) {
        GameState.setLevelState(i, 2);
      }
    }
    showToast("🔓 Tüm 10 Bölümün Kilidi Açıldı! Haritadan dilediğin etaba dokunarak test edebilirsin!", "success");
  } else {
    GameState.setLevelState(0, 2);
    for (let i = 1; i < 10; i++) {
      GameState.setLevelState(i, 0);
    }
    showToast("🔒 Bölümler Başlangıç Durumuna Kilitlendi (Yalnızca 1. Etap Açık)!", "info");
  }

  if (typeof renderMapScreen === "function") {
    renderMapScreen();
  }
};

// ============================================================================
// 7. BÖLÜM SEÇİM HARİTASI (ORMAN ETAPLARI - HARİTA & LİSTE GÖRÜNÜMÜ)
// ============================================================================

const PIN_COORDINATES = [
  { id: 1, x: 16, y: 76 },
  { id: 2, x: 27, y: 70 },
  { id: 3, x: 38, y: 62 },
  { id: 4, x: 52, y: 58 },
  { id: 5, x: 68, y: 62 },
  { id: 6, x: 25, y: 46 },
  { id: 7, x: 76, y: 42 },
  { id: 8, x: 48, y: 38 },
  { id: 9, x: 62, y: 25 },
  { id: 10, x: 36, y: 18 }
];

let currentMapViewMode = "map"; // "map" veya "list"

function setupMapViewToggles() {
  const btnMap = document.getElementById("btn-toggle-map");
  const btnList = document.getElementById("btn-toggle-list");
  const mapInteractiveView = document.getElementById("map-interactive-view");
  const mapListView = document.getElementById("map-scroll");

  if (!btnMap || !btnList) return;

  btnMap.onclick = () => {
    currentMapViewMode = "map";
    btnMap.classList.add("active");
    btnList.classList.remove("active");
    if (mapInteractiveView) mapInteractiveView.classList.remove("hidden");
    if (mapListView) mapListView.classList.add("hidden");
    renderMapInteractive();
  };

  btnList.onclick = () => {
    currentMapViewMode = "list";
    btnList.classList.add("active");
    btnMap.classList.remove("active");
    if (mapInteractiveView) mapInteractiveView.classList.add("hidden");
    if (mapListView) mapListView.classList.remove("hidden");
    renderMapList();
  };

  const btnScan = document.getElementById("btn-toggle-scan");
  if (btnScan) {
    btnScan.onclick = () => {
      openQRScannerModal(null);
    };
  }
}

function adjustMapDimensions() {
  const viewport = document.getElementById("map-pan-viewport");
  const canvasWrap = document.querySelector(".map-canvas-wrap");
  const img = document.getElementById("map-aerial-img");
  if (!viewport || !canvasWrap) return;

  const vpH = viewport.clientHeight;
  const vpW = viewport.clientWidth;
  if (vpH <= 0) return;

  // NewMap.png görselinin doğal en-boy oranı (varsayılan 1.6)
  let ratio = 1.6;
  if (img && img.naturalWidth && img.naturalHeight && img.naturalHeight > 0) {
    ratio = img.naturalWidth / img.naturalHeight;
  }

  // Yükseklik daima viewport'un tamamını kaplasın (alttaki karanlık boşluk tamamen kapanır)
  const targetH = vpH;
  // Genişlik orantılı olarak büyüsün, haritanın rahatça kaydırılabilmesi için en az 1.55 kat genişlik
  const minW = Math.max(Math.round(vpW * 1.55), 880);
  const targetW = Math.max(minW, Math.round(targetH * ratio));

  canvasWrap.style.height = `${targetH}px`;
  canvasWrap.style.minHeight = `${targetH}px`;
  canvasWrap.style.maxHeight = `${targetH}px`;
  canvasWrap.style.width = `${targetW}px`;
  canvasWrap.style.minWidth = `${targetW}px`;
}
window.adjustMapDimensions = adjustMapDimensions;

let mapPanningInitialized = false;
function initMapPanning() {
  if (mapPanningInitialized) return;
  const viewport = document.getElementById("map-pan-viewport");
  if (!viewport) return;
  mapPanningInitialized = true;

  const mapImg = document.getElementById("map-aerial-img");
  if (mapImg) {
    if (mapImg.complete) {
      adjustMapDimensions();
    } else {
      mapImg.onload = adjustMapDimensions;
    }
  }

  let isDown = false;
  let startX, startY, scrollLeft, scrollTop;

  viewport.addEventListener("mousedown", (e) => {
    isDown = true;
    viewport.style.cursor = "grabbing";
    startX = e.pageX - viewport.offsetLeft;
    startY = e.pageY - viewport.offsetTop;
    scrollLeft = viewport.scrollLeft;
    scrollTop = viewport.scrollTop;
  });

  viewport.addEventListener("mouseleave", () => {
    isDown = false;
    viewport.style.cursor = "grab";
  });

  viewport.addEventListener("mouseup", () => {
    isDown = false;
    viewport.style.cursor = "grab";
  });

  viewport.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - viewport.offsetLeft;
    const y = e.pageY - viewport.offsetTop;
    const walkX = (x - startX) * 1.3;
    const walkY = (y - startY) * 1.3;
    viewport.scrollLeft = scrollLeft - walkX;
    viewport.scrollTop = scrollTop - walkY;
  });

  // Mobil Dokunmatik / Touch Panning
  let touchStartX = 0, touchStartY = 0, touchScrollLeft = 0, touchScrollTop = 0;
  viewport.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) {
      touchStartX = e.touches[0].pageX;
      touchStartY = e.touches[0].pageY;
      touchScrollLeft = viewport.scrollLeft;
      touchScrollTop = viewport.scrollTop;
    }
  }, { passive: true });

  viewport.addEventListener("touchmove", (e) => {
    if (e.touches.length === 1) {
      const dx = e.touches[0].pageX - touchStartX;
      const dy = e.touches[0].pageY - touchStartY;
      viewport.scrollLeft = touchScrollLeft - dx;
      viewport.scrollTop = touchScrollTop - dy;
    }
  }, { passive: true });

  window.addEventListener("resize", () => {
    const screenMap = document.getElementById("screen-map");
    if (screenMap && screenMap.classList.contains("active")) {
      adjustMapDimensions();
      if (focusedMapStageIndex !== null) {
        focusOnMapPin(focusedMapStageIndex);
      }
    }
  });
}

let focusedMapStageIndex = null;

function focusOnMapPin(stageIdx) {
  focusedMapStageIndex = stageIdx;
  const viewport = document.getElementById("map-pan-viewport");
  const canvasWrap = document.querySelector(".map-canvas-wrap");
  if (!viewport) return;

  const coords = PIN_COORDINATES[stageIdx] || { x: 50, y: 50 };
  const totalW = canvasWrap ? canvasWrap.offsetWidth : 860;
  const totalH = canvasWrap ? canvasWrap.offsetHeight : 540;

  const targetPxX = (coords.x / 100) * totalW;
  const targetPxY = (coords.y / 100) * totalH;

  const vpW = viewport.clientWidth || 360;
  const vpH = viewport.clientHeight || 480;

  const scrollX = Math.max(0, targetPxX - vpW / 2);
  const scrollY = Math.max(0, targetPxY - vpH / 2);

  viewport.scrollTo({
    left: scrollX,
    top: scrollY,
    behavior: "smooth"
  });

  const pins = document.querySelectorAll(".map-pin-btn");
  pins.forEach((btn, i) => {
    btn.classList.remove("pin-next-focus");
    const existingBadge = btn.querySelector(".pin-focus-callout");
    if (existingBadge) existingBadge.remove();

    if (i === stageIdx) {
      btn.classList.add("pin-next-focus");
      const callout = document.createElement("div");
      callout.className = "pin-focus-callout";
      callout.innerHTML = `<span>🎯 SIRADAKİ ETAP!</span><span class="callout-arrow">▼</span>`;
      btn.appendChild(callout);
    }
  });
}
window.focusOnMapPin = focusOnMapPin;

function proceedToNextStageOnMap(nextStageIndex) {
  clearQuizTimer();
  clearGameOverCountdown();

  const modals = ["modal-nature-quiz", "modal-victory", "modal-grand-victory", "modal-level-info", "modal-pause", "modal-gameover"];
  modals.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove("active");
  });

  if (nextStageIndex >= 10) {
    const grandModal = document.getElementById("modal-grand-victory");
    if (grandModal) {
      grandModal.classList.add("active");
      if (window.launchVictoryFireworks) window.launchVictoryFireworks();
    }
    return;
  }

  const targetIdx = Math.max(0, Math.min(9, nextStageIndex !== undefined ? nextStageIndex : 0));

  // Sonraki etabı oynanabilir (state=2) yap
  if (GameState.getLevelState(targetIdx) === 0) {
    GameState.setLevelState(targetIdx, 2);
  }

  showScreen("screen-map");
  currentMapViewMode = "map";
  renderMapScreen();

  // Haritayı dinamik olarak sonraki durağa fokusla ve parlat
  setTimeout(() => {
    focusOnMapPin(targetIdx);
    const etap = RESMI_ETAPLAR[targetIdx];
    showToast(`🗺️ ${targetIdx + 1}. Etap: ${etap.business.split('&')[0].trim()} açıldı! İğneye dokunarak yarışmaya başlayabilirsin!`, "success");
  }, 200);
}
window.proceedToNextStageOnMap = proceedToNextStageOnMap;

function renderMapInteractive() {
  const overlay = document.getElementById("map-pins-overlay");
  if (!overlay) return;
  overlay.innerHTML = "";

  RESMI_ETAPLAR.forEach((etap, idx) => {
    const coords = PIN_COORDINATES[idx] || { x: 50, y: 50 };
    const state = GameState.getLevelState(idx); // 0=Locked, 2=Unlocked, 3=Completed

    let statusClass = "locked";
    let icon = "🔒";
    if (state === 3) {
      statusClass = "completed";
      icon = "✓";
    } else if (state === 2) {
      statusClass = "active";
      icon = "▶";
    } else if (state === 0 && idx >= 2) {
      statusClass = "qr-needed";
      icon = "📷";
    }

    const isNextFocused = (focusedMapStageIndex === idx);
    const pinBtn = document.createElement("button");
    pinBtn.type = "button";
    pinBtn.className = `map-pin-btn ${state === 2 ? 'is-active-pin' : ''} ${isNextFocused ? 'pin-next-focus' : ''}`;
    pinBtn.style.left = `${coords.x}%`;
    pinBtn.style.top = `${coords.y}%`;
    pinBtn.title = etap.title;

    const calloutHtml = isNextFocused ? `<div class="pin-focus-callout"><span>🎯 SIRADAKİ ETAP!</span><span class="callout-arrow">▼</span></div>` : ``;

    pinBtn.innerHTML = `
      ${calloutHtml}
      <div class="map-pin-graphic">
        <img src="Assets/Sprites/MapDefaultPin.png" alt="Etap Pin" class="map-pin-img">
        <span class="map-pin-number">${etap.id}</span>
        <span class="map-pin-status-icon ${statusClass}">${icon}</span>
      </div>
      <div class="map-pin-tag">${etap.id}. ${etap.business.split('&')[0].trim()}</div>
    `;

    pinBtn.onclick = (e) => {
      e.stopPropagation();
      openLevelModal(idx);
    };

    overlay.appendChild(pinBtn);
  });
}

function renderMapList() {
  const container = document.getElementById("map-scroll");
  if (!container) return;
  container.innerHTML = "";

  RESMI_ETAPLAR.forEach((etap, idx) => {
    const card = document.createElement("div");
    const state = GameState.getLevelState(idx); // 0=Locked, 2=Unlocked, 3=Completed

    const isBeltur = (etap.id === 4);
    let statusBadge = `<div class="stage-status-badge locked">🔒</div>`;
    if (state === 3) {
      statusBadge = `<div class="stage-status-badge completed">✅</div>`;
    } else if (state === 2) {
      statusBadge = `<div class="stage-status-badge active">▶️</div>`;
    } else if (state === 0 && isBeltur) {
      statusBadge = `<div class="stage-status-badge locked qr-needed" title="BELTUR Masasındaki QR Kodu ile Ücretsiz Aç">📷 QR</div>`;
    }

    let rewardTag = "";
    if (etap.id === 5) rewardTag = ` <div class="stage-reward-pill beltur">☕ BELTUR Kuponu</div>`;
    if (etap.id === 10) rewardTag = ` <div class="stage-reward-pill zipline">🏆 Muhafız Beratı</div>`;

    if (state === 0 && isBeltur) {
      rewardTag += ` <div class="stage-reward-pill qr-tag">📍 BELTUR [QR ile Ücretsiz Aç]</div>`;
    }

    card.className = `stage-card ${state === 2 ? 'is-active-stage' : (state === 3 ? 'is-completed-stage' : 'is-locked-stage')}`;
    card.innerHTML = `
      <div class="stage-num">${etap.id}</div>
      <div class="stage-info">
        <div class="stage-title">${etap.title}</div>
        <div class="stage-facility">${etap.facilities.split('|')[0]}</div>
        ${rewardTag}
      </div>
      <div class="stage-status">${statusBadge}</div>
    `;

    card.onclick = () => openLevelModal(idx);
    container.appendChild(card);
  });
}

function renderMapScreen() {
  setupMapViewToggles();
  initMapPanning();

  renderMapInteractive();
  renderMapList();

  const mapInteractiveView = document.getElementById("map-interactive-view");
  const mapListView = document.getElementById("map-scroll");
  const btnMap = document.getElementById("btn-toggle-map");
  const btnList = document.getElementById("btn-toggle-list");

  if (currentMapViewMode === "map") {
    if (mapInteractiveView) mapInteractiveView.classList.remove("hidden");
    if (mapListView) mapListView.classList.add("hidden");
    if (btnMap) btnMap.classList.add("active");
    if (btnList) btnList.classList.remove("active");

    // Cihaz boyutuna göre haritayı uyarla ve güncel etaba otomatik odaklanarak aç
    setTimeout(() => {
      adjustMapDimensions();
      let activeIdx = 0;
      for (let i = 0; i < 10; i++) {
        if (GameState.getLevelState(i) === 2) {
          activeIdx = i;
          break;
        }
      }
      if (activeIdx === 0 && GameState.getLevelState(0) === 3) {
        for (let i = 9; i >= 0; i--) {
          if (GameState.getLevelState(i) === 3) {
            activeIdx = Math.min(9, i + 1);
            break;
          }
        }
      }
      focusOnMapPin(activeIdx);
    }, 60);
  } else {
    if (mapInteractiveView) mapInteractiveView.classList.add("hidden");
    if (mapListView) mapListView.classList.remove("hidden");
    if (btnList) btnList.classList.add("active");
    if (btnMap) btnMap.classList.remove("active");
  }
}
window.renderMapScreen = renderMapScreen;

function openLevelModal(idx) {
  activeLevelIndex = idx;
  const etap = RESMI_ETAPLAR[idx];
  const state = GameState.getLevelState(idx);
  const isBeltur = (etap.id === 4);

  document.getElementById("modal-level-title").textContent = etap.title;
  document.getElementById("modal-level-facilities").textContent = etap.facilities;

  const descEl = document.getElementById("modal-level-desc");
  const startBtn = document.getElementById("btn-modal-start-level");
  const qrBtn = document.getElementById("btn-modal-qr-unlock");

  if (state === 0) {
    const isPrevCompleted = idx > 0 && GameState.getLevelState(idx - 1) === 3;
    if (isPrevCompleted) {
      // Önceki etap tamamlandıysa bu etabı otomatik aç
      GameState.setLevelState(idx, 2);
      descEl.textContent = etap.desc;
      startBtn.disabled = false;
      startBtn.style.opacity = "1";
      startBtn.textContent = "🎮 YARIŞMAYA BAŞLA";
      if (qrBtn) qrBtn.style.display = "none";
      startBtn.onclick = () => {
        document.getElementById("modal-level-info").classList.remove("active");
        startRunnerGame(activeLevelIndex + 1);
      };
    } else {
      if (isBeltur) {
        descEl.innerHTML = `${etap.desc}<br><br>🌟 <strong>Açılış Koşulu:</strong> Önceki 3. etabı başarıyla tamamlayarak VEYA <strong>BELTUR Restoran &amp; Kafe</strong> masasındaki QR kodu okutarak <strong>ÜCRETSİZ</strong> açabilirsiniz.`;
        startBtn.textContent = "🔒 KİLİTLİ (Önceki Etabı Tamamla)";
        startBtn.disabled = true;
        startBtn.style.opacity = "0.6";

        if (qrBtn) {
          qrBtn.style.display = "flex";
          qrBtn.textContent = `📷 BELTUR QR Kodu ile Hemen Aç`;
          qrBtn.onclick = () => {
            openQRScannerModal(idx);
          };
        }
      } else {
        descEl.innerHTML = `${etap.desc}<br><br>🌟 <strong>Açılış Koşulu:</strong> Bu etabı açmak için önceki ${idx}. etabı başarıyla tamamlamalısınız.`;
        startBtn.textContent = "🔒 KİLİTLİ (Önceki Etabı Tamamla)";
        startBtn.disabled = true;
        startBtn.style.opacity = "0.6";
        if (qrBtn) qrBtn.style.display = "none";
      }
    }
  } else {
    descEl.textContent = etap.desc;
    startBtn.disabled = false;
    startBtn.style.opacity = "1";
    startBtn.textContent = state === 3 ? "🎮 TEKRAR OYNA" : "🎮 YARIŞMAYA BAŞLA";
    if (qrBtn) qrBtn.style.display = "none";
    startBtn.onclick = () => {
      document.getElementById("modal-level-info").classList.remove("active");
      startRunnerGame(activeLevelIndex + 1);
    };
  }

  updateBoosterShopUI();
  document.getElementById("modal-level-info").classList.add("active");
}

// ==========================================================
// 7.2 BÖLÜM ÖNCESİ ALTINLA EKİPMAN KUŞANMA & BOOSTER SİSTEMİ
// (4. Bölümden Sonra Kademeli Altın Artışı & Oyun İçi Butonla/Parkurda Alım)
// ==========================================================
let pendingLevelBoosters = { hat: false, vest: false, pants: false };
let inGameReadyBoosters = { hat: false, vest: false, pants: false };

function getBoosterPrice(type, stageNumber) {
  const base = { hat: 20, vest: 30, pants: 25 };
  const lvl = stageNumber || (activeLevelIndex !== undefined ? activeLevelIndex + 1 : 1);
  // 1, 2, 3. Bölümler: Taban başlangıç fiyatı
  if (lvl <= 3) return base[type] || 20;
  // 4. Bölümden sonra oyunun devamlılığı ve zorluk dengesi için kademeli artış
  const diff = lvl - 3;
  const multiplier = type === "vest" ? 14 : (type === "pants" ? 12 : 10);
  return base[type] + (diff * multiplier);
}

function updateBoosterShopUI() {
  const lvl = activeLevelIndex !== undefined ? activeLevelIndex + 1 : 1;
  ['hat', 'vest', 'pants'].forEach(type => {
    const btn = document.getElementById(`btn-buy-${type}`);
    const tag = document.getElementById(`tag-cost-${type}`);
    if (!btn || !tag) return;
    const price = getBoosterPrice(type, lvl);
    if (pendingLevelBoosters[type]) {
      btn.classList.add("equipped");
      tag.textContent = "✓ KUŞANILDI";
    } else {
      btn.classList.remove("equipped");
      tag.textContent = `${price} 🪙`;
    }
  });
}

function toggleLevelBooster(type) {
  const lvl = activeLevelIndex !== undefined ? activeLevelIndex + 1 : 1;
  const price = getBoosterPrice(type, lvl);

  if (pendingLevelBoosters[type]) {
    // Kuşanmayı iptal et, altını iade et
    pendingLevelBoosters[type] = false;
    GameState.setCoins(GameState.getCoins() + price);
    showToast(`🎒 Ekipman çıkarıldı, ${price} 🪙 iade edildi.`, "info");
  } else {
    // Satın al ve bu bölüm için kuşan
    const currentCoins = GameState.getCoins();
    if (currentCoins < price) {
      showToast(`🪙 Yetersiz Altın! ${lvl}. Bölüm için bu özellik ${price} 🪙 gerekir. (Mevcut: ${currentCoins} 🪙)`, "warning");
      return;
    }
    GameState.setCoins(currentCoins - price);
    pendingLevelBoosters[type] = true;
    const names = { hat: "Kaşif Şapkası", vest: "Muhafız Yeleği", pants: "İzci Pantolonu" };
    showToast(`✨ ${names[type]} (${price} 🪙) bu etap için kuşandı! Parkurda havada çıkacak veya sağdaki ikona dokunarak anında aktif edebileceksin!`, "success");
  }
  updateBoosterShopUI();
}
window.toggleLevelBooster = toggleLevelBooster;

// Oyun İçi Sağ Kenar Butonuna Dokunarak Bonusu Anında Aktif Etme
function activateInGameBooster(type) {
  if (!inGameReadyBoosters[type]) return;
  inGameReadyBoosters[type] = false;

  const btn = document.getElementById(`in-game-booster-${type}`);
  if (btn) btn.classList.add("hidden");

  // Parkurdaki henüz toplanmamış havada süzülen kopyasını veya sıradaki üretimi de tüket
  if (Array.isArray(boosterSpawnQueue)) {
    boosterSpawnQueue = boosterSpawnQueue.filter(b => b.type !== type);
  }
  if (Array.isArray(coins)) {
    coins.forEach(c => {
      if (c.type === "clothing_crate" && c.clothingId === type) {
        c.collected = true;
      }
    });
  }

  // Kıyafeti kalıcı olarak oyuncunun gardırobuna da ekle
  try {
    GameState.unlockCostume(type);
  } catch (e) {}

  if (type === "hat") {
    activeClothingBuffs.hat = 20;
    showToast("🧢 Kaşif Şapkası Kuşanıldı! Yüksek engellerden korur!", "success");
  } else if (type === "vest") {
    activeClothingBuffs.vest = 20;
    showToast("🦺 Muhafız Yeleği Kuşanıldı! Çelik zırh darbe koruması başladı!", "success");
  } else if (type === "pants") {
    activeClothingBuffs.pants = 20;
    showToast("👖 İzci Pantolonu Kuşanıldı! Çift zıplama ve mıknatıs başladı!", "success");
  }

  sounds.playCollect();

  // Havalı parıltı parçacıkları patlat
  for (let k = 0; k < 18; k++) {
    particles.push({
      x: player.x + player.w / 2,
      y: player.y + player.h / 2,
      vx: (Math.random() - 0.5) * 8,
      vy: (Math.random() - 0.5) * 8,
      size: 4.5,
      alpha: 1.0,
      color: type === "hat" ? "#38bdf8" : (type === "vest" ? "#f97316" : "#4ade80")
    });
  }

  updateClothingHUD();
}
window.activateInGameBooster = activateInGameBooster;

// Koşu İçi Altın Topladıkça Kıyafet Ödüllerini Açma Sistemi
let coinsCollectedInRun = 0;
let unlockedInRun = { hat: false, vest: false, pants: false };

function unlockInGameBoosterReward(type) {
  inGameReadyBoosters[type] = true;
  const btn = document.getElementById(`in-game-booster-${type}`);
  if (btn) {
    btn.classList.remove("hidden");
  }
  const names = {
    hat: "🧢 Kaşif Şapkası (Koruma)",
    vest: "🦺 Muhafız Yeleği (Çelik Zırh)",
    pants: "👖 İzci Pantolonu (Mıknatıs)"
  };
  showToast(`🎉 Ödül Açıldı: ${names[type] || 'Kıyafet'}! Sağdaki ikona DOKUN ve aktif et!`, "success");
  sounds.playCollect();
}
window.unlockInGameBoosterReward = unlockInGameBoosterReward;

function checkInRunClothingRewards(runCoins) {
  // Kullanıcı Kuralı: Kahramanlar puan ve altınları toplayıp mağaza veya bölüm öncesinden
  // satın almadan oyun içerisinde otomatik ücretsiz kıyafet ve özellik verilmez!
  // Tüm kıyafet ve aksesuarlar toplanan altınlarla hak edilmelidir.
}
window.checkInRunClothingRewards = checkInRunClothingRewards;

// ============================================================================
// 7.5 SAHA CANLI QR KOD TARAYICI MOTORU (KAMERA, HTML5-QRCODE & DOĞRULAMA)
// ============================================================================

let qrScannerInstance = null;
let currentScanningStageIndex = null;
let currentCameraFacingMode = "environment";

function openQRScannerModal(stageIdx = null) {
  currentScanningStageIndex = stageIdx;
  const modal = document.getElementById("modal-qr-scanner");
  const targetTag = document.getElementById("qr-target-tag");
  const title = document.getElementById("qr-scanner-title");
  const desc = document.getElementById("qr-scanner-desc");
  const status = document.getElementById("qr-status-text");

  if (stageIdx !== null && RESMI_ETAPLAR[stageIdx]) {
    const etap = RESMI_ETAPLAR[stageIdx];
    if (targetTag) targetTag.textContent = `${etap.id}. Etap: ${etap.business}`;
    if (title) title.textContent = `${etap.business} QR Kodu`;
    if (desc) desc.textContent = `${etap.business} noktasındaki ahşap totemde yer alan QR kodu vizörün içine tutun.`;
  } else {
    if (targetTag) targetTag.textContent = "Kemerburgaz Kent Ormanı";
    if (title) title.textContent = "Saha QR Kodunu Tarayın";
    if (desc) desc.textContent = "Orman içindeki herhangi bir işletme veya etap QR kodunu vizörün içine tutun.";
  }

  if (modal) modal.classList.add("active");
  startQRCamera();
}

function closeQRScannerModal() {
  stopQRCamera();
  const modal = document.getElementById("modal-qr-scanner");
  if (modal) modal.classList.remove("active");
}

function startQRCamera() {
  const status = document.getElementById("qr-status-text");
  if (status) status.textContent = "📷 Kamera başlatılıyor...";

  if (typeof Html5Qrcode === "undefined") {
    if (status) status.textContent = "⚠️ Kamera modülü henüz yüklenemedi. 'QR Doğrula (Test)' ile etabı açabilirsiniz.";
    return;
  }

  stopQRCamera();

  try {
    qrScannerInstance = new Html5Qrcode("qr-reader");
    const config = {
      fps: 15,
      qrbox: { width: 190, height: 190 },
      aspectRatio: 1.0
    };

    qrScannerInstance.start(
      { facingMode: currentCameraFacingMode },
      config,
      (decodedText) => {
        handleQRCodeScanned(decodedText);
      },
      (error) => {
        // Rutin tarama ara adımları
      }
    ).then(() => {
      if (status) status.textContent = "🟢 Kamera aktif. QR kodu vizöre hizalayın.";
    }).catch((err) => {
      console.warn("Kamera erişim hatası:", err);
      if (status) status.textContent = "⚠️ Kameraya erişilemedi. 'QR Doğrula (Test)' ile etabı açabilirsiniz.";
    });
  } catch (e) {
    console.warn("QR başlatma istisnası:", e);
    if (status) status.textContent = "⚠️ Kamera açılamadı. 'QR Doğrula (Test)' ile etabı açabilirsiniz.";
  }
}

function stopQRCamera() {
  if (qrScannerInstance) {
    try {
      qrScannerInstance.stop().then(() => {
        qrScannerInstance.clear();
        qrScannerInstance = null;
      }).catch(() => {
        qrScannerInstance = null;
      });
    } catch (e) {
      qrScannerInstance = null;
    }
  }
}

function switchQRCamera() {
  currentCameraFacingMode = currentCameraFacingMode === "environment" ? "user" : "environment";
  startQRCamera();
}

function simulateTestQRScan() {
  const targetIdx = currentScanningStageIndex !== null ? currentScanningStageIndex : 2;
  const etap = RESMI_ETAPLAR[targetIdx] || RESMI_ETAPLAR[2];
  handleQRCodeScanned(etap.qrCode);
}

function handleQRCodeScanned(text) {
  sounds.playCollect();
  stopQRCamera();

  let matchedIndex = null;
  const upper = (text || "").toUpperCase();

  // 1. Resmi qrCode eşleşmesi (BOLUM_1 .. BOLUM_10)
  for (let i = 0; i < RESMI_ETAPLAR.length; i++) {
    const etap = RESMI_ETAPLAR[i];
    if (upper.includes(etap.qrCode) || upper.includes(`BOLUM_${etap.id}`) || upper.includes(`ETAP_${etap.id}`)) {
      matchedIndex = i;
      break;
    }
  }

  // 2. Hedef etap seçilmişse öncelik ver
  if (matchedIndex === null && currentScanningStageIndex !== null) {
    matchedIndex = currentScanningStageIndex;
  }

  // 3. İşletme adı veya anahtar kelime eşleşmesi
  if (matchedIndex === null) {
    for (let i = 0; i < RESMI_ETAPLAR.length; i++) {
      if (upper.includes(RESMI_ETAPLAR[i].business.toUpperCase())) {
        matchedIndex = i;
        break;
      }
    }
  }

  // 4. Varsayılan eşleşme: kilitli ilk etap
  if (matchedIndex === null) {
    for (let i = 2; i < 10; i++) {
      if (GameState.getLevelState(i) === 0) {
        matchedIndex = i;
        break;
      }
    }
    if (matchedIndex === null) matchedIndex = 2;
  }

  const etap = RESMI_ETAPLAR[matchedIndex];
  GameState.setLevelState(matchedIndex, 2); // 2 = Açık / Oynanabilir
  FirebaseSimService.addXp(100);

  showToast(`🎉 ${etap.business} QR Kodu Doğrulandı! ${etap.title} ÜCRETSİZ Açıldı! (+100 XP ⭐)`, "success");

  closeQRScannerModal();
  renderMapScreen();
  openLevelModal(matchedIndex);
}

function initQRScannerEvents() {
  const btnClose = document.getElementById("btn-qr-close");
  if (btnClose) btnClose.onclick = closeQRScannerModal;

  const btnSim = document.getElementById("btn-qr-simulate");
  if (btnSim) btnSim.onclick = simulateTestQRScan;

  const btnSwitch = document.getElementById("btn-qr-switch-camera");
  if (btnSwitch) btnSwitch.onclick = switchQRCamera;
}

// ============================================================================
// 7.8 KEMERBURGAZ DOĞA VE BİLİM YARIŞMASI (30 ÇOCUK DOSTU EĞİTİCİ SORU)
// ============================================================================

const DOGA_SORU_HAVUZU = [
  // 1. Etap: Mağlova Kapısı & Karşılama
  [
    {
      category: "🌲 Orman Büyüklüğü",
      q: "Kemerburgaz Kent Ormanı yaklaşık kaç milyon metrekarelik devasa bir alana sahiptir?",
      optA: "5.5 Milyon Metrekare (İstanbul'un En Büyüğü) 🌲",
      optB: "Sadece 100 Metrekarelik Küçük Bir Bahçe 🏡",
      correct: "A",
      fact: "Doğru! Kemerburgaz Kent Ormanı 5.5 milyon metrekareyle İstanbul'un en büyük halka açık orman parkıdır."
    },
    {
      category: "♻️ Çevre Koruması",
      q: "Ormanda doğa yürüyüşü yaparken atıştırmalık çöplerimizi ne yapmalıyız?",
      optA: "Çantamızda toplayıp geri dönüşüm kutusuna atmalıyız 🗑️",
      optB: "Orman patikasının kenarına bırakmalıyız 🍂",
      correct: "A",
      fact: "Tebrikler! Doğaya sıfır atık bırakarak yaban hayvanlarını ve doğayı koruruz."
    },
    {
      category: "🌱 Ağaçların Gücü",
      q: "Gündüzleri güneş ışığı alan orman ağaçları bizlere ne üretir?",
      optA: "Ciğerlerimize hayat veren tertemiz Oksijen 💨",
      optB: "Duman ve karbondioksit gazı 🌫️",
      correct: "A",
      fact: "Harika! Fotosentez sayesinde ağaçlar karbondioksiti temizleyip bize taze oksijen üretir."
    }
  ],
  // 2. Etap: Dev Atlıkarınca & Carousel Cafe
  [
    {
      category: "🎠 Dev Atlıkarınca",
      q: "Kent Ormanı'ndaki Türkiye'nin en büyük yerli çift katlı atlıkarıncasında kaç hareketli at vardır?",
      optA: "40 Tane Doğal Ahşap Hareketli At 🎠",
      optB: "Sadece 2 Tane Plastik At 🐎",
      correct: "A",
      fact: "Doğru! 14 metre çapındaki bu dev atlıkarıncanın 40 atı da hareketlidir."
    },
    {
      category: "🐿️ Kızıl Sincaplar",
      q: "Ormanımızda ağaçtan ağaca zıplayan sevimli kızıl sincapların en sevdiği besin nedir?",
      optA: "Meşe palamudu, çam kozalağı ve ceviz 🌰",
      optB: "Patates cipsi ve gazlı içecekler 🍟",
      correct: "A",
      fact: "Doğru! Sincaplar sert kabuklu yemişleri dişleriyle kırarak doğal beslenirler."
    },
    {
      category: "🌱 Orman Ekosistemi",
      q: "Sincapların toprağa saklayıp kışın unuttuğu meşe palamutlarına ne olur?",
      optA: "Toprakta kök salıp yepyeni meşe fidanları olurlar 🌱",
      optB: "Taşa dönüşürler 🪨",
      correct: "A",
      fact: "Bravo! Sincaplar unuttukları palamutlarla ormanın en büyük fidan dikicileridir."
    }
  ],
  // 3. Etap: Çocuk Parkları & Rotamız Orman
  [
    {
      category: "🪓 Ağaçkakan Kuşları",
      q: "Ağaçkakan kuşları ağaç gövdelerini neden ritmik olarak tık tık gagalarlar?",
      optA: "Kabuk altındaki zararlı böcekleri bulup ağacı temizlemek için 🐛",
      optB: "Ağaçları kırmak için 🪓",
      correct: "A",
      fact: "Harika! Ağaçkakanlar ağacın doktorudur, zararlı kurtçukları yiyerek ağacı iyileştirirler."
    },
    {
      category: "🌲 İğne Yapraklar",
      q: "Çam ağaçlarının iğne yaprakları kışın neden dökülmez?",
      optA: "Mumsu kaplamaları sayesinde kara ve dona çok dayanıklıdırlar ❄️",
      optB: "Ağaçlar kışın uyumadığı için 💤",
      correct: "A",
      fact: "Doğru! Çamların iğneleri reçineli ve mumsu olduğu için kışın soğuktan donmaz."
    },
    {
      category: "🚲 Eko-Ulaşım",
      q: "Kemerburgaz Kent Ormanı'nda bisiklet sürmek havayı nasıl korur?",
      optA: "Sıfır egzoz gazı ve sıfır gürültü kirliliği sağlar 🚲",
      optB: "Havaya siyah duman saçar 🚗",
      correct: "A",
      fact: "Çok güzel! Bisiklet sürmek hem sağlığımızı hem de ormanın tertemiz havasını korur."
    }
  ],
  // 4. Etap: BELTUR & Sıfır Atık
  [
    {
      category: "💧 Matara Kültürü",
      q: "Doğa yürüyüşlerinde tek kullanımlık plastik şişe yerine matara kullanırsak neyi önleriz?",
      optA: "Doğada yüzyıllarca kaybolmayan plastik atıkları önleriz 🌍",
      optB: "Suyun bitmesini önleriz 🥛",
      correct: "A",
      fact: "Tebrikler! Matara kullanarak doğayı ve denizleri plastik atıklardan kurtarırız."
    },
    {
      category: "🍂 Orman Toprağı",
      q: "Sonbaharda ağaçlardan dökülen sarı ve kuru yapraklar doğada ne işe yarar?",
      optA: "Zamanla çürüyerek toprağı besleyen doğal gübreye dönüşür 🌿",
      optB: "Toprağı taşlaştırır 🧱",
      correct: "A",
      fact: "Doğru! Orman tabanındaki çürüyen yapraklar toprağın en zengin besin kaynağıdır."
    },
    {
      category: "🦆 Göçmen Kuşlar",
      q: "Sonbaharda İstanbul üzerinden geçen leylek ve kartallar nereye uçar?",
      optA: "Kışı geçirmek için daha ılık güney ülkelerine ☀️",
      optB: "Kuzey Kutbu'na karların içine ❄️",
      correct: "A",
      fact: "Harika! İstanbul Boğazı ve Kuzey Ormanları dünyanın en önemli kuş göç koridorudur."
    }
  ],
  // 5. Etap: Macera Parkı & Zipline
  [
    {
      category: "🧗 Macera Güvenliği",
      q: "Ağaçlar arası ip parkurunda ve Zipline'da neden kask ve emniyet kemeri takılır?",
      optA: "Düşme riskine karşı tam güvenlik sağlamak için 🪖",
      optB: "Daha hızlı koşmak için 🏃",
      correct: "A",
      fact: "Doğru! Doğada spor yaparken güvenlik kurallarına uymak her zaman bir numaralı kuraldır."
    },
    {
      category: "🌱 Ağaç Kökleri",
      q: "Orman ağaçlarının dev kökleri şiddetli yağmurlarda neyi engeller?",
      optA: "Toprağı tutarak erozyon ve toprak kaymasını engeller 🛡️",
      optB: "Yağmurun yağmasını engeller ☔",
      correct: "A",
      fact: "Süper! Ağaç kökleri toprağı bir ağ gibi sararak selleri ve toprak kaymasını durdurur."
    },
    {
      category: "🐰 Yaban Tavşanları",
      q: "Ormandaki yaban tavşanlarının kulakları neden uzundur?",
      optA: "Çok uzaktaki sesleri duyup tehlikelerden kaçmak için 👂",
      optB: "Uçmak için kanat görevi görmesi için 🕊️",
      correct: "A",
      fact: "Doğru! Tavşanların uzun kulakları hem hassas bir radardır hem de sıcak havada vücutlarını serinletir."
    }
  ],
  // 6. Etap: Fauna Alanı & Doğa Koridoru
  [
    {
      category: "🦌 Alageyik ve Karacalar",
      q: "Kemerburgaz Kent Ormanı fauna alanında koruma altında yaşayan zarif boynuzlu hayvan hangisidir?",
      optA: "Alageyik ve Karaca 🦌",
      optB: "Kutup Ayısı 🐻‍❄️",
      correct: "A",
      fact: "Doğru! Kuzey ormanlarımızın yerli türü olan alageyikler ve karacalar koruma altındadır."
    },
    {
      category: "🐝 Bal Arıları",
      q: "Arılar ormandaki çiçekleri dolaşırken doğaya en büyük katkıyı nasıl yaparlar?",
      optA: "Çiçek tozlarını (polen) taşıyarak yeni bitkilerin üremesini sağlarlar 🌺",
      optB: "Çiçekleri kuruturlar 🥀",
      correct: "A",
      fact: "Muhteşem! Arıların tozlaşma görevi olmasaydı dünyadaki meyve ve sebzelerin çoğu yetişemezdi."
    },
    {
      category: "🦔 Kirpiler",
      q: "Kirpiler ormanda tehlike hissettiklerinde kendilerini nasıl korurlar?",
      optA: "İçlerine kapanıp dikenli bir top haline gelirler 🦔",
      optB: "Ağacın tepesine tırmanırlar 🌳",
      correct: "A",
      fact: "Tebrikler! Kirpilerin 5.000'den fazla dikeni onları avcılara karşı tam bir zırh gibi korur."
    }
  ],
  // 7. Etap: Mimar Sinan Kapısı & Gölet Parkuru
  [
    {
      category: "🦆 Alibeyköy Göleti",
      q: "Gölet kıyısındaki yemyeşil sazlıkların sudaki en önemli biyolojik görevi nedir?",
      optA: "Gölet suyunu doğal olarak süzen ve temizleyen biyolojik filtredir 💧",
      optB: "Balıkların yüzmesini engellemek 🚫",
      correct: "A",
      fact: "Doğru! Sulak alan sazlıkları sudaki tortuları süzerek suyu temiz ve berrak tutar."
    },
    {
      category: "🦆 Su Kuşları",
      q: "Gölette yüzen yeşilbaş ördeklerin ayak parmakları neden perdelidir?",
      optA: "Suda bir kürek gibi suyu itip hızlı yüzebilmek için 🏊",
      optB: "Ağaçlara tırmanabilmek için 🧗",
      correct: "A",
      fact: "Harika! Perdeli ayaklar doğanın ördeklere verdiği harika bir yüzme paletidir."
    },
    {
      category: "🌊 Tatlı Su Kaynakları",
      q: "Göletler ormandaki hayvanlar için neden hayati önem taşır?",
      optA: "Bütün orman canlılarının tatlı içme suyu kaynağıdır 💧",
      optB: "Sadece fotoğraf çekilmek içindir 📸",
      correct: "A",
      fact: "Doğru! Tatlı su kaynakları olmadan hiçbir yaban hayvanı ormanda hayatta kalamaz."
    }
  ],
  // 8. Etap: Seyir Kulesi & Günbatımı Tepesi
  [
    {
      category: "🗼 Seyir Kulesi",
      q: "360 derece ahşap seyir kulesinden ufka baktığımızda neyi görürüz?",
      optA: "İstanbul'un akciğerleri olan uçsuz bucaksız Kuzey Ormanları'nı 🌲",
      optB: "Kum fırtınaları ve çölleri 🏜️",
      correct: "A",
      fact: "Harika! Seyir kulesinden Belgrad ormanlarına uzanan devasa yeşil koridoru izleyebilirsiniz."
    },
    {
      category: "🦉 Orman Baykuşları",
      q: "Baykuşlar gece karanlığında ağaçlar arasında nasıl hiç ses çıkarmadan uçabilirler?",
      optA: "Kanat tüylerinin kenarındaki özel püsküller rüzgar sesini yok eder 🦉",
      optB: "Motor çalıştırarak 🛵",
      correct: "A",
      fact: "Doğru! Baykuşların ipeksi kanat yapısı havayı sessizce yararak avlarına fark ettirmeden yaklaşır."
    },
    {
      category: "💨 Orman Terapisi",
      q: "Ağaçların yapraklarından salgılanan ve havayı kokladığımızda bizi sakinleştiren doğal maddeye ne denir?",
      optA: "Fitonsit (Ağaçların doğal şifalı kokusu) 🍃",
      optB: "Egzoz dumanı 🚗",
      correct: "A",
      fact: "Bravo! Fitonsitler ağaçların kendilerini korumak için salgıladığı, insanlara da huzur veren doğal aromadır."
    }
  ],
  // 9. Etap: Yakamoz Burnu & Mimar Sinan Yolu
  [
    {
      category: "🏛️ Tarihi Patika",
      q: "Asırlar önce su kemerlerini inşa ederken bu orman patikalarından geçen dahi mimar kimdir?",
      optA: "Mimar Sinan 📐",
      optB: "Kristof Kolomb ⛵",
      correct: "A",
      fact: "Doğru! Mimar Sinan 1550-1564 yıllarında Kırkçeşme su tesislerini inşa ederken bu yolları kullanmıştır."
    },
    {
      category: "🐜 Orman Karıncaları",
      q: "Kırmızı orman karıncaları neden yerdeki zararlı böcekleri toplarlar?",
      optA: "Ağaçları kurtçuk istilasından koruyarak ormanın dengesini sağlarlar 🐜",
      optB: "Ağaçları kurutmak için 🍂",
      correct: "A",
      fact: "Süper! Karıncalar ormanın temizlik görevlileridir, her gün binlerce zararlıyı temizlerler."
    },
    {
      category: "🐾 Doğa Sevgisi",
      q: "Ormanda yürürken bir kaplumbağa veya kuş yavrusu gördüğümüzde en doğru davranış nedir?",
      optA: "Uzaktan sevgiyle izlemek ve doğal ortamına zarar vermemek 🐢",
      optB: "Onu tutup eve götürmeye çalışmak 🏃",
      correct: "A",
      fact: "Tebrikler! Yaban hayvanlarının en mutlu olduğu yer kendi doğal orman evleridir."
    }
  ],
  // 10. Etap: Mağlova Su Kemeri (Büyük Şampiyonluk)
  [
    {
      category: "🏛️ Mağlova Su Kemeri",
      q: "Mimar Sinan'ın 1564 yılında inşa ettiği Mağlova Su Kemeri'nin tarihi görevi neydi?",
      optA: "Ormandaki kaynak sularını tarihi İstanbul çeşmelerine taşımak 💧",
      optB: "Tren ve araba geçirmek 🚂",
      correct: "A",
      fact: "Doğru! Mağlova Su Kemeri 460 yıldır su ileten dünya su mimarisi şaheseridir."
    },
    {
      category: "⭐ Mimari Başarı",
      q: "Mağlova Su Kemeri 36 metre yüksekliği ve piramidal payandalarıyla kaç yıldır depremlere meydan okumuştur?",
      optA: "460 Yıldan Fazladır 🏛️",
      optB: "Sadece 5 yıldır ⏱️",
      correct: "A",
      fact: "Bravo! Sinan'ın dahi mühendislik hesapları sayesinde kemer tüm büyük sel ve depremleri hasarsız atlatmıştır."
    },
    {
      category: "🏆 Büyük Muhafızlık",
      q: "Kemerburgaz Kent Ormanı'nın 10 etabını ve doğa yarışmasını tamamlayan çocuklara hangi unvan verilir?",
      optA: "Kemerburgaz Doğa ve Tarih Baş Muhafızı 👑🏆",
      optB: "Sıradan Ziyaretçi 🚶",
      correct: "A",
      fact: "Şampiyonsun! Artık Kemerburgaz Kent Ormanı'nın resmi Doğa ve Tarih Baş Muhafızısın!"
    }
  ]
];

// ============================================================================
// UZAKTAN SORU YÖNETİM SERVİSİ (FIRESTORE & ÇEVRİMDIŞI ÖNBELLEK)
// APK güncellemesi gerektirmeden soru ve cevapları dinamik çeker
// ============================================================================
const RemoteQuizService = {
  CACHE_KEY: "bogazici_remote_quiz_pool_v1",
  cachedPool: null,
  syncStatus: "checking", // "live", "cached", "local"

  init() {
    try {
      const saved = localStorage.getItem(this.CACHE_KEY);
      if (saved) {
        this.cachedPool = JSON.parse(saved);
        this.syncStatus = "cached";
      }
    } catch(e) {}
    this.syncFromRemote();
  },

  async syncFromRemote() {
    try {
      const url = "https://firestore.googleapis.com/v1/projects/kentormanimaceraparki/databases/(default)/documents/quizzes/stage_pool";
      const res = await fetch(url, { cache: "no-cache" });
      if (res.ok) {
        const doc = await res.json();
        let questions = null;

        if (doc && doc.fields && doc.fields.questionsJson && doc.fields.questionsJson.stringValue) {
          try {
            questions = JSON.parse(doc.fields.questionsJson.stringValue);
          } catch(e) {}
        } else if (doc && doc.fields && doc.fields.stages && doc.fields.stages.arrayValue && doc.fields.stages.arrayValue.values) {
          try {
            questions = doc.fields.stages.arrayValue.values.map(st => {
              if (st.arrayValue && st.arrayValue.values) {
                return st.arrayValue.values.map(qDoc => {
                  const m = qDoc.mapValue ? qDoc.mapValue.fields : {};
                  return {
                    category: m.category ? m.category.stringValue : "Doğa & Çevre",
                    q: m.q ? m.q.stringValue : "",
                    optA: m.optA ? m.optA.stringValue : "",
                    optB: m.optB ? m.optB.stringValue : "",
                    correct: m.correct ? m.correct.stringValue : "A",
                    fact: m.fact ? m.fact.stringValue : ""
                  };
                });
              }
              return [];
            });
          } catch(e) {}
        }

        if (Array.isArray(questions) && questions.length >= 10) {
          this.cachedPool = questions;
          this.syncStatus = "live";
          localStorage.setItem(this.CACHE_KEY, JSON.stringify(questions));
          console.log("🌲 [RemoteQuizService] Canlı Firestore soru havuzu senkronize edildi (10 etap).");
          this.updateUIStatus();
          return;
        }
      }
    } catch(err) {
      // Çevrimdışı sessiz tolerans
    }

    if (this.cachedPool && Array.isArray(this.cachedPool) && this.cachedPool.length >= 10) {
      this.syncStatus = "cached";
    } else {
      this.syncStatus = "local";
    }
    this.updateUIStatus();
  },

  updateUIStatus() {
    const badge = document.getElementById("quiz-sync-status");
    if (!badge) return;
    if (this.syncStatus === "live") {
      badge.textContent = "🟢 Canlı Firebase Soru Havuzu";
      badge.className = "quiz-sync-badge live";
      badge.title = "Sorular Firestore veritabanından anlık çekildi";
    } else if (this.syncStatus === "cached") {
      badge.textContent = "💾 Çevrimdışı Önbellek Havuzu";
      badge.className = "quiz-sync-badge cached";
      badge.title = "Sorular daha önce indirilen yerel önbellekten yüklendi";
    } else {
      badge.textContent = "🌿 Yerel Doğa Havuzu";
      badge.className = "quiz-sync-badge local";
      badge.title = "Sorular dahili doğa soru havuzundan yüklendi";
    }
  },

  getStageQuestions(stageIdx) {
    if (this.cachedPool && Array.isArray(this.cachedPool) && this.cachedPool[stageIdx] && this.cachedPool[stageIdx].length > 0) {
      return this.cachedPool[stageIdx];
    }
    const safeIdx = Math.max(0, Math.min(DOGA_SORU_HAVUZU.length - 1, stageIdx));
    return DOGA_SORU_HAVUZU[safeIdx] || DOGA_SORU_HAVUZU[0];
  }
};
window.RemoteQuizService = RemoteQuizService;

let currentQuizStageIndex = 0;
let currentQuizQuestionIndex = 0;
let currentQuizQuestions = [];
let quizCorrectCount = 0;
let quizWrongCount = 0;
let quizAnswerLocked = false;
let quizProceedAction = null;

function getQuestionsForStage(stageIdx) {
  if (typeof RemoteQuizService !== "undefined" && RemoteQuizService.getStageQuestions) {
    return RemoteQuizService.getStageQuestions(stageIdx);
  }
  const safeIdx = Math.max(0, Math.min(DOGA_SORU_HAVUZU.length - 1, stageIdx));
  return DOGA_SORU_HAVUZU[safeIdx] || DOGA_SORU_HAVUZU[0];
}

function updateQuizBottomStatsUI() {
  const pointsEl = document.getElementById("quiz-live-points");
  const coinsEl = document.getElementById("quiz-live-coins");
  const answersEl = document.getElementById("quiz-live-answers");
  const stepLabel = document.getElementById("quiz-bottom-step-label");

  if (pointsEl) {
    pointsEl.textContent = `+${quizSessionPoints} ⭐`;
  }
  if (coinsEl) {
    coinsEl.textContent = `+${quizCorrectCount * 10} 🪙`;
  }
  if (stepLabel) {
    stepLabel.textContent = `Soru ${Math.min(3, currentQuizQuestionIndex + 1)}/3`;
  }
  if (answersEl) {
    answersEl.innerHTML = `<span style="color:#52b788; font-weight:800;">✅ ${quizCorrectCount}</span> &nbsp; <span style="color:#e07a5f; font-weight:800;">❌ ${quizWrongCount}</span>`;
  }
}

function startNatureQuiz(stageIndex, onComplete = null) {
  currentQuizStageIndex = stageIndex;
  currentQuizQuestionIndex = 0;
  quizCorrectCount = 0;
  quizWrongCount = 0;
  quizAnswerLocked = false;
  quizProceedAction = onComplete || (() => proceedToNextStageOnMap(stageIndex + 1));
  quizStreak = 0;
  quizSessionPoints = 0;

  updateQuizBottomStatsUI();

  const nextBtn = document.getElementById("btn-quiz-next-question");
  if (nextBtn) {
    nextBtn.onclick = () => {
      currentQuizQuestionIndex++;
      if (currentQuizQuestionIndex < 3) {
        renderQuizQuestion(currentQuizQuestionIndex);
        updateQuizBottomStatsUI();
      } else {
        clearQuizTimer();
        showQuizSummary();
      }
    };
  }

  currentQuizQuestions = getQuestionsForStage(stageIndex);

  const summaryBox = document.getElementById("quiz-summary-box");
  const questionBox = document.getElementById("quiz-question-box");
  const optionsBox = document.getElementById("quiz-options-container");
  const feedbackBox = document.getElementById("quiz-feedback-box");
  const bottomBar = document.getElementById("quiz-bottom-stats-bar");
  const navRow = document.getElementById("quiz-nav-row");
  const skipBtn = document.getElementById("btn-quiz-skip");
  const navMenuBtn = document.getElementById("btn-quiz-nav-menu");
  const timerWrap = document.getElementById("quiz-timer-wrap");

  if (summaryBox) summaryBox.classList.add("hidden");
  if (questionBox) questionBox.classList.remove("hidden");
  if (optionsBox) optionsBox.classList.remove("hidden");
  if (feedbackBox) feedbackBox.classList.add("hidden");
  if (bottomBar) bottomBar.classList.remove("hidden");
  if (navRow) navRow.classList.remove("hidden");
  if (timerWrap) timerWrap.style.display = "";

  if (navMenuBtn) {
    navMenuBtn.onclick = () => {
      clearQuizTimer();
      const modal = document.getElementById("modal-nature-quiz");
      if (modal) modal.classList.remove("active");
      if (window.showScreen) window.showScreen("screen-menu");
    };
  }

  if (skipBtn) {
    skipBtn.onclick = () => {
      clearQuizTimer();
      const modal = document.getElementById("modal-nature-quiz");
      if (modal) modal.classList.remove("active");
      if (quizProceedAction) {
        quizProceedAction();
      } else {
        proceedToNextStageOnMap(stageIndex + 1);
      }
    };
  }

  renderQuizQuestion(0);
  updateQuizBottomStatsUI();

  if (typeof RemoteQuizService !== "undefined" && RemoteQuizService.updateUIStatus) {
    RemoteQuizService.updateUIStatus();
  }

  const modal = document.getElementById("modal-nature-quiz");
  if (modal) modal.classList.add("active");
}

let quizTimerInterval = null;
let quizTimeLeft = 15;
const QUIZ_TIMER_SECONDS = 15;
let quizStreak = 0;
let quizSessionPoints = 0;
let quizQuestionStartTime = 0;

// ⏱️ Quiz Geri Sayım Zamanlayıcı Yönetimi
function startQuizTimer() {
  clearQuizTimer();
  quizTimeLeft = QUIZ_TIMER_SECONDS;
  quizQuestionStartTime = Date.now();

  const barEl = document.getElementById("quiz-timer-bar");
  const textEl = document.getElementById("quiz-timer-text");

  if (barEl) {
    barEl.style.width = "100%";
    barEl.className = "quiz-timer-bar";
  }
  if (textEl) {
    textEl.textContent = quizTimeLeft;
    textEl.className = "quiz-timer-text";
  }

  quizTimerInterval = setInterval(() => {
    quizTimeLeft--;

    const pct = Math.max(0, (quizTimeLeft / QUIZ_TIMER_SECONDS) * 100);
    if (barEl) {
      barEl.style.width = `${pct}%`;
      if (pct <= 25) {
        barEl.className = "quiz-timer-bar danger";
      } else if (pct <= 55) {
        barEl.className = "quiz-timer-bar warning";
      }
    }
    if (textEl) {
      textEl.textContent = quizTimeLeft;
      if (quizTimeLeft <= 4) textEl.className = "quiz-timer-text danger";
    }

    if (quizTimeLeft <= 0) {
      clearQuizTimer();
      if (!quizAnswerLocked) {
        quizAnswerLocked = true;
        quizWrongCount++;
        quizStreak = 0;
        updateStreakUI();
        const statWrong = document.getElementById("quiz-stat-wrong");
        if (statWrong) statWrong.textContent = quizWrongCount;

        const q = currentQuizQuestions[currentQuizQuestionIndex];
        const feedbackBox = document.getElementById("quiz-feedback-box");
        const feedbackIcon = document.getElementById("quiz-feedback-icon");
        const feedbackText = document.getElementById("quiz-feedback-text");
        const correctBtn = q && q.correct === "A"
          ? document.getElementById("quiz-opt-a")
          : document.getElementById("quiz-opt-b");

        if (correctBtn) {
          correctBtn.classList.add("correct");
          const b = document.createElement("span");
          b.className = "opt-answer-badge correct-badge";
          b.textContent = "✅ DOĞRU CEVAP BUYDU";
          correctBtn.appendChild(b);
        }
        if (feedbackIcon) feedbackIcon.textContent = "⏰";
        if (feedbackText) feedbackText.innerHTML = `<strong>Süre doldu!</strong> Doğru cevap <strong>${q ? q.correct : 'A'}</strong> seçeneğiydi.<br><span style="color:#ffd166; font-size:11px;">${q ? q.fact : ""}</span>`;
        if (feedbackBox) {
          feedbackBox.style.borderColor = "#f4a261";
          feedbackBox.classList.remove("hidden");
        }
        if (sounds && sounds.playCollect) sounds.playCollect();
      }
    }
  }, 1000);
}

function clearQuizTimer() {
  if (quizTimerInterval) {
    clearInterval(quizTimerInterval);
    quizTimerInterval = null;
  }
}

function updateStreakUI() {
  const streakEl = document.getElementById("quiz-streak-count");
  const streakFire = document.getElementById("quiz-streak-fire");
  const streakBadge = document.getElementById("quiz-streak-badge");
  if (streakEl) streakEl.textContent = quizStreak;
  if (streakFire) {
    if (quizStreak >= 3) streakFire.textContent = "🔥";
    else if (quizStreak >= 2) streakFire.textContent = "🌟";
    else streakFire.textContent = "🌱";
  }
  if (streakBadge) {
    if (quizStreak >= 2) streakBadge.classList.add("on-fire");
    else streakBadge.classList.remove("on-fire");
  }
}

function renderQuizQuestion(idx) {
  quizAnswerLocked = false;
  const q = currentQuizQuestions[idx];
  if (!q) return;

  for (let s = 1; s <= 3; s++) {
    const el = document.getElementById(`quiz-step-${s}`);
    if (!el) continue;
    el.className = "quiz-step-indicator";
    if (s < idx + 1) el.classList.add("completed");
    else if (s === idx + 1) el.classList.add("active");
  }

  const counterEl = document.getElementById("quiz-step-counter");
  const catEl = document.getElementById("quiz-category-tag");
  const textEl = document.getElementById("quiz-question-text");
  const textA = document.getElementById("quiz-text-a");
  const textB = document.getElementById("quiz-text-b");

  if (counterEl) counterEl.textContent = `Soru ${idx + 1}/3`;
  if (catEl) catEl.textContent = q.category;
  if (textEl) textEl.textContent = q.q;
  if (textA) textA.textContent = q.optA;
  if (textB) textB.textContent = q.optB;

  const btnA = document.getElementById("quiz-opt-a");
  const btnB = document.getElementById("quiz-opt-b");
  [btnA, btnB].forEach(btn => {
    if (btn) {
      btn.className = "quiz-option-btn";
      btn.style.pointerEvents = "auto";
      const existingBadge = btn.querySelector(".opt-answer-badge");
      if (existingBadge) existingBadge.remove();
    }
  });

  const feedbackBox = document.getElementById("quiz-feedback-box");
  if (feedbackBox) feedbackBox.classList.add("hidden");

  startQuizTimer();
}

function handleQuizAnswer(selectedOption) {
  if (quizAnswerLocked) return;
  quizAnswerLocked = true;
  clearQuizTimer();

  const elapsed = (Date.now() - quizQuestionStartTime) / 1000;
  const q = currentQuizQuestions[currentQuizQuestionIndex];
  if (!q) return;

  const isCorrect = selectedOption === q.correct;
  const btnA = document.getElementById("quiz-opt-a");
  const btnB = document.getElementById("quiz-opt-b");
  const selectedBtn = selectedOption === "A" ? btnA : btnB;
  const correctBtn = q.correct === "A" ? btnA : btnB;

  [btnA, btnB].forEach(b => {
    if (b) {
      b.style.pointerEvents = "none";
      const existing = b.querySelector(".opt-answer-badge");
      if (existing) existing.remove();
    }
  });

  const feedbackBox = document.getElementById("quiz-feedback-box");
  const feedbackIcon = document.getElementById("quiz-feedback-icon");
  const feedbackText = document.getElementById("quiz-feedback-text");
  const nextQBtn = document.getElementById("btn-quiz-next-question");

  if (nextQBtn) {
    nextQBtn.textContent = (currentQuizQuestionIndex === 2) ? "🏆 Sonuçları Tamamla & Ödülleri Al ⏩" : "Sonraki Soruya Geç ⏩";
  }

  if (isCorrect) {
    quizCorrectCount++;
    quizStreak++;

    let earnedPoints = 100;
    let bonusMsg = "";

    if (elapsed < 5) {
      earnedPoints += 50;
      bonusMsg = " ⚡ +50 Hız Bonusu!";
    }

    quizSessionPoints += earnedPoints;

    if (selectedBtn) {
      selectedBtn.classList.add("correct");
      const badge = document.createElement("span");
      badge.className = "opt-answer-badge correct-badge";
      badge.textContent = "✅ DOĞRU!";
      selectedBtn.appendChild(badge);
    }

    sounds.playCollect();
    GameState.addCoins(10);
    GameState.addQuizPoints(earnedPoints);

    updateMenuUI();
    updateQuizBottomStatsUI();

    if (feedbackIcon) feedbackIcon.textContent = "🌟";
    if (feedbackText) feedbackText.innerHTML = `<strong>Tebrikler, Doğru!</strong> 🎉 +10 🪙 Altın, +${earnedPoints} Bilgi Puanı${bonusMsg}<br><span style="color:#b7e4c7; font-size:11.5px;">${q.fact}</span>`;
    if (feedbackBox) {
      feedbackBox.style.borderColor = "#52b788";
      feedbackBox.style.background = "rgba(45, 106, 79, 0.4)";
    }
  } else {
    quizWrongCount++;
    quizStreak = 0;

    updateQuizBottomStatsUI();

    if (selectedBtn) {
      selectedBtn.classList.add("wrong");
      const badge = document.createElement("span");
      badge.className = "opt-answer-badge wrong-badge";
      badge.textContent = "❌ SEÇTİĞİN";
      selectedBtn.appendChild(badge);
    }

    if (correctBtn) {
      correctBtn.classList.add("correct");
      const badge = document.createElement("span");
      badge.className = "opt-answer-badge correct-badge";
      badge.textContent = "✅ DOĞRU BUYDU";
      correctBtn.appendChild(badge);
    }

    if (feedbackIcon) feedbackIcon.textContent = "💡";
    if (feedbackText) feedbackText.innerHTML = `<strong>Yanlış Seçenek!</strong> Doğru cevap <strong>${q.correct}</strong> seçeneğiydi.<br><span style="color:#ffd166; font-size:11.5px;">${q.fact}</span>`;
    if (feedbackBox) {
      feedbackBox.style.borderColor = "#ffd166";
      feedbackBox.style.background = "rgba(60, 25, 10, 0.45)";
    }
  }

  updateQuizBottomStatsUI();
  if (feedbackBox) feedbackBox.classList.remove("hidden");
}

function showQuizSummary() {
  clearQuizTimer();

  const summaryBox = document.getElementById("quiz-summary-box");
  const questionBox = document.getElementById("quiz-question-box");
  const optionsBox = document.getElementById("quiz-options-container");
  const feedbackBox = document.getElementById("quiz-feedback-box");
  const bottomBar = document.getElementById("quiz-bottom-stats-bar");
  const navRow = document.getElementById("quiz-nav-row");
  const skipBtn = document.getElementById("btn-quiz-skip");
  const timerWrap = document.getElementById("quiz-timer-wrap");

  if (questionBox) questionBox.classList.add("hidden");
  if (optionsBox) optionsBox.classList.add("hidden");
  if (feedbackBox) feedbackBox.classList.add("hidden");
  if (bottomBar) bottomBar.classList.add("hidden");
  if (navRow) navRow.classList.add("hidden");
  if (timerWrap) timerWrap.style.display = "none";
  if (skipBtn) skipBtn.style.display = "none";

  for (let s = 1; s <= 3; s++) {
    const el = document.getElementById(`quiz-step-${s}`);
    if (el) el.className = "quiz-step-indicator completed";
  }

  // 3/3 Mükemmel bonusu
  if (quizCorrectCount === 3) {
    quizSessionPoints += 200;
    showToast("🏆 MÜKEMMEL! 3/3 Doğru — +200 Bilgi Puanı Bonusu!", "success");
  }

  const earnedCoins = quizCorrectCount * 10;

  // Bilgi puanını kaydet
  GameState.addQuizPoints(quizSessionPoints);
  GameState.addQuizWeeklyPoints(quizSessionPoints);

  // Firestore Bilgi Ligi puanını güncelle (cihaz & profil adıyla)
  if (typeof QuizLeaderboardService !== 'undefined' && QuizLeaderboardService.submitQuizScore) {
    QuizLeaderboardService.submitQuizScore();
  }

  // XP ekle
  FirebaseSimService.addXp(quizCorrectCount * 20);

  // Sonuç kartı metinlerini DİNAMİK ayarla
  const scoreEl = document.getElementById("quiz-summary-score");
  const rewardsEl = document.getElementById("quiz-summary-rewards");
  const pointsValEl = document.getElementById("quiz-points-val");
  const breakdownEl = document.getElementById("quiz-summary-breakdown");
  const trophyEl = document.getElementById("quiz-result-trophy");
  const titleEl = document.getElementById("quiz-result-title");

  if (scoreEl) {
    scoreEl.textContent = `3 sorudan ${quizCorrectCount} tanesini doğru bildin!`;
  }
  if (pointsValEl) {
    pointsValEl.textContent = `+${quizSessionPoints} ⭐`;
  }
  if (rewardsEl) {
    rewardsEl.textContent = `+${earnedCoins} 🪙`;
  }
  if (breakdownEl) {
    breakdownEl.innerHTML = `<span style="color:#52b788; font-weight:800;">${quizCorrectCount} Doğru</span> • <span style="color:#e07a5f; font-weight:800;">${quizWrongCount} Yanlış</span>`;
  }

  if (quizCorrectCount === 3) {
    if (trophyEl) trophyEl.textContent = "🏆";
    if (titleEl) titleEl.textContent = "Mükemmel Doğa Bilgini!";
  } else if (quizCorrectCount === 2) {
    if (trophyEl) trophyEl.textContent = "🥈";
    if (titleEl) titleEl.textContent = "Harika Başarı!";
  } else if (quizCorrectCount === 1) {
    if (trophyEl) trophyEl.textContent = "🥉";
    if (titleEl) titleEl.textContent = "Güzel Deneme!";
  } else {
    if (trophyEl) trophyEl.textContent = "🌱";
    if (titleEl) titleEl.textContent = "Öğrenmeye Devam!";
  }

  // Kostüm ödülü (3/3 ise)
  if (quizCorrectCount === 3) {
    let unownedCostumes = KARAKTER_KIYAFETLERI.filter(c => c.id !== "none" && !GameState.isCostumeUnlocked(c.id));
    unownedCostumes = unownedCostumes.sort(() => Math.random() - 0.5);
    const rewardsToGive = unownedCostumes.slice(0, 1);
    if (rewardsToGive.length > 0) {
      rewardsToGive.forEach(c => GameState.unlockCostume(c.id));
      showToast(`🎁 Tüm soruları doğru bildin! ${rewardsToGive[0].icon} ${rewardsToGive[0].name} kazandın!`, "success");
    }
  }

  if (summaryBox) {
    summaryBox.classList.remove("hidden");
  }

  const proceedBtn = document.getElementById("btn-quiz-proceed-next");
  if (proceedBtn) {
    proceedBtn.textContent = "🗺️ SONRAKİ ETABA DEVAM ET ⏩";
    proceedBtn.onclick = () => {
      document.getElementById("modal-nature-quiz").classList.remove("active");
      if (timerWrap) timerWrap.style.display = "";
      if (quizProceedAction) {
        quizProceedAction();
      } else {
        proceedToNextStageOnMap(currentQuizStageIndex + 1);
      }
    };
  }

  const mapBtn = document.getElementById("btn-quiz-back-map");
  if (mapBtn) {
    mapBtn.onclick = () => {
      document.getElementById("modal-nature-quiz").classList.remove("active");
      if (timerWrap) timerWrap.style.display = "";
      if (window.showScreen) window.showScreen("screen-map");
      if (window.renderMapScreen) window.renderMapScreen();
    };
  }

  const menuBtn = document.getElementById("btn-quiz-back-menu");
  if (menuBtn) {
    menuBtn.onclick = () => {
      document.getElementById("modal-nature-quiz").classList.remove("active");
      if (timerWrap) timerWrap.style.display = "";
      if (window.showScreen) window.showScreen("screen-menu");
    };
  }
}

function initNatureQuizEvents() {
  const btnA = document.getElementById("quiz-opt-a");
  const btnB = document.getElementById("quiz-opt-b");

  if (btnA) btnA.onclick = () => handleQuizAnswer("A");
  if (btnB) btnB.onclick = () => handleQuizAnswer("B");

  const navMenuBtn = document.getElementById("btn-quiz-nav-menu");
  if (navMenuBtn) {
    navMenuBtn.onclick = () => {
      clearQuizTimer();
      document.getElementById("modal-nature-quiz").classList.remove("active");
      if (window.showScreen) window.showScreen("screen-menu");
    };
  }

  const skipBtn = document.getElementById("btn-quiz-skip");
  if (skipBtn) {
    skipBtn.onclick = () => {
      clearQuizTimer();
      document.getElementById("modal-nature-quiz").classList.remove("active");
      if (quizProceedAction) {
        quizProceedAction();
      } else {
        proceedToNextStageOnMap(currentQuizStageIndex + 1);
      }
    };
  }

  const summaryMenuBtn = document.getElementById("btn-quiz-back-menu");
  if (summaryMenuBtn) {
    summaryMenuBtn.onclick = () => {
      clearQuizTimer();
      document.getElementById("modal-nature-quiz").classList.remove("active");
      if (window.showScreen) window.showScreen("screen-menu");
    };
  }
}

// ============================================================================
// 8. 2D CANVAS KOŞU OYUN MOTORU (ALT VE ÜST ENGELLER & ÇOCUK DOSTU ZORLUK)
// ============================================================================

let canvas, ctx;
let gameRunning = false;
let gameLoopId = null;
let currentLevelNumber = 1;
let score = 0;
let targetScore = 400;
let coinsCollected = 0;
let playerLives = 3;
let maxLives = 3;
let gameSpeed = 3.6;
const MAX_STAGE_SCORES = [1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2700, 3000];
let currentMaxStageScore = 1000;
let levelTotalDurationSeconds = 120; // Kullanıcı Talebi: Tam 2 Dakika (120 sn)
let levelTimeElapsed = 0;
let lastSpawnedObstacleType = "none";
let isGamePaused = false;
let stageFailureStreaks = {}; // Bölüm geçilemeyip tekrarlandığında destek sağlamak için sayaç
let helperAcornSpawned = false; // Tekrarlanan zorlu etapta kurtarıcı palamut bayrağı
let activeClothingBuffs = {
  hat: 0,   // 🧢 Kaşif Şapkası (Yüksek engel koruması)
  vest: 0,  // 🦺 Muhafız Yeleği (Çelik zırh darbe koruması)
  pants: 0  // 👖 İzci Pantolonu (Çeviklik, çift zıplama & mıknatıs)
};

// ============================================================================
// 7.5 KEMERBURGAZ KENT ORMANI DİNAMİK MEVSİMSEL VE ATMOSFERİK HAVA MOTORU
// (Her 2-3 Etapta Bir Değişen: Bahar/Polen, Yağmur/Gölet, Ay Işığı/Gece, Kış/Kar)
// ============================================================================

let weatherParticles = [];

function getStageAtmosphere(stageNum) {
  const s = parseInt(stageNum || 1, 10);
  if (s <= 3) {
    // 🌸 1. DÖNEM (Etap 1-3): Canlı Bahar & Sabah Işıltısı (Mağlova Kapısı & Atlıkarınca)
    return {
      id: "spring",
      name: "Canlı Bahar & Sabah Işıltısı",
      particleType: "leaves_pollen",
      skyColor: "rgba(255, 240, 200, 0.08)",
      hasSunRays: true,
      hasMist: false,
      hasMoon: false,
      hasFrost: false,
      trailBorder: "#52b788"
    };
  } else if (s <= 6) {
    // 🌧️ 2. DÖNEM (Etap 4-6): Yağmurlu Doğa & Alibey Göleti (BELTUR & Macera Parkı)
    return {
      id: "rainy",
      name: "Yağmurlu Doğa & Alibey Göleti",
      particleType: "rain",
      skyColor: "rgba(20, 45, 60, 0.24)",
      hasSunRays: false,
      hasMist: true,
      hasMoon: false,
      hasFrost: false,
      trailBorder: "#2d6a4f"
    };
  } else if (s <= 8) {
    // 🌕 3. DÖNEM (Etap 7-8): Büyülü Alacakaranlık & Ay Işığı (Fauna Alanı & Seyir Kulesi)
    return {
      id: "night",
      name: "Büyülü Alacakaranlık & Ay Işığı",
      particleType: "fireflies",
      skyColor: "rgba(10, 16, 38, 0.44)",
      hasSunRays: false,
      hasMist: false,
      hasMoon: true,
      hasFrost: false,
      trailBorder: "#1e3a8a"
    };
  } else {
    // ❄️ 4. DÖNEM (Etap 9-10): Masalsı Kış & Mağlova Kemeri Büyük Finali
    return {
      id: "winter",
      name: "Masalsı Kış & Mağlova Kemeri",
      particleType: "snow",
      skyColor: "rgba(220, 238, 255, 0.16)",
      hasSunRays: false,
      hasMist: false,
      hasMoon: false,
      hasFrost: true,
      trailBorder: "#cbd5e1"
    };
  }
}

function initWeatherParticles(stageNum) {
  weatherParticles = [];
  const atmos = getStageAtmosphere(stageNum);
  const w = (canvas && canvas.width) ? canvas.width : 420;
  const h = (canvas && canvas.height) ? canvas.height : 840;

  const count = atmos.particleType === "rain" ? 42
              : atmos.particleType === "snow" ? 38
              : atmos.particleType === "fireflies" ? 22
              : 18; // leaves/pollen

  for (let i = 0; i < count; i++) {
    weatherParticles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: atmos.particleType === "rain" ? -(Math.random() * 2 + 3)
        : (Math.random() - 0.5) * 1.5,
      vy: atmos.particleType === "rain" ? (Math.random() * 6 + 9)
        : atmos.particleType === "snow" ? (Math.random() * 1.2 + 0.8)
        : (Math.random() * 0.8 + 0.3),
      size: atmos.particleType === "rain" ? (Math.random() * 10 + 12)
          : atmos.particleType === "snow" ? (Math.random() * 3.5 + 2)
          : atmos.particleType === "fireflies" ? (Math.random() * 3 + 2.5)
          : (Math.random() * 4 + 3),
      phase: Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.5 + 0.5
    });
  }
}

function updateWeatherParticles(w, h, speed, stageNum) {
  const atmos = getStageAtmosphere(stageNum);
  for (let i = 0; i < weatherParticles.length; i++) {
    const p = weatherParticles[i];
    p.phase += 0.04;

    if (atmos.particleType === "rain") {
      p.x += p.vx - (speed * 0.4);
      p.y += p.vy;
      if (p.y > h || p.x < -20) {
        p.x = Math.random() * (w + 60);
        p.y = -20;
      }
    } else if (atmos.particleType === "snow") {
      p.x += Math.sin(p.phase) * 1.2 - (speed * 0.35);
      p.y += p.vy;
      if (p.y > h) {
        p.x = Math.random() * (w + 40);
        p.y = -10;
      }
    } else if (atmos.particleType === "fireflies") {
      p.x += Math.sin(p.phase * 0.7) * 1.0 - (speed * 0.25);
      p.y += Math.cos(p.phase * 0.5) * 0.7;
      if (p.x < -20) p.x = w + 20;
      if (p.y < 50) p.y = h - 120;
      if (p.y > h - 70) p.y = 80;
    } else {
      // Taze yaprak ve polen
      p.x += Math.sin(p.phase) * 1.1 - (speed * 0.38);
      p.y += p.vy * 0.8;
      if (p.y > h || p.x < -20) {
        p.x = Math.random() * (w + 40);
        p.y = -15;
      }
    }
  }
}

// Görsel Varlıklar
const imgBg = new Image(); imgBg.src = "Assets/Sprites/sonsuz_orman.png";
const imgCoin = new Image(); imgCoin.src = "Assets/Sprites/item_coin.png";
const imgLog = new Image(); imgLog.src = "Assets/Sprites/obstacle_log.png";
const imgRock = new Image(); imgRock.src = "Assets/Sprites/obstacle_rock.png";

// Tilki - 7 Aşamalı Gerçek Adım / Ayak Koşu Kareleri
const FOX_ANIM_FRAMES = [
  "Assets/Sprites/Fox_0_delay-0.08s (6).gif",
  "Assets/Sprites/Fox_1_delay-0.08s (7).gif",
  "Assets/Sprites/Fox_2_delay-0.08s (8) 1.gif",
  "Assets/Sprites/Fox_3_delay-0.08s (9).gif",
  "Assets/Sprites/Fox_4_delay-0.08s (10).gif",
  "Assets/Sprites/Fox_5_delay-0.08s (11).gif",
  "Assets/Sprites/Fox_6_delay-0.08s (12).gif"
].map(src => {
  const img = new Image();
  img.src = src;
  return img;
});

// Oyuncu Objesi
let player = {
  x: 65,
  y: 0,
  w: 60,
  h: 60,
  origW: 60,
  origH: 60,
  vy: 0,
  gravity: 0.62,
  jumpStrength: -14.0,
  isGrounded: true,
  wasGrounded: true,
  landingSquash: 0,
  isSliding: false,
  slideTimer: 0,
  invulnerable: 0,
  animTick: 0,
  jumpBuffer: 0,
  img: new Image()
};

let obstacles = [];
let coins = [];
let particles = [];
let snowFootprints = [];
let waterRipples = [];
let winterSnowman = null;
let bgScrollX = 0;
let trailScrollX = 0;
let spawnCooldown = 120;

function startRunnerLevel(levelId) {
  startRunnerGame(levelId);
}
window.startRunnerLevel = startRunnerLevel;
window.startRunnerGame = startRunnerGame;

function startRunnerGame(levelId) {
  // Önceki loop veya geri sayımları temizle (çakışma ve donmayı önleme)
  if (gameLoopId) {
    cancelAnimationFrame(gameLoopId);
    gameLoopId = null;
  }
  clearGameOverCountdown();

  currentLevelNumber = levelId;
  showScreen("screen-game");

  // Canvas boyutlandırma
  canvas = document.getElementById("game-canvas");
  canvas.width = canvas.parentElement.clientWidth || 420;
  canvas.height = canvas.parentElement.clientHeight || 840;
  ctx = canvas.getContext("2d");

  // 🌲 Kademeli & Süreklilik Arz Eden Çocuk Dostu Parkur Süresi (1. Etap: 60sn ısınma, 10. Etap: 150sn büyük final)
  score = 0;
  coinsCollected = 0;
  isGamePaused = false;
  helperAcornSpawned = false;
  const pauseModal = document.getElementById("modal-pause");
  if (pauseModal) pauseModal.classList.remove("active");

  const STAGE_DURATIONS = [60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
  levelTotalDurationSeconds = STAGE_DURATIONS[levelId - 1] || (60 + (levelId - 1) * 10);
  levelTimeElapsed = 0;
  currentMaxStageScore = MAX_STAGE_SCORES[levelId - 1] || 1000;

  // Kemerburgaz Kent Ormanı Mevsimsel & Atmosferik Hava Parçacıklarını Başlat
  initWeatherParticles(levelId);
  sounds.startWeatherAmbience(levelId);
  snowFootprints = [];
  waterRipples = [];
  winterSnowman = null;
  trailScrollX = 0;
  // Ekipman & Kıyafetler: Kahraman oyuna tamamen SIFIRDAN başlar
  // Yalnızca kullanıcının altınla satın aldığı özellikler aktif olur!
  activeClothingBuffs = { hat: 0, vest: 0, pants: 0 };
  
  // Yalnızca bölüm öncesinde altın harcanarak satın alınmışsa buton aktif olur
  inGameReadyBoosters = {
    hat: !!pendingLevelBoosters.hat,
    vest: !!pendingLevelBoosters.vest,
    pants: !!pendingLevelBoosters.pants
  };
  pendingLevelBoosters = { hat: false, vest: false, pants: false };
  boosterSpawnQueue = [];
  coinsCollectedInRun = 0;
  unlockedInRun = { hat: false, vest: false, pants: false };

  // Ekranın sağındaki butonları yalnızca satın alınmışsa göster
  ['hat', 'vest', 'pants'].forEach(t => {
    const b = document.getElementById(`in-game-booster-${t}`);
    if (b) {
      if (inGameReadyBoosters[t]) {
        b.classList.remove("hidden");
      } else {
        b.classList.add("hidden");
      }
    }
  });

  // Runner üzerindeki tüm kıyafetleri başlangıçta gizle (sıfırdan başlangıç)
  const wearHat = document.getElementById("runner-wear-hat");
  const wearVest = document.getElementById("runner-wear-vest");
  const wearPants = document.getElementById("runner-wear-pants");
  if (wearHat) wearHat.classList.add("hidden");
  if (wearVest) wearVest.classList.add("hidden");
  if (wearPants) wearPants.classList.add("hidden");

  lastSpawnedObstacleType = "none";
  // 🚀 7-15 Yaş Çocuk Dostu Kademeli Hız Dengesi (1. Bölüm 2.30 ile rahat ve keyifli başlar, kademeli hızlanır)
  const stageSpeeds = [2.30, 2.48, 2.68, 2.90, 3.15, 3.40, 3.65, 3.90, 4.15, 4.40];
  gameSpeed = stageSpeeds[levelId - 1] || (2.30 + (levelId - 1) * 0.22);
  updateClothingHUD();

  const heroId = GameState.getSelectedHero();
  const hero = KAHRAMANLAR.find(h => h.id === heroId) || KAHRAMANLAR[0];
  player.img.src = hero.image;

  // Gelişim Vadisi Kamp Güçlendirmeleri (Puanla Açılan 4 Büyük Yetenek)
  const tentBonus = GameState.getTentLevel(); // 0-3
  const fireBonus = GameState.getCampfireLevel(); // 0-3
  const bootsBonus = GameState.getBootsLevel(); // 0-3
  const compassBonus = GameState.getCompassLevel(); // 0-3
  const heroBonus = hero.id === 3 ? 1 : 0;
  // 3. Seviye Çadır kahramana kalıcı +1 Ekstra Can (Toplam 4 Can) kazandırır!
  const tentExtraLife = tentBonus >= 3 ? 1 : 0;

  maxLives = 3 + heroBonus + tentExtraLife;
  playerLives = maxLives;

  // 1. Dinlenme Çadırı: Seviye 1: 4s, Seviye 2: 8s, Seviye 3: 12s Koruma Kalkanı
  const shieldTimes = [0, 4, 8, 12];
  player.shieldTimer = shieldTimes[tentBonus] || 0;
  player.hasShield = player.shieldTimer > 0;

  // 2. Kamp Ateşi: Seviye 1: 5s, Seviye 2: 10s, Seviye 3: 16s Manyetik Çekim
  const magnetTimes = [0, 5, 10, 16];
  player.magnetTimer = magnetTimes[fireBonus] || 0;

  // 3. Orman İzcisi: Seviye 1: 5s, Seviye 2: 10s, Seviye 3: 16s Süzülme ve Çeviklik
  const glideTimes = [0, 5, 10, 16];
  player.glideTimer = glideTimes[bootsBonus] || 0;
  player.canDoubleJump = bootsBonus >= 3;
  player.hasDoubleJumped = false;
  player.maxSlideTimer = bootsBonus >= 2 ? 90 : 76;

  // 4. Orman Pusulası: Koşuda ivme ve can simidi kurtarma yeteneği
  player.compassTimer = compassBonus >= 1 ? (compassBonus === 1 ? 6 : 12) : 0;
  player.compassUsed = false;

  // Bot zıplama bonusu (-0.5 zıplama gücü)
  const jumpBonus = bootsBonus >= 1 ? -0.5 : 0;

  if (hero.id === 2) {
    player.jumpStrength = -14.8 + jumpBonus;
    player.gravity = 0.58; // Maymun: Çevik ve esnek
  } else if (hero.id === 3) {
    player.jumpStrength = -13.8 + jumpBonus;
    player.gravity = 0.64; // Muhafız Kaplan: Güçlü ve dayanıklı sıçrama
  } else if (hero.id === 4) {
    player.jumpStrength = -14.6 + jumpBonus;
    player.gravity = 0.56; // Kızıl Sincap: Çevik ve süzülen sıçrayış
  } else if (hero.id === 5) {
    player.jumpStrength = -15.0 + jumpBonus;
    player.gravity = 0.48; // Bilge Baykuş: Düşük yerçekimi ile kanat süzülmesi
  } else {
    player.jumpStrength = -14.2 + jumpBonus;
    player.gravity = 0.60; // Tilki: Dengeli ve akıcı koşucu
  }

  // Zemin pozisyonu (Ekranın altından 90px yükseklikte sabit orman patikası)
  const groundY = canvas.height - 90;
  player.w = player.origW;
  player.h = player.origH;
  player.y = groundY - player.h;
  player.vy = 0;
  player.isGrounded = true;
  player.wasGrounded = true;
  player.landingSquash = 0;
  player.isSliding = false;
  player.slideTimer = 0;
  player.invulnerable = 0;
  player.animTick = 0;

  obstacles = [];
  coins = [];
  particles = [];
  spawnCooldown = 90;

  // Saha Kartı Gösterimi (Bölümün ilk 3.5 saniyesi)
  const spotCard = document.getElementById("game-spot-card");
  const etap = RESMI_ETAPLAR[levelId - 1] || RESMI_ETAPLAR[0];
  document.getElementById("spot-card-title").textContent = etap.title;
  document.getElementById("spot-card-desc").textContent = etap.desc;
  document.getElementById("spot-card-amenities").textContent = etap.facilities;

  spotCard.classList.remove("hidden");
  setTimeout(() => spotCard.classList.add("hidden"), 3500);

  updateHUD();
  updateHUDPerks();

  // 1. Bölüm İlk Açılış Step-by-Step Koşu Eğitimi (Tutorial)
  if (levelId === 1 && !GameState.isTutorialCompleted()) {
    gameRunning = false;
    openTutorialModal(() => {
      gameRunning = true;
      if (gameLoopId) cancelAnimationFrame(gameLoopId);
      gameLoopId = requestAnimationFrame(gameLoop);
    });
    return;
  }

  gameRunning = true;
  if (gameLoopId) cancelAnimationFrame(gameLoopId);
  gameLoopId = requestAnimationFrame(gameLoop);
}

function openTutorialModal(onComplete) {
  const modal = document.getElementById("modal-tutorial");
  if (!modal) {
    if (onComplete) onComplete();
    return;
  }
  modal.classList.add("active");

  const startBtn = document.getElementById("btn-tutorial-start");
  if (startBtn) {
    startBtn.onclick = () => {
      modal.classList.remove("active");
      GameState.setTutorialCompleted(true);
      showToast("🌲 Koşu eğitimi tamamlandı! İyi eğlenceler!", "success");
      if (onComplete) onComplete();
    };
  }
}

// Engeller ve Altınlar Üretimi (Uyumlu Mesafeler ve Yüksek Altından Kayma Engelleri)
function handleSpawning() {
  spawnCooldown--;
  if (spawnCooldown <= 0) {
    const groundY = canvas.height - 90;

    // Kademeli Engel Yoğunluğu: 1. Etap %42 sakin -> 10. Etap %68 yoğun
    const spawnChance = Math.min(0.68, 0.42 + (currentLevelNumber * 0.026));
    const spawnTypeRoll = Math.random();

    if (spawnTypeRoll < spawnChance) {
      // ENGEL OLUŞTURMA: Zemin (Zıpla) veya Asılı (Eğil/Kay)
      // 1. Etapta daha çok zıplama (%22 kayma), ilerledikçe zengin denge (%45 kayma)
      const slideProb = currentLevelNumber === 1 ? 0.22 : Math.min(0.46, 0.22 + (currentLevelNumber * 0.024));
      const isSlideObstacle = Math.random() < slideProb;

      if (isSlideObstacle) {
        // YÜKSEK ASILI ENGEL:
        // Sezon ve etaba göre çeşitlilik:
        // Etap 1-3: Asılı Ahşap Kütük veya Macera Halatı
        // Etap 4-6: Macera Parkı Lastik Salıncak veya Ahşap Kiriş
        // Etap 7-10: Lastik Salıncak veya Asılı Kütük
        let overheadType = "overhead_log";
        const roll = Math.random();
        if (currentLevelNumber <= 3) {
          overheadType = roll < 0.5 ? "overhead_log" : "rope";
        } else if (currentLevelNumber <= 6) {
          overheadType = roll < 0.5 ? "tire_swing" : "overhead_log";
        } else {
          overheadType = roll < 0.55 ? "tire_swing" : "overhead_log";
        }

        const obsH = overheadType === "tire_swing" ? 34 : 26;
        const clearance = 38; // Eğilmeden/kaymadan geçilemez (Karakter boyu 60px, engel alt sınırı 38px)
        obstacles.push({
          type: overheadType,
          x: canvas.width + 20,
          y: groundY - (clearance + obsH), // groundY - (clearance + obsH)
          w: overheadType === "tire_swing" ? 54 : (currentLevelNumber <= 3 ? 60 : 70),
          h: obsH,
          passed: false
        });
        lastSpawnedObstacleType = "overhead";

        // 🪙 ENGEL ALTINDA TEK ALTIN (KAYARAK ALINIR - Kullanıcı Aktivitesi)
        if (Math.random() < 0.78) {
          coins.push({
            type: "coin",
            x: canvas.width + 42,
            y: groundY - 26, // Yer seviyesi, kayarak süzülen kahraman engelin altından toplar!
            w: 24,
            h: 24,
            seed: Math.random() * 100,
            collected: false
          });
        } else if (currentLevelNumber >= 2 && Math.random() < 0.65) {
          coins.push({
            type: "star",
            x: canvas.width + 42,
            y: groundY - 26,
            w: 24,
            h: 24,
            collected: false
          });
        }
      } else {
        // ZEMİN ENGELİ: Kemerburgaz Doğal Çeşitliliği
        // 1. Ahşap Parkur Çiti (Hurdle)
        // 2. Yosunlu Orman Kayası (Mossy Boulder)
        // 3. Dev Mantarlı Ağaç Kökü (Gnarled Root)
        // 4. Çamur & Balçık Birikintisi (Mud Puddle)
        // 5. Sevimli Kardan Adam (Snowman - Kış Etapları)
        let groundType = "mossy_boulder";
        const r = Math.random();
        if (currentLevelNumber <= 3) {
          groundType = r < 0.55 ? "mossy_boulder" : "hurdle";
        } else if (currentLevelNumber <= 6) {
          groundType = r < 0.40 ? "mud_puddle" : (r < 0.70 ? "hurdle" : "gnarled_root");
        } else if (currentLevelNumber <= 8) {
          groundType = r < 0.50 ? "gnarled_root" : "mossy_boulder";
        } else {
          // ❄️ Etap 9 ve 10 (Masalsı Kış): Kardan Adam (%45 ihtimal), Kış Kayası veya Parkur Çiti
          groundType = r < 0.45 ? "snowman" : (r < 0.75 ? "mossy_boulder" : "hurdle");
        }

        let obsW = 40;
        let obsH = 34;
        if (groundType === "hurdle") {
          obsW = 44;
          obsH = 36;
        } else if (groundType === "puddle" || groundType === "mud_puddle") {
          obsW = 56;
          obsH = 20;
        } else if (groundType === "snowman") {
          obsW = 44;
          obsH = 48;
        } else if (groundType === "gnarled_root") {
          obsW = 46;
          obsH = 35;
        } else {
          // mossy_boulder
          const size = currentLevelNumber === 1 ? 34 : Math.min(46, 34 + Math.floor(currentLevelNumber * 1.3));
          obsW = size;
          obsH = size;
        }

        obstacles.push({
          type: groundType,
          x: canvas.width + 20,
          y: groundY - obsH,
          w: obsW,
          h: obsH,
          passed: false
        });
        lastSpawnedObstacleType = "ground";

        // 🪙 ENGEL ÜSTÜNDE TEK ALTIN (ZIPLAYARAK ALINIR - Kullanıcı Aktivitesi)
        if (Math.random() < 0.78) {
          coins.push({
            type: "coin",
            x: canvas.width + 24,
            y: groundY - obsH - 58, // Engelin üstünden zıplama tepe noktasına hafif yukarı alındı
            w: 24,
            h: 24,
            seed: Math.random() * 100,
            collected: false
          });
        } else if (currentLevelNumber >= 2 && Math.random() < 0.65) {
          coins.push({
            type: "star",
            x: canvas.width + 24,
            y: groundY - obsH - 58,
            w: 24,
            h: 24,
            collected: false
          });
        }
      }

      // PROFESYONEL VE RİTMİK ENGEL ARALIĞI:
      // 1. Etap: ~90-105 frame (1.5 - 1.8 saniye canlı reaksiyon payı)
      // 10. Etap: ~55-70 frame (0.9 - 1.2 saniye heyecanlı profesyonel akış)
      const baseGap = Math.max(54, 112 - (currentLevelNumber * 5.5));
      let extraBuffer = Math.floor(Math.random() * (currentLevelNumber <= 3 ? 16 : 10));
      if (lastSpawnedObstacleType === "overhead") {
        extraBuffer += 12; // Kaymadan sonra doğrulmak için ilave pay
      }
      spawnCooldown = Math.floor(baseGap + extraBuffer);
    } else {
      // ÖDÜL VE TOPLANABİLİR ÜRETİMİ (Kıyafet Sandığı, Yıldız veya Boş Alanda Tek Altın)
      const rewardRoll = Math.random();

      // Kullanıcının Bölüm Başında Altınla Aldığı Özellikler Parkurda Havada Çıkar (Zıplayarak Alınır)
      for (let k = boosterSpawnQueue.length - 1; k >= 0; k--) {
        const bItem = boosterSpawnQueue[k];
        if (levelTimeElapsed >= bItem.spawnAtTime) {
          boosterSpawnQueue.splice(k, 1);
          coins.push({
            type: "clothing_crate",
            clothingId: bItem.type,
            x: canvas.width + 35,
            y: groundY - 75, // Havada süzülen hava özelliği (Kahraman zıplayarak erişir!)
            w: 36,
            h: 36,
            collected: false
          });
        }
      }

      // 🌰 DESTEK MEŞE PALAMUDU:
      // Kullanıcı kuralı: Palamut gibi ek altın ödülleri bölümlerde çok sık çıkmamalı.
      // Özellikle aynı bölüm birden fazla defa oynanıp geçilememişse destek olarak ortaya çıkar!
      if ((stageFailureStreaks[currentLevelNumber] || 0) >= 1 && !helperAcornSpawned && levelTimeElapsed >= (levelTotalDurationSeconds * 0.45)) {
        helperAcornSpawned = true;
        coins.push({
          type: "golden_acorn",
          isHelper: true,
          x: canvas.width + 30,
          y: groundY - 60,
          w: 30,
          h: 30,
          collected: false
        });
        showToast("🌰 Destek Meşe Palamudu Göründü! Can ve puan desteği seni bekliyor!", "info");
      } else if (rewardRoll < 0.03) {
        // Çok nadir normal altın palamut (%3 ihtimal)
        coins.push({
          type: "golden_acorn",
          isHelper: false,
          x: canvas.width + 30,
          y: groundY - 55,
          w: 26,
          h: 26,
          collected: false
        });
      } else if (currentLevelNumber >= 2 && rewardRoll < 0.20) {
        // Taktiksel Tek Yıldız (Orta veya Yüksek Hava)
        const starY = Math.random() < 0.5 ? (groundY - 65) : (groundY - 110);
        coins.push({
          type: "star",
          x: canvas.width + 25,
          y: starY,
          w: 24,
          h: 24,
          collected: false
        });
      } else {
        // 🪙 TEK ALTIN (BOŞ ALANDA DİNAMİK KONUMLANDIRMA: Yerde, Zıplama Hizasında veya Yüksek Havada)
        // Sabit 3'lü yerine tek altın olarak konumlanır, kullanıcı aktivitesini artırır
        const heightRoll = Math.random();
        let coinY;
        if (heightRoll < 0.38) {
          coinY = groundY - 26; // Yerde: Düz koşarak veya kayarak toplanır
        } else if (heightRoll < 0.72) {
          coinY = groundY - 78; // Orta havada: Küçük sıçrama ile toplanır
        } else {
          coinY = groundY - 122; // Yüksek havada: Tepe sıçrayış veya çift zıplama ile toplanır
        }

        coins.push({
          type: "coin",
          x: canvas.width + 25,
          y: coinY,
          w: 24,
          h: 24,
          seed: Math.random() * 100,
          collected: false
        });
      }

      // Kaşif Sırt Çantası Seviye 2+: Seyrek Meşe Palamudu Desteği (%6 ihtimal)
      const packBonus = GameState.getBackpackLevel();
      if (packBonus >= 2 && Math.random() < 0.06) {
        coins.push({
          type: "golden_acorn",
          isHelper: false,
          x: canvas.width + 120,
          y: groundY - 58,
          w: 28,
          h: 28,
          collected: false
        });
      }

      spawnCooldown = Math.floor(70 + Math.random() * 35);
    }
  }
}

function gameLoop() {
  if (!gameRunning) return;

  try {
    updatePhysics();
    renderCanvas();
  } catch (err) {
    console.error("GameLoop frame error:", err);
  }

  if (gameRunning) {
    gameLoopId = requestAnimationFrame(gameLoop);
  }
}

function updatePhysics() {
  const groundY = canvas.height - 90;

  // 1. Zıplama Girdisi Ön Belleği (Jump Buffer zaman aşımı)
  if (player.jumpBuffer > 0) player.jumpBuffer--;

  // 2. Çocuk Dostu Yerçekimi & Tepe Noktası Süzülmesi (Apex Hang-Time)
  // Engele yakın mesafede zıplansa dahi tepe noktasında hafifçe süzülerek engelin altından akmasına fırsat tanır!
  let effGravity = player.gravity;
  if (!player.isGrounded && Math.abs(player.vy) < 3.2) {
    effGravity *= 0.50; // Tepe noktasında yerçekimi %50 hafifler
  }
  player.vy += effGravity;
  if (player.vy > 9.8) player.vy = 9.8; // Aşırı sert ve hızlı çakılmayı önle
  player.y += player.vy;

  if (player.y >= groundY - player.h) {
    player.y = groundY - player.h;
    player.vy = 0;
    player.isGrounded = true;

    // Yere basmadan hemen önce zıplamaya basılmışsa anında zıpla (Jump Buffer)
    if (player.jumpBuffer > 0) {
      player.jumpBuffer = 0;
      playerJump();
      return;
    }

    // Yere ilk basış anı (İniş yaylanması, toz, kar ve yağmur fiziği)
    if (!player.wasGrounded) {
      player.landingSquash = 6;
      const atmos = getStageAtmosphere(currentLevelNumber);

      if (atmos.id === "winter") {
        // ❄️ Karda iniş: Beyaz kabarık kar tozu fışkırması & pati izi baskısı
        for (let k = 0; k < 8; k++) {
          particles.push({
            x: player.x + 4 + (k * 4),
            y: groundY - 2,
            vx: (k - 3.5) * 1.6,
            vy: -1.6 - Math.random() * 2.2,
            size: 3 + Math.random() * 2.5,
            alpha: 0.9,
            color: "#ffffff"
          });
        }
        // İki ayak basma izi (hafif çukur)
        snowFootprints.push({ x: player.x + 8, y: groundY + 2.5, rx: 6, ry: 3, alpha: 0.85, isPaws: true });
        snowFootprints.push({ x: player.x + 24, y: groundY + 2.5, rx: 5.5, ry: 2.8, alpha: 0.85, isPaws: true });
        triggerHaptic("selection", 15);
      } else if (atmos.id === "rainy") {
        // 🌧️ Yağmurda su birikintisine iniş: Mavi su damlası sıçramaları ve genişleyen dalga halkaları
        for (let k = 0; k < 8; k++) {
          particles.push({
            x: player.x + 4 + (k * 4),
            y: groundY - 2,
            vx: (k - 3.5) * 1.8,
            vy: -2.2 - Math.random() * 2.5,
            size: 2.2 + Math.random() * 2,
            alpha: 0.85,
            color: Math.random() < 0.5 ? "#7dd3fc" : "#38bdf8"
          });
        }
        waterRipples.push({ x: player.x + 12, y: groundY + 1, r: 3, maxR: 16, alpha: 0.75, lw: 1.8 });
        waterRipples.push({ x: player.x + 26, y: groundY + 1, r: 2, maxR: 13, alpha: 0.65, lw: 1.5 });
        triggerHaptic("selection", 15);
      } else {
        // Normal toprak iniş tozu
        for (let k = 0; k < 5; k++) {
          particles.push({
            x: player.x + 6 + (k * 10),
            y: groundY - 2,
            vx: (k - 2) * 1.5,
            vy: -0.8 - Math.random() * 0.9,
            size: 3 + Math.random() * 2.5,
            alpha: 0.8,
            color: "#d7ccc8"
          });
        }
      }
    }

    // 🐾 GERÇEKÇİ ZEMİN KOŞU ADIMLARI, YAĞMUR VE KAR ETKİLEŞİMİ
    if (!player.isSliding) {
      player.animTick = (player.animTick || 0) + 1;
      const atmos = getStageAtmosphere(currentLevelNumber);

      if (atmos.id === "winter") {
        // Karda koşarken: Beyaz kar tozu savurma ve ardışık pati izi bırakma
        if (player.animTick % 7 === 0) {
          particles.push({
            x: player.x + 6 + (Math.random() - 0.5) * 6,
            y: groundY - 1,
            vx: -(gameSpeed * 0.45 + Math.random() * 1.2),
            vy: -0.6 - Math.random() * 0.8,
            size: 2.5 + Math.random() * 2,
            alpha: 0.85,
            color: "#ffffff"
          });
          const stepOffset = (player.animTick % 14 === 0) ? -1.5 : 1.5;
          snowFootprints.push({ x: player.x + 14, y: groundY + 2.5 + stepOffset, rx: 4.5, ry: 2.2, alpha: 0.8, isPaws: true });
        }
      } else if (atmos.id === "rainy") {
        // Yağmurda koşarken: Küçük su sıçramaları ve ayak izi su halkası
        if (player.animTick % 6 === 0) {
          particles.push({
            x: player.x + 6 + (Math.random() - 0.5) * 6,
            y: groundY - 1,
            vx: -(gameSpeed * 0.4 + Math.random()),
            vy: -1.0 - Math.random() * 1.4,
            size: 1.8 + Math.random() * 1.5,
            alpha: 0.75,
            color: "#bae6fd"
          });
          waterRipples.push({ x: player.x + 8, y: groundY + 1, r: 2, maxR: 9, alpha: 0.6, lw: 1.2 });
        }
      } else {
        // Toprak / çimen parkur adım tozu
        if (player.animTick % 7 === 0) {
          particles.push({
            x: player.x + 6 + (Math.random() - 0.5) * 6,
            y: groundY - 1,
            vx: -(gameSpeed * 0.45 + Math.random() * 1.4),
            vy: -0.4 - Math.random() * 0.8,
            size: 2.2 + Math.random() * 2.2,
            alpha: 0.65,
            color: Math.random() < 0.6 ? "#d4a373" : (Math.random() < 0.5 ? "#52b788" : "#8d6e63")
          });
        }
      }
    }
  } else {
    player.isGrounded = false;
  }
  player.wasGrounded = player.isGrounded;

  if (player.landingSquash > 0) {
    player.landingSquash--;
  }

  // Mevsimsel Hava ve Atmosfer Parçacıklarını Güncelle
  updateWeatherParticles(canvas.width, canvas.height, gameSpeed, currentLevelNumber);

  // Kayma (Slide) Sayacı ve Durumu
  if (player.isSliding) {
    player.slideTimer--;
    const atmos = getStageAtmosphere(currentLevelNumber);

    if (player.slideTimer % 3 === 0) {
      if (atmos.id === "winter") {
        // Karda kayma: Kar yarığı ve beyaz püskürme
        snowFootprints.push({ x: player.x + 18, y: groundY + 2.5, rx: 7, ry: 2, alpha: 0.75, isSlide: true });
        particles.push({
          x: player.x + Math.random() * 10,
          y: groundY - 2,
          vx: -3 - Math.random() * 2.5,
          vy: -0.8 - Math.random() * 1.2,
          size: 3 + Math.random() * 2.5,
          alpha: 0.85,
          color: "#ffffff"
        });
      } else if (atmos.id === "rainy") {
        // Islak zeminde kayma: Su dalgası fışkırması
        particles.push({
          x: player.x + Math.random() * 10,
          y: groundY - 2,
          vx: -3 - Math.random() * 2,
          vy: -1.2 - Math.random() * 1.4,
          size: 2.4 + Math.random() * 2,
          alpha: 0.8,
          color: "#7dd3fc"
        });
      } else {
        particles.push({
          x: player.x + Math.random() * 10,
          y: groundY - 2,
          vx: -3 - Math.random() * 2,
          vy: -0.4 - Math.random() * 0.8,
          size: 3 + Math.random() * 3,
          alpha: 0.8,
          color: "#cfbba6"
        });
      }
    }

    if (player.slideTimer <= 0) {
      // Çocuk Dostu Akıllı Koruma: Eğer kahraman yüksek bir engelin altındaysa engel geçilene kadar ayağa kalkmaz!
      const isUnderHighObstacle = obstacles.some(obs => {
        const isHigh = (obs.type === "rope" || obs.type === "overhead_log" || obs.type === "tire_swing" || obs.type === "overhead_beam");
        return isHigh && (obs.x - 35 <= player.x + player.w && obs.x + obs.w + 15 >= player.x);
      });

      if (!isUnderHighObstacle && !player.isHoldingSlide) {
        player.isSliding = false;
        player.h = player.origH;
        player.w = player.origW;
        player.y = groundY - player.h;
      }
    }
  }

  // Kıyafet Geçici Güçleri Zaman Sayacı
  if (activeClothingBuffs.hat > 0) {
    activeClothingBuffs.hat -= 1 / 60;
    if (activeClothingBuffs.hat <= 0) {
      activeClothingBuffs.hat = 0;
      showToast("🧢 Şapka koruma süresi sona erdi!", "info");
    }
  }
  if (activeClothingBuffs.vest > 0) {
    activeClothingBuffs.vest -= 1 / 60;
    if (activeClothingBuffs.vest <= 0) {
      activeClothingBuffs.vest = 0;
      showToast("🦺 Çelik zırh koruma süresi sona erdi!", "info");
    }
  }
  if (activeClothingBuffs.pants > 0) {
    activeClothingBuffs.pants -= 1 / 60;
    if (activeClothingBuffs.pants <= 0) {
      activeClothingBuffs.pants = 0;
      showToast("👖 Çeviklik ve mıknatıs gücü sona erdi!", "info");
    }
  }
  updateClothingHUD();

  if (player.invulnerable > 0) player.invulnerable--;

  // Gelişim Vadisi Süreli Güçlendirmelerin Geri Sayımı
  let perkStateChanged = false;
  if (player.shieldTimer > 0) {
    player.shieldTimer -= 1 / 60;
    if (player.shieldTimer <= 0) {
      player.shieldTimer = 0;
      player.hasShield = false;
      perkStateChanged = true;
    }
  }
  if (player.magnetTimer > 0) {
    player.magnetTimer -= 1 / 60;
    if (player.magnetTimer <= 0) {
      player.magnetTimer = 0;
      perkStateChanged = true;
    }
  }
  if (player.glideTimer > 0) {
    player.glideTimer -= 1 / 60;
    if (player.glideTimer <= 0) {
      player.glideTimer = 0;
      player.canDoubleJump = false;
      perkStateChanged = true;
    }
  }
  if (perkStateChanged) updateHUDPerks();

  // Parçacıkların Hareketi
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= 0.035;
    if (p.alpha <= 0) particles.splice(i, 1);
  }

  // Arka Plan ve Zemin Kayması
  bgScrollX -= gameSpeed * 0.7;
  trailScrollX -= gameSpeed;

  // ☃️ Kış Etapları Bitiş Çizgisi İçin Neşeli Kardan Adam Üretimi (Etap 9 ve 10)
  if ((currentLevelNumber === 9 || currentLevelNumber === 10) && !winterSnowman) {
    const remainingSec = Math.max(0, Math.ceil(levelTotalDurationSeconds - levelTimeElapsed));
    if (remainingSec <= 9) {
      winterSnowman = {
        x: canvas.width + 80,
        armAngle: 0,
        waveDir: 1,
        cheerBurst: false
      };
    }
  }

  // Objelerin Üretimi
  handleSpawning();

  // Engeller Hareketi & Çarpışma Testi
  for (let i = obstacles.length - 1; i >= 0; i--) {
    const obs = obstacles[i];
    obs.x -= gameSpeed;

    // Engel geçildiğinde puan kazanımı (Maksimum Bölüm Puanı Tavanı ile)
    if (!obs.passed && obs.x < player.x) {
      obs.passed = true;
      score = Math.min(currentMaxStageScore, score + 35);
      updateHUD();
    }

    // Çocuk Dostu Hassas Çarpışma Kontrolü (Geniş Paylar)
    if (player.invulnerable <= 0 && checkCollision(player, obs)) {
      try {
        if (obs.type === "snowman") {
          sounds.playSnowPuff();
          for (let k = 0; k < 15; k++) {
            particles.push({
              x: obs.x + obs.w * 0.5 + (Math.random() - 0.5) * 16,
              y: obs.y + obs.h * 0.5 + (Math.random() - 0.5) * 16,
              vx: (Math.random() - 0.5) * 6.5,
              vy: -2 - Math.random() * 3.5,
              size: 3.5,
              alpha: 0.95,
              color: k % 3 === 0 ? "#ffffff" : (k % 3 === 1 ? "#bae6fd" : "#ea580c")
            });
          }
        } else if (obs.type === "mud_puddle" || obs.type === "puddle") {
          sounds.playSplash();
          for (let k = 0; k < 14; k++) {
            particles.push({
              x: player.x + player.w * 0.5 + (Math.random() - 0.5) * 16,
              y: canvas.height - 90 - 2,
              vx: (Math.random() - 0.5) * 5.5,
              vy: -1.6 - Math.random() * 2.8,
              size: 3.0,
              alpha: 0.9,
              color: k % 2 === 0 ? "#5c3317" : "#38bdf8"
            });
          }
        }
        playerTakesDamage();
        if (!gameRunning) return;
      } catch (err) {
        console.error("playerTakesDamage hatası:", err);
      }
    }

    if (obs.x < -70) obstacles.splice(i, 1);
  }

  // Altınlar, Yıldızlar ve Kıyafet Sandıkları Hareketi & Toplama
  const activeHeroId = GameState.getSelectedHero();
  for (let i = coins.length - 1; i >= 0; i--) {
    const coin = coins[i];
    coin.x -= gameSpeed;

    // Altınların havada ve zeminde sabit durmaması için dinamik süzülme/salınım
    if (!coin.seed) coin.seed = (coin.x * 0.05) % 100;
    const floatTime = (Date.now() * 0.005) + coin.seed;
    coin.bob = Math.sin(floatTime * 3.0) * 4.5;

    // Manyetik Altın ve Yıldız Çekimi (Kızıl Sincap veya Kamp Ateşi Süresi VEYA İzci Pantolonu)
    const pantsMagnet = activeClothingBuffs.pants > 0 ? 190 : 0;
    const campMagnet = player.magnetTimer > 0 ? 150 : 0;
    const baseMagnet = activeHeroId === 4 ? 140 : 0;
    const magnetRadius = Math.max(baseMagnet, pantsMagnet, campMagnet);
    if (magnetRadius > 0 && !coin.collected) {
      const pCenterX = player.x + player.w * 0.5;
      const pCenterY = player.y + player.h * 0.5;
      const cCenterX = coin.x + coin.w * 0.5;
      const cCenterY = coin.y + coin.h * 0.5;
      const dx = pCenterX - cCenterX;
      const dy = pCenterY - cCenterY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < magnetRadius) {
        coin.x += dx * 0.20;
        coin.y += dy * 0.20;
        if (Math.random() < 0.2) {
          particles.push({
            x: coin.x + 12,
            y: coin.y + 12,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: 2,
            alpha: 0.6,
            color: activeClothingBuffs.pants > 0 ? "#38bdf8" : "#ffd166"
          });
        }
      }
    }

    // Eşya Toplama (Altın, Meşe Palamudu, Yıldız, Kıyafet Sandığı)
    if (!coin.collected && checkCoinPickup(player, coin)) {
      coin.collected = true;
      sounds.playCollect();

      if (coin.type === "golden_acorn") {
        if (coin.isHelper) {
          // 🌰 TEKRAR EDİLEN ZORLU ETAP DESTEĞİ:
          // Canı eksikse +1 Can yeniler, tamsa kalkan verir + 150 Puan & 3 sn Dokunulmazlık + 5 Altın
          if (playerLives < maxLives) {
            playerLives = Math.min(maxLives, playerLives + 1);
            sounds.playLifeUp();
            showToast("❤️ +1 Can Desteği Alındı! Yola devam!", "success");
          } else {
            player.hasShield = true;
            showToast("🛡️ Koruyucu Kalkan Devrede! Harika gidiyorsun!", "success");
          }
          score = Math.min(currentMaxStageScore, score + 150);
          coinsCollected += 5;
          GameState.addCoins(5);
          player.invulnerable = 180;
        } else {
          // Normal Altın Palamut
          score = Math.min(currentMaxStageScore, score + 120);
          coinsCollected += 5;
          GameState.addCoins(5);
          player.invulnerable = 180;
          showToast("✨ Altın Meşe Palamudu! +120 Skor & 🛡️ Dokunulmazlık!", "success");
        }

        for (let k = 0; k < 10; k++) {
          particles.push({
            x: coin.x + 14,
            y: coin.y + 14,
            vx: (Math.random() - 0.5) * 6,
            vy: (Math.random() - 0.5) * 6,
            size: 4,
            alpha: 1.0,
            color: "#ffd166"
          });
        }
      } else if (coin.type === "star") {
        // 🌟 ORMAN PUAN YILDIZI (Taktiksel Zıplama/Kayma Puanı)
        score = Math.min(currentMaxStageScore, score + 50);
        showToast("⭐ Orman Puan Yıldızı! +50 Puan!", "success");
        for (let k = 0; k < 8; k++) {
          particles.push({
            x: coin.x + 12,
            y: coin.y + 12,
            vx: (Math.random() - 0.5) * 5,
            vy: (Math.random() - 0.5) * 5,
            size: 3.5,
            alpha: 1.0,
            color: k % 2 === 0 ? "#ffd166" : "#4ade80"
          });
        }
      } else if (coin.type === "clothing_crate") {
        // 🎁 KAŞİF HAVADAN TOPLANAN KIYAFET ÖZELLİĞİ (Şapka, Yelek, Pantolon)
        const cId = coin.clothingId;
        score = Math.min(currentMaxStageScore, score + 50);

        // Sağ kenardaki dokunmatik butonu da tüket ve gizle (zaten alındı)
        inGameReadyBoosters[cId] = false;
        const boosterBtn = document.getElementById(`in-game-booster-${cId}`);
        if (boosterBtn) boosterBtn.classList.add("hidden");

        if (cId === "hat") {
          activeClothingBuffs.hat = 20;
          showToast("🧢 Kaşif Şapkası Havada Yakalandı! (20 sn Yüksek Engel Koruması)", "success");
        } else if (cId === "vest") {
          activeClothingBuffs.vest = 20;
          showToast("🦺 Muhafız Yeleği Havada Yakalandı! (20 sn Çelik Zırh & Koruma)", "success");
        } else if (cId === "pants") {
          activeClothingBuffs.pants = 20;
          showToast("👖 İzci Pantolonu Havada Yakalandı! (20 sn Çift Zıplama & Mıknatıs)", "success");
        }

        // Parıltı patlaması (Kendi renginde)
        for (let k = 0; k < 15; k++) {
          particles.push({
            x: coin.x + 18,
            y: coin.y + 18,
            vx: (Math.random() - 0.5) * 7,
            vy: (Math.random() - 0.5) * 7,
            size: 4.5,
            alpha: 1.0,
            color: cId === "hat" ? "#38bdf8" : (cId === "vest" ? "#fb923c" : "#4ade80")
          });
        }
        updateClothingHUD();
      } else {
        const fireLevel = GameState.getCampfireLevel();
        const mult = fireLevel >= 3 ? 3 : (fireLevel >= 2 ? 2 : 1);
        coinsCollected += mult;
        coinsCollectedInRun += mult;
        score = Math.min(currentMaxStageScore, score + (75 * mult));
        GameState.addCoins(mult);
        checkInRunClothingRewards(coinsCollectedInRun);

        // Altın toplama kıvılcımı
        for (let k = 0; k < 4; k++) {
          particles.push({
            x: coin.x + 12,
            y: coin.y + 12,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4,
            size: 3,
            alpha: 1.0,
            color: "#ffd166"
          });
        }
      }

      updateHUD();
      updateHUDPerks();

      // HUD Punch Animasyonu
      const hudCoins = document.getElementById("game-hud-coins");
      if (hudCoins) {
        hudCoins.style.transform = "scale(1.3)";
        setTimeout(() => hudCoins.style.transform = "scale(1)", 130);
      }
    }

    if (coin.x < -30 || coin.collected) coins.splice(i, 1);
  }

  // Koşu Süresi ve İlerleme Takibi (Kullanıcı Talebi: Tam 2:30 Dakika Oynanış)
  levelTimeElapsed += 1 / 60;

  // Hayatta kalma ve koşulan mesafe puanı (Maksimum Bölüm Puanı Tavanı ile)
  if (Math.floor(levelTimeElapsed * 60) % 6 === 0) {
    score = Math.min(currentMaxStageScore, score + Math.max(1, Math.round(gameSpeed * 0.4)));
    updateHUD();
  }

  // Bölüm Parkur Süresi Tamamlandı mı? (2:30 Dakika Sonunda Zafer)
  if (levelTimeElapsed >= levelTotalDurationSeconds) {
    onLevelVictory();
    return;
  }
}

// ÇOCUK DOSTU HASSAS ÇARPIŞMA KUTUSU (Görsel İç Paylar):
// Önceden boş PNG kenarları nedeniyle nesne uzaktayken çarpmış sayılıyordu.
// Artık %30'luk güvenli pay ile sadece karakterin gövdesi gerçekten taşa değerse can gider!
function checkCollision(player, obs) {
  const isHighObstacle = (obs.type === "rope" || obs.type === "overhead_log" || obs.type === "tire_swing" || obs.type === "overhead_beam");

  if (isHighObstacle) {
    // YÜKSEK HALAT / SALINCAK / KÜTÜK ENGELİ:
    // 1. Karakter KAYDIĞINDA (Slide) altından süzülerek geçer - KESİNLİKLE HASAR ALMAZ!
    if (player.isSliding) return false;

    // 2. 🧢 Kaşif Şapkası Gücü: Altından geçilen yüksek engelleri kafasından savuşturur!
    if (activeClothingBuffs.hat > 0) {
      for (let k = 0; k < 4; k++) {
        particles.push({
          x: player.x + player.w * 0.5,
          y: player.y,
          vx: (Math.random() - 0.5) * 4,
          vy: -2 - Math.random() * 2,
          size: 3.5,
          alpha: 1.0,
          color: "#ffd166"
        });
      }
      return false; // Şapka koruması hasar almayı engelledi!
    }

    const pLeft = player.x + (player.w * 0.28);
    const pRight = player.x + (player.w * 0.72);
    const pTop = player.y;
    
    const oLeft = obs.x + 4;
    const oRight = obs.x + obs.w - 4;
    const oBottom = obs.y + obs.h; // Engelin alt seviyesi (clearance sınırı)

    // Eğer oyuncunun başı engel seviyesinden yüksekteyse çarpar
    return (pLeft < oRight && pRight > oLeft && pTop < oBottom);
  }

  // ZEMİN ENGELİ (ÇİT / KAYA / KÜTÜK / MANTARLI KÖK / SU BİRİKİNTİSİ):
  // Karakter üzerinden ZIPLAMALIDIR.

  // 1. 🌟 ÇOCUK DOSTU ÜSTTEN İNİŞ / SEKME KORUMASI (VAULT HOP):
  // Engele kısa süre kala zıplandığında, iniş sırasında karakter engele denk gelse bile
  // can gitmek yerine neşeyle engelin üzerinden yaylanarak aşar!
  if (!player.isGrounded && (player.vy > 0 || Math.abs(player.vy) < 2.5)) {
    const playerFeet = player.y + (player.h * 0.96);
    const obsTop = obs.y + (obs.h * 0.18);
    const playerWaist = player.y + (player.h * 0.62);

    // Gövde engelin üzerinde veya üst kenarındaysa ve ayaklar engel seviyesine inmişse
    if (playerWaist <= obsTop + 18 && playerFeet >= obsTop - 12) {
      const pCenterX = player.x + (player.w * 0.5);
      const oLeftMargin = obs.x - 14;
      const oRightMargin = obs.x + obs.w + 16;

      if (pCenterX >= oLeftMargin && pCenterX <= oRightMargin) {
        // Neşeli yaylanma sıçrayışı!
        player.vy = -7.8;
        obs.passed = true;

        if (obs.type === "snowman") {
          sounds.playSnowPuff();
          for (let k = 0; k < 12; k++) {
            particles.push({
              x: obs.x + obs.w * 0.5 + (Math.random() - 0.5) * 18,
              y: obs.y + 6 + (Math.random() - 0.5) * 12,
              vx: (Math.random() - 0.5) * 5.0,
              vy: -2.5 - Math.random() * 2.5,
              size: 3.5,
              alpha: 0.95,
              color: k % 3 === 0 ? "#ffffff" : (k % 3 === 1 ? "#bae6fd" : "#ea580c")
            });
          }
          score = Math.min(currentMaxStageScore, score + 50);
          showToast("☃️ Kardan Adamın Üzerinden Uçtun! +50 Puan!", "success");
        } else if (obs.type === "mud_puddle" || obs.type === "puddle") {
          sounds.playSplash();
          for (let k = 0; k < 12; k++) {
            particles.push({
              x: obs.x + obs.w * 0.5 + (Math.random() - 0.5) * 22,
              y: (canvas.height - 90) - 2,
              vx: (Math.random() - 0.5) * 5.0,
              vy: -2.0 - Math.random() * 2.5,
              size: 3.2,
              alpha: 0.9,
              color: k % 2 === 0 ? "#5c3317" : "#38bdf8"
            });
          }
          score = Math.min(currentMaxStageScore, score + 40);
          showToast("💦 Çamur Birikintisini Aştın! +40 Puan!", "success");
        } else {
          sounds.playJump();
          // Altın ve yeşil doğa kıvılcım parçacıkları
          for (let k = 0; k < 7; k++) {
            particles.push({
              x: player.x + player.w * 0.5,
              y: obs.y + 4,
              vx: (Math.random() - 0.5) * 4.5,
              vy: -2.5 - Math.random() * 2.5,
              size: 3.5,
              alpha: 1.0,
              color: "#ffd166"
            });
          }
          score = Math.min(currentMaxStageScore, score + 40);
        }
        updateHUD();
        return false; // Can kesinlikle gitmez!
      }
    }
  }

  // 2. İNİŞTE ARKA KENAR (TOPUK) VE ÇIKIŞ TOLERANSI:
  // Karakter havadayken engelin sağ/arka kenarı çok daha erken serbest kalır (topuk takılmasını engelle)
  const oRight = !player.isGrounded ? obs.x + (obs.w * 0.44) : obs.x + (obs.w * 0.74);
  const oLeft = obs.x + (obs.w * 0.24);
  const oTop = obs.y + (!player.isGrounded ? (obs.h * 0.38) : (obs.h * 0.20));
  const oBottom = obs.y + (obs.h * 0.95);

  const pLeft = player.x + (player.w * 0.34);
  const pRight = player.x + (player.w * 0.66);
  const pTop = player.y + (player.h * 0.24);
  const pBottom = player.y + (player.h * 0.90);

  return (pLeft < oRight && pRight > oLeft && pTop < oBottom && pBottom > oTop);
}

// Altın toplama için daha geniş ve dinamik toplayıcı yarıçap
function checkCoinPickup(player, coin) {
  const currentHero = GameState.getSelectedHero();
  // Kızıl Sincap ekstra manyetik çekim alanı bonusu (+24px)
  const magnetRadiusBonus = currentHero === 4 ? 24 : 0;
  const effectiveCoinY = coin.y + (coin.bob || 0);
  return (
    player.x < coin.x + coin.w + 10 + magnetRadiusBonus &&
    player.x + player.w > coin.x - 10 - magnetRadiusBonus &&
    player.y < effectiveCoinY + coin.h + 12 + magnetRadiusBonus &&
    player.y + player.h > effectiveCoinY - 12 - magnetRadiusBonus
  );
}

// Çapraz Platform Titreşim & Dokunsal Geri Bildirim (Android @JavascriptInterface & iOS WKScriptMessageHandler)
function triggerHaptic(type = "medium", durationMs = 90) {
  try {
    if (window.AndroidBridge && typeof window.AndroidBridge.vibrate === "function") {
      window.AndroidBridge.vibrate(durationMs);
    } else if (window.AndroidFirebaseBridge && typeof window.AndroidFirebaseBridge.vibrate === "function") {
      window.AndroidFirebaseBridge.vibrate(durationMs);
    } else if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.gameBridge) {
      window.webkit.messageHandlers.gameBridge.postMessage(type);
    } else if (navigator.vibrate) {
      navigator.vibrate(durationMs);
    }
  } catch (_) {}
}

function playerTakesDamage() {
  // 🦺 Muhafız Yeleği Gücü: Çarpışma hasarına karşı çelik zırh koruması!
  if (activeClothingBuffs.vest > 0) {
    sounds.playHit();
    player.invulnerable = 65;
    for (let k = 0; k < 12; k++) {
      particles.push({
        x: player.x + player.w * 0.5,
        y: player.y + player.h * 0.5,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6,
        size: 4,
        alpha: 1.0,
        color: k % 2 === 0 ? "#ffd166" : "#4ade80"
      });
    }
    showToast("🦺 Muhafız Yeleği darbeyi savuşturdu! Canın korundu!", "success");
    return;
  }

  if (player.hasShield) {
    player.hasShield = false;
    player.shieldTimer = 0;
    player.invulnerable = 75; // ~1.25 saniye güvenli süre
    sounds.playHit();

    // Kalkan kırılma ve kıvılcım patlaması
    for (let k = 0; k < 14; k++) {
      particles.push({
        x: player.x + player.w * 0.5,
        y: player.y + player.h * 0.5,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6,
        size: 4.5,
        alpha: 1.0,
        color: k % 2 === 0 ? "#ffd166" : "#4ade80"
      });
    }

    showToast("🛡️ Orman Koruma Kalkanı Darbeyi Savuşturdu! Canın Korundu!", "success");
    updateHUD();
    updateHUDPerks();
    return;
  }

  playerLives--;
  player.invulnerable = 65; // ~1.1 saniye dokunulmazlık payı

  triggerHaptic("heavy", 100);

  showToast(`⚠️ Dikkat! Kalan Can: ${playerLives}/${maxLives}`, "warning");
  updateHUD();
  updateHUDPerks();

  if (playerLives <= 0) {
    // 🧭 Orman Pusulası 3. Seviye: Kritik Anda Acil Can Simidi Kurtarması!
    const compassLvl = GameState.getCompassLevel();
    if (compassLvl >= 3 && !player.compassUsed) {
      player.compassUsed = true;
      playerLives = 1;
      player.invulnerable = 110; // ~1.8 saniye güvenli toparlanma süresi
      sounds.playCollect();
      triggerHaptic("notification", 90);

      // Gökyüzünden turkuaz & altın koruma patlaması
      for (let k = 0; k < 22; k++) {
        particles.push({
          x: player.x + player.w * 0.5,
          y: player.y + player.h * 0.5,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8,
          size: 4.8,
          alpha: 1.0,
          color: k % 2 === 0 ? "#38bdf8" : "#ffd166"
        });
      }

      showToast("🧭 Orman Pusulası Can Simidi Devreye Girdi! Pes etmek yok, devam et!", "success");
      updateHUD();
      updateHUDPerks();
      return;
    }

    onGameOver();
  }
}

function renderCanvas() {
  if (!ctx || !canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const groundY = canvas.height - 90;

  // 1. Arka Plan & Mevsimsel Atmosfer Gökyüzü Katmanı
  renderWeatherAtmosphereBackground(ctx, canvas.width, canvas.height, bgScrollX, currentLevelNumber);

  // 2. Kemerburgaz Kent Ormanı Gerçekçi Zemin Patikası (Ahşap Traversler, Çim Bordürü, Kar Pati İzleri & Yağmur Halkaları)
  renderKemerburgazTrail(ctx, groundY, canvas.width, canvas.height, trailScrollX, currentLevelNumber);

  // 3. Mevsimsel Hava Parçacıkları (Yağmur damlaları, Kar taneleri, Ateş böcekleri, Bahar yaprakları)
  renderWeatherParticles(ctx, canvas.width, canvas.height, currentLevelNumber);

  // 4. Altınlar, Yıldızlar ve Özel Güçlendirmeler
  coins.forEach(c => {
    if (c.type === "golden_acorn") {
      drawGoldenAcornPickup(ctx, c);
      return;
    }
    if (c.type === "star") {
      drawStarPickup(ctx, c);
      return;
    }
    if (c.type === "clothing_crate") {
      drawClothingCratePickup(ctx, c);
      return;
    }
    // 🪙 Dinamik Salınan, 3D Dönen ve Işıldayan Canlı Altın Para
    drawAnimatedCoin(ctx, c);
  });

  // 5. Parçacıklar (Toz & Kıvılcım & Adım Tozları)
  particles.forEach(p => {
    ctx.save();
    ctx.globalAlpha = Math.max(0, p.alpha);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });

  // 6. Yüksek Kontrastlı ve Belirgin Kemerburgaz Engelleri
  obstacles.forEach(o => {
    if (o.type === "rope") {
      drawRopeObstacle(ctx, o, groundY);
    } else if (o.type === "overhead_log" || o.type === "overhead_beam") {
      drawOverheadLogObstacle(ctx, o, groundY);
    } else if (o.type === "tire_swing") {
      drawTireSwing(ctx, o, groundY);
    } else if (o.type === "hurdle") {
      drawWoodenHurdle(ctx, o, groundY);
    } else if (o.type === "mossy_boulder") {
      drawMossyBoulder(ctx, o, groundY);
    } else if (o.type === "gnarled_root") {
      drawGnarledRootWithMushrooms(ctx, o, groundY);
    } else if (o.type === "mud_puddle" || o.type === "puddle") {
      drawMudPuddleObstacle(ctx, o, groundY);
    } else if (o.type === "snowman") {
      drawSnowmanObstacle(ctx, o, groundY);
    } else {
      drawMossyBoulder(ctx, o, groundY);
    }
  });

  // 6.5 Kış Etapları Bitişinde Neşeli Kardan Adam Kutlaması (Etap 9 ve 10)
  if (winterSnowman) {
    winterSnowman.x -= gameSpeed * 0.95;
    winterSnowman.armAngle += 0.09 * winterSnowman.waveDir;
    if (Math.abs(winterSnowman.armAngle) > 0.42) winterSnowman.waveDir *= -1;

    if (!winterSnowman.cheerBurst && winterSnowman.x <= player.x + player.w + 12) {
      winterSnowman.cheerBurst = true;
      if (sounds && sounds.playCollect) sounds.playCollect();
      triggerHaptic("notification", 35);
      // Havaya zafer konfetisi ve kar parıltıları patlaması
      const confettiColors = ["#ffd166", "#52b788", "#38bdf8", "#ff758f", "#ffffff", "#f59e0b"];
      for (let k = 0; k < 28; k++) {
        particles.push({
          x: winterSnowman.x + (Math.random() - 0.5) * 20,
          y: groundY - 45 + (Math.random() - 0.5) * 15,
          vx: (Math.random() - 0.5) * 7,
          vy: -3 - Math.random() * 4.5,
          size: 2.8 + Math.random() * 3,
          alpha: 1.0,
          color: confettiColors[k % confettiColors.length]
        });
      }
    }

    drawWinterSnowman(ctx, winterSnowman, groundY);
  }

  // 7. Oyuncu (Karakter) - Zemin ile Sıfır Boşluklu Kontak ve Ayak Hizalaması
  const heroId = GameState.getSelectedHero();
  const hero = KAHRAMANLAR.find(h => h.id === heroId) || KAHRAMANLAR[0];

  // Zemin Yumuşak Dinamik Gölgesi (Zıpladıkça küçülür ve solar)
  const distFromGround = Math.max(0, groundY - (player.y + player.h));
  const shadowFactor = Math.max(0.18, 1 - distFromGround / 140);
  ctx.fillStyle = `rgba(0, 0, 0, ${0.34 * shadowFactor})`;
  ctx.beginPath();
  ctx.ellipse(player.x + player.w / 2, groundY + 2, (player.w * 0.40) * shadowFactor, 5 * shadowFactor, 0, 0, Math.PI * 2);
  ctx.fill();

  // 🐾 Ayakların Tabana Tam Oturması İçin Net Kontak Gölgesi (Grounded iken jilet gibi net)
  if (player.isGrounded && !player.isSliding) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.48)";
    ctx.beginPath();
    ctx.ellipse(player.x + player.w / 2, groundY + 1, player.w * 0.28, 2.5, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  // 60 FPS Animasyonlu GIF Karakter Katmanı Senkronizasyonu
  const runnerWrap = document.getElementById("runner-player-sprite-wrap");
  const runnerGif = document.getElementById("runner-player-gif");
  if (runnerWrap && runnerGif) {
    if (!runnerGif.src.includes(hero.image)) {
      runnerGif.src = hero.image;
      runnerGif.alt = hero.name;
    }
    const heroNameLower = (hero.name || "").toLowerCase();
    const heroClass = heroNameLower.includes("maymun") ? "hero-maymun"
      : heroNameLower.includes("kaplan") ? "hero-kaplan"
      : "hero-fox";
    if (!runnerWrap.classList.contains(heroClass)) {
      runnerWrap.className = `runner-player-sprite-wrap ${heroClass}`;
    }

    // 🐾 Kahramana Özel Taban Kalibrasyonu (Ayakların zemine sıfır basması):
    // Tilki: +11px, Maymun: +9px, Kaplan: +10px, Sincap: +10px
    const heroFootOffsets = { 1: 11, 2: 9, 3: 10, 4: 10, 5: 9 };
    const footOffset = heroFootOffsets[hero.id] || 10;

    const drawW = 76;
    const drawH = 76;
    const posX = player.x + (player.w - drawW) / 2;
    const posY = player.y + player.h - drawH + footOffset;

    let transform = `translate3d(${posX}px, ${posY}px, 0)`;
    if (player.isSliding) {
      // Süzülerek ve eğilerek kayma: Ezilme/deformasyon yok, öne doğru akıcı kayma duruşu
      transform += ` scale(1.05, 0.82) rotate(-14deg) translateY(6px)`;
    } else if (!player.isGrounded) {
      if (player.vy < -1.5) {
        transform += ` scale(0.92, 1.18) rotate(-6deg)`;
      } else {
        transform += ` scale(1.04, 0.95) rotate(4deg)`;
      }
    } else if (player.landingSquash > 0) {
      const sq = player.landingSquash / 6;
      transform += ` scale(${1 + 0.22 * sq}, ${1 - 0.22 * sq})`;
    }

    runnerWrap.style.transform = transform;
    runnerWrap.style.display = (player.invulnerable % 10 < 5) ? "flex" : "none";
  }

  // 8. Mevsimsel Atmosferik Renk & Işık Filtresi (Gece Mehtabı, Yağmur Pusu, Kar Aydınlığı)
  renderWeatherAtmosphereOverlay(ctx, canvas.width, canvas.height, currentLevelNumber);

  // 7. Dinlenme Çadırı Koruma Kalkanı Halesi
  if (player.hasShield) {
    drawPlayerShieldAura(ctx, player);
  }
}

// ============================================================================
// 8.5 KAHRAMANLAR İÇİN DİNAMİK EKLEMLİ UZUVLAR & ZIPLAMA ANİMASYON MOTORU
// (Hareket eden el, kol, bacaklar, kuyruk, squash & stretch zıplama dinamiği)
// ============================================================================

function drawAnimatedHero(ctx, p, heroId, groundY) {
  p.animTick++;

  // 1. Zemin Yumuşak Dinamik Gölgesi (Zıpladıkça küçülür ve solar)
  const distFromGround = Math.max(0, groundY - (p.y + p.h));
  const shadowFactor = Math.max(0.2, 1 - distFromGround / 150);
  ctx.fillStyle = `rgba(0, 0, 0, ${0.28 * shadowFactor})`;
  ctx.beginPath();
  ctx.ellipse(p.x + p.w / 2, groundY + 2, (p.w * 0.38) * shadowFactor, 5 * shadowFactor, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.save();

  // 2. Fizik ve Poz Açıları Hesaplama
  let scaleX = 1.0;
  let scaleY = 1.0;
  let bodyOffsetY = 0;
  let bodyRot = 0;

  let armBackAngle = 0;
  let armFrontAngle = 0;
  let legBackAngle = 0;
  let legFrontAngle = 0;
  let tailAngle = 0;
  let isJumpingHigh = false;

  if (p.isSliding) {
    // KAYMA DURUMU (Yere yatay uzanmış, kollar ve eller önde)
    scaleX = 1.35;
    scaleY = 0.52;
    bodyOffsetY = 14;
    bodyRot = 0.12;

    armFrontAngle = 1.35; // İleri doğru uzanan kollar
    armBackAngle = 1.25;
    legFrontAngle = -1.45; // Geriye uzanan bacaklar
    legBackAngle = -1.35;
    tailAngle = -0.4;
  } else if (!p.isGrounded) {
    // HAVADA ZIPLAMA DURUMU (EL, KOL VE BACAKLAR HAREKET EDER)
    if (p.vy < -1.5) {
      // Sıçrama & Yükselme Aşaması (Karakter yukarı uzar)
      scaleX = 0.88;
      scaleY = 1.22;
      bodyOffsetY = -4;
      bodyRot = -0.14; // Hafif yukarı yönlü açı
      isJumpingHigh = true;

      // KOLLAR VE ELLER ZAFER / ZIPLAMA ÇOŞKUSUYLA HAVAYA KALKAR!
      armFrontAngle = -1.35; // Başın üstüne doğru yukarı kalkan el/kol
      armBackAngle = -1.55;
      // BACAKLAR İTİŞ VE SIÇRAMA POZUNDA GERİYE DOĞRU AÇILIR
      legFrontAngle = 0.72;
      legBackAngle = 0.92;
      tailAngle = 0.55;
    } else {
      // Zirve ve Alçalma Aşaması (İnişe hazırlık, bacaklar toplanır)
      scaleX = 1.05;
      scaleY = 0.96;
      bodyOffsetY = 2;
      bodyRot = 0.08;

      // Kollar denge için hafifçe yana ve öne açılır
      armFrontAngle = -0.42;
      armBackAngle = -0.22;
      // Bacaklar gövdeye doğru toplanır (dizler bükülür)
      legFrontAngle = -0.32;
      legBackAngle = -0.18;
      tailAngle = -0.25;
    }
  } else {
    // ZEMİNDE KOŞU DURUMU (Ritmik adımlar ve karşılıklı uzuv salınımı)
    if (p.landingSquash > 0) {
      // Yere iniş anındaki yaylanma squashi
      const squashRatio = p.landingSquash / 6;
      scaleX = 1.0 + (0.22 * squashRatio);
      scaleY = 1.0 - (0.22 * squashRatio);
      bodyOffsetY = 4 * squashRatio;
    }

    const runSpeed = 0.32;
    const cycle = p.animTick * runSpeed;
    const runBob = Math.abs(Math.sin(cycle)) * 3.6;
    bodyOffsetY -= runBob;
    bodyRot = Math.sin(cycle) * 0.04;

    // Ritmik karşılıklı el, kol ve bacak salınımı
    armFrontAngle = Math.sin(cycle) * 0.72;
    armBackAngle = -Math.sin(cycle) * 0.72;
    legFrontAngle = -Math.sin(cycle) * 0.82;
    legBackAngle = Math.sin(cycle) * 0.82;
    tailAngle = Math.sin(cycle * 0.8) * 0.35;
  }

  // Karakter Merkez Koordinatları
  const cx = p.x + p.w / 2;
  const cy = p.y + p.h / 2 + bodyOffsetY;

  ctx.translate(cx, cy);
  ctx.scale(scaleX, scaleY);
  ctx.rotate(bodyRot);

  // Kahraman Özellikleri & Renk Paleti
  let colors = {
    hero: 1,
    bodyMain: "#e76f51",
    bodyDark: "#c0392b",
    bodyLight: "#ffffff",
    belly: "#ffffff",
    limbsDark: "#b23b23",
    limbsLight: "#ffffff", // Beyaz çoraplı patiler
    eye: "#1b263b",
    tailMain: "#e76f51",
    tailTip: "#ffffff",
    innerEar: "#ffccd5"
  };

  if (heroId === 2) {
    // Maymun: Çikolata kahvesi, bej göğüs/el ve kulaklar
    colors = {
      hero: 2,
      bodyMain: "#6d4c41",
      bodyDark: "#4e342e",
      bodyLight: "#d7ccc8",
      belly: "#d7ccc8",
      limbsDark: "#3e2723",
      limbsLight: "#d7ccc8",
      eye: "#212121",
      tailMain: "#6d4c41",
      tailTip: "#4e342e",
      innerEar: "#d7ccc8"
    };
  } else if (heroId === 3) {
    // Kaplan: Canlı kaplan turuncusu, siyah çizgiler, beyaz patiler
    colors = {
      hero: 3,
      bodyMain: "#f77f00",
      bodyDark: "#d62828",
      bodyLight: "#ffffff",
      belly: "#ffffff",
      limbsDark: "#ba181b",
      limbsLight: "#ffffff",
      eye: "#003049",
      tailMain: "#f77f00",
      tailTip: "#111111",
      innerEar: "#fca311"
    };
  } else if (heroId === 4) {
    // Kızıl Sincap: Canlı turuncu/kızıl kürk, beyaz karın, palamut ve sevimli kulak püskülleri
    colors = {
      hero: 4,
      bodyMain: "#e05a00",
      bodyDark: "#b23b00",
      bodyLight: "#fdf0d5",
      belly: "#ffffff",
      limbsDark: "#b23b00",
      limbsLight: "#fdf0d5",
      eye: "#1b263b",
      tailMain: "#ff7b00",
      tailTip: "#ffd166",
      innerEar: "#ffd166"
    };
  } else if (heroId === 5) {
    // Bilge Orman Baykuşu: Koyu orman tüyleri, bej göğüs, gece altın gözleri
    colors = {
      hero: 5,
      bodyMain: "#4a3b32",
      bodyDark: "#2b1810",
      bodyLight: "#fdf0d5",
      belly: "#fdf0d5",
      limbsDark: "#2b1810",
      limbsLight: "#ffd166",
      eye: "#ffee32",
      tailMain: "#362419",
      tailTip: "#241408",
      innerEar: "#3d2817"
    };
  }

  // 1. KUYRUK (Body arkasında çizilir)
  drawHeroTail(ctx, colors, tailAngle);

  // 2. ARKA BACAK VE ARKA KOL / KANAT (Derinlik hissi için gövdenin arkasında)
  if (heroId === 5) {
    // Baykuş arka pençe & arka kanat
    drawHeroLimb(ctx, -6, 12, legBackAngle, 16, colors.limbsDark, colors.limbsLight, "talon", isJumpingHigh);
    drawHeroWing(ctx, -2, 0, armBackAngle, 24, colors.bodyDark, isJumpingHigh, false);
  } else {
    drawHeroLimb(ctx, -12, 10, legBackAngle, 22, colors.limbsDark, colors.limbsLight, "leg", isJumpingHigh);
    drawHeroLimb(ctx, 8, 4, armBackAngle, 20, colors.limbsDark, colors.limbsLight, "arm", isJumpingHigh);
  }

  // 3. GÖVDE & SIRT
  drawHeroBody(ctx, colors, p.isSliding);

  // 4. BAŞ & YÜZ & KULAKLAR
  drawHeroHead(ctx, colors, isJumpingHigh);

  // 5. ÖN BACAK VE ÖN KOL / KANAT (Gövdenin önünde parlak ve net)
  if (heroId === 5) {
    // Baykuş ön pençe & ön kanat
    drawHeroLimb(ctx, -2, 12, legFrontAngle, 16, colors.bodyMain, colors.limbsLight, "talon", isJumpingHigh);
    drawHeroWing(ctx, 4, 2, armFrontAngle, 24, colors.bodyMain, isJumpingHigh, true);
  } else {
    drawHeroLimb(ctx, -8, 10, legFrontAngle, 22, colors.bodyMain, colors.limbsLight, "leg", isJumpingHigh);
    drawHeroLimb(ctx, 12, 4, armFrontAngle, 20, colors.bodyMain, colors.limbsLight, "arm", isJumpingHigh);
  }

  // 6. KUŞANILAN KOSTÜM & AKTİF BOOSTERLAR (Ahşap Gardırop Seçimi & Oyun İçi Güçlendirmeler)
  const activeCostume = GameState.getSelectedCostume();
  if (activeCostume && activeCostume !== "none") {
    drawHeroCostume(ctx, activeCostume, colors, isJumpingHigh, p.isSliding);
  }
  // Koşu esnasında aktif edilen geçici boosterlar
  if (typeof activeClothingBuffs !== "undefined") {
    if (activeClothingBuffs.hat > 0 && activeCostume !== "hat") {
      drawHeroCostume(ctx, "hat", colors, isJumpingHigh, p.isSliding);
    }
    if (activeClothingBuffs.vest > 0 && activeCostume !== "vest") {
      drawHeroCostume(ctx, "vest", colors, isJumpingHigh, p.isSliding);
    }
    if (activeClothingBuffs.pants > 0 && activeCostume !== "pants") {
      drawHeroCostume(ctx, "pants", colors, isJumpingHigh, p.isSliding);
    }
  }

  ctx.restore();
}

function drawHeroLimb(ctx, jointX, jointY, angle, length, mainColor, tipColor, type, isJumping) {
  ctx.save();
  ctx.translate(jointX, jointY);
  ctx.rotate(angle);

  if (type === "talon") {
    // Baykuş Pençesi (Kavrayıcı altın rengi pençeler)
    ctx.strokeStyle = tipColor;
    ctx.lineWidth = 3.5;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(2, length * 0.7);
    ctx.stroke();
    // 3 adet pençe tırnağı
    ctx.fillStyle = tipColor;
    ctx.beginPath();
    ctx.arc(0, length, 3, 0, Math.PI * 2);
    ctx.arc(4, length + 1, 3, 0, Math.PI * 2);
    ctx.arc(-4, length + 1, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    return;
  }

  // Üst uzuv (Omuz/Kalça - Kol/Uyluk)
  ctx.lineWidth = type === "leg" ? 6.5 : 5.5;
  ctx.lineCap = "round";
  ctx.strokeStyle = mainColor;

  ctx.beginPath();
  ctx.moveTo(0, 0);
  const midY = length * 0.55;
  const midX = type === "leg" ? -1 : 1;
  ctx.lineTo(midX, midY);
  ctx.stroke();

  // Alt uzuv & Pati / El (Bilek ve Parmaklar)
  ctx.lineWidth = type === "leg" ? 5.5 : 4.5;
  ctx.strokeStyle = tipColor;
  ctx.beginPath();
  ctx.moveTo(midX, midY);
  const endY = length;
  const endX = type === "leg" ? (isJumping ? -2 : 3) : (isJumping ? 4 : 2);
  ctx.lineTo(endX, endY);
  ctx.stroke();

  // El / Pati Çizimi (Yuvarlak sevimli pati ucu veya açık el parmakları)
  ctx.fillStyle = tipColor;
  ctx.beginPath();
  if (type === "arm" && isJumping) {
    // Zıplarken eller havada açık ve sevinçle uzanır!
    ctx.arc(endX, endY, 4, 0, Math.PI * 2);
    ctx.fill();
    // Sevimli küçük açık parmaklar
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(endX + 2, endY - 2, 1.6, 0, Math.PI * 2);
    ctx.arc(endX + 3, endY + 1, 1.6, 0, Math.PI * 2);
    ctx.arc(endX - 1, endY - 3, 1.6, 0, Math.PI * 2);
    ctx.fill();
  } else {
    // Normal koşu veya bacak patisi
    ctx.arc(endX, endY, type === "leg" ? 4.5 : 3.8, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

// Bilge Orman Baykuşu İçin Geniş Kanat Çizimi
function drawHeroWing(ctx, jointX, jointY, angle, length, wingColor, isJumping, isFront) {
  ctx.save();
  ctx.translate(jointX, jointY);
  ctx.rotate(angle);

  ctx.fillStyle = wingColor;
  ctx.strokeStyle = "rgba(0, 0, 0, 0.25)";
  ctx.lineWidth = 1.2;

  if (isJumping) {
    // SÜZÜLME / ZIPLAMA KANADI: Geniş açılmış tüyler
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(18, -16, 28, -6);
    ctx.quadraticCurveTo(24, 10, 14, 18);
    ctx.quadraticCurveTo(6, 12, 0, 0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Telek tüyleri uç detayları
    ctx.fillStyle = isFront ? "#d4a373" : "#241408";
    ctx.beginPath();
    ctx.arc(26, -3, 3, 0, Math.PI * 2);
    ctx.arc(22, 6, 3, 0, Math.PI * 2);
    ctx.arc(15, 14, 3, 0, Math.PI * 2);
    ctx.fill();
  } else {
    // KOŞU KANADI: Gövdeye katlanmış, uçları geriye bakan tüy katmanı
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(-14, 6, -22, 14);
    ctx.quadraticCurveTo(-10, 20, 2, 10);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  ctx.restore();
}

function drawHeroTail(ctx, colors, tailAngle) {
  ctx.save();
  ctx.translate(-18, 5);
  ctx.rotate(tailAngle);

  if (colors.hero === 1) {
    // Tilki Kuyruğu: Geniş, kabarık, ucu bembeyaz fırça kuyruk
    ctx.fillStyle = colors.tailMain;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(-14, -12, -26, -6);
    ctx.quadraticCurveTo(-16, 12, 0, 4);
    ctx.closePath();
    ctx.fill();

    // Beyaz kuyruk ucu
    ctx.fillStyle = colors.tailTip;
    ctx.beginPath();
    ctx.moveTo(-18, -9);
    ctx.quadraticCurveTo(-27, -6, -26, -6);
    ctx.quadraticCurveTo(-22, 5, -14, 4);
    ctx.closePath();
    ctx.fill();
  } else if (colors.hero === 2) {
    // Maymun Kuyruğu: Uzun, kıvrımlı, akrobatik S-kuyruk
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.strokeStyle = colors.tailMain;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-12, -6, -18, -20, -10, -24);
    ctx.bezierCurveTo(-4, -28, -2, -18, -8, -16);
    ctx.stroke();
  } else if (colors.hero === 3) {
    // Kaplan Kuyruğu: Turuncu, güçlü ve siyah çizgili kuyruk
    ctx.lineWidth = 5.5;
    ctx.lineCap = "round";
    ctx.strokeStyle = colors.tailMain;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(-14, -10, -22, -4);
    ctx.stroke();

    // Siyah şeritler & siyah uç
    ctx.lineWidth = 5.5;
    ctx.strokeStyle = "#1a1a1a";
    ctx.setLineDash([4, 4]);
    ctx.stroke();
    ctx.setLineDash([]);
  } else if (colors.hero === 4) {
    // KIZIL SİNCAP KUYRUĞU: Sırtın üzerine kıvrılan devasa kabarık S-kuyruk!
    ctx.fillStyle = colors.tailMain;
    ctx.beginPath();
    ctx.moveTo(0, 2);
    ctx.bezierCurveTo(-16, -4, -28, -24, -16, -34);
    ctx.bezierCurveTo(-6, -42, 6, -30, -4, -18);
    ctx.bezierCurveTo(-10, -10, -6, 0, 0, 4);
    ctx.closePath();
    ctx.fill();

    // Altın ışıltılı kabarık tüy sırtı
    ctx.fillStyle = colors.tailTip;
    ctx.beginPath();
    ctx.arc(-14, -30, 8, 0, Math.PI * 2);
    ctx.arc(-4, -26, 6, 0, Math.PI * 2);
    ctx.fill();
  } else {
    // BİLGE BAYKUŞ KUYRUĞU: Uçuşu dengeleyen katmanlı yelpaze kuyruk
    ctx.fillStyle = colors.tailMain;
    ctx.beginPath();
    ctx.moveTo(0, 2);
    ctx.lineTo(-14, 10);
    ctx.lineTo(-18, 16);
    ctx.lineTo(-6, 12);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = colors.tailTip;
    ctx.beginPath();
    ctx.moveTo(-2, 4);
    ctx.lineTo(-16, 14);
    ctx.lineTo(-10, 15);
    ctx.closePath();
    ctx.fill();
  }

  ctx.restore();
}

function drawHeroBody(ctx, colors, isSliding) {
  ctx.save();

  // Ana Gövde Ovali
  ctx.fillStyle = colors.bodyMain;
  ctx.beginPath();
  if (isSliding) {
    ctx.ellipse(0, 2, 22, 10, 0, 0, Math.PI * 2);
  } else {
    ctx.ellipse(0, 4, 18, 14, -0.08, 0, Math.PI * 2);
  }
  ctx.fill();

  // Karın / Göğüs Detayı (Açık renk tüyler)
  ctx.fillStyle = colors.belly;
  ctx.beginPath();
  if (isSliding) {
    ctx.ellipse(3, 3, 14, 6, 0, 0, Math.PI * 2);
  } else {
    ctx.ellipse(3, 5, 11, 10, -0.05, 0, Math.PI * 2);
  }
  ctx.fill();

  // Kaplan ise gövdede kaplan çizgileri
  if (colors.hero === 3) {
    ctx.fillStyle = "#111111";
    ctx.beginPath();
    ctx.moveTo(-6, -6); ctx.lineTo(-4, 0); ctx.lineTo(-8, 0); ctx.closePath();
    ctx.moveTo(2, -8); ctx.lineTo(4, -1); ctx.lineTo(0, -1); ctx.closePath();
    ctx.moveTo(8, -6); ctx.lineTo(10, 1); ctx.lineTo(6, 1); ctx.closePath();
    ctx.fill();
  }

  // Kızıl Sincap ise elinde tuttuğu sevimli meşe palamudu!
  if (colors.hero === 4) {
    ctx.fillStyle = "#582f0e";
    ctx.beginPath();
    ctx.arc(10, 4, 3.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#7f4f24";
    ctx.beginPath();
    ctx.ellipse(10, 7, 3.2, 4.2, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  // Bilge Baykuş ise göğsünde kalp biçimli tüy desenleri (V-şeritleri)
  if (colors.hero === 5) {
    ctx.strokeStyle = "#8c5835";
    ctx.lineWidth = 1.4;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(0, 2); ctx.lineTo(3, 5); ctx.lineTo(6, 2);
    ctx.moveTo(-3, 7); ctx.lineTo(0, 10); ctx.lineTo(3, 7);
    ctx.moveTo(4, 7); ctx.lineTo(7, 10); ctx.lineTo(10, 7);
    ctx.stroke();
  }

  ctx.restore();
}

function drawHeroHead(ctx, colors, isJumping) {
  ctx.save();
  ctx.translate(14, -8); // Baş gövdenin sağ üstünde

  if (colors.hero === 1) {
    // TİLKİ BAŞI: Dik üçgen kulaklar, sevimli sivri burun ve parlak gözler
    ctx.fillStyle = "#1a1a1a";
    ctx.beginPath();
    ctx.moveTo(-5, -8); ctx.lineTo(-1, -22); ctx.lineTo(5, -9); ctx.closePath();
    ctx.fill();
    ctx.fillStyle = colors.innerEar;
    ctx.beginPath();
    ctx.moveTo(-3, -8); ctx.lineTo(-1, -18); ctx.lineTo(3, -9); ctx.closePath();
    ctx.fill();

    // Kafa ovali
    ctx.fillStyle = colors.bodyMain;
    ctx.beginPath();
    ctx.ellipse(2, -1, 13, 11, 0.08, 0, Math.PI * 2);
    ctx.fill();

    // Beyaz yanak ve boyun kürkü
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.moveTo(2, 6);
    ctx.quadraticCurveTo(12, 5, 15, 0);
    ctx.lineTo(7, -3);
    ctx.quadraticCurveTo(0, 3, 2, 6);
    ctx.fill();

    // Sivri sevimli burun ucu
    ctx.fillStyle = "#1a1a1a";
    ctx.beginPath();
    ctx.arc(15, 0, 2.2, 0, Math.PI * 2);
    ctx.fill();

  } else if (colors.hero === 2) {
    // MAYMUN BAŞI: Yuvarlak sevimli kulaklar, bej yüz maskesi
    ctx.fillStyle = colors.bodyMain;
    ctx.beginPath();
    ctx.arc(-8, -4, 5.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = colors.innerEar;
    ctx.beginPath();
    ctx.arc(-8, -4, 3.5, 0, Math.PI * 2);
    ctx.fill();

    // Kafa
    ctx.fillStyle = colors.bodyMain;
    ctx.beginPath();
    ctx.arc(2, -2, 12, 0, Math.PI * 2);
    ctx.fill();

    // Yüz maskesi
    ctx.fillStyle = colors.bodyLight;
    ctx.beginPath();
    ctx.ellipse(5, 0, 8, 8.5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Sevimli burun delikleri
    ctx.fillStyle = "#3e2723";
    ctx.beginPath();
    ctx.arc(9, 1, 1.2, 0, Math.PI * 2);
    ctx.arc(11, 1, 1.2, 0, Math.PI * 2);
    ctx.fill();

  } else if (colors.hero === 3) {
    // KAPLAN BAŞI: Yuvarlak güçlü kulaklar, çizgili alın
    ctx.fillStyle = colors.bodyMain;
    ctx.beginPath();
    ctx.arc(-4, -12, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = colors.innerEar;
    ctx.beginPath();
    ctx.arc(-4, -12, 3, 0, Math.PI * 2);
    ctx.fill();

    // Kafa
    ctx.fillStyle = colors.bodyMain;
    ctx.beginPath();
    ctx.ellipse(2, -1, 13, 12, 0, 0, Math.PI * 2);
    ctx.fill();

    // Alın kaplan çizgileri
    ctx.fillStyle = "#111111";
    ctx.beginPath();
    ctx.moveTo(0, -11); ctx.lineTo(2, -5); ctx.lineTo(-2, -5); ctx.closePath();
    ctx.moveTo(5, -10); ctx.lineTo(6, -6); ctx.lineTo(3, -6); ctx.closePath();
    ctx.fill();

    // Beyaz ağızlık & pembe burun
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.ellipse(8, 3, 6, 5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#d62828";
    ctx.beginPath();
    ctx.arc(12, 1, 2.2, 0, Math.PI * 2);
    ctx.fill();

  } else if (colors.hero === 4) {
    // KIZIL SİNCAP BAŞI: Uçları püsküllü dik kulaklar, bej yanaklar, sevimli fındık burnu
    ctx.fillStyle = colors.bodyDark;
    ctx.beginPath();
    ctx.moveTo(-5, -6); ctx.lineTo(-2, -18); ctx.lineTo(4, -7); ctx.closePath();
    ctx.fill();
    // Kulak püskülü
    ctx.strokeStyle = "#582f0e";
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(-2, -18); ctx.lineTo(0, -22);
    ctx.stroke();

    // Kafa
    ctx.fillStyle = colors.bodyMain;
    ctx.beginPath();
    ctx.ellipse(2, -1, 12, 11, 0, 0, Math.PI * 2);
    ctx.fill();

    // Beyaz/bej yanak
    ctx.fillStyle = colors.bodyLight;
    ctx.beginPath();
    ctx.ellipse(7, 3, 7, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Sevimli küçük burun ucu
    ctx.fillStyle = "#3d1308";
    ctx.beginPath();
    ctx.arc(13, 1, 1.8, 0, Math.PI * 2);
    ctx.fill();

  } else {
    // BİLGE ORMAN BAYKUŞU BAŞI: Boynuz kulak tüyleri, göz diskleri, kıvrık gaga
    ctx.fillStyle = colors.bodyDark;
    ctx.beginPath();
    ctx.moveTo(-6, -8); ctx.lineTo(-9, -19); ctx.lineTo(-1, -11); ctx.closePath();
    ctx.moveTo(4, -10); ctx.lineTo(9, -19); ctx.lineTo(8, -8); ctx.closePath();
    ctx.fill();

    // Yuvarlak Kafa
    ctx.fillStyle = colors.bodyMain;
    ctx.beginPath();
    ctx.ellipse(2, -1, 13, 12, 0, 0, Math.PI * 2);
    ctx.fill();

    // Göz çevresi diskleri
    ctx.fillStyle = colors.bodyLight;
    ctx.beginPath();
    ctx.arc(-2, -1, 6.5, 0, Math.PI * 2);
    ctx.arc(7, -1, 6.5, 0, Math.PI * 2);
    ctx.fill();

    // Kıvrık portakal gagası
    ctx.fillStyle = "#ff9f1c";
    ctx.beginPath();
    ctx.moveTo(1, 0); ctx.lineTo(4, 0); ctx.lineTo(2.5, 6); ctx.closePath();
    ctx.fill();
  }

  // GÖZLER (Zıplarken mutlu neşeli yay '^', koşarken parlak canlı göz bebekleri)
  if (isJumping) {
    ctx.strokeStyle = colors.eye;
    ctx.lineWidth = 2.2;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.arc(6, -2, 3.5, Math.PI * 1.1, Math.PI * 1.9);
    ctx.stroke();
  } else {
    ctx.fillStyle = colors.eye;
    ctx.beginPath();
    if (colors.hero === 5) {
      // Baykuşun büyük altın gece gözü
      ctx.arc(6, -1, 4.5, 0, Math.PI * 2);
      ctx.fill();
      // Göz bebeği
      ctx.fillStyle = "#111111";
      ctx.beginPath();
      ctx.arc(6, -1, 2.5, 0, Math.PI * 2);
      ctx.fill();
      // Işıltı
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(7.2, -2.2, 1.2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.ellipse(6, -2, 3, 4, 0, 0, Math.PI * 2);
      ctx.fill();
      // Işıltı pırıltısı
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(7.2, -3.2, 1.4, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  ctx.restore();
}

// ============================================================================
// 8.6 AHŞAP GARDIROP KOSTÜM VE AKSESUAR ÇİZİM MOTORU
// (Kaşif Şapkası, Muhafız Yeleği, Altın Palamut Kolye)
// ============================================================================

function drawHeroCostume(ctx, costumeId, colors, isJumping, isSliding) {
  if (!costumeId || costumeId === "none") return;

  ctx.save();

  if (costumeId === "hat") {
    // İBB & BOĞAZİÇİ KOYU LACİVERT KAŞİF ŞAPKASI (Kulakların üstünde, yüzü asla kapatmayan şapka)
    ctx.save();
    // Tilki için kulakların tepe noktası: X: 13, Y: -27
    const headX = colors.hero === 1 ? 13 : 14;
    const headY = colors.hero === 1 ? -27 : (colors.hero === 5 ? -20 : -18);
    ctx.translate(headX, headY);
    ctx.rotate(colors.hero === 1 ? -0.08 : 0.06);

    // 1. Şapka Kenarı (Brim) - İBB Koyu Lacivert
    ctx.fillStyle = "#0b2545";
    ctx.strokeStyle = "#051329";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(2, 2, 14, 4, -0.05, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // 2. Şapka Tepesi (Crown) - İBB & Boğaziçi Koyu Lacivert
    ctx.fillStyle = "#133863";
    ctx.strokeStyle = "#0b2545";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(-6, -9, 14, 9, [3, 3, 1, 1]);
    ctx.fill();
    ctx.stroke();

    // 3. İBB & Boğaziçi Altın Sarısı Kordon Şeridi
    ctx.fillStyle = "#ffd166";
    ctx.fillRect(-6, -2, 14, 2.5);

    // 4. İBB / Boğaziçi Altın Amblem & Pırıltı
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(1, -2, 1.3, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#ffd166";
    ctx.beginPath();
    ctx.ellipse(5, -3, 3.5, 2, -0.6, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();

  } else if (costumeId === "vest") {
    // ORMAN MUHAFIZ YELEĞİ (Tilkinin yatay gövdesine tam oturan yanık yelek)
    ctx.save();
    const vestY = isSliding ? 3 : (colors.hero === 1 ? 4 : 5);
    ctx.translate(0, vestY);

    ctx.fillStyle = "#1b4332";
    ctx.strokeStyle = "#ffd166";
    ctx.lineWidth = 1.2;

    ctx.beginPath();
    if (isSliding) {
      ctx.ellipse(1, 0, 18, 8, 0, 0, Math.PI * 2);
    } else if (colors.hero === 1) {
      // Tilkinin yatay uzanan gövdesine tam oturan oval
      ctx.ellipse(2, 1, 17, 10, -0.02, 0, Math.PI * 2);
    } else {
      ctx.ellipse(1, 0, 16, 12, -0.08, 0, Math.PI * 2);
    }
    ctx.fill();
    ctx.stroke();

    // Yelek Açıklığı & Altın Düğmeler
    ctx.fillStyle = "#ffd166";
    ctx.beginPath();
    ctx.arc(3, -3, 1.4, 0, Math.PI * 2);
    ctx.arc(3, 1, 1.4, 0, Math.PI * 2);
    ctx.arc(3, 5, 1.4, 0, Math.PI * 2);
    ctx.fill();

    // Göğüste Orman Muhafız Arması
    ctx.fillStyle = "#ffd166";
    ctx.beginPath();
    ctx.arc(-5, -1, 2.2, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();

  } else if (costumeId === "pants") {
    // İBB & BOĞAZİÇİ KOYU LACİVERT İZCİ PANTOLONU
    ctx.save();
    const pantsY = isSliding ? 4 : 6;
    ctx.translate(-2, pantsY);

    // 1. Kemer & Bel Bölgesi - Koyu Lacivert
    ctx.fillStyle = "#0b2545";
    ctx.strokeStyle = "#051329";
    ctx.lineWidth = 1;

    ctx.beginPath();
    if (isSliding) {
      ctx.roundRect(-10, -4, 18, 8, 3);
    } else {
      ctx.roundRect(-8, -5, 16, 9, 3);
    }
    ctx.fill();
    ctx.stroke();

    // 2. 4 Ayağa Dikey Olarak İnen Koyu Lacivert İzci Paçaları
    ctx.fillStyle = "#133863";
    // Arka bacak dikey paçası
    ctx.beginPath();
    ctx.roundRect(-9, 3, 6.5, 9, 2);
    ctx.fill();
    ctx.strokeStyle = "#051329";
    ctx.stroke();

    // Ön bacak dikey paçası
    ctx.beginPath();
    ctx.roundRect(4, 3, 6.5, 9, 2);
    ctx.fill();
    ctx.stroke();

    // Yan cep detayları
    ctx.fillStyle = "#0b2545";
    ctx.fillRect(-8, 5, 2, 4);
    ctx.fillRect(5, 5, 2, 4);

    // Deri Kemer ve Altın Toka
    ctx.fillStyle = "#051329";
    ctx.fillRect(isSliding ? -10 : -8, -5, isSliding ? 18 : 16, 2.5);
    ctx.fillStyle = "#ffd166";
    ctx.fillRect(-2, -6, 4, 4);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(-1, -5, 2, 2);

    ctx.restore();
  }

  ctx.restore();
}

// Macera Parkı Asılı Halat Çizimi (Yüksek, Net ve Belirgin Altından Kayma Engeli)
function drawRopeObstacle(ctx, obs, groundY) {
  ctx.save();

  // Halat Direkleri (Yukarıdan sarkan ağaç/parkur bağlantıları)
  ctx.strokeStyle = "rgba(78, 52, 46, 0.85)";
  ctx.lineWidth = 3.5;
  ctx.beginPath();
  ctx.moveTo(obs.x + 4, obs.y);
  ctx.lineTo(obs.x + 4, 0);
  ctx.moveTo(obs.x + obs.w - 4, obs.y);
  ctx.lineTo(obs.x + obs.w - 4, 0);
  ctx.stroke();

  // Gergin Ana Halat
  ctx.strokeStyle = "#e6ccb2";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(obs.x - 4, obs.y + 10);
  ctx.quadraticCurveTo(obs.x + obs.w/2, obs.y + 18, obs.x + obs.w + 4, obs.y + 10);
  ctx.stroke();

  // Boğaziçi Turkuazı Macera Parkı Bayrağı (Ortada sallanan flama)
  ctx.fillStyle = "#008080";
  ctx.beginPath();
  ctx.moveTo(obs.x + obs.w * 0.3, obs.y + 12);
  ctx.lineTo(obs.x + obs.w * 0.5, obs.y + obs.h);
  ctx.lineTo(obs.x + obs.w * 0.7, obs.y + 12);
  ctx.closePath();
  ctx.fill();

  // Çocuklar için net rehber etiket: "⬇️ ALTINDAN KAY ⬇️"
  const tagW = 76;
  const tagH = 19;
  const tagX = obs.x + (obs.w - tagW) / 2;
  const tagY = obs.y - 23;

  ctx.fillStyle = "rgba(8, 30, 20, 0.95)";
  ctx.strokeStyle = "#ffd166";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(tagX, tagY, tagW, tagH, 6);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#ffd166";
  ctx.font = "bold 9.5px Outfit, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("⬇️ ALTINDAN KAY ⬇️", tagX + tagW/2, tagY + 13);

  // Altındaki Ferah Açık Geçit İpucu
  ctx.fillStyle = "rgba(82, 183, 136, 0.4)";
  ctx.beginPath();
  ctx.moveTo(obs.x + obs.w/2 - 6, obs.y + obs.h + 4);
  ctx.lineTo(obs.x + obs.w/2 + 6, obs.y + obs.h + 4);
  ctx.lineTo(obs.x + obs.w/2, obs.y + obs.h + 12);
  ctx.closePath();
  ctx.fill();

  ctx.restore();
}

// Macera Parkı Asılı Ahşap Kütük / Tahta Kiriş Çizimi
function drawOverheadLogObstacle(ctx, obs, groundY) {
  ctx.save();

  // Zincirler / Bağlantı Halatları (Tavandan kütüğe inen 2 çelik zincir)
  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 2.5;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(obs.x + 8, obs.y);
  ctx.lineTo(obs.x + 8, 0);
  ctx.moveTo(obs.x + obs.w - 8, obs.y);
  ctx.lineTo(obs.x + obs.w - 8, 0);
  ctx.stroke();
  ctx.setLineDash([]);

  // Ahşap Kütük Gövdesi (3D Meşe Rengi)
  const logGrad = ctx.createLinearGradient(obs.x, obs.y, obs.x, obs.y + obs.h);
  logGrad.addColorStop(0, "#8d5b2c");
  logGrad.addColorStop(0.5, "#5a3112");
  logGrad.addColorStop(1, "#361a07");
  ctx.fillStyle = logGrad;
  ctx.strokeStyle = "#ffd166";
  ctx.lineWidth = 1.5;

  ctx.beginPath();
  ctx.roundRect(obs.x, obs.y, obs.w, obs.h, 6);
  ctx.fill();
  ctx.stroke();

  // Kütük üzeri metal kelepçeler
  ctx.fillStyle = "#64748b";
  ctx.fillRect(obs.x + 6, obs.y - 2, 6, obs.h + 4);
  ctx.fillRect(obs.x + obs.w - 12, obs.y - 2, 6, obs.h + 4);

  // Kütük üzerinde sarı uyarı çizgileri
  ctx.fillStyle = "#ffd166";
  ctx.fillRect(obs.x + 22, obs.y + 4, 8, obs.h - 8);
  ctx.fillRect(obs.x + 38, obs.y + 4, 8, obs.h - 8);

  // Açık yönlendirici etiket: "⬇️ ALTINDAN KAY ⬇️"
  const tagW = 76;
  const tagH = 19;
  const tagX = obs.x + (obs.w - tagW) / 2;
  const tagY = obs.y - 23;

  ctx.fillStyle = "rgba(8, 30, 20, 0.95)";
  ctx.strokeStyle = "#ffd166";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(tagX, tagY, tagW, tagH, 6);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#ffd166";
  ctx.font = "bold 9.5px Outfit, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("⬇️ ALTINDAN KAY ⬇️", tagX + tagW/2, tagY + 13);

  // Altındaki Ferah Açık Geçit İpucu
  ctx.fillStyle = "rgba(82, 183, 136, 0.4)";
  ctx.beginPath();
  ctx.moveTo(obs.x + obs.w/2 - 6, obs.y + obs.h + 4);
  ctx.lineTo(obs.x + obs.w/2 + 6, obs.y + obs.h + 4);
  ctx.lineTo(obs.x + obs.w/2, obs.y + obs.h + 12);
  ctx.closePath();
  ctx.fill();

  ctx.restore();
}

// ============================================================================
// 9. YENİ BELİRGİN VE YÜKSEK KONTRASTLI KEMERBURGAZ ORMAN ENGELLERİ
// (Macera Parkı Lastik Salıncak, Ahşap Çit, Yosunlu Kaya, Mantarlı Ağaç Kökü, Su Birikintisi)
// ============================================================================

// 1. Macera Parkı Asılı Lastik Salıncak (Tire Swing - Yüksek Engel / Altından Kayılır)
function drawTireSwing(ctx, obs, groundY) {
  ctx.save();

  // Sarkaç salınım açısı
  const swingOffset = Math.sin(levelTimeElapsed * 3.2) * 5;
  const centerX = obs.x + obs.w / 2 + swingOffset;
  const bottomY = obs.y + obs.h;

  // İki kalın dağcılık halatı (Tavandan lastiğe asılı)
  ctx.strokeStyle = "#d4a373";
  ctx.lineWidth = 3.2;
  ctx.beginPath();
  ctx.moveTo(centerX - 8, obs.y + 4);
  ctx.lineTo(obs.x + 4, 0);
  ctx.moveTo(centerX + 8, obs.y + 4);
  ctx.lineTo(obs.x + obs.w - 4, 0);
  ctx.stroke();

  // Çelik bağlantı halkaları
  ctx.fillStyle = "#94a3b8";
  ctx.fillRect(centerX - 10, obs.y + 2, 5, 5);
  ctx.fillRect(centerX + 5, obs.y + 2, 5, 5);

  // Dev Kamyon Lastiği Dış Gövdesi (Yüksek kontrastlı siyah ve derin gölge)
  ctx.shadowColor = "rgba(0, 0, 0, 0.65)";
  ctx.shadowBlur = 8;
  ctx.fillStyle = "#1e293b";
  ctx.strokeStyle = "#0f172a";
  ctx.lineWidth = 2.5;

  ctx.beginPath();
  ctx.ellipse(centerX, obs.y + obs.h / 2, obs.w * 0.44, obs.h * 0.46, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Lastik İç Boşluğu
  ctx.fillStyle = "#020617";
  ctx.beginPath();
  ctx.ellipse(centerX, obs.y + obs.h / 2, obs.w * 0.22, obs.h * 0.24, 0, 0, Math.PI * 2);
  ctx.fill();

  // Lastik sırt dişleri ve reflektör şeridi
  ctx.strokeStyle = "#ffd166";
  ctx.lineWidth = 1.8;
  ctx.setLineDash([3, 4]);
  ctx.beginPath();
  ctx.ellipse(centerX, obs.y + obs.h / 2, obs.w * 0.36, obs.h * 0.38, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.shadowBlur = 0;

  // Açık Yönlendirici Etiket: "⬇️ ALTINDAN KAY ⬇️"
  const tagW = 78;
  const tagH = 19;
  const tagX = centerX - tagW / 2;
  const tagY = obs.y - 23;

  ctx.fillStyle = "rgba(8, 28, 18, 0.95)";
  ctx.strokeStyle = "#ffd166";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(tagX, tagY, tagW, tagH, 6);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#ffd166";
  ctx.font = "bold 9.5px Outfit, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("⬇️ ALTINDAN KAY ⬇️", centerX, tagY + 13);

  // Altındaki Ferah Açık Geçit Oku
  ctx.fillStyle = "rgba(74, 222, 128, 0.5)";
  ctx.beginPath();
  ctx.moveTo(centerX - 6, bottomY + 4);
  ctx.lineTo(centerX + 6, bottomY + 4);
  ctx.lineTo(centerX, bottomY + 12);
  ctx.closePath();
  ctx.fill();

  ctx.restore();
}

// 2. Kemerburgaz Ahşap Parkur Çiti (Hurdle - Zemin Engeli / Üzerinden Zıplanır)
function drawWoodenHurdle(ctx, obs, groundY) {
  ctx.save();

  // Zemin Temas Gölgesi
  ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
  ctx.beginPath();
  ctx.ellipse(obs.x + obs.w / 2, groundY + 2, obs.w * 0.52, 4.5, 0, 0, Math.PI * 2);
  ctx.fill();

  // 2 Dikey Ahşap Direk (Kalın meşe direkler)
  const postW = 8;
  ctx.fillStyle = "#451a03";
  ctx.strokeStyle = "#1c0a00";
  ctx.lineWidth = 1.5;

  ctx.beginPath();
  ctx.roundRect(obs.x + 2, obs.y, postW, obs.h, 3);
  ctx.roundRect(obs.x + obs.w - postW - 2, obs.y, postW, obs.h, 3);
  ctx.fill();
  ctx.stroke();

  // 2 Yatay Çita (Üzerinde yüksek kontrastlı Reflektör Şeritler)
  const barH = 8;
  const bar1Y = obs.y + 4;
  const bar2Y = obs.y + 19;

  [bar1Y, bar2Y].forEach((by, idx) => {
    ctx.fillStyle = "#78350f";
    ctx.beginPath();
    ctx.roundRect(obs.x, by, obs.w, barH, 2);
    ctx.fill();
    ctx.stroke();

    // Sarı ve Kırmızı Reflektör Şeritleri (Yüksek hızda bile hemen fark edilir)
    const stripeCount = 4;
    const stripeW = obs.w / (stripeCount * 2);
    for (let s = 0; s < stripeCount; s++) {
      ctx.fillStyle = idx === 0 ? "#ffd166" : "#ef4444";
      ctx.fillRect(obs.x + (s * 2 * stripeW) + 2, by + 1, stripeW, barH - 2);
    }
  });

  // Üst Tepe Zıplama İpucu Yıldızı (Zıplayarak altın kapma işareti)
  ctx.fillStyle = "#ffd166";
  ctx.font = "bold 9px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("▲ ZIPLA", obs.x + obs.w / 2, obs.y - 4);

  ctx.restore();
}

// 3. Yosunlu Orman Kayası (Mossy Boulder - Zemin Engeli / Üzerinden Zıplanır)
function drawMossyBoulder(ctx, obs, groundY) {
  ctx.save();

  // Koyu zemin gölgesi
  ctx.fillStyle = "rgba(0, 0, 0, 0.40)";
  ctx.beginPath();
  ctx.ellipse(obs.x + obs.w / 2, groundY + 2, obs.w * 0.48, 5, 0, 0, Math.PI * 2);
  ctx.fill();

  // 3D Granit Kaya Gövdesi (Koyu gri gradyan)
  const rockGrad = ctx.createRadialGradient(
    obs.x + obs.w * 0.35, obs.y + obs.h * 0.35, obs.w * 0.1,
    obs.x + obs.w * 0.5, obs.y + obs.h * 0.5, obs.w * 0.6
  );
  rockGrad.addColorStop(0, "#94a3b8");
  rockGrad.addColorStop(0.5, "#475569");
  rockGrad.addColorStop(1, "#1e293b");

  ctx.fillStyle = rockGrad;
  ctx.strokeStyle = "#0f172a";
  ctx.lineWidth = 2.2;

  // Asimetrik doğal kaya formu
  ctx.beginPath();
  ctx.moveTo(obs.x + obs.w * 0.15, groundY);
  ctx.lineTo(obs.x + 2, obs.y + obs.h * 0.55);
  ctx.lineTo(obs.x + obs.w * 0.25, obs.y + 4);
  ctx.lineTo(obs.x + obs.w * 0.70, obs.y + 2);
  ctx.lineTo(obs.x + obs.w - 2, obs.y + obs.h * 0.45);
  ctx.lineTo(obs.x + obs.w * 0.88, groundY);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Kış Etaplarında (9-10) Beyaz Kar Tepesi, Diğer Etaplarda Canlı Yeşil Orman Yosunu
  if (typeof currentLevelNumber !== 'undefined' && currentLevelNumber >= 9) {
    // ❄️ Masalsı Kış Karı Şapkası
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "rgba(186, 230, 253, 0.8)";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(obs.x + obs.w * 0.20, obs.y + obs.h * 0.38);
    ctx.quadraticCurveTo(obs.x + obs.w * 0.45, obs.y - 3, obs.x + obs.w * 0.78, obs.y + obs.h * 0.32);
    ctx.quadraticCurveTo(obs.x + obs.w * 0.50, obs.y + obs.h * 0.44, obs.x + obs.w * 0.20, obs.y + obs.h * 0.38);
    ctx.fill();
    ctx.stroke();

    // Küçük sarkan kar damlaları
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(obs.x + obs.w * 0.38, obs.y + obs.h * 0.42, 2.2, 0, Math.PI * 2);
    ctx.arc(obs.x + obs.w * 0.58, obs.y + obs.h * 0.40, 2.0, 0, Math.PI * 2);
    ctx.fill();
  } else {
    // 🌿 Canlı Yeşil Orman Yosunu Şapkası
    ctx.fillStyle = "#4ade80";
    ctx.beginPath();
    ctx.moveTo(obs.x + obs.w * 0.22, obs.y + obs.h * 0.35);
    ctx.quadraticCurveTo(obs.x + obs.w * 0.45, obs.y - 1, obs.x + obs.w * 0.75, obs.y + obs.h * 0.30);
    ctx.quadraticCurveTo(obs.x + obs.w * 0.50, obs.y + obs.h * 0.40, obs.x + obs.w * 0.22, obs.y + obs.h * 0.35);
    ctx.fill();

    ctx.fillStyle = "#86efac";
    ctx.beginPath();
    ctx.arc(obs.x + obs.w * 0.42, obs.y + obs.h * 0.20, 2.5, 0, Math.PI * 2);
    ctx.arc(obs.x + obs.w * 0.58, obs.y + obs.h * 0.22, 2, 0, Math.PI * 2);
    ctx.fill();
  }

  // Üst Tepe Zıplama İpucu Yıldızı (Zıplayarak aşma işareti)
  ctx.fillStyle = (typeof currentLevelNumber !== 'undefined' && currentLevelNumber >= 9) ? "#38bdf8" : "#ffd166";
  ctx.font = "bold 9px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("▲ ZIPLA", obs.x + obs.w / 2, obs.y - 4);

  ctx.restore();
}

// 4. Dev Mantarlı Ağaç Kökü (Gnarled Root - Zemin Engeli / Üzerinden Zıplanır)
function drawGnarledRootWithMushrooms(ctx, obs, groundY) {
  ctx.save();

  // Zemin temas gölgesi
  ctx.fillStyle = "rgba(0, 0, 0, 0.38)";
  ctx.beginPath();
  ctx.ellipse(obs.x + obs.w / 2, groundY + 2, obs.w * 0.50, 4.5, 0, 0, Math.PI * 2);
  ctx.fill();

  // Kıvrımlı Meşe Kökü Gövdesi
  const rootGrad = ctx.createLinearGradient(obs.x, obs.y, obs.x + obs.w, groundY);
  rootGrad.addColorStop(0, "#78350f");
  rootGrad.addColorStop(0.6, "#451a03");
  rootGrad.addColorStop(1, "#270d02");

  ctx.fillStyle = rootGrad;
  ctx.strokeStyle = "#1c0a00";
  ctx.lineWidth = 2.0;

  ctx.beginPath();
  ctx.moveTo(obs.x, groundY);
  ctx.bezierCurveTo(obs.x + obs.w * 0.2, obs.y + 4, obs.x + obs.w * 0.65, obs.y + 2, obs.x + obs.w, groundY);
  ctx.lineTo(obs.x + obs.w * 0.75, groundY);
  ctx.bezierCurveTo(obs.x + obs.w * 0.55, obs.y + 14, obs.x + obs.w * 0.25, obs.y + 16, obs.x + 6, groundY);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Kırmızı Benekli Masalsı Mantarlar (🍄)
  const m1X = obs.x + obs.w * 0.32;
  const m1Y = obs.y + 4;
  ctx.fillStyle = "#fef08a";
  ctx.fillRect(m1X - 2.5, m1Y, 5, 8);
  ctx.fillStyle = "#ef4444";
  ctx.strokeStyle = "#991b1b";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(m1X, m1Y, 7, Math.PI, 0);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(m1X - 3, m1Y - 3, 1.3, 0, Math.PI * 2);
  ctx.arc(m1X + 2.5, m1Y - 3.5, 1.3, 0, Math.PI * 2);
  ctx.arc(m1X, m1Y - 5, 1.2, 0, Math.PI * 2);
  ctx.fill();

  const m2X = obs.x + obs.w * 0.65;
  const m2Y = obs.y + 8;
  ctx.fillStyle = "#fef08a";
  ctx.fillRect(m2X - 2, m2Y, 4, 7);
  ctx.fillStyle = "#f97316";
  ctx.beginPath();
  ctx.arc(m2X, m2Y, 5, Math.PI, 0);
  ctx.fill();
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(m2X - 1.5, m2Y - 2.5, 1.1, 0, Math.PI * 2);
  ctx.arc(m2X + 1.5, m2Y - 2.5, 1.1, 0, Math.PI * 2);
  ctx.fill();

  // Üst Tepe Zıplama İpucu
  ctx.fillStyle = "#ffd166";
  ctx.font = "bold 9px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("▲ ZIPLA", obs.x + obs.w / 2, obs.y - 4);

  ctx.restore();
}

// 5. Çamur & Su Birikintisi (Mud Puddle - Yağmur Dönemi Zemin Engeli / Üzerinden Zıplanır)
function drawMudPuddleObstacle(ctx, obs, groundY) {
  ctx.save();

  // Dış derin çamurlu balçık toprağı
  const mudGrad = ctx.createRadialGradient(
    obs.x + obs.w / 2, groundY - obs.h / 2, obs.w * 0.15,
    obs.x + obs.w / 2, groundY - obs.h / 2, obs.w * 0.55
  );
  mudGrad.addColorStop(0, "#3e1f07");
  mudGrad.addColorStop(0.65, "#271406");
  mudGrad.addColorStop(1, "rgba(25, 12, 4, 0.85)");
  ctx.fillStyle = mudGrad;

  ctx.beginPath();
  ctx.ellipse(obs.x + obs.w / 2, groundY - obs.h / 2 + 3, obs.w * 0.54, obs.h * 0.55, 0, 0, Math.PI * 2);
  ctx.fill();

  // Çamur çevresinde toprak sıçrantıları ve benekleri
  ctx.fillStyle = "#3e1f07";
  ctx.beginPath();
  ctx.arc(obs.x + 3, groundY - 3, 2.8, 0, Math.PI * 2);
  ctx.arc(obs.x + obs.w - 2, groundY - 2, 2.5, 0, Math.PI * 2);
  ctx.arc(obs.x + obs.w * 0.2, groundY - obs.h + 2, 2.2, 0, Math.PI * 2);
  ctx.fill();

  // Parıldayan ıslak yağmur suyu yüzeyi
  const waterGrad = ctx.createLinearGradient(obs.x, obs.y, obs.x + obs.w, obs.y + obs.h);
  waterGrad.addColorStop(0, "#38bdf8");
  waterGrad.addColorStop(0.45, "#0284c7");
  waterGrad.addColorStop(1, "#1e3a5f");

  ctx.fillStyle = waterGrad;
  ctx.strokeStyle = "#bae6fd";
  ctx.lineWidth = 1.6;

  ctx.beginPath();
  ctx.ellipse(obs.x + obs.w / 2, groundY - obs.h / 2 + 2, obs.w * 0.44, obs.h * 0.40, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Su yüzeyi dalga halkaları (Ripples)
  const rippleR = ((levelTimeElapsed * 42) % 20) + 4;
  ctx.strokeStyle = "rgba(255, 255, 255, 0.45)";
  ctx.lineWidth = 1.1;
  ctx.beginPath();
  ctx.ellipse(obs.x + obs.w / 2, groundY - obs.h / 2 + 2, rippleR, rippleR * 0.35, 0, 0, Math.PI * 2);
  ctx.stroke();

  // Çamur kenarı ıslak orman taşları
  ctx.fillStyle = "#64748b";
  ctx.beginPath();
  ctx.arc(obs.x + 6, groundY - 2, 2.6, 0, Math.PI * 2);
  ctx.arc(obs.x + obs.w - 8, groundY - 3, 3.2, 0, Math.PI * 2);
  ctx.fill();

  // Üst Tepe Zıplama İpucu
  ctx.fillStyle = "#38bdf8";
  ctx.font = "bold 9px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("▲ ZIPLA", obs.x + obs.w / 2, obs.y - 4);

  ctx.restore();
}

function drawPuddleObstacle(ctx, obs, groundY) {
  drawMudPuddleObstacle(ctx, obs, groundY);
}

// 6. Masalsı Kardan Adam (Snowman - Kış Dönemi Zemin Engeli / Üzerinden Zıplanır)
function drawSnowmanObstacle(ctx, obs, groundY) {
  ctx.save();
  const sx = obs.x + obs.w / 2;
  const sy = groundY;

  // Buz mavisi zemin temas gölgesi
  ctx.fillStyle = "rgba(15, 23, 42, 0.36)";
  ctx.beginPath();
  ctx.ellipse(sx, sy + 2, obs.w * 0.48, 5, 0, 0, Math.PI * 2);
  ctx.fill();

  // 1. Alt Gövde Kar Küresi
  const rBottom = obs.h * 0.34;
  const yBottom = sy - rBottom;
  const gradBottom = ctx.createRadialGradient(sx - 3, yBottom - 3, 3, sx, yBottom, rBottom);
  gradBottom.addColorStop(0, "#ffffff");
  gradBottom.addColorStop(0.7, "#f0f9ff");
  gradBottom.addColorStop(1, "#bae6fd");
  ctx.fillStyle = gradBottom;
  ctx.strokeStyle = "rgba(186, 230, 253, 0.8)";
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.arc(sx, yBottom, rBottom, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Alt gövde kömür düğmeleri
  ctx.fillStyle = "#1e293b";
  ctx.beginPath();
  ctx.arc(sx, yBottom - 3, 1.8, 0, Math.PI * 2);
  ctx.arc(sx, yBottom + 4, 1.8, 0, Math.PI * 2);
  ctx.fill();

  // Dal Kollar (Sol ve Sağ ağaç dalı kolları)
  ctx.strokeStyle = "#78350f";
  ctx.lineWidth = 2.0;
  ctx.beginPath();
  ctx.moveTo(sx - rBottom + 2, yBottom - 2);
  ctx.lineTo(sx - rBottom - 9, yBottom - 7);
  ctx.lineTo(sx - rBottom - 13, yBottom - 12);
  ctx.moveTo(sx + rBottom - 2, yBottom - 2);
  ctx.lineTo(sx + rBottom + 9, yBottom - 8);
  ctx.lineTo(sx + rBottom + 12, yBottom - 5);
  ctx.stroke();

  // 2. Kırmızı Yün Atkı
  const rHead = obs.h * 0.24;
  const yHead = yBottom - rBottom * 0.82 - rHead;
  const scarfY = yHead + rHead * 0.75;
  ctx.fillStyle = "#ef4444";
  ctx.beginPath();
  ctx.roundRect ? ctx.roundRect(sx - rHead - 2, scarfY - 3, (rHead + 2) * 2, 5, 2) : ctx.rect(sx - rHead - 2, scarfY - 3, (rHead + 2) * 2, 5);
  ctx.fill();
  // Sarkık atkı ucu
  ctx.beginPath();
  ctx.moveTo(sx + 3, scarfY);
  ctx.lineTo(sx + 8, scarfY + 11);
  ctx.lineTo(sx + 4, scarfY + 11);
  ctx.closePath();
  ctx.fill();

  // 3. Baş Kar Küresi
  const gradHead = ctx.createRadialGradient(sx - 2, yHead - 2, 2, sx, yHead, rHead);
  gradHead.addColorStop(0, "#ffffff");
  gradHead.addColorStop(0.75, "#f0f9ff");
  gradHead.addColorStop(1, "#bae6fd");
  ctx.fillStyle = gradHead;
  ctx.strokeStyle = "rgba(186, 230, 253, 0.8)";
  ctx.lineWidth = 1.1;
  ctx.beginPath();
  ctx.arc(sx, yHead, rHead, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Kömür Gözler
  ctx.fillStyle = "#0f172a";
  ctx.beginPath();
  ctx.arc(sx - 3.5, yHead - 2, 1.4, 0, Math.PI * 2);
  ctx.arc(sx + 3.5, yHead - 2, 1.4, 0, Math.PI * 2);
  ctx.fill();

  // Havuç Burun (Sola dönük canlı turuncu havuç)
  ctx.fillStyle = "#ea580c";
  ctx.beginPath();
  ctx.moveTo(sx, yHead);
  ctx.lineTo(sx - 9, yHead + 1.5);
  ctx.lineTo(sx, yHead + 3);
  ctx.closePath();
  ctx.fill();

  // Sevimli Gülümseme (Kömür noktaları)
  ctx.fillStyle = "#334155";
  for (let m = -2; m <= 2; m++) {
    ctx.beginPath();
    ctx.arc(sx + m * 2, yHead + 4.5 + Math.abs(m) * 0.5, 0.8, 0, Math.PI * 2);
    ctx.fill();
  }

  // Sevimli Mini Silindir Şapka
  const hatBaseW = rHead * 2 + 4;
  const hatTopW = rHead * 1.3;
  const hatH = 9;
  const hatY = yHead - rHead;
  ctx.fillStyle = "#0f172a";
  ctx.fillRect(sx - hatBaseW / 2, hatY - 2, hatBaseW, 2.5);
  ctx.fillRect(sx - hatTopW / 2, hatY - hatH - 2, hatTopW, hatH);
  // Şapka Kırmızı Kurdele
  ctx.fillStyle = "#dc2626";
  ctx.fillRect(sx - hatTopW / 2, hatY - 4.5, hatTopW, 2.5);

  // Üst Tepe Zıplama İpucu
  ctx.fillStyle = "#38bdf8";
  ctx.font = "bold 9px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("▲ ZIPLA", sx, obs.y - 4);

  ctx.restore();
}

// ============================================================================
// 10. KEMERBURGAZ KENT ORMANI DOĞAL PATİKA VE ATMOSFER ÇİZİM MOTORU
// ============================================================================

function renderKemerburgazTrail(ctx, groundY, w, h, scrollX, stageNum) {
  ctx.save();

  const atmos = getStageAtmosphere(stageNum);

  // 1. Derin Toprak Katmanı (Zengin Doğal Toprak Gradyanı)
  const soilGrad = ctx.createLinearGradient(0, groundY, 0, h);
  if (atmos.id === "winter") {
    soilGrad.addColorStop(0, "#334155"); // Donmuş soğuk toprak
    soilGrad.addColorStop(1, "#0f172a");
  } else if (atmos.id === "rainy") {
    soilGrad.addColorStop(0, "#2d1b0e"); // Islak koyu çamur toprağı
    soilGrad.addColorStop(1, "#180d07");
  } else {
    soilGrad.addColorStop(0, "#45220c"); // Sıcak orman humusu
    soilGrad.addColorStop(1, "#1c0d05");
  }
  ctx.fillStyle = soilGrad;
  ctx.fillRect(0, groundY, w, h - groundY);

  // 2. Ahşap Yürüyüş Parkuru Traversleri (Boardwalk Planks)
  // Her 72px'te bir patikayı bölen ahşap traversler (1.0x zemin hızıyla)
  const plankSpacing = 72;
  const plankW = 10;
  let startPlankX = (scrollX % plankSpacing);
  while (startPlankX < 0) startPlankX += plankSpacing;

  ctx.fillStyle = atmos.id === "winter" ? "rgba(71, 85, 105, 0.4)" : "rgba(38, 18, 7, 0.45)";
  for (let px = startPlankX; px < w; px += plankSpacing) {
    ctx.fillRect(px, groundY + 4, plankW, h - groundY);
  }

  // 3. Üst Çim / Bordür Çizgisi
  if (atmos.id === "winter") {
    // Karlı beyaz örtü ve buz parıltısı
    ctx.fillStyle = "#e2e8f0";
    ctx.fillRect(0, groundY, w, 7);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, groundY, w, 3);
  } else if (atmos.id === "rainy") {
    // Islak gölet çimeni ve su ışıltısı
    ctx.fillStyle = "#1e3a2b";
    ctx.fillRect(0, groundY, w, 8);
    ctx.fillStyle = "#38bdf8";
    ctx.fillRect(0, groundY, w, 2); // Islak su parıltısı
  } else if (atmos.id === "night") {
    // Ay ışığında parıldayan gece çimeni
    ctx.fillStyle = "#0f2e21";
    ctx.fillRect(0, groundY, w, 8);
    ctx.fillStyle = "#38bdf8";
    ctx.fillRect(0, groundY, w, 2);
  } else {
    // Bahar taze yeşil çimen şeridi
    ctx.fillStyle = "#2d6a4f";
    ctx.fillRect(0, groundY, w, 9);
    ctx.fillStyle = "#52b788";
    ctx.fillRect(0, groundY, w, 3);
  }

  // 4. 🐾 GERÇEKÇİ KAR PATİ İZLERİ (Kış Etapları Fiziği)
  if (atmos.id === "winter") {
    for (let i = snowFootprints.length - 1; i >= 0; i--) {
      const fp = snowFootprints[i];
      fp.x -= gameSpeed;
      if (fp.x < -50) {
        snowFootprints.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.fillStyle = `rgba(148, 163, 184, ${fp.alpha * 0.75})`;
      if (fp.isSlide) {
        // Kayma oluğu
        ctx.beginPath();
        ctx.roundRect ? ctx.roundRect(fp.x - fp.rx, fp.y - fp.ry, fp.rx * 2, fp.ry * 2, 2) : ctx.rect(fp.x - fp.rx, fp.y - fp.ry, fp.rx * 2, fp.ry * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(255, 255, 255, ${fp.alpha * 0.6})`;
        ctx.fillRect(fp.x - fp.rx, fp.y - fp.ry - 1, fp.rx * 2, 1);
      } else {
        // Ana pati çukuru
        ctx.beginPath();
        ctx.ellipse(fp.x, fp.y, fp.rx, fp.ry, 0, 0, Math.PI * 2);
        ctx.fill();

        // Üst kenar beyaz kar kabartısı
        ctx.strokeStyle = `rgba(255, 255, 255, ${fp.alpha * 0.8})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(fp.x, fp.y - 0.5, fp.rx * 0.85, Math.PI * 0.9, Math.PI * 1.8);
        ctx.stroke();

        // Sevimli 3 parmak pati izi
        if (fp.isPaws) {
          ctx.fillStyle = `rgba(100, 116, 139, ${fp.alpha * 0.8})`;
          ctx.beginPath();
          ctx.arc(fp.x + fp.rx * 0.7, fp.y - 1.8, 1.4, 0, Math.PI * 2);
          ctx.arc(fp.x + fp.rx * 0.8, fp.y, 1.4, 0, Math.PI * 2);
          ctx.arc(fp.x + fp.rx * 0.7, fp.y + 1.8, 1.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();
    }
  }

  // 5. 💧 YAĞMUR SU HALKALARI & SIZINTI DALGALARI
  if (atmos.id === "rainy") {
    for (let i = waterRipples.length - 1; i >= 0; i--) {
      const rip = waterRipples[i];
      rip.x -= gameSpeed * 0.85;
      rip.r += 0.45;
      rip.alpha *= 0.94;
      if (rip.alpha < 0.04 || rip.r >= rip.maxR) {
        waterRipples.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.strokeStyle = `rgba(56, 189, 248, ${rip.alpha})`;
      ctx.lineWidth = rip.lw || 1.4;
      ctx.beginPath();
      ctx.ellipse(rip.x, rip.y, rip.r * 1.8, rip.r * 0.45, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }
  }

  ctx.restore();
}

function renderWeatherAtmosphereBackground(ctx, w, h, scrollX, stageNum) {
  const atmos = getStageAtmosphere(stageNum);

  // 1. En Uzak Gökyüzü Katmanı (Uzak Dağlar & Sisli Tepe Silüeti - 0.20x Paralaks Derinliği)
  ctx.save();
  const farScroll = scrollX * 0.2;
  const hillWidth = 240;
  let hillStartX = farScroll % hillWidth;
  while (hillStartX > 0) hillStartX -= hillWidth;

  const hillGrad = ctx.createLinearGradient(0, h * 0.35, 0, h * 0.75);
  if (atmos.id === "winter") {
    hillGrad.addColorStop(0, "rgba(30, 41, 59, 0.4)");
    hillGrad.addColorStop(1, "rgba(15, 23, 42, 0.8)");
  } else if (atmos.id === "night") {
    hillGrad.addColorStop(0, "rgba(8, 28, 21, 0.45)");
    hillGrad.addColorStop(1, "rgba(3, 10, 6, 0.85)");
  } else if (atmos.id === "rainy") {
    hillGrad.addColorStop(0, "rgba(17, 34, 23, 0.4)");
    hillGrad.addColorStop(1, "rgba(7, 16, 10, 0.8)");
  } else {
    hillGrad.addColorStop(0, "rgba(45, 106, 79, 0.35)");
    hillGrad.addColorStop(1, "rgba(27, 67, 50, 0.75)");
  }

  ctx.fillStyle = hillGrad;
  ctx.beginPath();
  ctx.moveTo(0, h * 0.65);
  for (let hx = hillStartX; hx < w + hillWidth; hx += hillWidth) {
    ctx.quadraticCurveTo(hx + hillWidth * 0.5, h * 0.42, hx + hillWidth, h * 0.65);
  }
  ctx.lineTo(w, h);
  ctx.lineTo(0, h);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  // 2. Orta Fon: Orijinal Sonsuz Orman Arka Planı (0.45x Paralaks Derinliği)
  if (imgBg.complete && imgBg.naturalWidth > 0) {
    ctx.save();
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const bgDrawH = h;
    const bgDrawW = (imgBg.naturalWidth / imgBg.naturalHeight) * bgDrawH;
    const midScroll = scrollX * 0.45;
    let curX = midScroll % bgDrawW;
    while (curX > 0) curX -= bgDrawW;
    while (curX < w) {
      ctx.drawImage(imgBg, curX, 0, bgDrawW + 1, bgDrawH);
      curX += bgDrawW;
    }
    ctx.restore();
  } else {
    ctx.fillStyle = "#1b4332";
    ctx.fillRect(0, 0, w, h);
  }

  // 3. Yakın-Orta Plan Orman Gövdeleri & Ağaç Silüetleri (0.72x Paralaks)
  ctx.save();
  const treeSpacing = 160;
  const treeScroll = scrollX * 0.72;
  let startTreeX = treeScroll % treeSpacing;
  while (startTreeX > 0) startTreeX += treeSpacing;

  for (let tx = startTreeX; false && tx < w + treeSpacing; tx += treeSpacing) {
    const treeH = h * 0.42;
    const treeY = h - 90 - treeH;

    if (atmos.id === "winter") {
      // Karlı çam silüeti
      ctx.fillStyle = "rgba(30, 41, 59, 0.35)";
      ctx.fillRect(tx + 18, treeY + 30, 8, treeH);
      ctx.fillStyle = "rgba(51, 65, 85, 0.45)";
      ctx.beginPath();
      ctx.moveTo(tx + 22, treeY);
      ctx.lineTo(tx + 44, treeY + 50);
      ctx.lineTo(tx, treeY + 50);
      ctx.closePath();
      ctx.fill();
      // Dal karı
      ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
      ctx.fillRect(tx + 6, treeY + 48, 32, 3);
    } else {
      // Doğa yeşili ağaç gövdesi ve taç silüeti
      ctx.fillStyle = "rgba(24, 43, 31, 0.32)";
      ctx.fillRect(tx + 19, treeY + 35, 6, treeH);
      ctx.beginPath();
      ctx.arc(tx + 22, treeY + 28, 22, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();

  // 4. Atmosfere Özel Gökyüzü Elemanları
  if (atmos.hasMoon) {
    // 🌕 Büyülü Dolunay Çizimi (Seyir Kulesi Gece Teması)
    ctx.save();
    const moonX = w - 85;
    const moonY = 85;
    // Dolunay halesi
    const moonGlow = ctx.createRadialGradient(moonX, moonY, 14, moonX, moonY, 48);
    moonGlow.addColorStop(0, "rgba(254, 240, 138, 0.45)");
    moonGlow.addColorStop(0.5, "rgba(217, 249, 157, 0.15)");
    moonGlow.addColorStop(1, "rgba(217, 249, 157, 0)");
    ctx.fillStyle = moonGlow;
    ctx.beginPath();
    ctx.arc(moonX, moonY, 48, 0, Math.PI * 2);
    ctx.fill();

    // Dolunay Küresi
    ctx.fillStyle = "#fef08a";
    ctx.beginPath();
    ctx.arc(moonX, moonY, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  } else if (atmos.hasSunRays) {
    // ☀️ Güneş Hüzmeleri (Bahar Sabahı God Rays)
    ctx.save();
    const rayGrad = ctx.createLinearGradient(0, 0, w * 0.6, h * 0.5);
    rayGrad.addColorStop(0, "rgba(254, 240, 138, 0.15)");
    rayGrad.addColorStop(0.7, "rgba(255, 255, 255, 0.04)");
    rayGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = rayGrad;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(w * 0.8, 0);
    ctx.lineTo(w * 0.35, h * 0.6);
    ctx.lineTo(0, h * 0.4);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
}

// ☃️ SEVİMLİ KIŞ ETAPLARI BİTİŞ KARDAN ADAMI (ETAP 9 & 10 FİNAL KUTLAMASI)
function drawWinterSnowman(ctx, snowman, groundY) {
  ctx.save();
  const sx = snowman.x;
  const sy = groundY;

  // Taban gölgesi
  ctx.fillStyle = "rgba(0, 0, 0, 0.28)";
  ctx.beginPath();
  ctx.ellipse(sx, sy + 2, 26, 6, 0, 0, Math.PI * 2);
  ctx.fill();

  // "FİNAL!" Bitiş Tabelası (Kardan adamın solunda)
  const signX = sx - 38;
  ctx.fillStyle = "#5c3317";
  ctx.fillRect(signX - 3, sy - 58, 6, 58);
  ctx.fillStyle = "#a2673d";
  ctx.fillRect(signX - 22, sy - 64, 44, 22);
  ctx.strokeStyle = "#4a2810";
  ctx.lineWidth = 1.5;
  ctx.strokeRect(signX - 22, sy - 64, 44, 22);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(signX - 23, sy - 66, 46, 3);
  ctx.fillStyle = "#fff8dc";
  ctx.font = "bold 9.5px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("🏁 FİNAL", signX, sy - 49);

  // 1. Alt Kar Küresi (Büyük)
  const gradBottom = ctx.createRadialGradient(sx - 5, sy - 20, 4, sx, sy - 18, 22);
  gradBottom.addColorStop(0, "#ffffff");
  gradBottom.addColorStop(0.75, "#f0f9ff");
  gradBottom.addColorStop(1, "#bae6fd");
  ctx.fillStyle = gradBottom;
  ctx.beginPath();
  ctx.arc(sx, sy - 18, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "rgba(186, 230, 253, 0.5)";
  ctx.lineWidth = 1;
  ctx.stroke();

  // 2. Orta Kar Küresi (Gövde)
  const gradMid = ctx.createRadialGradient(sx - 4, sy - 44, 3, sx, sy - 42, 16);
  gradMid.addColorStop(0, "#ffffff");
  gradMid.addColorStop(0.75, "#f0f9ff");
  gradMid.addColorStop(1, "#bae6fd");
  ctx.fillStyle = gradMid;
  ctx.beginPath();
  ctx.arc(sx, sy - 42, 15, 0, Math.PI * 2);
  ctx.fill();

  // Kömür Düğmeler
  ctx.fillStyle = "#1e293b";
  ctx.beginPath();
  ctx.arc(sx, sy - 46, 2.2, 0, Math.PI * 2);
  ctx.arc(sx, sy - 39, 2.2, 0, Math.PI * 2);
  ctx.fill();

  // Sol Kol (Sabit dal)
  ctx.strokeStyle = "#6b3e11";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(sx - 13, sy - 43);
  ctx.lineTo(sx - 28, sy - 36);
  ctx.lineTo(sx - 34, sy - 42);
  ctx.stroke();

  // Sağ Kol (Kahramana el sallayan hareketli dal)
  ctx.save();
  ctx.translate(sx + 13, sy - 43);
  ctx.rotate(-0.45 + (snowman.armAngle || 0));
  ctx.strokeStyle = "#6b3e11";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(18, -14);
  ctx.lineTo(24, -22);
  ctx.moveTo(18, -14);
  ctx.lineTo(26, -11);
  ctx.stroke();
  ctx.restore();

  // Sıcak Örgü Atkı (Boyun)
  ctx.fillStyle = "#ef4444";
  ctx.beginPath();
  ctx.roundRect ? ctx.roundRect(sx - 13, sy - 55, 26, 7, 3) : ctx.rect(sx - 13, sy - 55, 26, 7);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(sx + 4, sy - 51);
  ctx.lineTo(sx + 12, sy - 32);
  ctx.lineTo(sx + 6, sy - 31);
  ctx.closePath();
  ctx.fill();

  // 3. Baş Küresi
  const gradHead = ctx.createRadialGradient(sx - 3, sy - 63, 2, sx, sy - 62, 13);
  gradHead.addColorStop(0, "#ffffff");
  gradHead.addColorStop(0.8, "#f0f9ff");
  gradHead.addColorStop(1, "#bae6fd");
  ctx.fillStyle = gradHead;
  ctx.beginPath();
  ctx.arc(sx, sy - 62, 11, 0, Math.PI * 2);
  ctx.fill();

  // Kömür Gözler
  ctx.fillStyle = "#0f172a";
  ctx.beginPath();
  ctx.arc(sx - 4, sy - 64, 1.8, 0, Math.PI * 2);
  ctx.arc(sx + 4, sy - 64, 1.8, 0, Math.PI * 2);
  ctx.fill();

  // Havuç Burun
  ctx.fillStyle = "#ea580c";
  ctx.beginPath();
  ctx.moveTo(sx, sy - 61);
  ctx.lineTo(sx - 12, sy - 59);
  ctx.lineTo(sx, sy - 58);
  ctx.closePath();
  ctx.fill();

  // Gülümseyen Ağız (Küçük noktalar)
  ctx.fillStyle = "#334155";
  for (let m = -3; m <= 3; m += 2) {
    ctx.beginPath();
    ctx.arc(sx + m * 2, sy - 56 + Math.abs(m) * 0.7, 1, 0, Math.PI * 2);
    ctx.fill();
  }

  // Sevimli Silindir Şapka
  ctx.fillStyle = "#0f172a";
  ctx.fillRect(sx - 15, sy - 73, 30, 3.5);
  ctx.fillRect(sx - 10, sy - 87, 20, 14);
  ctx.fillStyle = "#dc2626";
  ctx.fillRect(sx - 10, sy - 76, 20, 3);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(sx - 11, sy - 89, 22, 2.5);

  ctx.restore();
}

function renderWeatherParticles(ctx, w, h, stageNum) {
  const atmos = getStageAtmosphere(stageNum);

  ctx.save();
  for (let i = 0; i < weatherParticles.length; i++) {
    const p = weatherParticles[i];

    if (atmos.particleType === "rain") {
      // 🌧️ Yağmur Çizgileri
      ctx.strokeStyle = "rgba(186, 230, 253, 0.55)";
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x + p.vx * 1.8, p.y + p.size);
      ctx.stroke();
    } else if (atmos.particleType === "snow") {
      // ❄️ Kar Kristalleri
      ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    } else if (atmos.particleType === "fireflies") {
      // 🪲 Ateş Böcekleri (Pulsing Glow)
      const glow = Math.sin(p.phase) * 0.4 + 0.6;
      ctx.fillStyle = `rgba(250, 204, 21, ${glow * 0.85})`;
      ctx.shadowColor = "#fde047";
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    } else {
      // 🍃 Taze Bahar Yaprakları & Altın Polen
      if (i % 2 === 0) {
        // Yeşil yaprak
        ctx.fillStyle = "rgba(74, 222, 128, 0.70)";
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, p.size * 1.3, p.size * 0.7, p.phase, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Altın polen zerresi
        ctx.fillStyle = "rgba(253, 224, 71, 0.75)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
  ctx.restore();
}

function renderWeatherAtmosphereOverlay(ctx, w, h, stageNum) {
  const atmos = getStageAtmosphere(stageNum);
  if (!atmos.skyColor) return;

  ctx.save();
  ctx.fillStyle = atmos.skyColor;
  ctx.fillRect(0, 0, w, h);

  // Yağmurlu günlerde zemin üstü hafif sis katmanı
  if (atmos.hasMist) {
    const mistY = h - 140;
    const mistGrad = ctx.createLinearGradient(0, mistY, 0, mistY + 50);
    mistGrad.addColorStop(0, "rgba(241, 245, 249, 0)");
    mistGrad.addColorStop(0.5, "rgba(241, 245, 249, 0.16)");
    mistGrad.addColorStop(1, "rgba(241, 245, 249, 0)");
    ctx.fillStyle = mistGrad;
    ctx.fillRect(0, mistY, w, 50);
  }
  ctx.restore();
}

function updateHUD() {
  const hudCoins = document.getElementById("game-hud-coins");
  if (hudCoins) hudCoins.textContent = coinsCollected;
  const hudScore = document.getElementById("game-hud-score");
  if (hudScore) hudScore.textContent = `⭐ ${score.toLocaleString()} / ${currentMaxStageScore.toLocaleString()} Maks`;
  
  let heartsStr = "";
  for (let i = 0; i < maxLives; i++) {
    heartsStr += i < playerLives ? "❤️" : "🖤";
  }
  const hudHearts = document.getElementById("game-hud-hearts");
  if (hudHearts) hudHearts.textContent = heartsStr;

  // Canlı Etap İlerleme Çubuğu ve Geri Sayım (2:30 Dakika Koşu Parkuru)
  const pct = Math.min(100, Math.floor((levelTimeElapsed / levelTotalDurationSeconds) * 100));
  const remainingSec = Math.max(0, Math.ceil(levelTotalDurationSeconds - levelTimeElapsed));
  const mins = Math.floor(remainingSec / 60);
  const secs = remainingSec % 60;
  const timeStr = `${mins}:${secs < 10 ? '0' : ''}${secs}`;

  const barEl = document.getElementById("hud-progress-bar");
  const markerEl = document.getElementById("hud-progress-marker");
  const timeEl = document.getElementById("hud-progress-time");
  const stageEl = document.getElementById("hud-progress-stage-name");

  if (barEl) barEl.style.width = `${pct}%`;
  if (markerEl) {
    markerEl.style.left = `${pct}%`;
    const heroIcons = { 1: "🦊", 2: "🐵", 3: "🐯", 4: "🐿️", 5: "🦉" };
    const hId = GameState.getSelectedHero();
    markerEl.textContent = heroIcons[hId] || "🦊";
  }
  if (timeEl) timeEl.textContent = `⏱️ ${timeStr} dk`;
  if (stageEl) stageEl.textContent = `🌲 ${currentLevelNumber}. Etap • %${pct}`;
}

function updateClothingHUD() {
  const hatPill = document.getElementById("hud-cloth-hat");
  const vestPill = document.getElementById("hud-cloth-vest");
  const pantsPill = document.getElementById("hud-cloth-pants");

  const wearHat = document.getElementById("runner-wear-hat");
  const wearVest = document.getElementById("runner-wear-vest");
  const wearPants = document.getElementById("runner-wear-pants");

  if (activeClothingBuffs.hat > 0) {
    if (hatPill) {
      hatPill.classList.remove("hidden");
      const t = document.getElementById("timer-cloth-hat");
      if (t) t.textContent = `${Math.ceil(activeClothingBuffs.hat)}s`;
    }
    if (wearHat) wearHat.classList.remove("hidden");
  } else {
    if (hatPill) hatPill.classList.add("hidden");
    if (wearHat) wearHat.classList.add("hidden");
  }

  if (activeClothingBuffs.vest > 0) {
    if (vestPill) {
      vestPill.classList.remove("hidden");
      const t = document.getElementById("timer-cloth-vest");
      if (t) t.textContent = `${Math.ceil(activeClothingBuffs.vest)}s`;
    }
    if (wearVest) wearVest.classList.remove("hidden");
  } else {
    if (vestPill) vestPill.classList.add("hidden");
    if (wearVest) wearVest.classList.add("hidden");
  }

  if (activeClothingBuffs.pants > 0) {
    if (pantsPill) {
      pantsPill.classList.remove("hidden");
      const t = document.getElementById("timer-cloth-pants");
      if (t) t.textContent = `${Math.ceil(activeClothingBuffs.pants)}s`;
    }
    if (wearPants) wearPants.classList.remove("hidden");
  } else {
    if (pantsPill) pantsPill.classList.add("hidden");
    if (wearPants) wearPants.classList.add("hidden");
  }
}

function updateHUDPerks() {
  const tentBonus = GameState.getTentLevel();
  const fireBonus = GameState.getCampfireLevel();
  const bootsBonus = GameState.getBootsLevel();

  const tentEl = document.getElementById("hud-perk-tent");
  const fireEl = document.getElementById("hud-perk-fire");
  const bootsEl = document.getElementById("hud-perk-boots");

  if (tentEl) {
    if (typeof player !== 'undefined' && player && player.shieldTimer > 0) {
      tentEl.textContent = `🛡️ Kalkan: ${Math.ceil(player.shieldTimer)}s`;
      tentEl.style.display = "inline-block";
    } else {
      tentEl.textContent = `⛺ ${playerLives}/${maxLives} Can`;
      tentEl.style.display = "inline-block";
    }
  }

  if (fireEl) {
    if (typeof player !== 'undefined' && player && player.magnetTimer > 0) {
      fireEl.textContent = `🧲 Mıknatıs: ${Math.ceil(player.magnetTimer)}s`;
      fireEl.style.display = "inline-block";
    } else {
      fireEl.style.display = "none";
    }
  }

  if (bootsEl) {
    if (typeof player !== 'undefined' && player && player.glideTimer > 0) {
      bootsEl.textContent = `👟 Süzülme: ${Math.ceil(player.glideTimer)}s`;
      bootsEl.style.display = "inline-block";
    } else {
      bootsEl.style.display = "none";
    }
  }
}

// 🛡️ Dinlenme Çadırı Ahşap/Zümrüt Orman Koruma Kalkanı Halesi
function drawPlayerShieldAura(ctx, p) {
  ctx.save();
  const cx = p.x + p.w * 0.5;
  const cy = p.y + p.h * 0.5;
  const radius = Math.max(p.w, p.h) * 0.72;
  const t = Date.now() * 0.0035;

  // Dönen ışık halkası
  ctx.strokeStyle = "rgba(74, 222, 128, 0.8)";
  ctx.lineWidth = 2.5;
  ctx.setLineDash([7, 5]);
  ctx.beginPath();
  ctx.arc(cx, cy, radius, t, t + Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Altın ışıltı çemberi
  ctx.strokeStyle = "rgba(255, 209, 102, 0.65)";
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.arc(cx, cy, radius - 4, -t, -t + Math.PI * 2);
  ctx.stroke();

  // Dönen 3 adet koruyucu altın yaprak
  for (let i = 0; i < 3; i++) {
    const angle = t + (i * Math.PI * 2 / 3);
    const lx = cx + Math.cos(angle) * radius;
    const ly = cy + Math.sin(angle) * radius;
    ctx.fillStyle = "#ffd166";
    ctx.beginPath();
    ctx.arc(lx, ly, 3.8, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

// 🪙 DİNAMİK VE CANLI ALTIN PARA ÇİZİMİ (Sabit Durmayan, Havada Salınan, 3D Dönen ve Işıldayan Altın)
function drawAnimatedCoin(ctx, c) {
  ctx.save();
  const cx = c.x + c.w * 0.5;
  const bob = c.bob !== undefined ? c.bob : Math.sin((Date.now() * 0.005) + (c.seed || 0)) * 4.5;
  const cy = c.y + c.h * 0.5 + bob;
  const t = (Date.now() * 0.005) + (c.seed || 0);

  // 1. Zemin Yumuşak Altın Gölgesi (Yere yakınsa zeminde hafif gölge)
  const groundY = canvas.height - 90;
  if (cy < groundY && (groundY - cy) < 100) {
    const shadowDist = groundY - cy;
    const shadowAlpha = Math.max(0.06, 0.26 * (1 - shadowDist / 100));
    ctx.fillStyle = `rgba(0, 0, 0, ${shadowAlpha})`;
    ctx.beginPath();
    ctx.ellipse(cx, groundY + 1, (c.w * 0.45) * (1 - shadowDist / 130), 3.5, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  // 2. Canlı Dönen Altın Parıltı Halesi (Pulsing Glow Halo)
  const haloRadius = 14 + Math.sin(t * 2.2) * 2.5;
  const grad = ctx.createRadialGradient(cx, cy, 2, cx, cy, haloRadius + 4);
  grad.addColorStop(0, "rgba(255, 225, 100, 0.45)");
  grad.addColorStop(0.6, "rgba(245, 158, 11, 0.20)");
  grad.addColorStop(1, "rgba(245, 158, 11, 0)");
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(cx, cy, haloRadius + 4, 0, Math.PI * 2);
  ctx.fill();

  // 3. 3 Boyutlu Eksen Dönüşü (Horizontal 3D Coin Spin)
  const spinFactor = Math.cos(t * 3.4);
  const scaleX = Math.max(0.20, Math.abs(spinFactor));

  ctx.translate(cx, cy);
  ctx.scale(scaleX, 1.0);

  // Görsel yüklüyse döndürülmüş görseli çiz
  if (imgCoin.complete && imgCoin.naturalWidth > 0) {
    ctx.drawImage(imgCoin, -c.w * 0.5, -c.h * 0.5, c.w, c.h);
  } else {
    // Vektörel altın para
    const r = c.w * 0.5;

    ctx.fillStyle = "#b45309";
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#fbbf24";
    ctx.beginPath();
    ctx.arc(0, 0, r - 1.8, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "#f59e0b";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(0, 0, r - 4, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = "#d97706";
    ctx.font = `bold ${Math.floor(r * 0.9)}px sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("★", 0, 0);

    ctx.fillStyle = "rgba(255, 255, 255, 0.65)";
    ctx.beginPath();
    ctx.ellipse(-r * 0.35, -r * 0.3, r * 0.25, r * 0.45, -0.4, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

// ✨ Altın Meşe Palamudu (Net, Keskin Vektör Tasarım & Canlı Parlaklık)
function drawGoldenAcornPickup(ctx, c) {
  ctx.save();
  const cx = c.x + c.w * 0.5;
  const cy = c.y + c.h * 0.5;
  const t = Date.now() * 0.006;
  const bob = Math.sin(t * 2.5) * 3;

  // 1. Canlı Dış Altın Parıltı Halesi
  ctx.shadowColor = "#ffd166";
  ctx.shadowBlur = 8;
  ctx.fillStyle = "rgba(255, 209, 102, 0.45)";
  ctx.beginPath();
  ctx.arc(cx, cy + bob, 18, 0, Math.PI * 2);
  ctx.fill();

  // 2. Altın Palamut Gövdesi (Keskin Kontur)
  ctx.fillStyle = "#d97706";
  ctx.strokeStyle = "#ffd166";
  ctx.lineWidth = 2.2;
  ctx.beginPath();
  ctx.arc(cx, cy + bob + 2, 11, 0, Math.PI);
  ctx.lineTo(cx - 11, cy + bob - 3);
  ctx.quadraticCurveTo(cx, cy + bob - 13, cx + 11, cy + bob - 3);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Şapka / Üst Kubbe
  ctx.fillStyle = "#78350f";
  ctx.strokeStyle = "#fef08a";
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.ellipse(cx, cy + bob - 3, 12, 5.5, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Işık Pırıltısı
  ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
  ctx.beginPath();
  ctx.arc(cx - 3, cy + bob + 1, 2.5, 0, Math.PI * 2);
  ctx.fill();

  // Net Etiket
  ctx.font = "bold 8px Fredoka, Outfit, sans-serif";
  ctx.fillStyle = "#ffd166";
  ctx.shadowColor = "rgba(0,0,0,0.9)";
  ctx.shadowBlur = 3;
  ctx.textAlign = "center";
  ctx.fillText("⭐ +120", cx, cy + bob - 15);

  ctx.restore();
}

// 🌟 5 Köşeli Parlayan Altın Orman Puan Yıldızı Çizimi
function drawStarPickup(ctx, c) {
  ctx.save();
  const cx = c.x + c.w * 0.5;
  const cy = c.y + c.h * 0.5;
  const t = Date.now() * 0.005;

  // Dönen yumuşak altın ışık halesi
  ctx.fillStyle = "rgba(255, 209, 102, 0.45)";
  ctx.beginPath();
  ctx.arc(cx, cy, 18 + Math.sin(t * 1.5) * 3, 0, Math.PI * 2);
  ctx.fill();

  ctx.translate(cx, cy);
  ctx.rotate(Math.sin(t * 0.8) * 0.25);

  // 5 Köşeli Parlayan Altın Yıldız Çizimi
  ctx.fillStyle = "#ffd166";
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  const spikes = 5;
  const outerRadius = 13;
  const innerRadius = 6.5;
  let rot = Math.PI / 2 * 3;
  const step = Math.PI / spikes;

  ctx.moveTo(0, -outerRadius);
  for (let i = 0; i < spikes; i++) {
    let x = Math.cos(rot) * outerRadius;
    let y = Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = Math.cos(rot) * innerRadius;
    y = Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(0, -outerRadius);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Yıldız göbeğinde beyaz ışıltı
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(-2, -2, 2.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

// 🎁 KAŞİF HAVADA SÜZÜLEN KIYAFET ÖZELLİĞİ ÇİZİMİ (Şapka, Yelek, Pantolon)
function drawClothingCratePickup(ctx, c) {
  ctx.save();
  const cx = c.x + c.w * 0.5;
  const cy = c.y + c.h * 0.5;
  const t = Date.now() * 0.0035;
  const bobY = Math.sin(t * 3.5) * 5;

  const type = c.clothingId || "hat";
  const colors = {
    hat: { main: "#2563eb", glow: "#60a5fa", bg: "rgba(37, 99, 235, 0.35)", icon: "🧢", name: "ŞAPKA" },
    vest: { main: "#ea580c", glow: "#fb923c", bg: "rgba(234, 88, 12, 0.35)", icon: "🦺", name: "YELEK" },
    pants: { main: "#16a34a", glow: "#4ade80", bg: "rgba(22, 163, 74, 0.35)", icon: "👖", name: "PANTOLON" }
  };
  const theme = colors[type] || colors.hat;

  // 1. Dış Havadaki Nabız Işıltısı (Pulsing Airborne Halo)
  const pulse = Math.sin(t * 4) * 4;
  const grad = ctx.createRadialGradient(cx, cy + bobY, 8, cx, cy + bobY, 26 + pulse);
  grad.addColorStop(0, theme.glow);
  grad.addColorStop(0.6, theme.bg);
  grad.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(cx, cy + bobY, 26 + pulse, 0, Math.PI * 2);
  ctx.fill();

  // 2. Kendi Renginde Yuvarlak Küre / Enerji Kapsülü
  ctx.fillStyle = theme.main;
  ctx.strokeStyle = theme.glow;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy + bobY, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // 3. İç Parıltı ve Yıldız Kıvılcımları
  ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
  ctx.beginPath();
  ctx.arc(cx - 5, cy + bobY - 5, 5, 0, Math.PI * 2);
  ctx.fill();

  // 4. Kıyafet Emojisi (Büyük ve Net)
  ctx.font = "20px Outfit, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(theme.icon, cx, cy + bobY);

  // 5. Havada "✨ ZIPLA & AL" Etiketi
  ctx.font = "bold 8.5px Fredoka, Outfit, sans-serif";
  ctx.fillStyle = "#ffd166";
  ctx.shadowColor = "rgba(0, 0, 0, 0.9)";
  ctx.shadowBlur = 4;
  ctx.fillText("✨ ZIPLA & AL", cx, cy + bobY - 24);

  ctx.restore();
}


// Oyuncu Kontrolleri
function playerJump() {
  if (!gameRunning) return;
  if (player.isGrounded) {
    player.vy = player.jumpStrength;
    player.isGrounded = false;
    player.hasDoubleJumped = false;
    player.isSliding = false;
    player.h = player.origH;
    player.w = player.origW;
    sounds.playJump();

    // Zıplama toz efekti
    for (let i = 0; i < 4; i++) {
      particles.push({
        x: player.x + 20 + Math.random() * 20,
        y: canvas.height - 90,
        vx: (Math.random() - 0.5) * 3,
        vy: -0.5 - Math.random() * 1.5,
        size: 3,
        alpha: 0.8,
        color: "#d7ccc8"
      });
    }
  } else if ((player.canDoubleJump || activeClothingBuffs.pants > 0) && !player.hasDoubleJumped) {
    // 👟 Orman İzcisi Botları VEYA 👖 İzci Pantolonu: ÇİFT ZIPLAMA (DOUBLE JUMP)
    player.vy = -12.4;
    player.hasDoubleJumped = true;
    sounds.playJump();

    // Yeşil rüzgar ve sıçrama partikülleri
    for (let i = 0; i < 6; i++) {
      particles.push({
        x: player.x + 20 + Math.random() * 20,
        y: player.y + player.h - 5,
        vx: (Math.random() - 0.5) * 4,
        vy: 1 + Math.random() * 2,
        size: 3.5,
        alpha: 0.9,
        color: activeClothingBuffs.pants > 0 ? "#38bdf8" : "#52b788"
      });
    }
  } else if (!player.isGrounded) {
    // Çocuk yere inmeden hemen önce (havadayken) zıplamaya basmışsa girdiyi hafızaya al
    player.jumpBuffer = 10; // ~160ms Jump Buffer toleransı
  }
}

function playerSlide() {
  if (!gameRunning) return;
  const groundY = canvas.height - 90;

  if (player.isGrounded && !player.isSliding) {
    player.isSliding = true;
    player.h = 24; // Çocuk dostu alçak ve süzülen eğilme boyu (engellerin altından sıfır takılma ile rahatça geçer)
    player.w = 68; // Akıcı süzülme duruşu
    player.y = groundY - player.h;
    // 👖 İzci Pantolonu aktif ise ekstra uzun süzülme süresi (105 frame), normalde 76 frame
    player.slideTimer = activeClothingBuffs.pants > 0 ? 105 : (player.maxSlideTimer || 76);
    sounds.playSlide();

    // Kayma başlangıç tozu ve rüzgar partikülleri
    for (let i = 0; i < 6; i++) {
      particles.push({
        x: player.x + Math.random() * 20,
        y: groundY - 2,
        vx: -3.5 - Math.random() * 2,
        vy: -0.5 - Math.random() * 1,
        size: 3 + Math.random() * 2,
        alpha: 0.9,
        color: i % 2 === 0 ? "#ffd166" : "#cfbba6"
      });
    }
  } else if (!player.isGrounded) {
    // Havada aşağı basılırsa Subway Surfers hızlı inişi (Fast Fall)
    player.vy = 13.5;
  }
}

// Zafer ve Bitiş
function onLevelVictory() {
  gameRunning = false;
  if (gameLoopId) {
    cancelAnimationFrame(gameLoopId);
    gameLoopId = null;
  }
  sounds.stopWeatherAmbience();
  sounds.playCollect();

  // Bölüm Tamamlandı Kaydı & Sonraki Bölüm Kilidi Açılışı
  const currentIndex = currentLevelNumber - 1;
  const nextIndex = currentIndex + 1;
  GameState.setStageScore(currentIndex, score);
  GameState.updateHighScore(score);
  GameState.addExplorerPoints(score);
  GameState.setLevelState(currentIndex, 3); // 3=Completed

  // Kaşif XP Ödülü & Firebase Senkronizasyonu
  FirebaseSimService.addXp(120);

  // Kaşif Sırt Çantası Zafer Bonusu
  const packBonus = GameState.getBackpackLevel();
  if (packBonus >= 1) {
    const bonusCoins = packBonus >= 3 ? 100 : 50;
    const bonusXp = 100;
    GameState.addCoins(bonusCoins);
    FirebaseSimService.addXp(bonusXp);
    showToast(`🎒 Sırt Çantası Bonusu: +${bonusCoins} 🪙 Altın ve +${bonusXp} ⭐ XP Eklendi!`, "info");
  }

  LeaderboardService.syncMyScore();
  stageFailureStreaks[currentLevelNumber] = 0; // Zafer kazanıldı, başarısızlık serisi sıfırlandı

  // Kilit Açma Mantığı:
  // Bölüm başarıyla tamamlandığında sonraki bölüm otomatik açılır (süreklilik ve çocuk dostu akış)
  // Sahadaki QR kod okutulduğunda ise ara bölümler beklemeden anında ücretsiz açılabilir!
  if (nextIndex <= 9) {
    if (GameState.getLevelState(nextIndex) === 0) {
      GameState.setLevelState(nextIndex, 2); // 2 = Açık / Oynanabilir
    }
  }

  // 🏆 KAHRAMAN & ÖZEL KOSTÜM ETAP KİLİT AÇMA SİSTEMİ
  if (currentLevelNumber >= 2) {
    if (!GameState.isCostumeUnlocked("hat")) {
      GameState.unlockCostume("hat");
      showToast("🎉 2. Etap Zaferi! 🧢 Kaşif Şapkası kilidi açıldı!", "success");
    }
    if (!GameState.isHeroUnlocked(2)) {
      GameState.unlockHero(2);
      showToast("🎉 2. Etap Zaferi! 🐵 Maymun kahramanının kilidi açıldı!", "success");
    }
  }
  if (currentLevelNumber >= 3) {
    if (!GameState.isHeroUnlocked(3)) {
      GameState.unlockHero(3);
      showToast("🎉 3. Etap Zaferi! 🐯 Muhafız Kaplan kilidi açıldı!", "success");
    }
  }
  if (currentLevelNumber >= 4) {
    if (!GameState.isCostumeUnlocked("vest")) {
      GameState.unlockCostume("vest");
      showToast("🎉 4. Etap Zaferi! 🦺 Muhafız Yeleği kilidi açıldı!", "success");
    }
    if (currentLevelNumber === 4) {
      showToast("🧭 TEBRİKLER! 5. Etaba ulaştın ve yeni statün 'ORMAN KAŞİFİ' oldu!", "success");
      updateMenuUI();
      LeaderboardService.syncMyScore();
    }
  }
  if (currentLevelNumber >= 5) {
    if (!GameState.isHeroUnlocked(4)) {
      GameState.unlockHero(4);
      showToast("🎉 5. Etap Zaferi! 🐿️ Kızıl Sincap kilidi açıldı!", "success");
    }
  }
  if (currentLevelNumber >= 6) {
    if (!GameState.isCostumeUnlocked("pants")) {
      GameState.unlockCostume("pants");
      showToast("🎉 6. Etap Zaferi! 👖 İzci Pantolonu kilidi açıldı!", "success");
    }
  }
  if (currentLevelNumber >= 7) {
    if (!GameState.isHeroUnlocked(5)) {
      GameState.unlockHero(5);
      showToast("🎉 7. Etap Zaferi! 🦉 Bilge Orman Baykuşu kilidi açıldı!", "success");
    }
  }
  if (currentLevelNumber === 10) {
    const finalScoreEl = document.getElementById("grand-final-score");
    if (finalScoreEl) finalScoreEl.textContent = `${score.toLocaleString("tr-TR")} ⭐`;
    const finalCoinsEl = document.getElementById("grand-final-coins");
    if (finalCoinsEl) finalCoinsEl.textContent = `🪙 ${coinsCollected}`;

    updateMenuUI();
    LeaderboardService.syncMyScore();
    showToast("👑 EFSANEVİ ZAFER! Büyük Finali tamamladın, 'PROFESYONEL MUHAFIZ' rütbesine eriştin!", "success");

    document.getElementById("modal-grand-victory").classList.add("active");
    setTimeout(() => {
      if (window.launchVictoryFireworks) window.launchVictoryFireworks();
    }, 400);
    return;
  }

  // Normal Zafer Modalı
  const etap = RESMI_ETAPLAR[currentIndex] || RESMI_ETAPLAR[0];
  const nextBtn = document.getElementById("btn-victory-next");
  const vicMapBtn = document.getElementById("btn-victory-map");
  document.getElementById("victory-coins-earned").textContent = `+${coinsCollected} 🪙 (+120 XP ⭐)`;

  document.getElementById("victory-title").textContent = `${currentLevelNumber}. Etap Başarıyla Geçildi!`;
  document.getElementById("victory-fact").textContent = etap.fact;

  if (nextIndex <= 9) {
    if (nextBtn) {
      nextBtn.textContent = `🌿 DOĞA VE BİLİM YARIŞMASINA GEÇ ⏩`;
      nextBtn.onclick = () => {
        document.getElementById("modal-victory").classList.remove("active");
        startNatureQuiz(currentIndex, () => {
          proceedToNextStageOnMap(nextIndex);
        });
      };
    }
    if (vicMapBtn) {
      vicMapBtn.textContent = `🗺️ Soruları Geç, ${nextIndex + 1}. Etaba Odaklan`;
      vicMapBtn.onclick = () => {
        document.getElementById("modal-victory").classList.remove("active");
        proceedToNextStageOnMap(nextIndex);
      };
    }
  } else {
    if (nextBtn) {
      nextBtn.textContent = "🏆 BÜYÜK ŞAMPİYONLUK KEMERİ";
      nextBtn.onclick = () => {
        document.getElementById("modal-victory").classList.remove("active");
        document.getElementById("modal-grand-victory").classList.add("active");
        if (window.launchVictoryFireworks) window.launchVictoryFireworks();
      };
    }
    if (vicMapBtn) {
      vicMapBtn.textContent = "🗺️ Haritaya Dön";
      vicMapBtn.onclick = () => {
        document.getElementById("modal-victory").classList.remove("active");
        proceedToNextStageOnMap(10);
      };
    }
  }

  const btnVictoryLb = document.getElementById("btn-victory-lb");
  if (btnVictoryLb) {
    btnVictoryLb.onclick = () => {
      openLeaderboardModal();
    };
  }

  document.getElementById("modal-victory").classList.add("active");
}

let gameOverTimerId = null;

function clearGameOverCountdown() {
  if (gameOverTimerId) {
    clearInterval(gameOverTimerId);
    gameOverTimerId = null;
  }
}

function returnToStartScreen() {
  clearGameOverCountdown();
  gameRunning = false;
  isGamePaused = false;
  if (gameLoopId) {
    cancelAnimationFrame(gameLoopId);
    gameLoopId = null;
  }
  sounds.stopWeatherAmbience();
  
  // Modalleri kapat
  const modals = ["modal-gameover", "modal-victory", "modal-grand-victory", "modal-level-info", "modal-pause"];
  modals.forEach(id => {
    const m = document.getElementById(id);
    if (m) m.classList.remove("active");
  });

  // Runner ekranını gizle, ana menü ekranını aç
  showScreen("screen-menu");
  
  // Ana menü müziğini başlat/sürdür
  if (sounds && sounds.bgm) {
    try {
      sounds.bgm.currentTime = 0;
      sounds.playBGM();
    } catch(e) {}
  }
}

// ⏸️ OYUNU DURAKLATMA VE KALDIĞI YERDEN DEVAM ETME SİSTEMİ
function pauseOrReturnGame() {
  if (!gameRunning || isGamePaused) return;
  isGamePaused = true;
  gameRunning = false;
  if (gameLoopId) {
    cancelAnimationFrame(gameLoopId);
    gameLoopId = null;
  }
  sounds.stopWeatherAmbience();
  if (sounds && sounds.bgm) {
    try { sounds.bgm.pause(); } catch(e) {}
  }

  // Duraklatma paneli istatistiklerini doldur
  const lvlEl = document.getElementById("pause-level-num");
  const scEl = document.getElementById("pause-score-num");
  const cnEl = document.getElementById("pause-coins-num");
  if (lvlEl) lvlEl.textContent = currentLevelNumber;
  if (scEl) scEl.textContent = score;
  if (cnEl) cnEl.textContent = coinsCollected;

  const pauseModal = document.getElementById("modal-pause");
  if (pauseModal) pauseModal.classList.add("active");
}

function resumeGame() {
  const pauseModal = document.getElementById("modal-pause");
  if (pauseModal) pauseModal.classList.remove("active");

  if (!isGamePaused) return;
  isGamePaused = false;
  gameRunning = true;

  sounds.startWeatherAmbience(currentLevelNumber);

  if (sounds && sounds.bgm) {
    try { sounds.bgm.play(); } catch(e) {}
  }

  if (gameLoopId) cancelAnimationFrame(gameLoopId);
  gameLoopId = requestAnimationFrame(gameLoop);
}

function restartCurrentLevel() {
  const pauseModal = document.getElementById("modal-pause");
  if (pauseModal) pauseModal.classList.remove("active");
  isGamePaused = false;
  startRunnerLevel(currentLevelNumber);
}

window.pauseOrReturnGame = pauseOrReturnGame;
window.resumeGame = resumeGame;
window.restartCurrentLevel = restartCurrentLevel;

function onGameOver() {
  gameRunning = false;
  isGamePaused = false;
  if (gameLoopId) {
    cancelAnimationFrame(gameLoopId);
    gameLoopId = null;
  }
  sounds.stopWeatherAmbience();

  // Bölüm geçilemedi: başarısızlık serisini artır (tekrarlandığında destek palamudu çıkması için)
  stageFailureStreaks[currentLevelNumber] = (stageFailureStreaks[currentLevelNumber] || 0) + 1;

  sounds.playGameOver();
  GameState.setStageScore(currentLevelNumber - 1, score);
  GameState.updateHighScore(score);
  GameState.addExplorerPoints(score);
  LeaderboardService.syncMyScore();
  
  const modal = document.getElementById("modal-gameover");
  if (modal) modal.classList.add("active");
  
  // 3 saniye geri sayım ile otomatik başlangıç ekranına dönüş
  clearGameOverCountdown();
  let remainingSeconds = 3;
  const timerTextEl = document.getElementById("gameover-timer-text");
  if (timerTextEl) {
    timerTextEl.textContent = `Başlangıç ekranına dönülüyor: ${remainingSeconds}s`;
  }
  
  gameOverTimerId = setInterval(() => {
    remainingSeconds--;
    if (timerTextEl) {
      timerTextEl.textContent = remainingSeconds > 0 
        ? `Başlangıç ekranına dönülüyor: ${remainingSeconds}s` 
        : "Başlangıç ekranına dönülüyor...";
    }
    if (remainingSeconds <= 0) {
      clearGameOverCountdown();
      returnToStartScreen();
    }
  }, 1000);
}

// ============================================================================
// 9. EVENT LISTENERS & KLAVYE / DOKUNMATİK GİRDİLER
// ============================================================================

window.addEventListener("keydown", e => {
  if (e.code === "Space" || e.code === "ArrowUp" || e.code === "KeyW") {
    e.preventDefault();
    playerJump();
  } else if (e.code === "ArrowDown" || e.code === "KeyS") {
    e.preventDefault();
    playerSlide();
  }
});

// Ekrandaki Görsel ZIPLA ve EĞİL Başparmak Kutuları
const btnTouchJump = document.getElementById("btn-touch-jump");
if (btnTouchJump) {
  const doJump = (e) => {
    e.stopPropagation();
    if (e.cancelable) e.preventDefault();
    playerJump();
  };
  btnTouchJump.addEventListener("pointerdown", doJump);
  btnTouchJump.addEventListener("touchstart", doJump, { passive: false });
}

const btnTouchSlide = document.getElementById("btn-touch-slide");
if (btnTouchSlide) {
  const doSlideStart = (e) => {
    e.stopPropagation();
    if (e.cancelable) e.preventDefault();
    player.isHoldingSlide = true;
    playerSlide();
  };
  const doSlideEnd = (e) => {
    player.isHoldingSlide = false;
  };
  btnTouchSlide.addEventListener("pointerdown", doSlideStart);
  btnTouchSlide.addEventListener("touchstart", doSlideStart, { passive: false });
  btnTouchSlide.addEventListener("pointerup", doSlideEnd);
  btnTouchSlide.addEventListener("touchend", doSlideEnd);
  btnTouchSlide.addEventListener("pointercancel", doSlideEnd);
  btnTouchSlide.addEventListener("touchcancel", doSlideEnd);
}

// ============================================================================
// BİRLEŞİK POINTER & DOKUNMA HAREKET MOTORU
// (Hem PC Fareyle Aşağı Çekme/Sürükleme Hem Mobil Parmakla Aşağı Kaydırma İçin)
// ============================================================================
let gestureActive = false;
let gestureStartY = 0;
let gestureStartX = 0;
let gestureStartTime = 0;
let gestureHandled = false;

function isGameInputAllowed() {
  const screenGame = document.getElementById("screen-game");
  if (!screenGame || !screenGame.classList.contains("active")) return false;
  const anyModalOpen = document.querySelector(".modal-overlay.active");
  if (anyModalOpen) return false;
  return true;
}

function handleGestureStart(clientX, clientY, target) {
  if (!isGameInputAllowed()) return;
  if (target && (target.closest(".btn-touch-action") || target.closest("button"))) return;

  gestureActive = true;
  gestureStartY = clientY;
  gestureStartX = clientX;
  gestureStartTime = performance.now();
  gestureHandled = false;
}

function handleGestureMove(clientX, clientY, e) {
  if (!gestureActive || gestureHandled) return;
  if (!isGameInputAllowed()) return;

  const dy = clientY - gestureStartY;
  const dx = clientX - gestureStartX;

  // Ultra hassas 12px dikey eşik (Parmak veya fare aşağı kaydığı an anında kayar!)
  if (Math.abs(dy) >= 12 && Math.abs(dy) > Math.abs(dx) * 0.55) {
    if (dy > 0) {
      // 👇 EKRANDA AŞAĞI DOĞRU SÜRÜKLEME: ANINDA KAYMA (SLIDE)!
      gestureHandled = true;
      playerSlide();
      if (e && e.cancelable) e.preventDefault();
    } else {
      // 👆 EKRANDA YUKARI ÇEKME: ANINDA ZIPLAMA (JUMP)!
      gestureHandled = true;
      playerJump();
      if (e && e.cancelable) e.preventDefault();
    }
  }
}

function handleGestureEnd(clientX, clientY) {
  if (!gestureActive) return;
  gestureActive = false;
  if (!isGameInputAllowed()) return;

  if (!gestureHandled) {
    const dy = clientY - gestureStartY;
    const dx = clientX - gestureStartX;
    const duration = performance.now() - gestureStartTime;

    if (Math.abs(dy) >= 12 && Math.abs(dy) > Math.abs(dx) * 0.55) {
      if (dy > 0) playerSlide();
      else playerJump();
    } else if (Math.abs(dy) < 14 && Math.abs(dx) < 14 && duration < 400) {
      // 🧭 Çocuk Dostu Dokunmatik: Ekranın sol yarısına dokununca EĞİL, sağ yarısına dokununca ZIPLA!
      const midX = (canvas ? canvas.width : window.innerWidth) / 2;
      if (clientX < midX) {
        playerSlide();
      } else {
        playerJump();
      }
    }
  }
}

// Canvas ve Ekran Üzerine Pointer & Touch Olay Bağlantıları
const gameCanvasEl = document.getElementById("game-canvas");
if (gameCanvasEl) {
  gameCanvasEl.addEventListener("pointerdown", e => {
    handleGestureStart(e.clientX, e.clientY, e.target);
  });
  gameCanvasEl.addEventListener("pointermove", e => {
    handleGestureMove(e.clientX, e.clientY, e);
  });
  gameCanvasEl.addEventListener("pointerup", e => {
    handleGestureEnd(e.clientX, e.clientY);
  });
  gameCanvasEl.addEventListener("pointercancel", () => {
    gestureActive = false;
  });

  // Mobil Dokunmatik Ekranlar için Native Touch Desteği
  gameCanvasEl.addEventListener("touchstart", e => {
    if (e.touches && e.touches.length > 0) {
      handleGestureStart(e.touches[0].clientX, e.touches[0].clientY, e.target);
    }
  }, { passive: false });

  gameCanvasEl.addEventListener("touchmove", e => {
    if (e.touches && e.touches.length > 0) {
      handleGestureMove(e.touches[0].clientX, e.touches[0].clientY, e);
    }
  }, { passive: false });

  gameCanvasEl.addEventListener("touchend", e => {
    if (e.changedTouches && e.changedTouches.length > 0) {
      handleGestureEnd(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    }
  }, { passive: false });
}

// Window Geneli Sürükleme Tamamlayıcı
window.addEventListener("pointermove", e => {
  if (gestureActive && !gestureHandled) {
    handleGestureMove(e.clientX, e.clientY, e);
  }
});
window.addEventListener("pointerup", e => {
  if (gestureActive) {
    handleGestureEnd(e.clientX, e.clientY);
  }
});

// ============================================================================
// Orijinal Arka Plan Ahşap Buton Bağlantıları & Ayarlar Sistemi
// ============================================================================
function openSettingsModal() {
  const modal = document.getElementById("modal-settings");
  if (!modal) return;

  const musicBtn = document.getElementById("btn-setting-toggle-music");
  const sfxBtn = document.getElementById("btn-setting-toggle-sfx");
  if (musicBtn) {
    musicBtn.textContent = sounds.musicEnabled ? "AÇIK 🟢" : "KAPALI 🔴";
    if (sounds.musicEnabled) musicBtn.classList.add("active"); else musicBtn.classList.remove("active");
  }
  if (sfxBtn) {
    sfxBtn.textContent = sounds.sfxEnabled ? "AÇIK 🟢" : "KAPALI 🔴";
    if (sounds.sfxEnabled) sfxBtn.classList.add("active"); else sfxBtn.classList.remove("active");
  }
  modal.classList.add("active");
}

function initSettingsEvents() {
  const settingsBtn = document.getElementById("btn-menu-settings");
  if (settingsBtn) {
    settingsBtn.onclick = () => openSettingsModal();
  }

  const closeSettingsBtn = document.getElementById("btn-close-settings");
  if (closeSettingsBtn) {
    closeSettingsBtn.onclick = () => {
      const modal = document.getElementById("modal-settings");
      if (modal) modal.classList.remove("active");
    };
  }

  const musicBtn = document.getElementById("btn-setting-toggle-music");
  if (musicBtn) {
    musicBtn.onclick = () => {
      sounds.musicEnabled = !sounds.musicEnabled;
      if (sounds.musicEnabled) {
        sounds.playMusic();
        musicBtn.textContent = "AÇIK 🟢";
        musicBtn.classList.add("active");
      } else {
        sounds.stopMusic();
        musicBtn.textContent = "KAPALI 🔴";
        musicBtn.classList.remove("active");
      }
    };
  }

  const sfxBtn = document.getElementById("btn-setting-toggle-sfx");
  if (sfxBtn) {
    sfxBtn.onclick = () => {
      sounds.sfxEnabled = !sounds.sfxEnabled;
      sfxBtn.textContent = sounds.sfxEnabled ? "AÇIK 🟢" : "KAPALI 🔴";
      if (sounds.sfxEnabled) sfxBtn.classList.add("active"); else sfxBtn.classList.remove("active");
      if (sounds.sfxEnabled) sounds.playCollect();
    };
  }

  const resetBtn = document.getElementById("btn-setting-reset-data");
  if (resetBtn) {
    resetBtn.onclick = () => {
      if (confirm("⚠️ Tüm oyun ilerlemeniz, toplanan altınlar, kıyafetler ve kaşif kaydınız sıfırlanacak!\nEmin misiniz?")) {
        try {
          GameState.resetData();
        } catch(e) {}
        showToast("Tüm veriler sıfırlandı. Kahraman baştan başlıyor...", "warning");
        setTimeout(() => location.reload(), 800);
      }
    };
  }
}

function initNavigationEvents() {
  const btnMacerayaBasla = document.getElementById("btn-menu-maceraya-basla");
  if (btnMacerayaBasla) {
    btnMacerayaBasla.onclick = () => {
      showScreen("screen-heroes");
      initHeroesScreen();
    };
  }

  const btnBolumler = document.getElementById("btn-menu-bolumler");
  if (btnBolumler) {
    btnBolumler.onclick = () => {
      showScreen("screen-map");
      renderMapScreen();
    };
  }

  const btnBasarimlar = document.getElementById("btn-menu-basarimlar");
  if (btnBasarimlar) {
    btnBasarimlar.onclick = () => {
      openAchievementsModal();
    };
  }

  const btnGelisimVadisi = document.getElementById("btn-menu-gelisim-vadisi");
  if (btnGelisimVadisi) {
    btnGelisimVadisi.onclick = () => {
      openCampModal();
    };
  }

  const btnHeroesBack = document.getElementById("btn-heroes-back");
  if (btnHeroesBack) btnHeroesBack.onclick = () => showScreen("screen-menu");

  const btnMapBack = document.getElementById("btn-map-back");
  if (btnMapBack) btnMapBack.onclick = () => showScreen("screen-menu");

  const btnSound = document.getElementById("btn-toggle-sound");
  if (btnSound) {
    btnSound.onclick = () => {
      const isEnabled = sounds.toggleAudio();
      btnSound.textContent = isEnabled ? "🔊" : "🔇";
      showToast(isEnabled ? "Sesler Açık 🔊" : "Sesler Kapalı 🔇", "info");
    };
  }

  const btnCloseLevel = document.getElementById("btn-modal-close-level");
  if (btnCloseLevel) {
    btnCloseLevel.onclick = () => {
      const modal = document.getElementById("modal-level-info");
      if (modal) modal.classList.remove("active");
    };
  }

  // Zafer Modalı Butonları
  const btnVicNext = document.getElementById("btn-victory-next");
  if (btnVicNext) {
    btnVicNext.onclick = () => {
      const modal = document.getElementById("modal-victory");
      if (modal) modal.classList.remove("active");
      showScreen("screen-map");
      renderMapScreen();
      setTimeout(() => openLevelModal(currentLevelNumber), 250);
    };
  }

  const btnVicMap = document.getElementById("btn-victory-map");
  if (btnVicMap) {
    btnVicMap.onclick = () => {
      const modal = document.getElementById("modal-victory");
      if (modal) modal.classList.remove("active");
      showScreen("screen-map");
      renderMapScreen();
    };
  }

  // Game Over Butonları
  const btnGoMenu = document.getElementById("btn-gameover-menu");
  if (btnGoMenu) {
    btnGoMenu.onclick = () => {
      returnToStartScreen();
    };
  }

  const btnGoRetry = document.getElementById("btn-gameover-retry");
  if (btnGoRetry) {
    btnGoRetry.onclick = () => {
      clearGameOverCountdown();
      const modal = document.getElementById("modal-gameover");
      if (modal) modal.classList.remove("active");
      showScreen("screen-map");
      renderMapScreen();
      setTimeout(() => openLevelModal(currentLevelNumber - 1), 250);
    };
  }

  const btnGoMap = document.getElementById("btn-gameover-map");
  if (btnGoMap) {
    btnGoMap.onclick = () => {
      clearGameOverCountdown();
      const modal = document.getElementById("modal-gameover");
      if (modal) modal.classList.remove("active");
      showScreen("screen-map");
      renderMapScreen();
    };
  }

  const btnGamePause = document.getElementById("btn-game-pause");
  if (btnGamePause) {
    btnGamePause.onclick = () => {
      pauseOrReturnGame();
    };
  }

  // Grand Victory Butonları
  const btnGrandVoucher = document.getElementById("btn-grand-view-voucher");
  if (btnGrandVoucher) {
    btnGrandVoucher.onclick = () => {
      const modal = document.getElementById("modal-grand-victory");
      if (modal) modal.classList.remove("active");
      openRewardsModal();
    };
  }

  const btnGrandMenu = document.getElementById("btn-grand-menu");
  if (btnGrandMenu) {
    btnGrandMenu.onclick = () => {
      const modal = document.getElementById("modal-grand-victory");
      if (modal) modal.classList.remove("active");
      showScreen("screen-menu");
    };
  }

  // Tutorial Modalı Başlat Butonu
  const btnTutorialStart = document.getElementById("btn-tutorial-start");
  if (btnTutorialStart) {
    btnTutorialStart.onclick = () => {
      const modal = document.getElementById("modal-tutorial");
      if (modal) modal.classList.remove("active");
      startRunnerGame(1);
    };
  }
}


// ============================================================================
// 9.5 BILGI SAMPIYONU LIG SERVISI (QuizLeaderboardService)
// ============================================================================

const QUIZ_BOT_PLAYERS = [
  { name: "Zeynep K.",  icon: "🦊", quizPts: 2450, weeklyPts: 380 },
  { name: "Ali Rıza T.", icon: "🐺", quizPts: 2100, weeklyPts: 210 },
  { name: "Defne S.",   icon: "🦥", quizPts: 1870, weeklyPts: 450 },
  { name: "Mert B.",    icon: "🐾", quizPts: 1650, weeklyPts: 150 },
  { name: "Selin D.",   icon: "🦮", quizPts: 1420, weeklyPts: 320 },
  { name: "Ömer F.",    icon: "🌲", quizPts: 1200, weeklyPts: 100 },
  { name: "Büşra Y.",   icon: "🌿", quizPts:  980, weeklyPts: 280 },
  { name: "Kaan A.",    icon: "🐿️", quizPts:  750, weeklyPts:  90 },
  { name: "Nisa M.",    icon: "🦹", quizPts:  520, weeklyPts: 130 },
  { name: "Ege T.",     icon: "🌱", quizPts:  300, weeklyPts:  50 }
];

const QuizLeaderboardService = {
  remotePlayersCache: null,

  async fetchRemote() {
    try {
      const res = await fetch("https://firestore.googleapis.com/v1/projects/kentormanimaceraparki/databases/(default)/documents/quiz_leaderboard", { cache: "no-cache" });
      if (res.ok) {
        const data = await res.json();
        if (data && data.documents && Array.isArray(data.documents)) {
          this.remotePlayersCache = data.documents.map(doc => {
            const f = doc.fields || {};
            return {
              name: f.name?.stringValue || "Bilgi Kaşifi",
              icon: f.avatar?.stringValue || "🧠",
              quizPts: parseInt(f.quizScore?.integerValue || f.quizScore?.doubleValue || "0", 10),
              weeklyPts: parseInt(f.weeklyQuizScore?.integerValue || f.weeklyQuizScore?.doubleValue || "0", 10)
            };
          });
          console.log("🧠 Live Firestore Quiz leaderboard fetched:", this.remotePlayersCache.length);
          this.render();
          return true;
        }
      }
      return false;
    } catch(e) {
      console.warn("Quiz remote fetch notice:", e);
      return false;
    }
  },

  async submitQuizScore() {
    try {
      const myName = GameState.getExplorerName() || "Kaşif";
      const myPts = GameState.getQuizTotalPoints();
      const weeklyPts = GameState.getQuizWeeklyPoints();
      const myHeroId = GameState.getSelectedHero() || 1;
      const HERO_ICONS = ["🦊","🐺","🐻","🐾","🦔","🌲","🐿️","🦸"];
      const myIcon = HERO_ICONS[(myHeroId - 1) % HERO_ICONS.length];
      const device = (typeof DeviceInfoService !== "undefined" && DeviceInfoService.getDeviceInfo)
        ? DeviceInfoService.getDeviceInfo()
        : { brand: "Android", model: "Cihaz", summary: "Mobil Cihaz" };
      const safeName = (myName || "player").replace(/[^a-zA-Z0-9_]/g, "_").toLowerCase();
      const docId = `quiz_${safeName}`;

      const url = `https://firestore.googleapis.com/v1/projects/kentormanimaceraparki/databases/(default)/documents/quiz_leaderboard/${docId}`;
      await fetch(url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: {
            name: { stringValue: myName },
            quizScore: { integerValue: myPts.toString() },
            weeklyQuizScore: { integerValue: weeklyPts.toString() },
            heroId: { integerValue: myHeroId.toString() },
            avatar: { stringValue: myIcon },
            rankTitle: { stringValue: `Bilgi Kaşifi (Sv. ${Math.min(10, Math.ceil(myPts / 500))})` },
            deviceBrand: { stringValue: device.brand },
            deviceModel: { stringValue: device.model },
            deviceInfo: { stringValue: device.summary },
            updatedAt: { timestampValue: new Date().toISOString() }
          }
        })
      });
      console.log("🧠 Quiz score submitted to Firestore for", myName, "with device", device.summary);
    } catch(e) {
      console.warn("Quiz score submit notice:", e);
    }
  },

  getFullData(mode, myPointsOverride) {
    const myPts = myPointsOverride !== undefined
      ? myPointsOverride
      : (mode === "weekly" ? GameState.getQuizWeeklyPoints() : GameState.getQuizTotalPoints());
    const myName = GameState.getExplorerName() || "Sen";
    const myHeroId = GameState.getSelectedHero() || 1;
    const HERO_ICONS = ["🦊","🐺","🐻","🐾","🦔","🌲","🐿️","🦸"];
    const myIcon = HERO_ICONS[(myHeroId - 1) % HERO_ICONS.length];

    const sourceList = (this.remotePlayersCache && this.remotePlayersCache.length > 0)
      ? this.remotePlayersCache
      : QUIZ_BOT_PLAYERS;

    const bots = sourceList.filter(b => b.name !== myName).map(b => ({
      name: b.name,
      icon: b.icon || "🧠",
      pts: mode === "weekly" ? (b.weeklyPts !== undefined ? b.weeklyPts : Math.floor((b.quizPts || 0) * 0.35)) : (b.quizPts || 0),
      isMe: false
    }));

    const meEntry = { name: myName, icon: myIcon, pts: myPts, isMe: true };
    const all = [...bots, meEntry].sort((a, b) => b.pts - a.pts);
    return all.map((entry, i) => ({ ...entry, rank: i + 1 }));
  },

  render(mode) {
    mode = mode || "all";
    const container = document.getElementById("quiz-leaderboard-list");
    if (!container) return;

    const data = this.getFullData(mode);
    const meEntry = data.find(r => r.isMe);

    const myScoreEl = document.getElementById("quiz-lb-my-score");
    const myRankEl  = document.getElementById("quiz-lb-my-rank");
    if (myScoreEl) myScoreEl.textContent = (meEntry ? meEntry.pts : 0).toLocaleString("tr-TR") + " Puan";
    if (myRankEl)  myRankEl.textContent  = meEntry ? "#" + meEntry.rank : "#--";

    container.innerHTML = data.map(entry => {
      const isMe = !!entry.isMe;
      let rankClass = "other";
      let rankLabel = `#${entry.rank}`;
      if (entry.rank === 1) { rankClass = "top-1"; rankLabel = "🥇 1"; }
      else if (entry.rank === 2) { rankClass = "top-2"; rankLabel = "🥈 2"; }
      else if (entry.rank === 3) { rankClass = "top-3"; rankLabel = "🥉 3"; }

      return `
        <div class="leaderboard-row ${isMe ? 'is-me' : ''}">
          <div class="lb-rank-badge ${rankClass}">${rankLabel}</div>
          <div class="lb-user-info">
            <div class="lb-user-avatar">${entry.icon || "🦊"}</div>
            <div class="lb-user-details">
              <div class="lb-user-name">
                <span class="lb-name-text">${entry.name}</span>
                ${isMe ? '<span class="lb-me-tag">(SEN)</span>' : ''}
              </div>
              <div class="lb-user-rank-title">Bilgi Ligi • Seviye ${Math.min(10, Math.ceil(entry.pts / 500))}</div>
            </div>
          </div>
          <div class="lb-score-col">
            <div class="lb-score-val">🧠 ${entry.pts.toLocaleString("tr-TR")} P</div>
            <div class="lb-level-tag">#${entry.rank}. Sırada</div>
          </div>
        </div>
      `;
    }).join("");

    const tabAll    = document.getElementById("btn-tab-quiz-all");
    const tabWeekly = document.getElementById("btn-tab-quiz-weekly");
    if (tabAll)    { tabAll.classList.toggle("active", mode === "all");    tabAll.onclick    = () => QuizLeaderboardService.render("all"); }
    if (tabWeekly) { tabWeekly.classList.toggle("active", mode === "weekly"); tabWeekly.onclick = () => QuizLeaderboardService.render("weekly"); }
  }
};
window.QuizLeaderboardService = QuizLeaderboardService;

// ============================================================================
// 10. ÇOCUKLAR İÇİN İNTERAKTİF BAŞARIMLAR & FİREBASE SİSTEMİ
// ============================================================================

function openAchievementsModal() {
  const modal = document.getElementById("modal-achievements");
  renderAchievementsUI();
  modal.classList.add("active");
}

function renderAchievementsUI() {
  const xp = FirebaseSimService.getXp();
  const rank = FirebaseSimService.getPlayerRank(xp);

  const rankEl = document.getElementById("achieve-user-rank");
  if (rankEl) rankEl.textContent = `${rank.icon} ${rank.title} (Sv. ${rank.rank})`;

  const xpBar = document.getElementById("achieve-xp-bar");
  const xpText = document.getElementById("achieve-xp-text");
  const pct = Math.min(100, Math.max(8, Math.floor(((xp - rank.minXp) / (rank.maxXp - rank.minXp)) * 100)));
  if (xpBar) xpBar.style.width = `${pct}%`;
  if (xpText) xpText.textContent = `${xp} / ${rank.maxXp} XP`;

  const container = document.getElementById("achievements-list-container");
  if (!container) return;
  container.innerHTML = "";

  const list = FirebaseSimService.getAchievements();
  list.forEach(ach => {
    const curVal = ach.progress();
    const isCompleted = curVal >= ach.target;
    const isClaimed = FirebaseSimService.isClaimed(ach.id);
    const progressPct = Math.min(100, Math.floor((curVal / ach.target) * 100));

    const card = document.createElement("div");
    card.className = `achievement-card ${isCompleted ? 'completed' : ''}`;

    let actionBtnHtml = "";
    if (isClaimed) {
      actionBtnHtml = `<button class="btn-claim-reward claimed" disabled>✅ ALINDI</button>`;
    } else if (isCompleted) {
      actionBtnHtml = `<button class="btn-claim-reward" data-id="${ach.id}">ÖDÜLÜ AL (+${ach.rewardCoins}🪙)</button>`;
    } else {
      actionBtnHtml = `<span style="font-size: 11px; font-weight: 800; color: #a7c4b5;">${curVal}/${ach.target}</span>`;
    }

    card.innerHTML = `
      <div class="achievement-icon">${ach.icon}</div>
      <div class="achievement-details">
        <div class="achievement-title">${ach.title}</div>
        <div class="achievement-desc">${ach.desc}</div>
        <div class="achievement-progress-wrap">
          <div class="achievement-progress-bar" style="width: ${progressPct}%;"></div>
        </div>
      </div>
      <div class="achievement-action">
        ${actionBtnHtml}
      </div>
    `;

    const claimBtn = card.querySelector(".btn-claim-reward:not(.claimed)");
    if (claimBtn) {
      claimBtn.onclick = () => {
        sounds.playCollect();
        FirebaseSimService.claimReward(ach);
        showToast(`🎉 Başarım Tamamlandı! +${ach.rewardCoins} 🪙 ve +${ach.rewardXp} ⭐ XP Kazandın!`, "success");
        updateMenuUI();
        renderAchievementsUI();
      };
    }

    container.appendChild(card);
  });
}

function switchHubTab(tabName) {
  const tabs = ["achieve", "lb", "quiz-lb", "rewards"];
  tabs.forEach(t => {
    const btn = document.getElementById(`hub-tab-${t}`);
    const view = document.getElementById(`hub-view-${t}`);
    if (btn) {
      if (t === tabName) btn.classList.add("active");
      else btn.classList.remove("active");
    }
    if (view) {
      view.style.display = t === tabName ? "flex" : "none";
    }
  });

  if (tabName === "achieve") {
    renderAchievementsUI();
  } else if (tabName === "lb") {
    LeaderboardService.render();
  } else if (tabName === "quiz-lb") {
    if (!QuizLeaderboardService.remotePlayersCache) {
      QuizLeaderboardService.fetchRemote();
    } else {
      QuizLeaderboardService.render();
    }
  } else if (tabName === "rewards") {
    if (!RewardsService.remoteRewardsCache) {
      RewardsService.fetchRemote();
    } else {
      RewardsService.render();
    }
  }
}

async function refreshLiveGameData() {
  const refreshBtns = document.querySelectorAll("#btn-hub-refresh, #btn-lb-refresh, #btn-standalone-sync-refresh, #btn-standalone-lb-refresh");
  refreshBtns.forEach(b => {
    b.classList.add("is-refreshing");
    b.disabled = true;
  });

  try {
    const pLeaderboard = LeaderboardService.fetchWebLeaderboard();
    const pQuiz = QuizLeaderboardService.fetchRemote();
    const pRewards = RewardsService.fetchRemote();

    const [lbRes, quizRes, rewRes] = await Promise.allSettled([pLeaderboard, pQuiz, pRewards]);
    const anySuccess = (lbRes.status === "fulfilled" && lbRes.value === true) ||
                       (quizRes.status === "fulfilled" && quizRes.value === true) ||
                       (rewRes.status === "fulfilled" && rewRes.value === true);

    // Kendi puanımızı ve cihaz bilgilerini de Firestore'a yaz
    LeaderboardService.syncMyScore();
    if (GameState.getQuizTotalPoints() > 0) {
      QuizLeaderboardService.submitQuizScore();
    }

    if (anySuccess) {
      showToast("🌿 Canlı sıralama ve ödüller başarıyla güncellendi!", "success");
      if (typeof sounds !== "undefined" && sounds.playCollect) sounds.playCollect();
    } else {
      showToast("⚠️ Canlı liste güncellenemedi! İnternet bağlantınızı kontrol ediniz.", "error");
    }

    // Aktif sekmenin içeriğini anında yeniden çiz
    const activeTab = document.querySelector(".hub-tab-btn.active");
    const tabName = activeTab ? activeTab.id.replace("hub-tab-", "") : "lb";
    if (tabName === "lb") LeaderboardService.render();
    else if (tabName === "quiz-lb") QuizLeaderboardService.render();
    else if (tabName === "rewards") RewardsService.render();
  } catch (err) {
    console.warn("refreshLiveGameData error:", err);
    showToast("⚠️ Canlı liste güncellenemedi! Lütfen bağlantınızı kontrol edin.", "error");
  } finally {
    refreshBtns.forEach(b => {
      b.classList.remove("is-refreshing");
      b.disabled = false;
    });
  }
}
window.refreshLiveGameData = refreshLiveGameData;

function openAchievementsHub(activeTab = "achieve") {
  const modal = document.getElementById("modal-achievements");
  if (!modal) return;
  modal.classList.add("active");
  switchHubTab(activeTab);
}

function openAchievementsModal() {
  openAchievementsHub("achieve");
}

function openLeaderboardModal() {
  const modal = document.getElementById("modal-leaderboard");
  if (modal) {
    modal.classList.add("active");
    LeaderboardService.updateSyncBadge("syncing");
    LeaderboardService.syncMyScore();
    LeaderboardService.fetchWebLeaderboard();
    LeaderboardService.render();
  } else {
    openAchievementsHub("lb");
  }
}

function openRewardsModal() {
  openAchievementsHub("rewards");
}

function initHubEvents() {
  const hubTabAchieve = document.getElementById("hub-tab-achieve");
  if (hubTabAchieve) hubTabAchieve.onclick = () => switchHubTab("achieve");
  const hubTabLb = document.getElementById("hub-tab-lb");
  if (hubTabLb) hubTabLb.onclick = () => switchHubTab("lb");
  const hubTabQuizLb = document.getElementById("hub-tab-quiz-lb");
  if (hubTabQuizLb) hubTabQuizLb.onclick = () => {
    switchHubTab("quiz-lb");
  };
  const hubTabRewards = document.getElementById("hub-tab-rewards");
  if (hubTabRewards) hubTabRewards.onclick = () => switchHubTab("rewards");

  const btnAchieveOpenRewards = document.getElementById("btn-achieve-open-rewards-tab");
  if (btnAchieveOpenRewards) {
    btnAchieveOpenRewards.onclick = () => {
      switchHubTab("rewards");
    };
  }

  const btnCloseAchievements = document.getElementById("btn-close-achievements");
  if (btnCloseAchievements) {
    btnCloseAchievements.onclick = () => {
      document.getElementById("modal-achievements").classList.remove("active");
    };
  }

  // Ahşap Orman Yenile Butonları Dinleyicileri
  const refreshHandler = (e) => {
    if (e) e.stopPropagation();
    refreshLiveGameData();
  };
  const btnHubRefresh = document.getElementById("btn-hub-refresh");
  if (btnHubRefresh) btnHubRefresh.onclick = refreshHandler;
  const btnLbRefresh = document.getElementById("btn-lb-refresh");
  if (btnLbRefresh) btnLbRefresh.onclick = refreshHandler;
  const btnStandSync = document.getElementById("btn-standalone-sync-refresh");
  if (btnStandSync) btnStandSync.onclick = refreshHandler;
  const btnStandLb = document.getElementById("btn-standalone-lb-refresh");
  if (btnStandLb) btnStandLb.onclick = refreshHandler;
}

// ============================================================================
// 11. TESİS ÖDÜLLERİ VE KUPONLAR YÖNLENDİRMESİ
// ============================================================================

function openPassportModal() {
  openRewardsModal();
}

function renderPassportVouchers() {
  const container = document.getElementById("vouchers-list-container");
  if (!container) return;
  container.innerHTML = "";

  ISLETME_KUPONLARI.forEach(voucher => {
    const isUnlocked = voucher.isUnlocked();
    const code = GameState.getVoucherCode(voucher.id);

    const card = document.createElement("div");
    card.className = `voucher-card ${isUnlocked ? '' : 'locked'}`;

    let statusHtml = "";
    let buttonHtml = "";

    if (isUnlocked) {
      statusHtml = `<div class="voucher-status-text" style="color: #52b788; font-weight: 800;">✅ AKTİF KOD: ${code}</div>`;
      buttonHtml = `<button class="btn-voucher-action" data-code="${code}">KOPYALA 📋</button>`;
    } else {
      statusHtml = `<div class="voucher-status-text">🔒 ${voucher.desc}</div>`;
      buttonHtml = `<button class="btn-voucher-action" style="opacity: 0.5; cursor: not-allowed;" disabled>KİLİTLİ</button>`;
    }

    card.innerHTML = `
      <div class="voucher-icon">${voucher.icon}</div>
      <div class="voucher-info">
        <div class="voucher-biz-name">${voucher.biz.toUpperCase()}</div>
        <div class="voucher-reward-name">${voucher.reward}</div>
        ${statusHtml}
      </div>
      <div>
        ${buttonHtml}
      </div>
    `;

    const copyBtn = card.querySelector(".btn-voucher-action:not([disabled])");
    if (copyBtn) {
      copyBtn.onclick = () => {
        try {
          navigator.clipboard.writeText(code);
        } catch (e) {}
        showToast(`🎟️ ${voucher.biz} İkram Kuponu (${code}) Panoya Kopyalandı! İşletmede Gösteriniz.`, "success");
      };
    }

    container.appendChild(card);
  });
}

const btnClosePassport = document.getElementById("btn-close-passport");
if (btnClosePassport) {
  btnClosePassport.onclick = () => {
    const modalPassport = document.getElementById("modal-passport");
    if (modalPassport) modalPassport.classList.remove("active");
  };
}

// ============================================================================
// 12. GELİŞİM VADİSİ / KAMP MODALI (XP, KUPA VİTRİNİ & 4 BÜYÜK GÜÇLENDİRME)
// ============================================================================

function getStarsString(level, max = 3) {
  let s = "";
  for (let i = 0; i < max; i++) s += i < level ? "⭐" : "☆";
  return s;
}

function openCampModal() {
  const modal = document.getElementById("modal-camp");
  renderCampUI();
  modal.classList.add("active");
}

function renderCampUI() {
  const xp = FirebaseSimService.getXp();
  const rank = FirebaseSimService.getPlayerRank(xp);

  const heroId = GameState.getSelectedHero();
  const hero = KAHRAMANLAR.find(h => h.id === heroId) || KAHRAMANLAR[0];
  const avatarEl = document.getElementById("camp-avatar-icon");
  if (avatarEl) avatarEl.textContent = hero.avatar || "🦊";

  const rankTitle = document.getElementById("camp-rank-title");
  if (rankTitle) rankTitle.textContent = `Seviye ${rank.rank}: ${rank.title}`;

  const xpFill = document.getElementById("camp-xp-fill");
  const pct = Math.min(100, Math.max(5, Math.floor(((xp - rank.minXp) / (rank.maxXp - rank.minXp)) * 100)));
  if (xpFill) xpFill.style.width = `${pct}%`;

  const xpStat = document.getElementById("camp-xp-stat");
  if (xpStat) {
    const xpNeeded = Math.max(0, rank.maxXp - xp);
    xpStat.textContent = rank.rank >= 5 
      ? `${xp} XP • Zirve Seviye: Mağlova Baş Muhafızı 👑`
      : `${xp} / ${rank.maxXp} XP • Seviye ${rank.rank + 1} için ${xpNeeded} XP Gerekli`;
  }

  // Kariyer Toplam Puanı ve Harcanabilir Puanlar
  const totalPoints = GameState.getTotalExplorerPoints();
  const availablePoints = GameState.getAvailablePoints();

  const pointsDisplay = document.getElementById("camp-points-display");
  if (pointsDisplay) pointsDisplay.textContent = `⭐ ${totalPoints.toLocaleString("tr-TR")} Kaşif Puanı`;

  const userPointsBadge = document.getElementById("camp-user-coins-badge");
  if (userPointsBadge) userPointsBadge.textContent = `⭐ ${availablePoints.toLocaleString("tr-TR")} Harcanabilir`;

  // Tamamlanan Etap Sayısı (Kilit Şartları İçin)
  let completedStagesCount = 0;
  for (let s = 0; s < 10; s++) {
    if (GameState.getLevelState(s) === 3) completedStagesCount++;
  }

  // ========================================================
  // 1. DİNLENME ÇADIRI (⛺ Kalkan ve 3. Seviyede +1 Kalıcı Can)
  // ========================================================
  const TENT_CONFIG = [
    null,
    { reqPoints: 500, reqStage: 0, cost: 300, desc: "Koşu başında 4 saniye koruma kalkanı" },
    { reqPoints: 2000, reqStage: 2, cost: 800, desc: "Koşu başında 8 saniye koruma kalkanı" },
    { reqPoints: 4500, reqStage: 5, cost: 1800, desc: "Koşu başında 12 sn kalkan + +1 KALICI CAN (4 Canla Başla!)" }
  ];
  const tentLvl = GameState.getTentLevel();
  const tentStars = document.getElementById("camp-tent-stars");
  if (tentStars) tentStars.textContent = getStarsString(tentLvl, 3);
  const tentDesc = document.getElementById("camp-tent-desc");
  if (tentDesc) {
    if (tentLvl >= 3) tentDesc.textContent = "Mevcut: Seviye 3 (12 sn Kalkan + 4 Başlangıç Canı!)";
    else if (tentLvl > 0) tentDesc.textContent = `Mevcut: Seviye ${tentLvl} (${tentLvl * 4} sn Kalkan)`;
    else tentDesc.textContent = "Mevcut: Seviye 0 (Kalkan Yok)";
  }
  const tentBtn = document.getElementById("btn-upgrade-tent");
  if (tentBtn) {
    if (tentLvl >= 3) {
      tentBtn.textContent = "MAKS SEVİYE ✅";
      tentBtn.className = "btn-camp-upgrade maxed";
      tentBtn.onclick = null;
    } else {
      const cfg = TENT_CONFIG[tentLvl + 1];
      const isPointsLocked = totalPoints < cfg.reqPoints;
      const isStageLocked = cfg.reqStage > 0 && completedStagesCount < cfg.reqStage;

      if (isPointsLocked || isStageLocked) {
        const lockReason = isStageLocked ? `${cfg.reqStage}. Etap` : `${cfg.reqPoints.toLocaleString("tr-TR")} Puan`;
        tentBtn.textContent = `🔒 Kilitli (${lockReason})`;
        tentBtn.className = "btn-camp-upgrade locked-upgrade";
        tentBtn.onclick = () => {
          showToast(`⛺ Bu yetenek için ${cfg.reqPoints.toLocaleString("tr-TR")} Kaşif Puanı ${cfg.reqStage > 0 ? `ve ${cfg.reqStage}. Etabı tamamlama` : ''} gerekiyor!`, "warning");
        };
      } else {
        tentBtn.textContent = `${cfg.cost} ⭐ Yükselt (${tentLvl + 1}. Yıldız)`;
        tentBtn.className = "btn-camp-upgrade";
        tentBtn.onclick = () => {
          if (GameState.getAvailablePoints() >= cfg.cost) {
            GameState.spendExplorerPoints(cfg.cost);
            GameState.setTentLevel(tentLvl + 1);
            triggerHaptic("success", 60);
            showToast(`⛺ Dinlenme Çadırı ${tentLvl + 1}. Yıldız oldu! ${cfg.desc}`, "success");
            renderCampUI();
            updateMenuUI();
          } else {
            showToast(`⚠️ Yetersiz Puan! ${cfg.cost} ⭐ Harcanabilir Kaşif Puanı gerekiyor. Koşularda puan topla!`, "warning");
          }
        };
      }
    }
  }

  // ========================================================
  // 2. KAMP ATEŞİ (🔥 Manyetik Puan & Altın Çekimi)
  // ========================================================
  const FIRE_CONFIG = [
    null,
    { reqPoints: 800, reqStage: 0, cost: 450, desc: "Koşu başında 5 saniye manyetik çekim" },
    { reqPoints: 2600, reqStage: 3, cost: 1100, desc: "Koşu başında 10 saniye geniş manyetik çekim" },
    { reqPoints: 5200, reqStage: 6, cost: 2200, desc: "Koşu başında 16 saniye devasa manyetik çekim" }
  ];
  const fireLvl = GameState.getCampfireLevel();
  const fireStars = document.getElementById("camp-fire-stars");
  if (fireStars) fireStars.textContent = getStarsString(fireLvl, 3);
  const fireDesc = document.getElementById("camp-fire-desc");
  if (fireDesc) {
    if (fireLvl >= 3) fireDesc.textContent = "Mevcut: Seviye 3 (16 sn Devasa Mıknatıs)";
    else if (fireLvl === 2) fireDesc.textContent = "Mevcut: Seviye 2 (10 sn Geniş Mıknatıs)";
    else if (fireLvl === 1) fireDesc.textContent = "Mevcut: Seviye 1 (5 sn Mıknatıs)";
    else fireDesc.textContent = "Mevcut: Seviye 0 (Mıknatıs Yok)";
  }
  const fireBtn = document.getElementById("btn-upgrade-fire");
  if (fireBtn) {
    if (fireLvl >= 3) {
      fireBtn.textContent = "MAKS SEVİYE ✅";
      fireBtn.className = "btn-camp-upgrade maxed";
      fireBtn.onclick = null;
    } else {
      const cfg = FIRE_CONFIG[fireLvl + 1];
      const isPointsLocked = totalPoints < cfg.reqPoints;
      const isStageLocked = cfg.reqStage > 0 && completedStagesCount < cfg.reqStage;

      if (isPointsLocked || isStageLocked) {
        const lockReason = isStageLocked ? `${cfg.reqStage}. Etap` : `${cfg.reqPoints.toLocaleString("tr-TR")} Puan`;
        fireBtn.textContent = `🔒 Kilitli (${lockReason})`;
        fireBtn.className = "btn-camp-upgrade locked-upgrade";
        fireBtn.onclick = () => {
          showToast(`🔥 Bu yetenek için ${cfg.reqPoints.toLocaleString("tr-TR")} Kaşif Puanı ${cfg.reqStage > 0 ? `ve ${cfg.reqStage}. Etabı tamamlama` : ''} gerekiyor!`, "warning");
        };
      } else {
        fireBtn.textContent = `${cfg.cost} ⭐ Yükselt (${fireLvl + 1}. Yıldız)`;
        fireBtn.className = "btn-camp-upgrade";
        fireBtn.onclick = () => {
          if (GameState.getAvailablePoints() >= cfg.cost) {
            GameState.spendExplorerPoints(cfg.cost);
            GameState.setCampfireLevel(fireLvl + 1);
            triggerHaptic("success", 60);
            showToast(`🔥 Kamp Ateşi ${fireLvl + 1}. Yıldız oldu! ${cfg.desc}`, "success");
            renderCampUI();
            updateMenuUI();
          } else {
            showToast(`⚠️ Yetersiz Puan! ${cfg.cost} ⭐ Harcanabilir Kaşif Puanı gerekiyor. Koşularda puan topla!`, "warning");
          }
        };
      }
    }
  }

  // ========================================================
  // 3. ORMAN İZCİSİ (👟 Süzülme ve 3. Seviyede Kalıcı Çift Zıplama)
  // ========================================================
  const BOOTS_CONFIG = [
    null,
    { reqPoints: 1200, reqStage: 0, cost: 600, desc: "Koşuda 5 saniye süzülme ve çeviklik" },
    { reqPoints: 3200, reqStage: 4, cost: 1400, desc: "Koşuda 10 saniye süzülme ve uzun kayma" },
    { reqPoints: 6000, reqStage: 7, cost: 2600, desc: "Tüm engelleri aşan KALICI ÇİFT ZIPLAMA (Double Jump)!" }
  ];
  const bootsLvl = GameState.getBootsLevel();
  const bootsStars = document.getElementById("camp-boots-stars");
  if (bootsStars) bootsStars.textContent = getStarsString(bootsLvl, 3);
  const bootsDesc = document.getElementById("camp-boots-desc");
  if (bootsDesc) {
    if (bootsLvl >= 3) bootsDesc.textContent = "Mevcut: Seviye 3 (Kalıcı Çift Zıplama Devrede!)";
    else if (bootsLvl === 2) bootsDesc.textContent = "Mevcut: Seviye 2 (10 sn Süzülme + Uzun Kayma)";
    else if (bootsLvl === 1) bootsDesc.textContent = "Mevcut: Seviye 1 (5 sn Süzülme)";
    else bootsDesc.textContent = "Mevcut: Seviye 0 (Standart)";
  }
  const bootsBtn = document.getElementById("btn-upgrade-boots");
  if (bootsBtn) {
    if (bootsLvl >= 3) {
      bootsBtn.textContent = "MAKS SEVİYE ✅";
      bootsBtn.className = "btn-camp-upgrade maxed";
      bootsBtn.onclick = null;
    } else {
      const cfg = BOOTS_CONFIG[bootsLvl + 1];
      const isPointsLocked = totalPoints < cfg.reqPoints;
      const isStageLocked = cfg.reqStage > 0 && completedStagesCount < cfg.reqStage;

      if (isPointsLocked || isStageLocked) {
        const lockReason = isStageLocked ? `${cfg.reqStage}. Etap` : `${cfg.reqPoints.toLocaleString("tr-TR")} Puan`;
        bootsBtn.textContent = `🔒 Kilitli (${lockReason})`;
        bootsBtn.className = "btn-camp-upgrade locked-upgrade";
        bootsBtn.onclick = () => {
          showToast(`👟 Bu yetenek için ${cfg.reqPoints.toLocaleString("tr-TR")} Kaşif Puanı ${cfg.reqStage > 0 ? `ve ${cfg.reqStage}. Etabı tamamlama` : ''} gerekiyor!`, "warning");
        };
      } else {
        bootsBtn.textContent = `${cfg.cost} ⭐ Yükselt (${bootsLvl + 1}. Yıldız)`;
        bootsBtn.className = "btn-camp-upgrade";
        bootsBtn.onclick = () => {
          if (GameState.getAvailablePoints() >= cfg.cost) {
            GameState.spendExplorerPoints(cfg.cost);
            GameState.setBootsLevel(bootsLvl + 1);
            triggerHaptic("success", 60);
            showToast(`👟 Orman İzcisi ${bootsLvl + 1}. Yıldız oldu! ${cfg.desc}`, "success");
            renderCampUI();
            updateMenuUI();
          } else {
            showToast(`⚠️ Yetersiz Puan! ${cfg.cost} ⭐ Harcanabilir Kaşif Puanı gerekiyor. Koşularda puan topla!`, "warning");
          }
        };
      }
    }
  }

  // ========================================================
  // 4. ORMAN PUSULASI (🧭 Patika Avansı & Kritik Can Simidi Kurtarması)
  // ========================================================
  const COMPASS_CONFIG = [
    null,
    { reqPoints: 1500, reqStage: 0, cost: 700, desc: "Koşu başında 6 sn hızlı adımlar ve patika ivmesi" },
    { reqPoints: 3800, reqStage: 5, cost: 1600, desc: "Koşu başında 12 sn hızlı adımlar + destek palamudu şansı" },
    { reqPoints: 7000, reqStage: 8, cost: 3000, desc: "Can 1'e düştüğünde OTOMATİK KURTARMA CAN SİMİDİ!" }
  ];
  const compassLvl = GameState.getCompassLevel();
  const compassStars = document.getElementById("camp-compass-stars");
  if (compassStars) compassStars.textContent = getStarsString(compassLvl, 3);
  const compassDesc = document.getElementById("camp-compass-desc");
  if (compassDesc) {
    if (compassLvl >= 3) compassDesc.textContent = "Mevcut: Seviye 3 (Kritik Anda Can Simidi Aktif!)";
    else if (compassLvl === 2) compassDesc.textContent = "Mevcut: Seviye 2 (12 sn Hızlı Adımlar + Palamut)";
    else if (compassLvl === 1) compassDesc.textContent = "Mevcut: Seviye 1 (6 sn Hızlı Adımlar)";
    else compassDesc.textContent = "Mevcut: Seviye 0 (Normal Hız)";
  }
  const compassBtn = document.getElementById("btn-upgrade-compass");
  if (compassBtn) {
    if (compassLvl >= 3) {
      compassBtn.textContent = "MAKS SEVİYE ✅";
      compassBtn.className = "btn-camp-upgrade maxed";
      compassBtn.onclick = null;
    } else {
      const cfg = COMPASS_CONFIG[compassLvl + 1];
      const isPointsLocked = totalPoints < cfg.reqPoints;
      const isStageLocked = cfg.reqStage > 0 && completedStagesCount < cfg.reqStage;

      if (isPointsLocked || isStageLocked) {
        const lockReason = isStageLocked ? `${cfg.reqStage}. Etap` : `${cfg.reqPoints.toLocaleString("tr-TR")} Puan`;
        compassBtn.textContent = `🔒 Kilitli (${lockReason})`;
        compassBtn.className = "btn-camp-upgrade locked-upgrade";
        compassBtn.onclick = () => {
          showToast(`🧭 Bu yetenek için ${cfg.reqPoints.toLocaleString("tr-TR")} Kaşif Puanı ${cfg.reqStage > 0 ? `ve ${cfg.reqStage}. Etabı tamamlama` : ''} gerekiyor!`, "warning");
        };
      } else {
        compassBtn.textContent = `${cfg.cost} ⭐ Yükselt (${compassLvl + 1}. Yıldız)`;
        compassBtn.className = "btn-camp-upgrade";
        compassBtn.onclick = () => {
          if (GameState.getAvailablePoints() >= cfg.cost) {
            GameState.spendExplorerPoints(cfg.cost);
            GameState.setCompassLevel(compassLvl + 1);
            triggerHaptic("success", 60);
            showToast(`🧭 Orman Pusulası ${compassLvl + 1}. Yıldız oldu! ${cfg.desc}`, "success");
            renderCampUI();
            updateMenuUI();
          } else {
            showToast(`⚠️ Yetersiz Puan! ${cfg.cost} ⭐ Harcanabilir Kaşif Puanı gerekiyor. Koşularda puan topla!`, "warning");
          }
        };
      }
    }
  }
}

const btnCloseCamp = document.getElementById("btn-close-camp");
if (btnCloseCamp) {
  btnCloseCamp.onclick = () => {
    const modalCamp = document.getElementById("modal-camp");
    if (modalCamp) modalCamp.classList.remove("active");
  };
}

// ============================================================================
// 12. KAŞİF KAYIT & ONBOARDING SİSTEMİ
// (Uygulama ilk açıldığında kaşif adı ve uygun kahraman seçimi)
// ============================================================================

let onboardingSelectedHero = 1;

function openOnboardingModal() {
  const modal = document.getElementById("modal-onboarding");
  if (!modal) return;

  const nameInput = document.getElementById("onboarding-name-input");
  if (nameInput) {
    nameInput.value = GameState.getExplorerName();
  }

  // Profil İstatistiklerini Doldur (Puan, Altın, Rütbe & Etap)
  const totalScore = GameState.getTotalStagePoints();
  const totalCoins = GameState.getCoins();
  const xp = FirebaseSimService.getXp();
  const rank = FirebaseSimService.getPlayerRank(xp);
  let completedCount = 0;
  for (let i = 0; i < 10; i++) {
    if (GameState.getLevelState(i) === 3) completedCount++;
  }

  const statScore = document.getElementById("onboarding-stat-score");
  if (statScore) statScore.textContent = `${totalScore.toLocaleString("tr-TR")} Puan`;

  const statCoins = document.getElementById("onboarding-stat-coins");
  if (statCoins) statCoins.textContent = totalCoins.toLocaleString("tr-TR");

  const statRank = document.getElementById("onboarding-stat-rank");
  if (statRank) {
    statRank.innerHTML = `${rank.title}<span class="ob-stat-stage-tag">${completedCount}/10 Etap</span>`;
  }
  const statRankIcon = document.querySelector("#modal-onboarding .ob-stat-item:nth-child(3) .ob-stat-icon");
  if (statRankIcon) {
    statRankIcon.textContent = rank.icon;
  }

  onboardingSelectedHero = GameState.getProfileHero() || 1;
  updateOnboardingHeroSelectionUI();

  modal.classList.add("active");
}

function updateOnboardingHeroSelectionUI() {
  const heroCards = document.querySelectorAll(".onboarding-hero-card");
  heroCards.forEach(card => {
    const hId = parseInt(card.getAttribute("data-hero-id"), 10);
    if (hId === onboardingSelectedHero) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });
}

function initOnboardingEvents() {
  const modal = document.getElementById("modal-onboarding");
  const profilePill = document.getElementById("menu-profile-pill");
  if (profilePill) {
    profilePill.onclick = () => openOnboardingModal();
  }

  const heroCards = document.querySelectorAll(".onboarding-hero-card");
  heroCards.forEach(card => {
    card.onclick = () => {
      onboardingSelectedHero = parseInt(card.getAttribute("data-hero-id"), 10) || 1;
      updateOnboardingHeroSelectionUI();
    };
  });

  const skipBtn = document.getElementById("btn-onboarding-skip");
  if (skipBtn) {
    skipBtn.onclick = () => {
      if (modal) modal.classList.remove("active");
    };
  }

  const submitBtn = document.getElementById("btn-onboarding-submit");
  if (submitBtn) {
    submitBtn.onclick = () => {
      const nameInput = document.getElementById("onboarding-name-input");
      const name = nameInput ? nameInput.value.trim() : "";
      if (name.length < 2) {
        showToast("⚠️ Lütfen en az 2 harften oluşan bir Kaşif Adı yazın!", "warning");
        if (nameInput) nameInput.focus();
        return;
      }

      GameState.setExplorerName(name);
      GameState.setProfileHero(onboardingSelectedHero);

      // İlk kurulumda oyun kahramanı henüz seçilmediyse aynı zamanda oyun kahramanı yapar
      if (!localStorage.getItem("SelectedCharacterID")) {
        GameState.setSelectedHero(onboardingSelectedHero);
      }

      updateMenuUI();
      LeaderboardService.syncMyScore();

      if (modal) modal.classList.remove("active");
      const hero = KAHRAMANLAR.find(h => h.id === onboardingSelectedHero) || KAHRAMANLAR[0];
      showToast(`🌲 Kaşif ${name} kaydedildi! Yarışma maskotun: ${hero.name}!`, "success");
    };
  }
}

// ============================================================================
// 13. CANLI PUAN TABLOSU & LİDERLİK TABLOSU (LEADERBOARD)
// ============================================================================

const SAHA_KASIFLERI = [
  { id: "k1", name: "Eren", heroId: 3, rankTitle: "Profesyonel Muhafız", stages: 10, baseScore: 4850, coins: 340 },
  { id: "k2", name: "Duru", heroId: 1, rankTitle: "Usta Orman Kaşifi", stages: 9, baseScore: 4210, coins: 280 },
  { id: "k3", name: "Mert", heroId: 2, rankTitle: "Usta Orman Kaşifi", stages: 8, baseScore: 3680, coins: 240 },
  { id: "k4", name: "Zeynep", heroId: 3, rankTitle: "Orman Kaşifi", stages: 7, baseScore: 3120, coins: 210 },
  { id: "k5", name: "Ali", heroId: 2, rankTitle: "Orman Kaşifi", stages: 6, baseScore: 2650, coins: 180 },
  { id: "k6", name: "Selim", heroId: 1, rankTitle: "Orman Kaşifi", stages: 5, baseScore: 2190, coins: 150 },
  { id: "k7", name: "Ayşe", heroId: 1, rankTitle: "Doğa İz Sürücüsü", stages: 4, baseScore: 1740, coins: 120 },
  { id: "k8", name: "Can", heroId: 3, rankTitle: "Doğa İz Sürücüsü", stages: 3, baseScore: 1320, coins: 90 },
  { id: "k9", name: "Defne", heroId: 2, rankTitle: "Orman Çaylağı", stages: 2, baseScore: 940, coins: 70 },
  { id: "k10", name: "Emir", heroId: 3, rankTitle: "Orman Çaylağı", stages: 1, baseScore: 620, coins: 50 }
];

let currentLeaderboardTab = "all"; // "all" veya "weekly"
let firestoreLeaderboardCache = null;

class LeaderboardService {
  static setRemoteLeaderboard(data) {
    if (Array.isArray(data) && data.length > 0) {
      firestoreLeaderboardCache = data;
      this.render();
    }
  }

  static getFullLeaderboardData(tab = "all") {
    // Aktif Oyuncu Verisi
    const myName = GameState.getExplorerName() || "Sen (Kaşif)";
    const myProfileHeroId = GameState.getProfileHero();
    const myTotalPoints = GameState.getTotalStagePoints();
    const myCoins = GameState.getCoins();
    const myXp = FirebaseSimService.getXp();
    const myRank = FirebaseSimService.getPlayerRank(myXp);
    
    let completedCount = 0;
    for (let i = 0; i < 10; i++) {
      if (GameState.getLevelState(i) === 3) completedCount++;
    }

    const myEntry = {
      id: "me",
      name: myName,
      heroId: myProfileHeroId,
      rankTitle: myRank.title,
      stages: completedCount,
      score: myTotalPoints,
      coins: myCoins,
      isMe: true
    };

    // Saha Kaşifleri Listesi (Firestore'dan gelen gerçek canlı veriler veya varsayılanlar)
    let sourceList = [];
    if (firestoreLeaderboardCache && firestoreLeaderboardCache.length > 0) {
      sourceList = firestoreLeaderboardCache.map((item, idx) => {
        let sc = item.score !== undefined ? item.score : (item.baseScore || 0);
        if (tab === "weekly") sc = Math.floor(sc * 0.45);
        return {
          id: item.id || `fb_${idx}`,
          name: item.name || "Orman Kaşifi",
          heroId: item.heroId || 1,
          rankTitle: item.rankTitle || "Doğa Kaşifi",
          stages: item.stages !== undefined ? item.stages : 1,
          score: sc,
          coins: item.coins !== undefined ? item.coins : 0,
          isMe: false
        };
      });
    } else {
      sourceList = SAHA_KASIFLERI.map(k => {
        let sc = k.baseScore;
        if (tab === "weekly") sc = Math.floor(sc * 0.45);
        return {
          id: k.id,
          name: k.name,
          heroId: k.heroId,
          rankTitle: k.rankTitle,
          stages: k.stages,
          score: sc,
          coins: k.coins,
          isMe: false
        };
      });
    }

    if (tab === "weekly") {
      myEntry.score = Math.floor(myEntry.score * 0.52);
    }

    // Aktif oyuncu listede mükerrer olmasın
    sourceList = sourceList.filter(item => item.name !== myEntry.name);
    sourceList.push(myEntry);

    // Puana göre sırala
    sourceList.sort((a, b) => b.score - a.score);

    return sourceList.map((item, idx) => ({ ...item, rank: idx + 1 }));
  }

  static render() {
    const containers = [
      document.getElementById("leaderboard-list-container"),
      document.getElementById("standalone-leaderboard-list-container")
    ].filter(Boolean);

    if (containers.length === 0) return;

    const data = this.getFullLeaderboardData(currentLeaderboardTab);
    const heroIcons = { 1: "🦊", 2: "🐵", 3: "🐯", 4: "🐿️", 5: "🦉" };

    const me = data.find(d => d.isMe);
    if (me) {
      const updateCard = (prefix = "") => {
        const myRankEl = document.getElementById(`${prefix}my-lb-rank`);
        const myAvatarEl = document.getElementById(`${prefix}my-lb-avatar`);
        const myNameEl = document.getElementById(`${prefix}my-lb-name`);
        const mySubEl = document.getElementById(`${prefix}my-lb-sub`);
        const myScoreEl = document.getElementById(`${prefix}my-lb-score`);
        const myCoinsEl = document.getElementById(`${prefix}my-lb-coins`);

        const isProf = (me.rankTitle || "").includes("Profesyonel");
        const badgeStyle = isProf 
          ? 'background: linear-gradient(135deg, #ffd700 0%, #b8860b 100%); color: #1a0f00; font-weight: 800; border: 1px solid #ffffff; box-shadow: 0 0 8px rgba(255,215,0,0.5);' 
          : 'background: rgba(45, 106, 79, 0.45); color: #8be0a4; border: 1px solid rgba(139, 224, 164, 0.4);';

        if (myRankEl) myRankEl.textContent = `#${me.rank}`;
        if (myAvatarEl) myAvatarEl.textContent = heroIcons[me.heroId] || "🦊";
        if (myNameEl) myNameEl.innerHTML = `<span class="lb-name-text">${me.name}</span> <span class="lb-user-rank-pill" style="${badgeStyle}">[${me.rankTitle}]</span>`;
        if (mySubEl) mySubEl.textContent = `${me.rankTitle} • ${me.stages}/10 Etap`;
        if (myScoreEl) myScoreEl.textContent = `${me.score.toLocaleString()} Puan`;
        if (myCoinsEl) myCoinsEl.textContent = `🪙 ${me.coins}`;
      };

      updateCard("");            // my-lb-...
      updateCard("standalone-"); // standalone-my-lb-...
    }

    containers.forEach(container => {
      container.innerHTML = "";
      data.forEach(item => {
        const row = document.createElement("div");
        row.className = `leaderboard-row ${item.isMe ? 'is-me' : ''}`;

        let rankClass = "other";
        let rankText = `#${item.rank}`;
        if (item.rank === 1) { rankClass = "top-1"; rankText = "🥇 1"; }
        else if (item.rank === 2) { rankClass = "top-2"; rankText = "🥈 2"; }
        else if (item.rank === 3) { rankClass = "top-3"; rankText = "🥉 3"; }

        const isItemProf = (item.rankTitle || "").includes("Profesyonel");
        const itemBadgeStyle = isItemProf 
          ? 'background: linear-gradient(135deg, #ffd700 0%, #b8860b 100%); color: #1a0f00; font-weight: 800; border: 1px solid #ffffff; box-shadow: 0 0 8px rgba(255,215,0,0.5);' 
          : 'background: rgba(45, 106, 79, 0.45); color: #8be0a4; border: 1px solid rgba(139, 224, 164, 0.4);';

        row.innerHTML = `
          <div class="lb-rank-badge ${rankClass}">${rankText}</div>
          <div class="lb-user-info">
            <div class="lb-user-avatar">${heroIcons[item.heroId] || "🦊"}</div>
            <div class="lb-user-details">
              <div class="lb-user-name">
                <span class="lb-name-text">${item.name}</span>
                <span class="lb-user-rank-pill" style="${itemBadgeStyle}">[${item.rankTitle}]</span>
                ${item.isMe ? '<span style="font-size:10px; color:#ffd166; font-weight:800; margin-left:4px;">(SEN)</span>' : ''}
              </div>
              <div class="lb-user-rank-title">${item.rankTitle} • ${item.stages}/10 Etap</div>
            </div>
          </div>
          <div class="lb-score-col">
            <div class="lb-score-val">⭐ ${item.score.toLocaleString()}</div>
            <div class="lb-level-tag">🪙 ${item.coins}</div>
          </div>
        `;

        container.appendChild(row);
      });
    });
  }

  static updateSyncBadge(status) {
    const badges = [
      document.getElementById("leaderboard-sync-badge"),
      document.getElementById("firebase-cloud-indicator")
    ].filter(Boolean);

    badges.forEach(badge => {
      if (status === "live") {
        badge.textContent = "🟢 Canlı Firebase Bağlantı";
        badge.className = "device-network-badge is-online";
        badge.title = "Firestore ile anlık ve çift yönlü senkronize";
      } else if (status === "syncing") {
        badge.textContent = "🔄 Senkronize Ediliyor...";
        badge.className = "device-network-badge is-online";
      } else if (status === "cached") {
        badge.textContent = "💾 Önbellek Sıralaması";
        badge.className = "device-network-badge";
      } else if (status === "offline") {
        badge.textContent = "📶 Çevrimdışı (Yerel)";
        badge.className = "device-network-badge is-offline";
      }
    });
  }

  static syncMyScore() {
    DeviceNetworkService.triggerSaveFeedback();

    const myName = GameState.getExplorerName() || "Kaşif";
    const myProfileHeroId = GameState.getProfileHero();
    const myTotalPoints = GameState.getTotalStagePoints();
    const myCoins = GameState.getCoins();
    let completedCount = 0;
    for (let i = 0; i < 10; i++) {
      if (GameState.getLevelState(i) === 3) completedCount++;
    }

    const rankTitle = FirebaseSimService.getPlayerRank().title;
    const device = (typeof DeviceInfoService !== 'undefined' && DeviceInfoService.getDeviceInfo)
      ? DeviceInfoService.getDeviceInfo()
      : { brand: "Android", model: "Cihaz", summary: "Mobil Cihaz" };

    // 1. Android Native Firebase Bridge ile Firestore'a kaydet (marka ve model ile)
    const bridge = window.AndroidFirebaseBridge || window.AndroidBridge;
    let bridgeSubmitted = false;
    if (bridge && typeof bridge.submitScore === 'function') {
      try {
        bridge.submitScore(myName, myTotalPoints, myProfileHeroId, completedCount, myCoins, device.summary);
        bridgeSubmitted = true;
        console.log("📱 Android Firebase bridge.submitScore executed for " + myName + " [" + device.summary + "]");
      } catch(e) {
        console.warn("bridge.submitScore error:", e);
      }
    }
    if (bridge && typeof bridge.postMessage === 'function') {
      try {
        bridge.postMessage(JSON.stringify({
          event: "SUBMIT_SCORE",
          name: myName,
          score: myTotalPoints,
          heroId: myProfileHeroId,
          stages: completedCount,
          coins: myCoins,
          deviceInfo: device.summary
        }));
        bridgeSubmitted = true;
      } catch(e) {
        console.warn("bridge.postMessage error:", e);
      }
    }

    // 2. Web / iOS Direct Firestore REST API (marka, model ve profil ismiyle)
    try {
      const safeName = (myName || "player").replace(/[^a-zA-Z0-9_]/g, "_").toLowerCase();
      const docId = `user_${safeName}`;
      const firestoreUrl = `https://firestore.googleapis.com/v1/projects/kentormanimaceraparki/databases/(default)/documents/leaderboard/${docId}`;
      fetch(firestoreUrl, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: {
            name: { stringValue: myName },
            score: { integerValue: myTotalPoints.toString() },
            heroId: { integerValue: myProfileHeroId.toString() },
            stages: { integerValue: completedCount.toString() },
            coins: { integerValue: myCoins.toString() },
            rankTitle: { stringValue: rankTitle },
            deviceBrand: { stringValue: device.brand || "" },
            deviceModel: { stringValue: device.model || "" },
            deviceInfo: { stringValue: device.summary || "" },
            updatedAt: { timestampValue: new Date().toISOString() }
          }
        })
      }).then(res => res.json()).then(resData => {
        console.log("🌐 Firestore leaderboard score synced successfully with device info:", resData);
        LeaderboardService.updateSyncBadge("live");
      }).catch(err => {
        console.warn("Firestore leaderboard score sync notice:", err);
      });
    } catch(e) {}

    if (bridgeSubmitted) {
      LeaderboardService.updateSyncBadge("live");
    }

    this.render();
  }

  static async fetchWebLeaderboard() {
    try {
      LeaderboardService.updateSyncBadge("syncing");
      const res = await fetch("https://firestore.googleapis.com/v1/projects/kentormanimaceraparki/databases/(default)/documents/leaderboard", { cache: "no-cache" });
      if (res.ok) {
        const data = await res.json();
        if (data && data.documents && Array.isArray(data.documents)) {
          const list = data.documents.map(doc => {
            const f = doc.fields || {};
            const id = doc.name ? doc.name.split("/").pop() : "unknown";
            return {
              id: id,
              name: f.name ? f.name.stringValue : "Kaşif",
              score: f.score ? parseInt(f.score.integerValue || f.score.doubleValue || "0", 10) : 0,
              heroId: f.heroId ? parseInt(f.heroId.integerValue || "1", 10) : 1,
              stages: f.stages ? parseInt(f.stages.integerValue || "0", 10) : 0,
              coins: f.coins ? parseInt(f.coins.integerValue || "0", 10) : 0,
              rankTitle: f.rankTitle ? f.rankTitle.stringValue : "Doğa Kaşifi",
              deviceInfo: f.deviceInfo ? f.deviceInfo.stringValue : ""
            };
          });
          if (list.length > 0) {
            LeaderboardService.setRemoteLeaderboard(list);
            LeaderboardService.updateSyncBadge("live");
            console.log("🌐 Live Firestore leaderboard fetched: " + list.length + " players.");
            return true;
          }
        }
      }
      LeaderboardService.updateSyncBadge("cached");
      return false;
    } catch(e) {
      console.warn("Web Firestore leaderboard fetch error:", e);
      LeaderboardService.updateSyncBadge("offline");
      return false;
    }
  }
  }

  static fetchWebZones() {
    if (window.AndroidFirebaseBridge || window.AndroidBridge) return;
    try {
      fetch("https://firestore.googleapis.com/v1/projects/kentormanimaceraparki/databases/(default)/documents/parks/kemerburgaz/zones")
        .then(res => res.json())
        .then(data => {
          if (data && data.documents && Array.isArray(data.documents)) {
            const remoteZones = data.documents.map(doc => {
              const f = doc.fields || {};
              return {
                id: doc.name ? doc.name.split("/").pop() : "",
                name: f.name ? f.name.stringValue : "",
                orderIndex: f.orderIndex ? parseInt(f.orderIndex.integerValue || "1", 10) : 1,
                businessName: f.businessName ? f.businessName.stringValue : "",
                description: f.description ? f.description.stringValue : "",
                facilities: f.facilities ? f.facilities.stringValue : "",
                fact: f.fact ? f.fact.stringValue : "",
                targetScore: f.targetScore ? parseInt(f.targetScore.integerValue || "1000", 10) : 1000,
                qrSecretCode: f.qrSecretCode ? f.qrSecretCode.stringValue : "",
                xPercent: f.xPercent ? parseFloat(f.xPercent.doubleValue || f.xPercent.integerValue || "50") : null,
                yPercent: f.yPercent ? parseFloat(f.yPercent.doubleValue || f.yPercent.integerValue || "50") : null
              };
            });
            if (typeof window.onFirebaseDataReady === 'function') {
              window.onFirebaseDataReady(remoteZones, []);
            }
          }
        })
        .catch(e => console.warn("Web Firestore zones fetch error:", e));
    } catch(e) {}
  }
}

function initLeaderboardEvents() {
  const btnMenu = document.getElementById("btn-menu-leaderboard");
  if (btnMenu) btnMenu.onclick = () => openLeaderboardModal();

  const closeBtn = document.getElementById("btn-close-leaderboard");
  if (closeBtn) {
    closeBtn.onclick = () => {
      document.getElementById("modal-leaderboard").classList.remove("active");
    };
  }

  const handleRefresh = (e) => {
    if (e) e.stopPropagation();
    if (typeof refreshLiveGameData === 'function') {
      refreshLiveGameData();
    }
  };

  const refreshBtn = document.getElementById("btn-lb-refresh");
  if (refreshBtn) refreshBtn.onclick = handleRefresh;

  const standaloneRefreshBtn = document.getElementById("btn-standalone-lb-refresh");
  if (standaloneRefreshBtn) standaloneRefreshBtn.onclick = handleRefresh;

  const standaloneSyncRefreshBtn = document.getElementById("btn-standalone-sync-refresh");
  if (standaloneSyncRefreshBtn) standaloneSyncRefreshBtn.onclick = handleRefresh;

  const openRewardsBtn = document.getElementById("btn-lb-open-rewards");
  if (openRewardsBtn) {
    openRewardsBtn.onclick = () => {
      document.getElementById("modal-leaderboard").classList.remove("active");
      openRewardsModal();
    };
  }

  const switchTab = (tab) => {
    currentLeaderboardTab = tab;
    const isAll = tab === "all";

    const tabAll = document.getElementById("btn-tab-lb-all");
    const tabWeekly = document.getElementById("btn-tab-lb-weekly");
    if (tabAll) tabAll.classList.toggle("active", isAll);
    if (tabWeekly) tabWeekly.classList.toggle("active", !isAll);

    const sTabAll = document.getElementById("btn-standalone-tab-lb-all");
    const sTabWeekly = document.getElementById("btn-standalone-tab-lb-weekly");
    if (sTabAll) sTabAll.classList.toggle("active", isAll);
    if (sTabWeekly) sTabWeekly.classList.toggle("active", !isAll);

    LeaderboardService.render();
  };

  const tabAll = document.getElementById("btn-tab-lb-all");
  const tabWeekly = document.getElementById("btn-tab-lb-weekly");
  if (tabAll) tabAll.onclick = () => switchTab("all");
  if (tabWeekly) tabWeekly.onclick = () => switchTab("weekly");

  const sTabAll = document.getElementById("btn-standalone-tab-lb-all");
  const sTabWeekly = document.getElementById("btn-standalone-tab-lb-weekly");
  if (sTabAll) sTabAll.onclick = () => switchTab("all");
  if (sTabWeekly) sTabWeekly.onclick = () => switchTab("weekly");
}

// ============================================================================
// 14. ÖDÜL EKRANI & HEDİYE VİTRİNİ (REWARDS & VOUCHERS)
// ============================================================================

const ORMAN_ODULLERI = [
  {
    id: "carousel",
    biz: "Carousel Cafe & Çift Katlı Atlıkarınca",
    title: "Sıcak Çikolata veya Mini Waffle İkramı 🧇",
    icon: "🎠",
    targetPoints: 400,
    stageReq: 2,
    desc: "Dev Atlıkarınca yanında tatlı bir mola."
  },
  {
    id: "goodmood",
    biz: "Good Mood Cafe & Ahşap Park",
    title: "Taze Sıkma Portakal Suyu veya Limonata 🍋",
    icon: "🧃",
    targetPoints: 800,
    stageReq: 3,
    desc: "Doğal meyvelerle enerjini yenile."
  },
  {
    id: "beltur",
    biz: "BELTUR Kemerburgaz Kent Ormanı",
    title: "Sıcak Çay & Çıtır Simit veya Türk Kahvesi ☕",
    icon: "☕",
    targetPoints: 1300,
    stageReq: 4,
    desc: "Orman manzarası eşliğinde sıcacık bir dinlenme."
  },
  {
    id: "zipline",
    biz: "Macera Parkı (Extreme Park)",
    title: "Ücretsiz Zipline Uçuş Kuponu 🧗",
    icon: "🧗",
    targetPoints: 2000,
    stageReq: 5,
    desc: "Ağaçların üzerinde rüzgar gibi süzül."
  },
  {
    id: "fauna",
    biz: "Fauna Alanı Yaban Hayatı Koruma",
    title: "Kuzey Ormanları Yaban Hayatı Muhafız Rozeti 🦌",
    icon: "🦌",
    targetPoints: 2800,
    stageReq: 6,
    desc: "Alageyikler ve kızıl sincaplar adına onur rozeti."
  },
  {
    id: "icecream",
    biz: "Gelişim Vadisi Sosyal Tesisi",
    title: "Doğal Orman Meyveli Dondurma 🍦",
    icon: "🍦",
    targetPoints: 3600,
    stageReq: 8,
    desc: "Ahşap Seyir Kulesi tırmanışı sonrası serinletici ikram."
  },
  {
    id: "maglova",
    biz: "Boğaziçi Yönetim & Tarihi Mağlova",
    title: "Mağlova Su Kemeri Büyük Şampiyonluk Beratı 🏛️",
    icon: "🏛️",
    targetPoints: 5000,
    stageReq: 10,
    desc: "10 etabı tamamlayan kahramanlara özel sertifika & ahşap madalyon."
  }
];

class RewardsService {
  static remoteRewardsCache = null;

  static async fetchRemote() {
    try {
      const res = await fetch("https://firestore.googleapis.com/v1/projects/kentormanimaceraparki/databases/(default)/documents/rewards", { cache: "no-cache" });
      if (res.ok) {
        const data = await res.json();
        if (data && data.documents && Array.isArray(data.documents)) {
          const list = data.documents.map(doc => {
            const f = doc.fields || {};
            const docId = doc.name ? doc.name.split("/").pop() : "";
            const isActive = f.isActive ? f.isActive.booleanValue !== false : true;
            return {
              id: f.id?.stringValue || docId,
              biz: f.partnerName?.stringValue || f.title?.stringValue || "İşletme",
              title: f.description?.stringValue || f.title?.stringValue || "Ödül",
              icon: f.icon?.stringValue || "🎁",
              targetPoints: parseInt(f.requiredScore?.integerValue || f.requiredScore?.doubleValue || "500", 10),
              stageReq: parseInt(f.requiredStages?.integerValue || "1", 10),
              couponPrefix: f.couponPrefix?.stringValue || "KNT",
              desc: f.description?.stringValue || "",
              isActive: isActive,
              orderIndex: parseInt(f.orderIndex?.integerValue || "99", 10)
            };
          }).filter(r => r.isActive); // SADECE AKTİF ANLAŞMALI İŞLETMELER — SİLİNENLER VEYA PASİFLER OTOMATİK KALKAR

          list.sort((a, b) => (a.orderIndex || 99) - (b.orderIndex || 99));

          if (list.length > 0) {
            RewardsService.remoteRewardsCache = list;
            console.log("🎁 Live Firestore active rewards fetched: " + list.length);
            RewardsService.render();
            return true;
          }
        }
      }
      return false;
    } catch(e) {
      console.warn("Rewards fetchRemote error:", e);
      return false;
    }
  }

  static getRewardsList() {
    return (RewardsService.remoteRewardsCache && RewardsService.remoteRewardsCache.length > 0)
      ? RewardsService.remoteRewardsCache
      : ORMAN_ODULLERI;
  }

  static render() {
    const container = document.getElementById("rewards-grid-container");
    if (!container) return;
    container.innerHTML = "";

    const userPoints = GameState.getTotalStagePoints();
    const userCoins = GameState.getCoins();

    const bannerPoints = document.getElementById("rewards-user-points");
    const bannerCoins = document.getElementById("rewards-user-coins");
    if (bannerPoints) bannerPoints.textContent = `⭐ ${userPoints.toLocaleString()} PUAN`;
    if (bannerCoins) bannerCoins.textContent = `🪙 ${userCoins} Altın`;

    const rewardsList = this.getRewardsList();

    rewardsList.forEach(reward => {
      const isStageCompleted = GameState.getLevelState(reward.stageReq - 1) === 3;
      const isPointsReached = userPoints >= reward.targetPoints;
      const isUnlocked = isPointsReached || isStageCompleted;
      const isUsed = GameState.isVoucherUsed(reward.id);

      const pct = Math.min(100, Math.floor((userPoints / Math.max(1, reward.targetPoints)) * 100));

      const card = document.createElement("div");
      card.className = `reward-card ${isUnlocked ? 'is-unlocked' : ''} ${isUsed ? 'is-used' : ''}`;

      let actionBtnHtml = '';
      if (isUsed) {
        actionBtnHtml = `<button class="reward-claim-btn used" style="background:#2d6a4f; color:#d8f3dc; opacity:0.85; cursor:not-allowed;" disabled>✅ KULLANILDI</button>`;
      } else if (isUnlocked) {
        actionBtnHtml = `<button class="reward-claim-btn" data-reward-id="${reward.id}">🎟️ KUPONU KULLAN</button>`;
      } else {
        actionBtnHtml = `<div class="reward-lock-badge">%${pct} Tamamlandı</div>`;
      }

      card.innerHTML = `
        <div class="reward-icon-wrap">${reward.icon}</div>
        <div class="reward-info-col">
          <div class="reward-biz-tag">${reward.biz}</div>
          <div class="reward-name">${reward.title}</div>
          <div style="font-size:11px; color:#a7c4bc;">${reward.desc}</div>
          <div class="reward-progress-track">
            <div class="reward-progress-fill" style="width: ${pct}%;"></div>
          </div>
        </div>
        <div class="reward-action-col">
          <div class="reward-target-text">${isUsed ? 'KULLANILDI' : (isUnlocked ? '✅ AÇILDI' : `${reward.targetPoints} Puan`)}</div>
          ${actionBtnHtml}
        </div>
      `;

      container.appendChild(card);
    });

    // Kupon Açma Butonları
    const claimBtns = container.querySelectorAll(".reward-claim-btn:not(.used)");
    claimBtns.forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const rId = btn.getAttribute("data-reward-id");
        const reward = rewardsList.find(r => r.id === rId);
        if (reward) openVoucherDetail(reward);
      };
    });
  }
}

function openRewardsModal() {
  openAchievementsHub("rewards");
}

async function openVoucherDetail(reward) {
  const modal = document.getElementById("modal-voucher-detail");
  if (!modal) return;

  const deviceId = (typeof DeviceInfoService !== 'undefined' && DeviceInfoService.getDeviceId)
    ? DeviceInfoService.getDeviceId()
    : "dev_default";
  const device = (typeof DeviceInfoService !== 'undefined' && DeviceInfoService.getDeviceInfo)
    ? DeviceInfoService.getDeviceInfo()
    : { brand: "Android", model: "Cihaz", summary: "Mobil Cihaz" };
  const myName = GameState.getExplorerName() || "Kaşif";
  const docId = `coupon_${reward.id}_${deviceId}`;
  const codeEl = document.getElementById("voucher-popup-code");

  document.getElementById("voucher-popup-biz").textContent = reward.biz.toUpperCase();
  document.getElementById("voucher-popup-title").textContent = reward.title;

  let localCode = GameState.getVoucherCode(reward.id);
  let isUsed = GameState.isVoucherUsed(reward.id);
  if (codeEl) codeEl.textContent = localCode || "Üretiliyor...";

  modal.classList.add("active");

  // Firebase Firestore'dan bu cihaz için üretilmiş kuponu kontrol et / üret (1 cihaz = 1 kupon)
  try {
    const couponUrl = `https://firestore.googleapis.com/v1/projects/kentormanimaceraparki/databases/(default)/documents/coupons/${docId}`;
    const checkRes = await fetch(couponUrl, { cache: "no-cache" });
    if (checkRes.ok) {
      const existing = await checkRes.json();
      if (existing && existing.fields && existing.fields.code) {
        localCode = existing.fields.code.stringValue;
        if (existing.fields.isUsed && existing.fields.isUsed.booleanValue === true) {
          isUsed = true;
          GameState.markVoucherUsed(reward.id);
        }
        localStorage.setItem(`VoucherCode_${reward.id}`, localCode);
        if (codeEl) codeEl.textContent = localCode;
      }
    } else if (checkRes.status === 404) {
      // Kupon henüz Firestore'da yok -> Bu cihaz için benzersiz tek kullanımlık kod üret
      const prefix = (reward.couponPrefix || "KB").toUpperCase();
      const rnd = Math.random().toString(36).substring(2, 6).toUpperCase();
      const newCode = `${prefix}-${rnd}-2026`;
      localCode = newCode;
      localStorage.setItem(`VoucherCode_${reward.id}`, newCode);
      if (codeEl) codeEl.textContent = newCode;

      // Firestore'a kaydet
      await fetch(couponUrl, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: {
            code: { stringValue: newCode },
            rewardId: { stringValue: reward.id },
            deviceId: { stringValue: deviceId },
            playerName: { stringValue: myName },
            deviceBrand: { stringValue: device.brand },
            deviceModel: { stringValue: device.model },
            deviceInfo: { stringValue: device.summary },
            isUsed: { booleanValue: false },
            createdAt: { timestampValue: new Date().toISOString() }
          }
        })
      });
      console.log(`🎟️ Single-use coupon created on Firebase for ${reward.id}: ${newCode}`);
    }
  } catch(e) {
    console.warn("Coupon Firebase check notice:", e);
  }

  const confirmBtn = document.getElementById("btn-use-voucher-confirm");
  if (confirmBtn) {
    if (isUsed) {
      confirmBtn.textContent = "✅ BU KUPON KULLANILDI (GEÇERSİZ)";
      confirmBtn.style.opacity = "0.6";
      confirmBtn.style.cursor = "not-allowed";
      confirmBtn.disabled = true;
      confirmBtn.onclick = null;
    } else {
      confirmBtn.textContent = "🎟️ İŞLETMEDE KULLAN (1 DEFA)";
      confirmBtn.style.opacity = "1";
      confirmBtn.style.cursor = "pointer";
      confirmBtn.disabled = false;
      confirmBtn.onclick = async () => {
        if (confirm(`⚠️ DİKKAT: "${reward.title}" kuponu yalnızca 1 DEFA kullanılabilir.\n\nİşletme görevlisine (${reward.biz}) kupon kodunu (${localCode}) gösterdiniz mi?\nOnaylarsanız kupon kullanılmış olarak işaretlenecek ve tekrar kullanılamayacaktır.`)) {
          GameState.markVoucherUsed(reward.id);
          showToast(`🎉 "${reward.title}" kuponu başarıyla kullanıldı! Afiyet olsun!`, "success");
          if (typeof sounds !== 'undefined' && sounds.playCollect) sounds.playCollect();
          confirmBtn.textContent = "✅ BU KUPON KULLANILDI (GEÇERSİZ)";
          confirmBtn.style.opacity = "0.6";
          confirmBtn.style.cursor = "not-allowed";
          confirmBtn.disabled = true;
          confirmBtn.onclick = null;
          RewardsService.render();

          // Firestore'da kullanıldı olarak işaretle
          try {
            const couponUrl = `https://firestore.googleapis.com/v1/projects/kentormanimaceraparki/databases/(default)/documents/coupons/${docId}`;
            await fetch(couponUrl, {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                fields: {
                  isUsed: { booleanValue: true },
                  usedAt: { timestampValue: new Date().toISOString() }
                }
              })
            });
          } catch(err) {
            console.warn("Coupon mark used in Firestore error:", err);
          }
        }
      };
    }
  }

  modal.classList.add("active");
}

function initRewardsEvents() {
  const btnMenu = document.getElementById("btn-menu-rewards");
  if (btnMenu) btnMenu.onclick = () => openRewardsModal();

  const closeBtn = document.getElementById("btn-close-rewards");
  if (closeBtn) {
    closeBtn.onclick = () => {
      document.getElementById("modal-rewards").classList.remove("active");
    };
  }

  const openLbBtn = document.getElementById("btn-rewards-open-lb");
  if (openLbBtn) {
    openLbBtn.onclick = () => {
      document.getElementById("modal-rewards").classList.remove("active");
      openLeaderboardModal();
    };
  }

  const closeVoucherBtn = document.getElementById("btn-close-voucher-popup");
  if (closeVoucherBtn) {
    closeVoucherBtn.onclick = () => {
      document.getElementById("modal-voucher-detail").classList.remove("active");
    };
  }
}

// ============================================================================
// 15. CROSS-PLATFORM KÖPRÜSÜ (UNITY, ANDROID WEBVIEW, IOS APP & PWA)
// ============================================================================
const CrossPlatformBridge = {
  sendEvent(eventName, payload = {}) {
    // 1. Unity WebGL & Unity WebView Entegrasyonu
    try {
      if (window.unityInstance && typeof window.unityInstance.SendMessage === 'function') {
        window.unityInstance.SendMessage('GameManager', eventName, JSON.stringify(payload));
      } else if (window.Unity && typeof window.Unity.call === 'function') {
        window.Unity.call(JSON.stringify({ event: eventName, ...payload }));
      }
    } catch (e) {
      console.warn("Unity bridge:", e);
    }

    // 2. iOS WebKit Native App Köprüsü (WKScriptMessageHandler)
    try {
      if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.gameBridge) {
        window.webkit.messageHandlers.gameBridge.postMessage({ event: eventName, ...payload });
      }
    } catch (e) {
      console.warn("iOS bridge:", e);
    }

    // 3. Android Native WebView Köprüsü (JavascriptInterface)
    try {
      const aBridge = window.AndroidFirebaseBridge || window.AndroidBridge;
      if (aBridge && typeof aBridge.postMessage === 'function') {
        aBridge.postMessage(JSON.stringify({ event: eventName, ...payload }));
      }
    } catch (e) {
      console.warn("Android bridge:", e);
    }

    // 4. Standart Web Iframe / Parent PostMessage
    try {
      if (window.parent && window.parent !== window) {
        window.parent.postMessage({ type: "KEMERBURGAZ_GAME", event: eventName, payload }, "*");
      }
    } catch (e) {}
  },

  vibrate(ms = 60) {
    try {
      const bridge = window.AndroidFirebaseBridge || window.AndroidBridge;
      if (bridge && typeof bridge.vibrate === 'function') {
        bridge.vibrate(ms);
      } else if (navigator.vibrate) {
        navigator.vibrate(ms);
      }
    } catch(e) {}
  },

  syncFirebaseData() {
    try {
      const bridge = window.AndroidFirebaseBridge || window.AndroidBridge;
      if (bridge) {
        document.body.classList.add('is-native-app');
        if (typeof bridge.getZonesJson === 'function') {
          const zonesStr = bridge.getZonesJson();
          if (zonesStr) {
            const remoteZones = JSON.parse(zonesStr);
            if (Array.isArray(remoteZones) && remoteZones.length > 0) {
              window.onFirebaseDataReady(remoteZones, []);
              console.log("🌲 Firebase Firestore zones synced into game!");
            }
          }
        }
        if (typeof bridge.getLeaderboardJson === 'function') {
          const lbStr = bridge.getLeaderboardJson();
          if (lbStr) {
            const remoteLb = JSON.parse(lbStr);
            if (Array.isArray(remoteLb) && remoteLb.length > 0) {
              window.onFirebaseLeaderboardReady(remoteLb);
              console.log("🏆 Firebase Firestore leaderboard synced into game!");
            }
          }
        }
      } else {
        // Web tarayıcı ortamı: REST API ile senkronize et
        LeaderboardService.fetchWebZones();
        LeaderboardService.fetchWebLeaderboard();
      }
      if (typeof RemoteQuizService !== 'undefined' && RemoteQuizService.syncFromRemote) {
        RemoteQuizService.syncFromRemote();
      }
    } catch(e) {
      console.warn("syncFirebaseData error:", e);
    }
  },

  listenToNativeEvents() {
    window.addEventListener("message", (event) => {
      if (!event.data) return;
      const data = typeof event.data === "string" ? (() => { try { return JSON.parse(event.data); } catch(e){ return null; } })() : event.data;
      if (!data || data.type !== "NATIVE_TO_GAME") return;

      if (data.action === "MUTE_AUDIO") {
        sounds.stopMusic();
        sounds.sfxEnabled = false;
        sounds.musicEnabled = false;
        updateMenuUI();
      } else if (data.action === "UNMUTE_AUDIO") {
        sounds.sfxEnabled = true;
        sounds.musicEnabled = true;
        sounds.playMusic();
        updateMenuUI();
      } else if (data.action === "NAVIGATE_SCREEN" && data.screenId) {
        showScreen(data.screenId);
      }
    });
  }
};

window.onFirebaseDataReady = function(zones, campaigns) {
  try {
    if (Array.isArray(zones) && zones.length > 0) {
      zones.forEach(rz => {
        const idx = (rz.orderIndex || 1) - 1;
        if (RESMI_ETAPLAR[idx]) {
          if (rz.name) RESMI_ETAPLAR[idx].title = `${rz.orderIndex || (idx + 1)}. Orman Etabı: ${rz.name}`;
          if (rz.businessName) RESMI_ETAPLAR[idx].business = rz.businessName;
          if (rz.description) RESMI_ETAPLAR[idx].desc = rz.description;
          if (rz.facilities) RESMI_ETAPLAR[idx].facilities = rz.facilities;
          if (rz.fact) RESMI_ETAPLAR[idx].fact = rz.fact;
          if (rz.targetScore) RESMI_ETAPLAR[idx].targetScore = rz.targetScore;
          if (rz.qrSecretCode) RESMI_ETAPLAR[idx].qrCode = rz.qrSecretCode;
        }
        if (PIN_COORDINATES[idx]) {
          if (rz.xPercent !== undefined && rz.xPercent !== null && !isNaN(rz.xPercent)) {
            PIN_COORDINATES[idx].x = Number(rz.xPercent);
          }
          if (rz.yPercent !== undefined && rz.yPercent !== null && !isNaN(rz.yPercent)) {
            PIN_COORDINATES[idx].y = Number(rz.yPercent);
          }
        }
      });
      console.log("🌲 Live onFirebaseDataReady received with " + zones.length + " zones & coordinates updated!");
      if (typeof renderMapScreen === 'function') renderMapScreen();
      const modalInfo = document.getElementById("modal-level-info");
      if (modalInfo && modalInfo.classList.contains("active") && typeof activeLevelIndex === 'number') {
        openLevelModal(activeLevelIndex);
      }
    }
  } catch(e) {
    console.warn("onFirebaseDataReady error:", e);
  }
};

window.onFirebaseLeaderboardReady = function(lbData) {
  try {
    const list = typeof lbData === 'string' ? JSON.parse(lbData) : lbData;
    if (Array.isArray(list) && list.length > 0) {
      LeaderboardService.setRemoteLeaderboard(list);
      LeaderboardService.updateSyncBadge("live");
      console.log("🏆 Live onFirebaseLeaderboardReady received with " + list.length + " scores!");
    }
  } catch(e) {
    console.warn("onFirebaseLeaderboardReady error:", e);
  }
};

// ============================================================================
// UYGULAMA BAŞLANGICI (DOM READY & CROSS-PLATFORM INITIALIZATION)
// ============================================================================
let appInitialized = false;

// Global Window Expose - Her ortamda (tarayıcı, WebView, iframe, inline onclick) tam erişim
window.showScreen = showScreen;
window.initHeroesScreen = initHeroesScreen;
window.renderMapScreen = renderMapScreen;
window.openAchievementsModal = openAchievementsModal;
window.openLeaderboardModal = openLeaderboardModal;
window.openRewardsModal = openRewardsModal;
window.openPassportModal = openPassportModal;
window.openCampModal = openCampModal;
window.openSettingsModal = openSettingsModal;
window.openOnboardingModal = openOnboardingModal;
window.sounds = sounds;
window.GameState = GameState;
window.LeaderboardService = LeaderboardService;
window.RewardsService = RewardsService;
window.switchHubTab = switchHubTab;
window.openAchievementsHub = openAchievementsHub;
window.DeviceNetworkService = DeviceNetworkService;
window.DeviceInfoService = DeviceInfoService;
window.refreshLiveGameData = refreshLiveGameData;
window.CrossPlatformBridge = CrossPlatformBridge;
window.startNatureQuiz = startNatureQuiz;
window.focusOnMapPin = focusOnMapPin;
window.proceedToNextStageOnMap = proceedToNextStageOnMap;

function initApp() {
  if (appInitialized) return;
  appInitialized = true;

  try { DeviceNetworkService.init(); } catch(e) { console.warn("DeviceNetworkService init:", e); }
  try { CrossPlatformBridge.syncFirebaseData(); } catch(e) { console.warn("Firebase sync init:", e); }
  try { CrossPlatformBridge.listenToNativeEvents(); } catch(e) { console.warn("Native bridge init:", e); }
  try { updateMenuUI(); } catch(e) { console.warn("Menu UI init:", e); }
  try { initNavigationEvents(); } catch(e) { console.warn("Navigation events init:", e); }
  try { initSettingsEvents(); } catch(e) { console.warn("Settings events init:", e); }
  try { renderMapScreen(); } catch(e) { console.warn("Map screen init:", e); }
  try { initQRScannerEvents(); } catch(e) { console.warn("QR scanner init:", e); }
  try { initNatureQuizEvents(); } catch(e) { console.warn("Nature quiz init:", e); }
  try { RemoteQuizService.init(); } catch(e) { console.warn("RemoteQuizService init:", e); }
  try { initOnboardingEvents(); } catch(e) { console.warn("Onboarding init:", e); }
  try { initHubEvents(); } catch(e) { console.warn("Hub events init:", e); }
  try { initLeaderboardEvents(); } catch(e) { console.warn("Leaderboard events init:", e); }
  try { initRewardsEvents(); } catch(e) { console.warn("Rewards events init:", e); }

  // Uygulama arkaplana geçtiğinde veya sekme değiştiğinde oyunu otomatik duraklat
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && gameRunning && !isGamePaused) {
      pauseOrReturnGame();
    }
  });

  // Cross-platform app lifecycle bildirimi
  try {
    CrossPlatformBridge.sendEvent("APP_READY", { 
      version: "2.6.0", 
      platform: navigator.userAgent 
    });
  } catch(e) {}

  // İlk açılışta kaşif adı yoksa Kaşif Kayıt Modalı otomatik açılsın
  try {
    if (!GameState.hasCompletedOnboarding()) {
      setTimeout(() => {
        openOnboardingModal();
      }, 450);
    }
  } catch(e) {}
}

// Hem DOMContentLoaded hem de load dinleyerek takılmaları ve CDN gecikmelerini önler
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

window.addEventListener("load", () => {
  initApp();
  try { updateMenuUI(); } catch(e) {}
});

// ============================================================================
// 11. BÜYÜK FİNAL (10. ETAP) RESMİ ORMAN KAŞİFİ ROZETİ VE KUTLAMA ANİMASYONLARI
// ============================================================================

window.triggerBadgeCelebration = function() {
  if (sounds && sounds.playCollect) sounds.playCollect();
  triggerHaptic("impactMedium", 40);

  const container = document.getElementById("grand-badge-container");
  if (!container) return;

  const rect = container.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const starSymbols = ["⭐", "✨", "🌟", "🪙", "👑", "🌿"];
  for (let i = 0; i < 16; i++) {
    const angle = (i / 16) * Math.PI * 2 + (Math.random() - 0.5) * 0.35;
    const dist = 75 + Math.random() * 85;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist;

    const star = document.createElement("span");
    star.className = "badge-flying-star";
    star.textContent = starSymbols[i % starSymbols.length];
    star.style.left = `${centerX}px`;
    star.style.top = `${centerY}px`;
    star.style.setProperty("--dx", `${dx}px`);
    star.style.setProperty("--dy", `${dy}px`);
    document.body.appendChild(star);

    setTimeout(() => {
      if (star.parentNode) star.parentNode.removeChild(star);
    }, 900);
  }
};

window.launchVictoryFireworks = function() {
  if (sounds && sounds.playCollect) sounds.playCollect();
  triggerHaptic("notification", 50);

  const colors = ["#ffd166", "#ef4444", "#38bdf8", "#52b788", "#ec4899", "#f59e0b", "#ffffff"];
  for (let burst = 0; burst < 5; burst++) {
    setTimeout(() => {
      const bx = window.innerWidth * (0.18 + Math.random() * 0.64);
      const by = window.innerHeight * (0.22 + Math.random() * 0.38);

      for (let i = 0; i < 20; i++) {
        const angle = (i / 20) * Math.PI * 2;
        const dist = 65 + Math.random() * 110;
        const dx = Math.cos(angle) * dist;
        const dy = Math.sin(angle) * dist;

        const p = document.createElement("div");
        p.className = "badge-flying-star";
        p.style.left = `${bx}px`;
        p.style.top = `${by}px`;
        p.style.width = "7px";
        p.style.height = "7px";
        p.style.borderRadius = "50%";
        p.style.backgroundColor = colors[(burst + i) % colors.length];
        p.style.boxShadow = `0 0 10px ${colors[(burst + i) % colors.length]}`;
        p.style.setProperty("--dx", `${dx}px`);
        p.style.setProperty("--dy", `${dy}px`);
        document.body.appendChild(p);

        setTimeout(() => {
          if (p.parentNode) p.parentNode.removeChild(p);
        }, 900);
      }
    }, burst * 260);
  }
};

// ============================================================================
// 12. MOBİL (iOS & ANDROID) ENTEGRASYON VE DONANIM ETKİLEŞİM KATMANI
// ============================================================================

// 1. Android Donanım / Hareket Geri Tuşu (Hardware & Gesture Back Key Handler)
window.handleAndroidBackKey = function() {
  // A) Quiz Modalı açık ise
  const quizModal = document.getElementById("modal-nature-quiz");
  if (quizModal && quizModal.classList.contains("active")) {
    clearQuizTimer();
    quizModal.classList.remove("active");
    if (window.showScreen) window.showScreen("screen-map");
    if (window.renderMapScreen) window.renderMapScreen();
    return true;
  }

  // B) Açık herhangi bir modal var ise (Başarımlar, Ayarlar, Onboarding, Pause vb.)
  const activeModals = document.querySelectorAll(".modal-overlay.active");
  if (activeModals && activeModals.length > 0) {
    activeModals.forEach(m => m.classList.remove("active"));
    return true;
  }

  // C) Koşu oyunu ekranında ise -> Oyunu duraklat
  const activeScreen = document.querySelector(".screen.active");
  if (activeScreen && activeScreen.id === "screen-game") {
    const pauseModal = document.getElementById("modal-pause");
    if (pauseModal && !pauseModal.classList.contains("active")) {
      if (window.togglePauseGame) window.togglePauseGame();
      return true;
    }
  }

  // D) Harita veya Kahraman ekranında ise -> Ana menüye dön
  if (activeScreen && (activeScreen.id === "screen-map" || activeScreen.id === "screen-heroes")) {
    if (window.showScreen) window.showScreen("screen-menu");
    return true;
  }

  // E) Zaten Ana Menüde ise -> Sistem varsayılanına bırak (uygulamadan çık / arka plana al)
  return false;
};

// 2. iOS WebKit & Android İlk Dokunuş Ses Uyandırıcısı (AudioContext Resume)
(function initMobileAudioUnlock() {
  const unlockAudio = () => {
    try {
      if (typeof sounds !== "undefined" && sounds && sounds.getAudioCtx) {
        const ctx = sounds.getAudioCtx();
        if (ctx && ctx.state === "suspended") {
          ctx.resume();
        }
      }
    } catch (e) {}
    document.removeEventListener("touchstart", unlockAudio);
    document.removeEventListener("pointerdown", unlockAudio);
    document.removeEventListener("click", unlockAudio);
  };
  document.addEventListener("touchstart", unlockAudio, { passive: true });
  document.addEventListener("pointerdown", unlockAudio, { passive: true });
  document.addEventListener("click", unlockAudio, { passive: true });
})();

// 3. Evrensel Ekran Boyutu & Yönlendirme (Portrait & Landscape & Resize) Yöneticisi
(function initUniversalResponsiveHandler() {
  function handleAppOrientationOrResize() {
    // A) Koşu oyunu aktif ise canvas boyutunu ve zeminini güncelle
    if (typeof canvas !== "undefined" && canvas && typeof gameRunning !== "undefined" && gameRunning) {
      canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
      const groundY = canvas.height - 90;
      if (typeof player !== "undefined" && player && player.isGrounded) {
        player.y = groundY - player.h;
      }
    }

    // B) Harita ekranı aktif ise harita boyutunu ve odaklamasını güncelle
    if (typeof adjustMapDimensions === "function") {
      adjustMapDimensions();
    }
  }

  window.addEventListener("resize", handleAppOrientationOrResize);
  window.addEventListener("orientationchange", () => {
    setTimeout(handleAppOrientationOrResize, 150);
    setTimeout(handleAppOrientationOrResize, 400);
  });
})();




