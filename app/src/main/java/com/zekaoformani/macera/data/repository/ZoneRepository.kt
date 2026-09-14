package com.zekaoformani.macera.data.repository

import android.util.Log
import com.google.firebase.firestore.ListenerRegistration
import com.zekaoformani.macera.data.firebase.FirebaseManager
import com.zekaoformani.macera.data.models.SponsorCoupon
import com.zekaoformani.macera.data.models.Zone
import kotlinx.coroutines.tasks.await

class ZoneRepository {
    private val firestore = FirebaseManager.firestore
    private val zonesCollection = firestore.collection("parks").document("kemerburgaz").collection("zones")
    private val topLevelZonesCollection = firestore.collection("zones")

    suspend fun getZones(): List<Zone> {
        return try {
            val snapshot = zonesCollection.get().await()
            if (!snapshot.isEmpty) {
                val list = snapshot.documents.mapNotNull { doc ->
                    doc.data?.let { mapDocumentToZone(doc.id, it) }
                }.sortedBy { it.orderIndex }
                list.ifEmpty { fetchTopLevelZonesOrFallback() }
            } else {
                fetchTopLevelZonesOrFallback()
            }
        } catch (e: Exception) {
            Log.w("ZoneRepository", "Failed to fetch zones: ${e.localizedMessage}")
            getDefaultZones()
        }
    }

    private suspend fun fetchTopLevelZonesOrFallback(): List<Zone> {
        return try {
            val topSnap = topLevelZonesCollection.get().await()
            if (!topSnap.isEmpty) {
                val list = topSnap.documents.mapNotNull { doc ->
                    doc.data?.let { mapDocumentToZone(doc.id, it) }
                }.sortedBy { it.orderIndex }
                list.ifEmpty { getDefaultZones() }
            } else {
                getDefaultZones()
            }
        } catch (_: Exception) {
            getDefaultZones()
        }
    }

    /**
     * Real-time listener: Attaches Firestore SnapshotListener so changes in Firebase Console
     * (names, businesses, coordinates, descriptions) immediately notify the game without restarts.
     */
    fun listenToZones(onUpdate: (List<Zone>) -> Unit): ListenerRegistration {
        return zonesCollection.addSnapshotListener { snapshot, error ->
            if (error != null) {
                Log.w("ZoneRepository", "Snapshot listener error: ${error.localizedMessage}")
                return@addSnapshotListener
            }
            if (snapshot != null && !snapshot.isEmpty) {
                val list = snapshot.documents.mapNotNull { doc ->
                    doc.data?.let { mapDocumentToZone(doc.id, it) }
                }.sortedBy { it.orderIndex }
                if (list.isNotEmpty()) {
                    onUpdate(list)
                }
            }
        }
    }

    fun mapDocumentToZone(docId: String, data: Map<String, Any?>): Zone {
        val couponMap = data["activeSponsorCoupon"] as? Map<*, *>
        val coupon = couponMap?.let {
            SponsorCoupon(
                discountRate = it["discountRate"]?.toString() ?: "",
                couponCode = it["couponCode"]?.toString() ?: "",
                expiryDate = it["expiryDate"]?.toString() ?: ""
            )
        }

        val xRaw = data["xPercent"] ?: data["x"]
        val xPercent = when (xRaw) {
            is Number -> {
                val v = xRaw.toDouble()
                if (v in 0.001..1.0) v * 100.0 else v
            }
            is String -> xRaw.toDoubleOrNull() ?: 0.0
            else -> 0.0
        }

        val yRaw = data["yPercent"] ?: data["y"]
        val yPercent = when (yRaw) {
            is Number -> {
                val v = yRaw.toDouble()
                if (v in 0.001..1.0) v * 100.0 else v
            }
            is String -> yRaw.toDoubleOrNull() ?: 0.0
            else -> 0.0
        }

        val orderIdx = when (val o = data["orderIndex"] ?: data["order"]) {
            is Number -> o.toInt()
            is String -> o.toIntOrNull() ?: 1
            else -> 1
        }

        val zName = data["name"]?.toString() 
            ?: data["title"]?.toString() 
            ?: "Orman Durağı"

        val zBusiness = data["businessName"]?.toString() 
            ?: data["subtitle"]?.toString() 
            ?: "Boğaziçi Tesisleri"

        val zDesc = data["description"]?.toString() ?: ""
        val zSecret = data["qrSecretCode"]?.toString() ?: data["qrCodeKey"]?.toString() ?: "BOLUM_$orderIdx"
        val zFacilities = data["facilities"]?.toString() ?: data["locationHint"]?.toString() ?: ""
        val zFact = data["fact"]?.toString() ?: ""
        val zScore = (data["targetScore"] as? Number)?.toInt() ?: (1000 + (orderIdx - 1) * 200)

        return Zone(
            id = data["id"]?.toString() ?: docId,
            name = zName,
            businessName = zBusiness,
            description = zDesc,
            qrSecretCode = zSecret,
            orderIndex = orderIdx,
            isUnlockedByDefault = data["isUnlockedByDefault"] as? Boolean ?: (orderIdx == 1),
            activeSponsorCoupon = coupon,
            xPercent = xPercent,
            yPercent = yPercent,
            facilities = zFacilities,
            fact = zFact,
            targetScore = zScore
        )
    }

    fun getDefaultZones(): List<Zone> {
        return listOf(
            Zone(
                id = "zone_1_maglova",
                name = "Mağlova Kapısı & Karşılama",
                businessName = "Mağlova Karşılama Meydanı",
                description = "Kemerburgaz Kent Ormanı A Kapısı karşılama meydanı. Bisiklet kiralama ve danışma noktası.",
                qrSecretCode = "BOLUM_1",
                orderIndex = 1,
                isUnlockedByDefault = true,
                activeSponsorCoupon = SponsorCoupon("%10", "MAGLOVA10", "2026-12-31"),
                xPercent = 16.0,
                yPercent = 76.0,
                facilities = "ℹ️ Danışma: 30m | 🚲 Bisiklet Kiralama: 40m | 🅿️ Ana Otopark | 🚻 WC: 50m",
                fact = "Kemerburgaz Kent Ormanı 5.5 milyon metrekarelik devasa alanıyla İstanbul'un en büyük açık hava rekreasyon sahasıdır.",
                targetScore = 1000
            ),
            Zone(
                id = "zone_2_zipline",
                name = "Dev Atlıkarınca & Carousel Cafe",
                businessName = "Carousel Cafe & Çift Katlı Atlıkarınca",
                description = "Türkiye'nin ilk yerli ve çift katlı, 14m çapındaki 40 hareketli atlı dev atlıkarıncası!",
                qrSecretCode = "BOLUM_2",
                orderIndex = 2,
                isUnlockedByDefault = false,
                activeSponsorCoupon = SponsorCoupon("%20", "CAROUSEL20", "2026-12-31"),
                xPercent = 27.0,
                yPercent = 70.0,
                facilities = "🎠 Çift Katlı Atlıkarınca: 20m | ☕ Carousel Cafe (Waffle & Sıcak Çikolata): 40m",
                fact = "Atlıkarıncanın tüm atları hareketli olup ahşap ve doğal mimariye uygun üretilmiştir.",
                targetScore = 1200
            ),
            Zone(
                id = "zone_3_nature_quiz",
                name = "Çocuk Parkları & Rotamız Orman",
                businessName = "Ahşap Oyun Parkı & Good Mood Cafe",
                description = "23 farklı çocuk oyun parkı noktası ve 'Rotamız Orman' ekolojik çocuk atölyesi alanı.",
                qrSecretCode = "BOLUM_3",
                orderIndex = 3,
                isUnlockedByDefault = false,
                activeSponsorCoupon = SponsorCoupon("%15", "PARK15", "2026-12-31"),
                xPercent = 38.0,
                yPercent = 62.0,
                facilities = "🚸 Ahşap Oyun Parkı: 30m | 🎨 Ekolojik Doğa Atölyesi: 60m | ☕ Good Mood: 80m",
                fact = "Ormandaki dökülen meşe palamutları sincaplar tarafından saklanır ve yeni meşe ormanlarını doğurur.",
                targetScore = 1400
            ),
            Zone(
                id = "zone_4_lake_view",
                name = "BELTUR Restoran & Kafe",
                businessName = "BELTUR Kafe & Restoran",
                description = "Orman manzaralı BELTUR. 1. Büyük Aile Dinlenme Molası: Sıcak çay, yemek ve dinlenme.",
                qrSecretCode = "BOLUM_4",
                orderIndex = 4,
                isUnlockedByDefault = false,
                activeSponsorCoupon = SponsorCoupon("%10", "BELTUR10", "2026-12-31"),
                xPercent = 52.0,
                yPercent = 58.0,
                facilities = "☕ BELTUR Kafe & Restoran: 0m | 🎭 Etkinlik Sahnesi: 50m | 🚻 WC & Bebek Bakım: 30m",
                fact = "BELTUR kafelerinde kendi mataranı kullanarak doğaya sıfır plastik atık bırakabilirsin.",
                targetScore = 1600
            ),
            Zone(
                id = "zone_5_climbing",
                name = "Macera Parkı & Zipline Hattı",
                businessName = "Macera Parkı & Zipline Danışma",
                description = "Ağaçlar arası ip parkurları, tırmanma duvarı ve dev Zipline! Bu etabı bitirene BELTUR İkram Kuponu hediye.",
                qrSecretCode = "BOLUM_5",
                orderIndex = 5,
                isUnlockedByDefault = false,
                activeSponsorCoupon = SponsorCoupon("%25", "ZIPLINE25", "2026-12-31"),
                xPercent = 68.0,
                yPercent = 62.0,
                facilities = "🧗 Macera Parkı & Zipline: 0m | 🎟️ Bu Etabı Bitirince BELTUR İkram Kuponu Kazan!",
                fact = "İp parkurları ve Zipline, sporcuların ve gençlerin denge ve koordinasyonunu güçlendirir.",
                targetScore = 1800
            ),
            Zone(
                id = "zone_6_deer_trail",
                name = "Fauna Alanı & Yaban Hayatı Koridoru",
                businessName = "Yeşil Vadi Cafe & Hayvan Barınakları",
                description = "Kemerburgaz Country Club Fauna Alanı: Hayvanlarla bağ kurma, tavşanlar ve kuş gözlemi.",
                qrSecretCode = "BOLUM_6",
                orderIndex = 6,
                isUnlockedByDefault = false,
                activeSponsorCoupon = SponsorCoupon("%10", "FAUNA10", "2026-12-31"),
                xPercent = 25.0,
                yPercent = 46.0,
                facilities = "🦌 Fauna Alanı & Hayvan Barınakları: 40m | ☕ Yeşil Vadi Cafe: 90m | 🚰 Doğal Çeşme",
                fact = "Ormanımızda alageyikler, kızıl sincaplar ve onlarca göçmen kuş türü koruma altında yaşar.",
                targetScore = 2000
            ),
            Zone(
                id = "zone_7_beehive",
                name = "Mimar Sinan Kapısı & Gölet Parkuru",
                businessName = "BELTUR Burger & Kuş Gözlem İskelesi",
                description = "B Kapısı ve 2.4 km Alibeyköy Gölet Parkuru. Sazlıklar ve gölet su kuşları gözlem alanı.",
                qrSecretCode = "BOLUM_7",
                orderIndex = 7,
                isUnlockedByDefault = false,
                activeSponsorCoupon = SponsorCoupon("%15", "BURGER15", "2026-12-31"),
                xPercent = 76.0,
                yPercent = 42.0,
                facilities = "🦆 Kuş Gözlem İskelesi: 50m | 🍔 BELTUR Burger: 60m | 🚻 WC: 80m",
                fact = "Alibeyköy Deresi kıyısındaki sazlıklar ormanın doğal biyolojik su filtresidir.",
                targetScore = 2200
            ),
            Zone(
                id = "zone_8_watchtower",
                name = "Ahşap Seyir Kulesi & Günbatımı Tepesi",
                businessName = "Big Forest Cafe & Seyir Terası",
                description = "İstanbul'un kuzey ormanlarını 360 derece panoramik izleme kulesi ve temiz hava sahası.",
                qrSecretCode = "BOLUM_8",
                orderIndex = 8,
                isUnlockedByDefault = false,
                activeSponsorCoupon = SponsorCoupon("%10", "BIGFOREST10", "2026-12-31"),
                xPercent = 48.0,
                yPercent = 38.0,
                facilities = "🗼 Panoramik Seyir Kulesi: 30m | ☕ Big Forest Cafe: 80m | 🪑 Seyir Terası",
                fact = "Seyir kulesinden ormana baktığında çam ağaçlarının yaydığı taze oksijeni ciğerlerinde hissedersin.",
                targetScore = 2400
            ),
            Zone(
                id = "zone_9_camp_valley",
                name = "Yakamoz Burnu & Mimar Sinan Yolu",
                businessName = "Woodbox Dinlenme Noktası",
                description = "Alibeyköy Deresi yarımadası, suyun huzur veren sesi ve tarihi taşlı patika rotası.",
                qrSecretCode = "BOLUM_9",
                orderIndex = 9,
                isUnlockedByDefault = false,
                activeSponsorCoupon = SponsorCoupon("%15", "WOODBOX15", "2026-12-31"),
                xPercent = 62.0,
                yPercent = 25.0,
                facilities = "🌊 Alibey Deresi Kıyısı: 20m | 🪵 Woodbox Dinlenme Noktası: 60m",
                fact = "Tarihi patika, asırlar önce Mimar Sinan'ın su kemerlerini inşa ederken kullandığı kervan yoludur.",
                targetScore = 2700
            ),
            Zone(
                id = "zone_10_north_forest",
                name = "MAĞLOVA SU KEMERİ (BÜYÜK FİNAL!)",
                businessName = "Mağlova Su Kemeri Ziyaretçi Totemi",
                description = "Mimar Sinan'ın 1564 şaheseri (36m yükseklik, 257m uzunluk) dünya su mimarisi başyapıtı!",
                qrSecretCode = "BOLUM_10",
                orderIndex = 10,
                isUnlockedByDefault = false,
                activeSponsorCoupon = SponsorCoupon("%50", "MAGLOVA50", "2026-12-31"),
                xPercent = 36.0,
                yPercent = 18.0,
                facilities = "🏛️ Mağlova Su Kemeri: 0m | 🏆 Resmi Muhafız Beratı & Macera Parkı Zipline Kuponu!",
                fact = "Mağlova Su Kemeri, iki katlı gözleri ve piramidal payandalarıyla 460 yıldır tüm deprem ve sellere meydan okumuştur.",
                targetScore = 3000
            )
        )
    }
}
