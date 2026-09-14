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
    title: "4. Orman Etabı: İBB BELTUR Restoran & Kafe",
    desc: "Orman manzaralı BELTUR. 1. Büyük Aile Dinlenme Molası: Sıcak çay, yemek ve dinlenme.",
    facilities: "☕ İBB BELTUR Kafe & Restoran: 0m | 🎭 İBB Sahne: 50m | 🚻 WC & Bebek Bakım: 30m",
    fact: "BELTUR kafelerinde kendi mataranı kullanarak doğaya sıfır plastik atık bırakabilirsin.",
    business: "İBB BELTUR Kafe & Restoran",
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
    name: "İBB Şapkası",
    desc: "İBB armalı, taze meşe yapraklı resmi kaşif safari şapkası.",
    icon: "🧢",
    unlockStage: 2,
    price: 60
  },
  {
    id: "vest",
    name: "İBB Yeleği",
    desc: "İBB Boğaziçi orman muhafızı yeleği, altın düğmeler ve amblem.",
    icon: "🦺",
    unlockStage: 4,
    price: 120
  },
  {
    id: "pants",
    name: "İBB Pantolonu",
    desc: "İBB resmi izcisi haki kargo pantolonu, altın tokalı kemer.",
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
    return parseInt(localStorage.getItem("tent_level") || "0", 10);
  }
  static setTentLevel(lvl) {
    localStorage.setItem("tent_level", lvl.toString());
  }

  static getCampfireLevel() {
    return parseInt(localStorage.getItem("campfire_level") || "0", 10);
  }
  static setCampfireLevel(lvl) {
    localStorage.setItem("campfire_level", lvl.toString());
  }

  static getBootsLevel() {
    return parseInt(localStorage.getItem("boots_level") || "0", 10);
  }
  static setBootsLevel(lvl) {
    localStorage.setItem("boots_level", lvl.toString());
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
    biz: "İBB BELTUR Restoran & Kafe",
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
      lbBadge.className = `cloud-sync-badge ${status.online ? 'is-online' : 'is-offline'}`;
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

class FirebaseSimService {
  static getCloudStatusText() {
    return DeviceNetworkService.getStatus().text;
  }

  static getXp() {
    return parseInt(localStorage.getItem("player_xp") || "150", 10);
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
    if (xp < 300) return { rank: 1, title: "Orman Çaylağı", minXp: 0, maxXp: 300, icon: "🌱" };
    if (xp < 700) return { rank: 2, title: "Patika Kaşifi", minXp: 300, maxXp: 700, icon: "🐾" };
    if (xp < 1200) return { rank: 3, title: "Doğa İz Sürücüsü", minXp: 700, maxXp: 1200, icon: "🌲" };
    if (xp < 1800) return { rank: 4, title: "Gölet & Vadi Muhafızı", minXp: 1200, maxXp: 1800, icon: "🦅" };
    return { rank: 5, title: "Mağlova Baş Muhafızı", minXp: 1800, maxXp: 2500, icon: "👑" };
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
    } else {
      this.stopMusic();
    }
    return this.sfxEnabled;
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

function showToast(msg, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = msg;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-15px)";
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

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

  // Kaşif Profil Rozeti Güncellemesi
  const profileNameEl = document.getElementById("menu-profile-name");
  const profileAvatarEl = document.getElementById("menu-profile-avatar");
  const profileHeroId = GameState.getProfileHero();
  const heroIcons = { 1: "🦊", 2: "🐵", 3: "🐯" };

  if (profileAvatarEl) profileAvatarEl.textContent = heroIcons[profileHeroId] || "🦊";

  const expName = GameState.getExplorerName();
  if (profileNameEl) {
    profileNameEl.textContent = expName ? expName : "Kaşif Kaydı";
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

  // Ahşap Gardırop (İBB Kostüm) Seçimi & Satın Alma
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

  // Önizleme görseli üzerinde kıyafet katmanlarını güncelle
  const prevHat = document.getElementById("preview-wear-hat");
  const prevVest = document.getElementById("preview-wear-vest");
  const prevPants = document.getElementById("preview-wear-pants");
  if (prevHat) prevHat.classList.toggle("hidden", activeCostume !== "hat");
  if (prevVest) prevVest.classList.toggle("hidden", activeCostume !== "vest");
  if (prevPants) prevPants.classList.toggle("hidden", activeCostume !== "pants");

  // Animasyonu garantile
  if (!heroPreviewAnimId) {
    startHeroPreviewAnimation();
  }
}

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

let mapPanningInitialized = false;
function initMapPanning() {
  if (mapPanningInitialized) return;
  const viewport = document.getElementById("map-pan-viewport");
  if (!viewport) return;
  mapPanningInitialized = true;

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
}

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

    const pinBtn = document.createElement("button");
    pinBtn.type = "button";
    pinBtn.className = `map-pin-btn ${state === 2 ? 'is-active-pin' : ''}`;
    pinBtn.style.left = `${coords.x}%`;
    pinBtn.style.top = `${coords.y}%`;
    pinBtn.title = etap.title;

    pinBtn.innerHTML = `
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

    let statusBadge = `<div class="stage-status-badge locked">🔒</div>`;
    if (state === 3) {
      statusBadge = `<div class="stage-status-badge completed">✅</div>`;
    } else if (state === 2) {
      statusBadge = `<div class="stage-status-badge active">▶️</div>`;
    } else if (state === 0 && idx >= 2) {
      statusBadge = `<div class="stage-status-badge locked qr-needed" title="İşletme QR Kodu ile Ücretsiz Aç">📷 QR</div>`;
    }

    let rewardTag = "";
    if (etap.id === 5) rewardTag = ` <div class="stage-reward-pill beltur">☕ BELTUR Kuponu</div>`;
    if (etap.id === 10) rewardTag = ` <div class="stage-reward-pill zipline">🏆 Muhafız Beratı</div>`;

    if (state === 0 && idx >= 2) {
      rewardTag += ` <div class="stage-reward-pill qr-tag">📍 ${etap.business} [QR ile Ücretsiz Aç]</div>`;
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
      startBtn.textContent = "OYUNA BAŞLA";
      if (qrBtn) qrBtn.style.display = "none";
      startBtn.onclick = () => {
        document.getElementById("modal-level-info").classList.remove("active");
        startRunnerGame(activeLevelIndex + 1);
      };
    } else {
      descEl.innerHTML = `${etap.desc}<br><br>🌟 <strong>Açılış Koşulu:</strong> Önceki ${idx}. etabı başarıyla tamamlayarak VEYA <strong>${etap.business}</strong> noktasındaki QR kodu okutarak <strong>ÜCRETSİZ</strong> açabilirsiniz.`;
      startBtn.textContent = "🔒 KİLİTLİ (Önceki Etabı Tamamla)";
      startBtn.disabled = true;
      startBtn.style.opacity = "0.6";

      if (qrBtn) {
        qrBtn.style.display = "flex";
        qrBtn.textContent = `📷 ${etap.business} QR Kodu ile Hemen Aç`;
        qrBtn.onclick = () => {
          openQRScannerModal(idx);
        };
      }
    }
  } else {
    descEl.textContent = etap.desc;
    startBtn.disabled = false;
    startBtn.style.opacity = "1";
    startBtn.textContent = state === 3 ? "TEKRAR OYNA" : "OYUNA BAŞLA";
    if (qrBtn) qrBtn.style.display = "none";
    startBtn.onclick = () => {
      document.getElementById("modal-level-info").classList.remove("active");
      startRunnerGame(activeLevelIndex + 1);
    };
  }

  const quizModalBtn = document.getElementById("btn-modal-nature-quiz");
  if (quizModalBtn) {
    quizModalBtn.onclick = () => {
      document.getElementById("modal-level-info").classList.remove("active");
      startNatureQuiz(idx, () => {
        openLevelModal(idx);
      });
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
    const names = { hat: "İBB Şapkası", vest: "İBB Yeleği", pants: "İBB Pantolonu" };
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
    showToast("🧢 İBB Kaşif Şapkası Kuşanıldı! Yüksek engellerden korur!", "success");
  } else if (type === "vest") {
    activeClothingBuffs.vest = 20;
    showToast("🦺 İBB Muhafız Yeleği Kuşanıldı! Çelik zırh darbe koruması başladı!", "success");
  } else if (type === "pants") {
    activeClothingBuffs.pants = 20;
    showToast("👖 İBB İzcisi Pantolonu Kuşanıldı! Çift zıplama ve mıknatıs başladı!", "success");
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
    hat: "🧢 İBB Kaşif Şapkası (Koruma)",
    vest: "🦺 İBB Muhafız Yeleği (Çelik Zırh)",
    pants: "👖 İBB İzcisi Pantolonu (Mıknatıs)"
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
  // 4. Etap: İBB BELTUR & Sıfır Atık
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

let currentQuizStageIndex = 0;
let currentQuizQuestionIndex = 0;
let currentQuizQuestions = [];
let quizCorrectCount = 0;
let quizAnswerLocked = false;
let quizProceedAction = null;

function getQuestionsForStage(stageIdx) {
  const safeIdx = Math.max(0, Math.min(DOGA_SORU_HAVUZU.length - 1, stageIdx));
  return DOGA_SORU_HAVUZU[safeIdx] || DOGA_SORU_HAVUZU[0];
}

function startNatureQuiz(stageIndex, onComplete = null) {
  currentQuizStageIndex = stageIndex;
  currentQuizQuestionIndex = 0;
  quizCorrectCount = 0;
  quizAnswerLocked = false;
  quizProceedAction = onComplete;

  currentQuizQuestions = getQuestionsForStage(stageIndex);

  const summaryBox = document.getElementById("quiz-summary-box");
  const questionBox = document.getElementById("quiz-question-box");
  const optionsBox = document.getElementById("quiz-options-container");
  const feedbackBox = document.getElementById("quiz-feedback-box");
  const skipBtn = document.getElementById("btn-quiz-skip");

  if (summaryBox) summaryBox.classList.add("hidden");
  if (questionBox) questionBox.classList.remove("hidden");
  if (optionsBox) optionsBox.classList.remove("hidden");
  if (feedbackBox) feedbackBox.classList.add("hidden");
  if (skipBtn) skipBtn.style.display = "block";

  renderQuizQuestion(0);

  const modal = document.getElementById("modal-nature-quiz");
  if (modal) modal.classList.add("active");
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

  if (counterEl) counterEl.textContent = `Soru ${idx + 1} / 3`;
  if (catEl) catEl.textContent = q.category;
  if (textEl) textEl.textContent = q.q;
  if (textA) textA.textContent = q.optA;
  if (textB) textB.textContent = q.optB;

  const btnA = document.getElementById("quiz-opt-a");
  const btnB = document.getElementById("quiz-opt-b");
  if (btnA) btnA.className = "quiz-option-btn";
  if (btnB) btnB.className = "quiz-option-btn";

  const feedbackBox = document.getElementById("quiz-feedback-box");
  if (feedbackBox) feedbackBox.classList.add("hidden");
}

function handleQuizAnswer(selectedOption) {
  if (quizAnswerLocked) return;
  quizAnswerLocked = true;

  const q = currentQuizQuestions[currentQuizQuestionIndex];
  if (!q) return;

  const isCorrect = selectedOption === q.correct;
  const btnA = document.getElementById("quiz-opt-a");
  const btnB = document.getElementById("quiz-opt-b");
  const selectedBtn = selectedOption === "A" ? btnA : btnB;
  const correctBtn = q.correct === "A" ? btnA : btnB;

  const feedbackBox = document.getElementById("quiz-feedback-box");
  const feedbackIcon = document.getElementById("quiz-feedback-icon");
  const feedbackText = document.getElementById("quiz-feedback-text");

  if (isCorrect) {
    quizCorrectCount++;
    if (selectedBtn) selectedBtn.classList.add("correct");
    sounds.playCollect();
    GameState.addCoins(20);
    FirebaseSimService.addXp(30);
    LeaderboardService.syncMyScore();

    if (feedbackIcon) feedbackIcon.textContent = "🌟";
    if (feedbackText) feedbackText.textContent = `Doğru! (+20 🪙 • +30 XP) — ${q.fact}`;
    if (feedbackBox) feedbackBox.style.borderColor = "#52b788";
  } else {
    if (selectedBtn) selectedBtn.classList.add("wrong");
    if (correctBtn) correctBtn.classList.add("correct");
    if (feedbackIcon) feedbackIcon.textContent = "💡";
    if (feedbackText) feedbackText.textContent = `Doğru Bilgi: ${q.fact}`;
    if (feedbackBox) feedbackBox.style.borderColor = "#ffd166";
  }

  if (feedbackBox) feedbackBox.classList.remove("hidden");

  setTimeout(() => {
    currentQuizQuestionIndex++;
    if (currentQuizQuestionIndex < 3) {
      renderQuizQuestion(currentQuizQuestionIndex);
    } else {
      showQuizSummary();
    }
  }, 1600);
}

function showQuizSummary() {
  const summaryBox = document.getElementById("quiz-summary-box");
  const questionBox = document.getElementById("quiz-question-box");
  const optionsBox = document.getElementById("quiz-options-container");
  const feedbackBox = document.getElementById("quiz-feedback-box");
  const skipBtn = document.getElementById("btn-quiz-skip");

  if (questionBox) questionBox.classList.add("hidden");
  if (optionsBox) optionsBox.classList.add("hidden");
  if (feedbackBox) feedbackBox.classList.add("hidden");
  if (skipBtn) skipBtn.style.display = "none";

  for (let s = 1; s <= 3; s++) {
    const el = document.getElementById(`quiz-step-${s}`);
    if (el) el.className = "quiz-step-indicator completed";
  }

  const earnedCoins = quizCorrectCount * 20;
  const earnedXp = quizCorrectCount * 30;

  const scoreEl = document.getElementById("quiz-summary-score");
  const rewardsEl = document.getElementById("quiz-summary-rewards");

  if (scoreEl) scoreEl.textContent = `3 sorudan ${quizCorrectCount} tanesini doğru cevapladın!`;
  if (rewardsEl) rewardsEl.textContent = `+${earnedCoins} 🪙 Altın  •  +${earnedXp} XP ⭐`;

  if (summaryBox) summaryBox.classList.remove("hidden");

  const proceedBtn = document.getElementById("btn-quiz-proceed-next");
  if (proceedBtn) {
    proceedBtn.onclick = () => {
      document.getElementById("modal-nature-quiz").classList.remove("active");
      if (quizProceedAction) {
        quizProceedAction();
      } else {
        showScreen("screen-map");
      }
    };
  }

  const mapBtn = document.getElementById("btn-quiz-back-map");
  if (mapBtn) {
    mapBtn.onclick = () => {
      document.getElementById("modal-nature-quiz").classList.remove("active");
      showScreen("screen-map");
      renderMapScreen();
    };
  }
}

function initNatureQuizEvents() {
  const btnA = document.getElementById("quiz-opt-a");
  const btnB = document.getElementById("quiz-opt-b");

  if (btnA) btnA.onclick = () => handleQuizAnswer("A");
  if (btnB) btnB.onclick = () => handleQuizAnswer("B");

  const skipBtn = document.getElementById("btn-quiz-skip");
  if (skipBtn) {
    skipBtn.onclick = () => {
      document.getElementById("modal-nature-quiz").classList.remove("active");
      if (quizProceedAction) quizProceedAction();
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
let activeClothingBuffs = {
  hat: 0,   // 🧢 İBB Kaşif Şapkası (Yüksek engel koruması)
  vest: 0,  // 🦺 İBB Muhafız Yeleği (Çelik zırh darbe koruması)
  pants: 0  // 👖 İBB İzcisi Pantolonu (Çeviklik, çift zıplama & mıknatıs)
};

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
  gravity: 0.68,
  jumpStrength: -13.2,
  isGrounded: true,
  wasGrounded: true,
  landingSquash: 0,
  isSliding: false,
  slideTimer: 0,
  invulnerable: 0,
  animTick: 0,
  img: new Image()
};

let obstacles = [];
let coins = [];
let particles = [];
let bgScrollX = 0;
let spawnCooldown = 120;

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
  const STAGE_DURATIONS = [60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
  levelTotalDurationSeconds = STAGE_DURATIONS[levelId - 1] || (60 + (levelId - 1) * 10);
  levelTimeElapsed = 0;
  currentMaxStageScore = MAX_STAGE_SCORES[levelId - 1] || 1000;
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
  // 🚀 Profesyonel ve Akıcı Hız Skalası (Level 1: 2.90 dinamik tempo, Level 10: 4.70 büyük final)
  gameSpeed = 2.90 + ((levelId - 1) * 0.20);
  updateClothingHUD();

  const heroId = GameState.getSelectedHero();
  const hero = KAHRAMANLAR.find(h => h.id === heroId) || KAHRAMANLAR[0];
  player.img.src = hero.image;

  // Gelişim Vadisi Kamp Güçlendirmeleri
  const tentBonus = GameState.getTentLevel();
  const fireBonus = GameState.getCampfireLevel();
  const bootsBonus = GameState.getBootsLevel();
  const packBonus = GameState.getBackpackLevel();
  const heroBonus = hero.id === 3 ? 1 : 0;

  maxLives = 3 + Math.min(3, tentBonus) + heroBonus;
  playerLives = maxLives;
  player.hasShield = false; // Kullanıcı Kuralı: Otomatik bedava kalkan YOK! Satın alınmamışsa sıfırdan başlar
  player.canDoubleJump = bootsBonus >= 3; // 3. Seviye Botta Çift Zıplama
  player.hasDoubleJumped = false;
  player.maxSlideTimer = bootsBonus >= 2 ? 56 : 44; // Eğilerek süzülme süresi (rahatça engelin altından geçer)

  // Bot zıplama bonusu (-0.8 zıplama gücü)
  const jumpBonus = bootsBonus >= 1 ? -0.8 : 0;

  if (hero.id === 2) {
    player.jumpStrength = -14.2 + jumpBonus;
    player.gravity = 0.68;
  } else if (hero.id === 3) {
    player.jumpStrength = -12.8 + jumpBonus;
    player.gravity = 0.72; // Muhafız Kaplan: Tok ve dayanıklı gövde
  } else if (hero.id === 4) {
    player.jumpStrength = -13.7 + jumpBonus;
    player.gravity = 0.65; // Kızıl Sincap: Çevik ve yaylanan sıçrayış
  } else if (hero.id === 5) {
    player.jumpStrength = -14.6 + jumpBonus;
    player.gravity = 0.52; // Bilge Baykuş: Düşük yerçekimi ile kanat süzülmesi
  } else {
    player.jumpStrength = -13.4 + jumpBonus;
    player.gravity = 0.68; // Tilki: Dengeli koşucu
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
        // YÜKSEK ASILI ENGEL: Macera Parkı Halatı veya Asılı Ahşap Kütük (ALTINDAN SÜZÜLEREK GEÇİLİR)
        const isLog = Math.random() < 0.5;
        const obsH = 26;
        const clearance = 54;
        obstacles.push({
          type: isLog ? "overhead_log" : "rope",
          x: canvas.width + 20,
          y: groundY - (clearance + obsH), // groundY - 80px
          w: isLog ? (currentLevelNumber <= 3 ? 58 : 68) : (currentLevelNumber <= 3 ? 50 : 60),
          h: obsH,
          passed: false
        });
        lastSpawnedObstacleType = "overhead";

        // 🌟 2. Bölümden İtibaren Engel Altında Taktiksel Yıldız (KAYARAK TOPLANIR!)
        if (currentLevelNumber >= 2 && Math.random() < 0.85) {
          coins.push({
            type: "star",
            x: canvas.width + 36,
            y: groundY - 26, // Tam yer seviyesi, kayarak süzülen kahraman toplar!
            w: 24,
            h: 24,
            collected: false
          });
        }
      } else {
        // ZEMİN ENGELİ: Kütük veya Kaya (ÜZERİNDEN ZIPLANMASI GEREKİR)
        const isRock = Math.random() < 0.5;
        // 1. Etapta 32px dinamik kaya, 10. etapta 46px sağlam orman kütüğü
        const size = currentLevelNumber === 1 ? 32 : Math.min(46, 32 + Math.floor(currentLevelNumber * 1.5));
        obstacles.push({
          type: "ground",
          x: canvas.width + 20,
          y: groundY - size,
          w: size,
          h: size,
          img: isRock ? imgRock : imgLog,
          passed: false
        });
        lastSpawnedObstacleType = "ground";

        // 🌟 2. Bölümden İtibaren Zemin Engeli Üzerinde Taktiksel Yıldız (ZIPLAYARAK TOPLANIR!)
        if (currentLevelNumber >= 2 && Math.random() < 0.85) {
          coins.push({
            type: "star",
            x: canvas.width + 22,
            y: groundY - 118, // Havada yüksek irtifa, engelin üzerinden zıplayarak toplanır!
            w: 24,
            h: 24,
            collected: false
          });
        }
      }

      // PROFESYONEL VE RİTMİK ENGEL ARALIĞI:
      // 1. Etap: ~90-105 frame (1.5 - 1.8 saniye canlı reaksiyon payı)
      // 10. Etap: ~55-70 frame (0.9 - 1.2 saniye heyecanlı profesyonel akış)
      const baseGap = Math.max(52, 92 - (currentLevelNumber * 4.0));
      let extraBuffer = Math.floor(Math.random() * (currentLevelNumber <= 3 ? 16 : 10));
      if (lastSpawnedObstacleType === "overhead") {
        extraBuffer += 12; // Kaymadan sonra doğrulmak için ilave pay
      }
      spawnCooldown = Math.floor(baseGap + extraBuffer);
    } else {
      // ÖDÜL VE TOPLANABİLİR ÜRETİMİ (Kıyafet Sandığı, Yıldızlar veya Altın Grubu)
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

      if (rewardRoll < 0.22) {
        // Altın Palamut (Kızıl Sincap & Bonus Altın)
        coins.push({
          type: "golden_acorn",
          x: canvas.width + 30,
          y: groundY - 55,
          w: 26,
          h: 26,
          collected: false
        });
      } else if (currentLevelNumber >= 2 && rewardRoll < 0.55) {
        // 🌟 2. BÖLÜM VE SONRASI HAVADA YÜKSEK VE ORTA İRTİFA YILDIZ DİZİSİ
        coins.push({
          type: "star",
          x: canvas.width + 25,
          y: groundY - 60,
          w: 24,
          h: 24,
          collected: false
        });
        coins.push({
          type: "star",
          x: canvas.width + 65,
          y: groundY - 90,
          w: 24,
          h: 24,
          collected: false
        });
      } else {
        // Standart Altın Dizilimi (3'lü Kavisli Altın Grubu)
        const coinCount = 3;
        const arcBaseY = groundY - 50;
        for (let i = 0; i < coinCount; i++) {
          const arcY = arcBaseY - Math.sin((i / (coinCount - 1)) * Math.PI) * 28;
          coins.push({
            x: canvas.width + 20 + (i * 32),
            y: arcY,
            w: 24,
            h: 24,
            collected: false
          });
        }
      }

      // Kaşif Sırt Çantası Seviye 2+: Altın Meşe Palamudu (Özel Güçlendirme)
      const packBonus = GameState.getBackpackLevel();
      if (packBonus >= 2 && Math.random() < 0.28) {
        coins.push({
          type: "golden_acorn",
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

  // Yerçekimi & Zemin Teması
  player.vy += player.gravity;
  player.y += player.vy;

  if (player.y >= groundY - player.h) {
    player.y = groundY - player.h;
    player.vy = 0;
    player.isGrounded = true;

    // Yere ilk basış anı (İniş yaylanması ve toz efekti)
    if (!player.wasGrounded) {
      player.landingSquash = 6;
      for (let k = 0; k < 4; k++) {
        particles.push({
          x: player.x + 8 + (k * 12),
          y: groundY - 2,
          vx: (k - 1.5) * 1.6,
          vy: -0.6 - Math.random() * 0.8,
          size: 3 + Math.random() * 2,
          alpha: 0.75,
          color: "#d7ccc8"
        });
      }
    }
  } else {
    player.isGrounded = false;
  }
  player.wasGrounded = player.isGrounded;

  if (player.landingSquash > 0) {
    player.landingSquash--;
  }

  // Kayma (Slide) Sayacı ve Durumu
  if (player.isSliding) {
    player.slideTimer--;
    // Kayma sırasında ayakların altından toz parçacıkları çıkar
    if (player.slideTimer % 3 === 0) {
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

    if (player.slideTimer <= 0) {
      player.isSliding = false;
      player.h = player.origH;
      player.w = player.origW;
      player.y = groundY - player.h;
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

  // Parçacıkların Hareketi
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= 0.035;
    if (p.alpha <= 0) particles.splice(i, 1);
  }

  // Arka Plan Kayması
  bgScrollX -= gameSpeed * 0.7;

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
        playerTakesDamage();
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

    // Manyetik Altın ve Yıldız Çekimi (Kızıl Sincap veya Kamp Ateşi Sv. 2+ VEYA İBB İzcisi Pantolonu)
    const fireLevel = GameState.getCampfireLevel();
    const pantsMagnet = activeClothingBuffs.pants > 0 ? 190 : 0;
    const baseMagnet = activeHeroId === 4 ? 140 : (fireLevel >= 3 ? 160 : (fireLevel >= 2 ? 100 : 0));
    const magnetRadius = Math.max(baseMagnet, pantsMagnet);
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
        // ALTIN MEŞE PALAMUDU: +120 Skor & 3 sn Dokunulmazlık & +5 Altın
        score = Math.min(currentMaxStageScore, score + 120);
        coinsCollected += 5;
        GameState.addCoins(5);
        player.invulnerable = 180;
        showToast("✨ Altın Meşe Palamudu! +120 Skor & 🛡️ Dokunulmazlık!", "success");

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
        // 🎁 İBB KAŞİF HAVADAN TOPLANAN KIYAFET ÖZELLİĞİ (Şapka, Yelek, Pantolon)
        const cId = coin.clothingId;
        score = Math.min(currentMaxStageScore, score + 50);

        // Sağ kenardaki dokunmatik butonu da tüket ve gizle (zaten alındı)
        inGameReadyBoosters[cId] = false;
        const boosterBtn = document.getElementById(`in-game-booster-${cId}`);
        if (boosterBtn) boosterBtn.classList.add("hidden");

        if (cId === "hat") {
          activeClothingBuffs.hat = 20;
          showToast("🧢 İBB Kaşif Şapkası Havada Yakalandı! (20 sn Yüksek Engel Koruması)", "success");
        } else if (cId === "vest") {
          activeClothingBuffs.vest = 20;
          showToast("🦺 İBB Muhafız Yeleği Havada Yakalandı! (20 sn Çelik Zırh & Koruma)", "success");
        } else if (cId === "pants") {
          activeClothingBuffs.pants = 20;
          showToast("👖 İBB İzcisi Pantolonu Havada Yakalandı! (20 sn Çift Zıplama & Mıknatıs)", "success");
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
  if (obs.type === "rope" || obs.type === "overhead_log") {
    // YÜKSEK HALAT / KÜTÜK ENGELİ:
    // 1. Karakter KAYDIĞINDA (Slide) altından süzülerek geçer - KESİNLİKLE HASAR ALMAZ!
    if (player.isSliding) return false;

    // 2. 🧢 İBB Kaşif Şapkası Gücü: Altından geçilen yüksek engelleri kafasından savuşturur!
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
    const oBottom = obs.y + obs.h; // Engelin alt seviyesi (groundY - 54)

    // Eğer oyuncunun başı engel seviyesinden yüksekteyse çarpar
    return (pLeft < oRight && pRight > oLeft && pTop < oBottom);
  }

  // ZEMİN ENGELİ (KAYA / KÜTÜK):
  // Karakter üzerinden ZIPLAMALIDIR. İç paylar sayesindeki tolerans ile haksız hasar engellendi.
  const pLeft = player.x + (player.w * 0.32);
  const pRight = player.x + (player.w * 0.70);
  const pTop = player.y + (player.h * 0.22);
  const pBottom = player.y + (player.h * 0.95);

  const oLeft = obs.x + (obs.w * 0.28);
  const oRight = obs.x + (obs.w * 0.72);
  const oTop = obs.y + (obs.h * 0.22);
  const oBottom = obs.y + (obs.h * 0.95);

  return (pLeft < oRight && pRight > oLeft && pTop < oBottom && pBottom > oTop);
}

// Altın toplama için daha geniş ve kolay toplayıcı yarıçap
function checkCoinPickup(player, coin) {
  const currentHero = GameState.getSelectedHero();
  // Kızıl Sincap ekstra manyetik çekim alanı bonusu (+24px)
  const magnetRadiusBonus = currentHero === 4 ? 24 : 0;
  return (
    player.x < coin.x + coin.w + 10 + magnetRadiusBonus &&
    player.x + player.w > coin.x - 10 - magnetRadiusBonus &&
    player.y < coin.y + coin.h + 10 + magnetRadiusBonus &&
    player.y + player.h > coin.y - 10 - magnetRadiusBonus
  );
}

function playerTakesDamage() {
  // 🦺 İBB Muhafız Yeleği Gücü: Çarpışma hasarına karşı çelik zırh koruması!
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
    showToast("🦺 İBB Muhafız Yeleği darbeyi savuşturdu! Canın korundu!", "success");
    return;
  }

  if (player.hasShield) {
    player.hasShield = false;
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

  if (navigator.vibrate) navigator.vibrate(90);

  showToast(`⚠️ Dikkat! Kalan Can: ${playerLives}/${maxLives}`, "warning");
  updateHUD();
  updateHUDPerks();

  if (playerLives <= 0) {
    onGameOver();
  }
}

function renderCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const groundY = canvas.height - 90;

  // 1. Arka Plan (Yüksek Çözünürlük & Doğal Panoramik En-Boy Oranı)
  if (imgBg.complete && imgBg.naturalWidth > 0) {
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const bgDrawH = canvas.height;
    const bgDrawW = (imgBg.naturalWidth / imgBg.naturalHeight) * bgDrawH;
    let curX = bgScrollX % bgDrawW;
    while (curX > 0) curX -= bgDrawW;
    while (curX < canvas.width) {
      ctx.drawImage(imgBg, curX, 0, bgDrawW + 1, bgDrawH);
      curX += bgDrawW;
    }
  } else {
    ctx.fillStyle = "#1b4332";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  // 2. Orman Zemin Patikası (Toprak Yol & Çim Sınırı)
  ctx.fillStyle = "#3e2723"; // Derin toprak
  ctx.fillRect(0, groundY, canvas.width, 90);

  // Üst çimen çizgisi
  ctx.fillStyle = "#2d6a4f";
  ctx.fillRect(0, groundY, canvas.width, 10);
  ctx.fillStyle = "#52b788";
  ctx.fillRect(0, groundY, canvas.width, 3);

  // 3. Altınlar, Yıldızlar ve Özel Güçlendirmeler
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
    if (imgCoin.complete && imgCoin.naturalWidth > 0) {
      ctx.drawImage(imgCoin, c.x, c.y, c.w, c.h);
    } else {
      ctx.fillStyle = "#ffd166";
      ctx.beginPath();
      ctx.arc(c.x + c.w/2, c.y + c.h/2, c.w/2, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  // 4. Parçacıklar (Toz & Kıvılcım)
  particles.forEach(p => {
    ctx.save();
    ctx.globalAlpha = Math.max(0, p.alpha);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });

  // 5. Engellerin Çizimi
  obstacles.forEach(o => {
    if (o.type === "rope") {
      // Yüksek Halat Çizimi (Macera Parkı İpi)
      drawRopeObstacle(ctx, o, groundY);
    } else if (o.type === "overhead_log") {
      // Yüksek Asılı Ahşap Kütük / Tahta Kiriş Çizimi
      drawOverheadLogObstacle(ctx, o, groundY);
    } else {
      // Zemin Kütük veya Taş Çizimi (Zemine Tam Temas Eden Gölge ile)
      ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
      ctx.beginPath();
      ctx.ellipse(o.x + o.w/2, groundY + 2, o.w * 0.38, 4, 0, 0, Math.PI * 2);
      ctx.fill();

      if (o.img.complete && o.img.naturalWidth > 0) {
        ctx.drawImage(o.img, o.x, o.y, o.w, o.h);
      } else {
        ctx.fillStyle = "#8d6e63";
        ctx.fillRect(o.x, o.y, o.w, o.h);
      }
    }
  });

  // 6. Oyuncu (Karakter) - Gerçekçi Çizgi Film Hayvan Animasyonu (Tilki, Maymun, Kaplan)
  const heroId = GameState.getSelectedHero();
  const hero = KAHRAMANLAR.find(h => h.id === heroId) || KAHRAMANLAR[0];

  // Zemin Yumuşak Dinamik Gölgesi
  const distFromGround = Math.max(0, groundY - (player.y + player.h));
  const shadowFactor = Math.max(0.2, 1 - distFromGround / 150);
  ctx.fillStyle = `rgba(0, 0, 0, ${0.32 * shadowFactor})`;
  ctx.beginPath();
  ctx.ellipse(player.x + player.w / 2, groundY + 2, (player.w * 0.42) * shadowFactor, 5 * shadowFactor, 0, 0, Math.PI * 2);
  ctx.fill();

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

    const drawW = 76;
    const drawH = 76;
    const posX = player.x + (player.w - drawW) / 2;
    const posY = player.y + player.h - drawH + 4;

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

  // 6. KUŞANILAN KOSTÜM & AKSESUAR (Ahşap Gardırop Seçimi)
  const activeCostume = GameState.getSelectedCostume();
  drawHeroCostume(ctx, activeCostume, colors, isJumpingHigh, p.isSliding);

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
// (Kaşif Şapkası, İBB Muhafız Yeleği, Altın Palamut Kolye)
// ============================================================================

function drawHeroCostume(ctx, costumeId, colors, isJumping, isSliding) {
  if (!costumeId || costumeId === "none") return;

  ctx.save();

  if (costumeId === "hat") {
    // ORMAN KAŞİF ŞAPKASI (Kulakların tam üstünde, yüzü asla kapatmayan şapka)
    ctx.save();
    // Tilki için kulakların tepe noktası: X: 13, Y: -27
    const headX = colors.hero === 1 ? 13 : 14;
    const headY = colors.hero === 1 ? -27 : (colors.hero === 5 ? -20 : -18);
    ctx.translate(headX, headY);
    ctx.rotate(colors.hero === 1 ? -0.08 : 0.06);

    // 1. Şapka Kenarı (Brim)
    ctx.fillStyle = "#3a5a40";
    ctx.beginPath();
    ctx.ellipse(2, 2, 14, 4, -0.05, 0, Math.PI * 2);
    ctx.fill();

    // 2. Şapka Tepesi (Crown)
    ctx.fillStyle = "#588157";
    ctx.beginPath();
    ctx.roundRect(-6, -9, 14, 9, [3, 3, 1, 1]);
    ctx.fill();

    // 3. Kahverengi Deri Kordon Bandı
    ctx.fillStyle = "#3e2723";
    ctx.fillRect(-6, -2, 14, 2.5);

    // 4. Kemerburgaz Meşe Yaprağı Detayı
    ctx.fillStyle = "#52b788";
    ctx.beginPath();
    ctx.ellipse(5, -3, 3.5, 2, -0.6, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();

  } else if (costumeId === "vest") {
    // İBB MUHAFIZ YELEĞİ (Tilkinin yatay gövdesine tam oturan yanık yelek)
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

    // Göğüste İBB / Orman Muhafız Arması
    ctx.fillStyle = "#ffd166";
    ctx.beginPath();
    ctx.arc(-5, -1, 2.2, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();

  } else if (costumeId === "pants") {
    // İBB İZCİSİ PANTOLONU (Ayaklara dikey giydirilen resmi kargo izci pantolonu)
    ctx.save();
    const pantsY = isSliding ? 4 : 6;
    ctx.translate(-2, pantsY);

    // 1. Kemer & Bel Bölgesi
    ctx.fillStyle = "#3d5a36";
    ctx.strokeStyle = "#1b3318";
    ctx.lineWidth = 1;

    ctx.beginPath();
    if (isSliding) {
      ctx.roundRect(-10, -4, 18, 8, 3);
    } else {
      ctx.roundRect(-8, -5, 16, 9, 3);
    }
    ctx.fill();
    ctx.stroke();

    // 2. 4 Ayağa Dikey Olarak İnen İzci Paçaları
    ctx.fillStyle = "#3d5a36";
    // Arka bacak dikey paçası
    ctx.beginPath();
    ctx.roundRect(-9, 3, 6.5, 9, 2);
    ctx.fill();
    ctx.stroke();

    // Ön bacak dikey paçası
    ctx.beginPath();
    ctx.roundRect(4, 3, 6.5, 9, 2);
    ctx.fill();
    ctx.stroke();

    // Deri Kemer ve Altın Toka
    ctx.fillStyle = "#3e2723";
    ctx.fillRect(isSliding ? -10 : -8, -5, isSliding ? 18 : 16, 2.5);
    ctx.fillStyle = "#ffd166";
    ctx.fillRect(-2, -6, 4, 4);

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
    const heroIcons = { 1: "🦊", 2: "🐵", 3: "🐯" };
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
  const packBonus = GameState.getBackpackLevel();

  const tentEl = document.getElementById("hud-perk-tent");
  const fireEl = document.getElementById("hud-perk-fire");
  const bootsEl = document.getElementById("hud-perk-boots");
  const packEl = document.getElementById("hud-perk-pack");

  if (tentEl) {
    tentEl.textContent = `⛺ ${playerLives}/${maxLives} Can ${player.hasShield ? '(🛡️ Kalkan)' : ''}`;
    tentEl.style.display = "inline-block";
  }

  if (fireEl) {
    const mult = fireBonus >= 3 ? 3 : (fireBonus >= 2 ? 2 : 1);
    fireEl.textContent = `🔥 ${mult}x Altın ${fireBonus >= 2 ? '(🧲 Mıknatıs)' : ''}`;
    fireEl.style.display = "inline-block";
  }

  if (bootsEl) {
    if (bootsBonus >= 1) {
      bootsEl.textContent = `👟 Çevik ${bootsBonus >= 3 ? '(Çift Zıplama)' : (bootsBonus >= 2 ? '(Uzun Kayma)' : '')}`;
      bootsEl.style.display = "inline-block";
    } else {
      bootsEl.style.display = "none";
    }
  }

  if (packEl) {
    if (packBonus >= 1) {
      packEl.textContent = `🎒 Çanta ${packBonus >= 2 ? '(🌰 Palamut)' : '(+Bonus)'}`;
      packEl.style.display = "inline-block";
    } else {
      packEl.style.display = "none";
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

// 🎁 İBB Kaşif Havada Süzülen Kıyafet Özelliği Çizimi (Şapka, Yelek, Pantolon)
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
    // 👟 Orman İzcisi Botları VEYA 👖 İBB İzcisi Pantolonu: ÇİFT ZIPLAMA (DOUBLE JUMP)
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
  }
}

function playerSlide() {
  if (!gameRunning) return;
  const groundY = canvas.height - 90;

  if (player.isGrounded && !player.isSliding) {
    player.isSliding = true;
    player.h = 34; // Doğal eğilerek süzülme boyu (ezilmeden rahatça geçer)
    player.w = 66; // Akıcı süzülme duruşu
    player.y = groundY - player.h;
    // 👖 İBB İzcisi Pantolonu aktif ise ekstra uzun süzülme süresi (64 frame)
    player.slideTimer = activeClothingBuffs.pants > 0 ? 64 : (player.maxSlideTimer || 44);
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
  sounds.playCollect();

  // Bölüm Tamamlandı Kaydı & Sonraki Bölüm Kilidi Açılışı
  const currentIndex = currentLevelNumber - 1;
  const nextIndex = currentIndex + 1;
  GameState.setStageScore(currentIndex, score);
  GameState.updateHighScore(score);
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

  // Kilit Açma Mantığı:
  // Bölüm başarıyla tamamlandığında sonraki bölüm otomatik açılır (süreklilik ve çocuk dostu akış)
  // Sahadaki QR kod okutulduğunda ise ara bölümler beklemeden anında ücretsiz açılabilir!
  if (nextIndex <= 9) {
    if (GameState.getLevelState(nextIndex) === 0) {
      GameState.setLevelState(nextIndex, 2); // 2 = Açık / Oynanabilir
    }
  }

  // 🏆 KAHRAMAN & İBB KOSTÜM ETAP KİLİT AÇMA SİSTEMİ
  if (currentLevelNumber >= 2) {
    if (!GameState.isCostumeUnlocked("hat")) {
      GameState.unlockCostume("hat");
      showToast("🎉 2. Etap Zaferi! 🧢 İBB Kaşif Şapkası kilidi açıldı!", "success");
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
      showToast("🎉 4. Etap Zaferi! 🦺 İBB Muhafız Yeleği kilidi açıldı!", "success");
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
      showToast("🎉 6. Etap Zaferi! 👖 İBB İzcisi Pantolonu kilidi açıldı!", "success");
    }
  }
  if (currentLevelNumber >= 7) {
    if (!GameState.isHeroUnlocked(5)) {
      GameState.unlockHero(5);
      showToast("🎉 7. Etap Zaferi! 🦉 Bilge Orman Baykuşu kilidi açıldı!", "success");
    }
  }
  if (currentLevelNumber === 10) {
    document.getElementById("modal-grand-victory").classList.add("active");
    return;
  }

  // Normal Zafer Modalı
  const etap = RESMI_ETAPLAR[currentIndex] || RESMI_ETAPLAR[0];
  const nextBtn = document.getElementById("btn-victory-next");
  const quizBtn = document.getElementById("btn-victory-quiz");
  document.getElementById("victory-coins-earned").textContent = `+${coinsCollected} 🪙 (+120 XP ⭐)`;

  const proceedToNextFlow = () => {
    if (nextIndex <= 9) {
      showScreen("screen-map");
      renderMapScreen();
      setTimeout(() => openLevelModal(nextIndex), 250);
    } else {
      showScreen("screen-map");
      renderMapScreen();
    }
  };

  if (quizBtn) {
    quizBtn.onclick = () => {
      document.getElementById("modal-victory").classList.remove("active");
      startNatureQuiz(currentIndex, proceedToNextFlow);
    };
  }

  document.getElementById("victory-title").textContent = `${currentLevelNumber}. Etap Başarıyla Geçildi!`;
  document.getElementById("victory-fact").textContent = etap.fact;

  if (nextIndex <= 9) {
    nextBtn.textContent = `SONRAKİ BÖLÜME GEÇ (${nextIndex + 1}. ETAP) ⏩`;
    nextBtn.onclick = () => {
      document.getElementById("modal-victory").classList.remove("active");
      startNatureQuiz(currentIndex, () => {
        showScreen("screen-map");
        renderMapScreen();
        setTimeout(() => openLevelModal(nextIndex), 250);
      });
    };
  } else {
    nextBtn.textContent = "🏆 BÜYÜK ŞAMPİYONLUK KEMERİ";
    nextBtn.onclick = () => {
      document.getElementById("modal-victory").classList.remove("active");
      document.getElementById("modal-grand-victory").classList.add("active");
    };
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
  if (gameLoopId) {
    cancelAnimationFrame(gameLoopId);
    gameLoopId = null;
  }
  
  // Modalleri kapat
  const modals = ["modal-gameover", "modal-victory", "modal-grand-victory", "modal-level-info"];
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

function pauseOrReturnGame() {
  gameRunning = false;
  if (gameLoopId) {
    cancelAnimationFrame(gameLoopId);
    gameLoopId = null;
  }
  if (confirm("⏸️ Oyun Duraklatıldı!\n\nAna menü başlangıç ekranına dönmek istiyor musunuz?")) {
    returnToStartScreen();
  } else {
    gameRunning = true;
    if (gameLoopId) cancelAnimationFrame(gameLoopId);
    gameLoopId = requestAnimationFrame(gameLoop);
  }
}

function onGameOver() {
  gameRunning = false;
  if (gameLoopId) {
    cancelAnimationFrame(gameLoopId);
    gameLoopId = null;
  }
  sounds.playGameOver();
  GameState.updateHighScore(score);
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

// Ekrandaki Görsel ZIPLA ve KAY Butonları (Kompakt, Sağ Alt Zemin İçi)
const btnTouchJump = document.getElementById("btn-touch-jump");
if (btnTouchJump) {
  const doJump = (e) => {
    e.stopPropagation();
    if (e.cancelable) e.preventDefault();
    playerJump();
  };
  btnTouchJump.addEventListener("pointerdown", doJump);
  btnTouchJump.addEventListener("click", doJump);
  btnTouchJump.addEventListener("touchstart", doJump, { passive: false });
}

const btnTouchSlide = document.getElementById("btn-touch-slide");
if (btnTouchSlide) {
  const doSlide = (e) => {
    e.stopPropagation();
    if (e.cancelable) e.preventDefault();
    playerSlide();
  };
  btnTouchSlide.addEventListener("pointerdown", doSlide);
  btnTouchSlide.addEventListener("click", doSlide);
  btnTouchSlide.addEventListener("touchstart", doSlide, { passive: false });
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
      // Ekrana hızlı hafif dokunma veya tıklama (Tap/Click): Zıpla!
      playerJump();
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
          localStorage.clear();
          localStorage.setItem("total_coins", "0");
          localStorage.setItem("high_score", "0");
          localStorage.setItem("coins_unearned_fixed", "1");
          localStorage.setItem("selected_costume", "none");
          localStorage.setItem("unlocked_costumes", JSON.stringify(["none"]));
          sessionStorage.clear();
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
  const tabs = ["achieve", "lb", "rewards"];
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
  } else if (tabName === "rewards") {
    RewardsService.render();
  }
}

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
  openAchievementsHub("lb");
}

function openRewardsModal() {
  openAchievementsHub("rewards");
}

function initHubEvents() {
  const hubTabAchieve = document.getElementById("hub-tab-achieve");
  if (hubTabAchieve) hubTabAchieve.onclick = () => switchHubTab("achieve");
  const hubTabLb = document.getElementById("hub-tab-lb");
  if (hubTabLb) hubTabLb.onclick = () => switchHubTab("lb");
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

function getStarsString(level, max = 5) {
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
  const pct = Math.min(100, Math.max(10, Math.floor(((xp - rank.minXp) / (rank.maxXp - rank.minXp)) * 100)));
  if (xpFill) xpFill.style.width = `${pct}%`;

  const xpStat = document.getElementById("camp-xp-stat");
  if (xpStat) xpStat.textContent = `${xp} / ${rank.maxXp} XP • Bulut Senkronize: Aktif ☁️`;

  const userCoinsBadge = document.getElementById("camp-user-coins-badge");
  if (userCoinsBadge) userCoinsBadge.textContent = `🪙 ${GameState.getCoins()} Altın`;

  // Kupa & Madalya Vitrini
  const shelfContainer = document.getElementById("trophy-shelf-items");
  if (shelfContainer) {
    shelfContainer.innerHTML = "";
    const trophies = [
      { id: "t1", name: "Bronz Kaşif", icon: "🥉", unlocked: GameState.getLevelState(1) === 3 },
      { id: "t2", name: "BELTUR Molası", icon: "☕", unlocked: GameState.getLevelState(3) === 3 },
      { id: "t3", name: "Macera Şampiyonu", icon: "🧗", unlocked: GameState.getLevelState(4) === 3 },
      { id: "t4", name: "Gümüş Muhafız", icon: "🥈", unlocked: GameState.getLevelState(6) === 3 },
      { id: "t5", name: "Altın Mağlova", icon: "🥇", unlocked: GameState.getLevelState(9) === 3 },
      { id: "t6", name: "Usta Kaşif (500 XP)", icon: "⭐", unlocked: xp >= 500 },
      { id: "t7", name: "Kamp Kurucusu", icon: "⛺", unlocked: GameState.getTentLevel() >= 1 },
      { id: "t8", name: "Çift Zıplayıcı", icon: "👟", unlocked: GameState.getBootsLevel() >= 3 }
    ];

    trophies.forEach(t => {
      const item = document.createElement("div");
      item.className = "shelf-trophy";
      item.style.opacity = t.unlocked ? "1" : "0.35";
      item.innerHTML = `
        <div class="shelf-trophy-icon" style="${t.unlocked ? 'border-color: #ffd166;' : 'border-color: #555; filter: grayscale(1);'}">
          ${t.unlocked ? t.icon : '🔒'}
        </div>
        <div class="shelf-trophy-name">${t.name}</div>
      `;
      shelfContainer.appendChild(item);
    });
  }

  // 1. Dinlenme Çadırı
  const tentLvl = GameState.getTentLevel();
  const tentStars = document.getElementById("camp-tent-stars");
  if (tentStars) tentStars.textContent = getStarsString(tentLvl, 5);
  const tentDesc = document.getElementById("camp-tent-desc");
  if (tentDesc) {
    tentDesc.textContent = `Mevcut: Seviye ${tentLvl} (${3 + Math.min(3, tentLvl)} Can ${tentLvl >= 3 ? '+ 🛡️ Orman Kalkanı' : ''})`;
  }
  const tentBtn = document.getElementById("btn-upgrade-tent");
  if (tentBtn) {
    if (tentLvl >= 5) {
      tentBtn.textContent = "MAKS SEVİYE ✅";
      tentBtn.classList.add("maxed");
      tentBtn.onclick = null;
    } else {
      const cost = 40 + (tentLvl * 25);
      tentBtn.textContent = `${cost} 🪙 Yükselt`;
      tentBtn.classList.remove("maxed");
      tentBtn.onclick = () => {
        if (GameState.getCoins() >= cost) {
          GameState.setCoins(GameState.getCoins() - cost);
          GameState.setTentLevel(tentLvl + 1);
          FirebaseSimService.addXp(60);
          showToast(`⛺ Çadır Seviyesi ${tentLvl + 1}'e Yükseltildi! ${tentLvl + 1 >= 3 ? '🛡️ Orman Koruma Kalkanı Açıldı!' : '+1 Can Eklendi!'}`, "success");
          renderCampUI();
          updateMenuUI();
        } else {
          showToast(`⚠️ Yetersiz Altın! ${cost} Altın gerekiyor.`, "warning");
        }
      };
    }
  }

  // 2. Kamp Ateşi & Feneri
  const fireLvl = GameState.getCampfireLevel();
  const fireStars = document.getElementById("camp-fire-stars");
  if (fireStars) fireStars.textContent = getStarsString(fireLvl, 5);
  const fireDesc = document.getElementById("camp-fire-desc");
  if (fireDesc) {
    const mult = fireLvl >= 3 ? '3x' : (fireLvl >= 2 ? '2x' : (fireLvl >= 1 ? '1.5x' : '1x'));
    fireDesc.textContent = `Mevcut: Seviye ${fireLvl} (${mult} Altın ${fireLvl >= 2 ? '+ 🧲 Manyetik Çekim' : ''})`;
  }
  const fireBtn = document.getElementById("btn-upgrade-fire");
  if (fireBtn) {
    if (fireLvl >= 5) {
      fireBtn.textContent = "MAKS SEVİYE ✅";
      fireBtn.classList.add("maxed");
      fireBtn.onclick = null;
    } else {
      const cost = 45 + (fireLvl * 30);
      fireBtn.textContent = `${cost} 🪙 Yükselt`;
      fireBtn.classList.remove("maxed");
      fireBtn.onclick = () => {
        if (GameState.getCoins() >= cost) {
          GameState.setCoins(GameState.getCoins() - cost);
          GameState.setCampfireLevel(fireLvl + 1);
          FirebaseSimService.addXp(75);
          showToast(`🔥 Kamp Ateşi ${fireLvl + 1}'e Yükseltildi! ${fireLvl + 1 >= 2 ? '🧲 Manyetik Altın Çekimi Devrede!' : 'Altın Çarpanı Arttı!'}`, "success");
          renderCampUI();
          updateMenuUI();
        } else {
          showToast(`⚠️ Yetersiz Altın! ${cost} Altın gerekiyor.`, "warning");
        }
      };
    }
  }

  // 3. Orman İzcisi Botları
  const bootsLvl = GameState.getBootsLevel();
  const bootsStars = document.getElementById("camp-boots-stars");
  if (bootsStars) bootsStars.textContent = getStarsString(bootsLvl, 5);
  const bootsDesc = document.getElementById("camp-boots-desc");
  if (bootsDesc) {
    bootsDesc.textContent = `Mevcut: Seviye ${bootsLvl} (${bootsLvl >= 3 ? '👟 Çift Zıplama' : (bootsLvl >= 2 ? 'Uzun Kayma' : (bootsLvl >= 1 ? 'Hafif Zıplama' : 'Standart'))})`;
  }
  const bootsBtn = document.getElementById("btn-upgrade-boots");
  if (bootsBtn) {
    if (bootsLvl >= 5) {
      bootsBtn.textContent = "MAKS SEVİYE ✅";
      bootsBtn.classList.add("maxed");
      bootsBtn.onclick = null;
    } else {
      const cost = 40 + (bootsLvl * 25);
      bootsBtn.textContent = `${cost} 🪙 Yükselt`;
      bootsBtn.classList.remove("maxed");
      bootsBtn.onclick = () => {
        if (GameState.getCoins() >= cost) {
          GameState.setCoins(GameState.getCoins() - cost);
          GameState.setBootsLevel(bootsLvl + 1);
          FirebaseSimService.addXp(65);
          showToast(`👟 İzcisi Botları ${bootsLvl + 1}'e Yükseltildi! ${bootsLvl + 1 >= 3 ? '👟 Havada Çift Zıplama Açıldı!' : 'Zıplama Çevikliği Arttı!'}`, "success");
          renderCampUI();
          updateMenuUI();
        } else {
          showToast(`⚠️ Yetersiz Altın! ${cost} Altın gerekiyor.`, "warning");
        }
      };
    }
  }

  // 4. Kaşif Sırt Çantası
  const packLvl = GameState.getBackpackLevel();
  const packStars = document.getElementById("camp-pack-stars");
  if (packStars) packStars.textContent = getStarsString(packLvl, 5);
  const packDesc = document.getElementById("camp-pack-desc");
  if (packDesc) {
    packDesc.textContent = `Mevcut: Seviye ${packLvl} (${packLvl >= 2 ? '🌰 Altın Palamut + Zafer Bonusu' : (packLvl >= 1 ? '+50 Altın/+100 XP Zafer Bonusu' : 'Standart')})`;
  }
  const packBtn = document.getElementById("btn-upgrade-pack");
  if (packBtn) {
    if (packLvl >= 5) {
      packBtn.textContent = "MAKS SEVİYE ✅";
      packBtn.classList.add("maxed");
      packBtn.onclick = null;
    } else {
      const cost = 50 + (packLvl * 30);
      packBtn.textContent = `${cost} 🪙 Yükselt`;
      packBtn.classList.remove("maxed");
      packBtn.onclick = () => {
        if (GameState.getCoins() >= cost) {
          GameState.setCoins(GameState.getCoins() - cost);
          GameState.setBackpackLevel(packLvl + 1);
          FirebaseSimService.addXp(80);
          showToast(`🎒 Sırt Çantası ${packLvl + 1}'e Yükseltildi! ${packLvl + 1 >= 2 ? '🌰 Koşularda Altın Meşe Palamudu Belirecek!' : 'Zafer Bonusları Eklendi!'}`, "success");
          renderCampUI();
          updateMenuUI();
        } else {
          showToast(`⚠️ Yetersiz Altın! ${cost} Altın gerekiyor.`, "warning");
        }
      };
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
  { id: "k1", name: "Eren", heroId: 3, rankTitle: "Mağlova Baş Muhafızı", stages: 10, baseScore: 4850, coins: 340 },
  { id: "k2", name: "Duru", heroId: 1, rankTitle: "Gölet Muhafızı", stages: 9, baseScore: 4210, coins: 280 },
  { id: "k3", name: "Mert", heroId: 2, rankTitle: "Zipline Şampiyonu", stages: 8, baseScore: 3680, coins: 240 },
  { id: "k4", name: "Zeynep", heroId: 3, rankTitle: "Doğa İz Sürücüsü", stages: 7, baseScore: 3120, coins: 210 },
  { id: "k5", name: "Ali", heroId: 2, rankTitle: "Zipline Şampiyonu", stages: 6, baseScore: 2650, coins: 180 },
  { id: "k6", name: "Selim", heroId: 1, rankTitle: "Patika Kaşifi", stages: 5, baseScore: 2190, coins: 150 },
  { id: "k7", name: "Ayşe", heroId: 1, rankTitle: "Doğa Dostu", stages: 4, baseScore: 1740, coins: 120 },
  { id: "k8", name: "Can", heroId: 3, rankTitle: "Orman Çaylağı", stages: 3, baseScore: 1320, coins: 90 },
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
    const myTotalPoints = GameState.getTotalExplorerPoints();
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
    const container = document.getElementById("leaderboard-list-container");
    if (!container) return;
    container.innerHTML = "";

    const data = this.getFullLeaderboardData(currentLeaderboardTab);
    const heroIcons = { 1: "🦊", 2: "🐵", 3: "🐯" };

    const me = data.find(d => d.isMe);
    if (me) {
      const myRankEl = document.getElementById("my-lb-rank");
      const myAvatarEl = document.getElementById("my-lb-avatar");
      const myNameEl = document.getElementById("my-lb-name");
      const mySubEl = document.getElementById("my-lb-sub");
      const myScoreEl = document.getElementById("my-lb-score");
      const myCoinsEl = document.getElementById("my-lb-coins");

      if (myRankEl) myRankEl.textContent = `#${me.rank}`;
      if (myAvatarEl) myAvatarEl.textContent = heroIcons[me.heroId] || "🦊";
      if (myNameEl) myNameEl.textContent = me.name;
      if (mySubEl) mySubEl.textContent = `${me.rankTitle} • ${me.stages}/10 Etap`;
      if (myScoreEl) myScoreEl.textContent = `${me.score.toLocaleString()} Puan`;
      if (myCoinsEl) myCoinsEl.textContent = `🪙 ${me.coins}`;
    }

    data.forEach(item => {
      const row = document.createElement("div");
      row.className = `leaderboard-row ${item.isMe ? 'is-me' : ''}`;

      let rankClass = "other";
      let rankText = `#${item.rank}`;
      if (item.rank === 1) { rankClass = "top-1"; rankText = "🥇 1"; }
      else if (item.rank === 2) { rankClass = "top-2"; rankText = "🥈 2"; }
      else if (item.rank === 3) { rankClass = "top-3"; rankText = "🥉 3"; }

      row.innerHTML = `
        <div class="lb-rank-badge ${rankClass}">${rankText}</div>
        <div class="lb-user-info">
          <div class="lb-user-avatar">${heroIcons[item.heroId] || "🦊"}</div>
          <div class="lb-user-details">
            <div class="lb-user-name">${item.name} ${item.isMe ? '<span style="font-size:10px; color:#ffd166;">(SEN)</span>' : ''}</div>
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
  }

  static syncMyScore() {
    DeviceNetworkService.triggerSaveFeedback();

    const myName = GameState.getExplorerName() || "Sen (Kaşif)";
    const myProfileHeroId = GameState.getProfileHero();
    const myTotalPoints = GameState.getTotalExplorerPoints();
    const myCoins = GameState.getCoins();
    let completedCount = 0;
    for (let i = 0; i < 10; i++) {
      if (GameState.getLevelState(i) === 3) completedCount++;
    }

    // 1. Android Native Firebase Bridge ile Firestore'a kaydet
    const bridge = window.AndroidFirebaseBridge || window.AndroidBridge;
    if (bridge && typeof bridge.submitScore === 'function') {
      try {
        bridge.submitScore(myName, myTotalPoints, myProfileHeroId, completedCount, myCoins);
      } catch(e) {
        console.warn("bridge.submitScore error:", e);
      }
    } else if (bridge && typeof bridge.postMessage === 'function') {
      try {
        bridge.postMessage(JSON.stringify({
          event: "SUBMIT_SCORE",
          name: myName,
          score: myTotalPoints,
          heroId: myProfileHeroId,
          stages: completedCount,
          coins: myCoins
        }));
      } catch(e) {
        console.warn("bridge.postMessage error:", e);
      }
    } else {
      // 2. Web Fallback: Firestore REST API ile direkt skor kaydı / güncelleme
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
              rankTitle: { stringValue: FirebaseSimService.getPlayerRank().title },
              updatedAt: { timestampValue: new Date().toISOString() }
            }
          })
        }).then(res => res.json()).then(resData => {
          console.log("🌐 Web Firestore leaderboard score synced:", resData);
        }).catch(err => {
          console.warn("Web Firestore leaderboard sync failed:", err);
        });
      } catch(e) {}
    }

    this.render();
  }

  static fetchWebLeaderboard() {
    if (window.AndroidFirebaseBridge || window.AndroidBridge) return;
    try {
      fetch("https://firestore.googleapis.com/v1/projects/kentormanimaceraparki/databases/(default)/documents/leaderboard")
        .then(res => res.json())
        .then(data => {
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
                rankTitle: f.rankTitle ? f.rankTitle.stringValue : "Doğa Kaşifi"
              };
            });
            LeaderboardService.setRemoteLeaderboard(list);
          }
        })
        .catch(e => console.warn("Web Firestore leaderboard fetch error:", e));
    } catch(e) {}
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

function openLeaderboardModal() {
  openAchievementsHub("lb");
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

  const refreshBtn = document.getElementById("btn-lb-refresh");
  if (refreshBtn) {
    refreshBtn.onclick = () => {
      showToast("🔄 Puan tablosu canlı olarak güncellendi!", "info");
      LeaderboardService.syncMyScore();
    };
  }

  const openRewardsBtn = document.getElementById("btn-lb-open-rewards");
  if (openRewardsBtn) {
    openRewardsBtn.onclick = () => {
      document.getElementById("modal-leaderboard").classList.remove("active");
      openRewardsModal();
    };
  }

  const tabAll = document.getElementById("btn-tab-lb-all");
  const tabWeekly = document.getElementById("btn-tab-lb-weekly");
  if (tabAll && tabWeekly) {
    tabAll.onclick = () => {
      currentLeaderboardTab = "all";
      tabAll.classList.add("active");
      tabWeekly.classList.remove("active");
      LeaderboardService.render();
    };
    tabWeekly.onclick = () => {
      currentLeaderboardTab = "weekly";
      tabWeekly.classList.add("active");
      tabAll.classList.remove("active");
      LeaderboardService.render();
    };
  }
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
    biz: "İBB Boğaziçi Yönetim & Tarihi Mağlova",
    title: "Mağlova Su Kemeri Büyük Şampiyonluk Beratı 🏛️",
    icon: "🏛️",
    targetPoints: 5000,
    stageReq: 10,
    desc: "10 etabı tamamlayan kahramanlara özel sertifika & ahşap madalyon."
  }
];

class RewardsService {
  static render() {
    const container = document.getElementById("rewards-grid-container");
    if (!container) return;
    container.innerHTML = "";

    const userPoints = GameState.getTotalExplorerPoints();
    const userCoins = GameState.getCoins();

    const bannerPoints = document.getElementById("rewards-user-points");
    const bannerCoins = document.getElementById("rewards-user-coins");
    if (bannerPoints) bannerPoints.textContent = `⭐ ${userPoints.toLocaleString()} PUAN`;
    if (bannerCoins) bannerCoins.textContent = `🪙 ${userCoins} Altın`;

    ORMAN_ODULLERI.forEach(reward => {
      const isStageCompleted = GameState.getLevelState(reward.stageReq - 1) === 3;
      const isPointsReached = userPoints >= reward.targetPoints;
      const isUnlocked = isPointsReached || isStageCompleted;
      const isUsed = GameState.isVoucherUsed(reward.id);

      const pct = Math.min(100, Math.floor((userPoints / reward.targetPoints) * 100));

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
        const reward = ORMAN_ODULLERI.find(r => r.id === rId);
        if (reward) openVoucherDetail(reward);
      };
    });
  }
}

function openRewardsModal() {
  openAchievementsHub("rewards");
}

function openVoucherDetail(reward) {
  const modal = document.getElementById("modal-voucher-detail");
  if (!modal) return;

  const code = GameState.getVoucherCode(reward.id);
  const isUsed = GameState.isVoucherUsed(reward.id);

  document.getElementById("voucher-popup-biz").textContent = reward.biz.toUpperCase();
  document.getElementById("voucher-popup-title").textContent = reward.title;
  document.getElementById("voucher-popup-code").textContent = code;

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
      confirmBtn.onclick = () => {
        if (confirm(`⚠️ DİKKAT: "${reward.title}" kuponu yalnızca 1 DEFA kullanılabilir.\n\nİşletme görevlisine (${reward.biz}) kupon kodunu (${code}) gösterdiniz mi?\nOnaylarsanız kupon kullanılmış olarak işaretlenecek ve tekrar kullanılamayacaktır.`)) {
          GameState.markVoucherUsed(reward.id);
          showToast(`🎉 "${reward.title}" kuponu başarıyla kullanıldı! Afiyet olsun!`, "success");
          sounds.playCollect();
          confirmBtn.textContent = "✅ BU KUPON KULLANILDI (GEÇERSİZ)";
          confirmBtn.style.opacity = "0.6";
          confirmBtn.style.cursor = "not-allowed";
          confirmBtn.disabled = true;
          confirmBtn.onclick = null;
          RewardsService.render();
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
window.CrossPlatformBridge = CrossPlatformBridge;

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
  try { initOnboardingEvents(); } catch(e) { console.warn("Onboarding init:", e); }
  try { initHubEvents(); } catch(e) { console.warn("Hub events init:", e); }
  try { initLeaderboardEvents(); } catch(e) { console.warn("Leaderboard events init:", e); }
  try { initRewardsEvents(); } catch(e) { console.warn("Rewards events init:", e); }

  // Cross-platform app lifecycle bildirimi
  try {
    CrossPlatformBridge.sendEvent("APP_READY", { 
      version: "2.5.0", 
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

