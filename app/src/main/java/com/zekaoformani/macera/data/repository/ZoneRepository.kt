package com.zekaoformani.macera.data.repository

import android.util.Log
import com.zekaoformani.macera.data.firebase.FirebaseManager
import com.zekaoformani.macera.data.models.SponsorCoupon
import com.zekaoformani.macera.data.models.Zone
import kotlinx.coroutines.tasks.await

class ZoneRepository {
    private val firestore = FirebaseManager.firestore
    private val zonesCollection = firestore.collection("parks").document("kemerburgaz").collection("zones")

    suspend fun getZones(): List<Zone> {
        return try {
            val snapshot = zonesCollection.get().await()
            if (!snapshot.isEmpty) {
                val list = snapshot.documents.mapNotNull { doc ->
                    val data = doc.data ?: return@mapNotNull null
                    val couponMap = data["activeSponsorCoupon"] as? Map<*, *>
                    val coupon = couponMap?.let {
                        SponsorCoupon(
                            discountRate = it["discountRate"]?.toString() ?: "",
                            couponCode = it["couponCode"]?.toString() ?: "",
                            expiryDate = it["expiryDate"]?.toString() ?: ""
                        )
                    }
                    Zone(
                        id = data["id"]?.toString() ?: doc.id,
                        name = data["name"]?.toString() ?: "Orman Durağı",
                        businessName = data["businessName"]?.toString() ?: "Boğaziçi Tesisleri",
                        description = data["description"]?.toString() ?: "",
                        qrSecretCode = data["qrSecretCode"]?.toString() ?: "KEMER_SECURE_ZONE",
                        orderIndex = (data["orderIndex"] as? Long)?.toInt() ?: 1,
                        isUnlockedByDefault = data["isUnlockedByDefault"] as? Boolean ?: false,
                        activeSponsorCoupon = coupon
                    )
                }.sortedBy { it.orderIndex }
                list.ifEmpty { getDefaultZones() }
            } else {
                getDefaultZones()
            }
        } catch (e: Exception) {
            Log.w("ZoneRepository", "Failed to fetch zones from Firestore, falling back to local: ${e.localizedMessage}")
            getDefaultZones()
        }
    }

    fun getDefaultZones(): List<Zone> {
        return listOf(
            Zone(
                id = "zone_1_maglova",
                name = "Mağlova Su Kemeri Girişi",
                businessName = "İBB Boğaziçi Yönetim & Karşılama Noktası",
                description = "Maceran burada başlıyor! Tarihi Mağlova Su Kemeri'nin gölgesinde ormana ilk adımını at.",
                qrSecretCode = "KEMER_SECURE_ZONE_1",
                orderIndex = 1,
                isUnlockedByDefault = true,
                activeSponsorCoupon = SponsorCoupon("%10", "MAGLOVA10", "2026-12-31")
            ),
            Zone(
                id = "zone_2_zipline",
                name = "Macera Zipline Parkuru",
                businessName = "Orman Kafe & Macera A.Ş.",
                description = "Ağaçların tepesinden rüzgar gibi süzül! Kuş bakışı orman manzarasını keşfet.",
                qrSecretCode = "KEMER_SECURE_ZONE_2",
                orderIndex = 2,
                isUnlockedByDefault = false,
                activeSponsorCoupon = SponsorCoupon("%20", "ZIPLINE20", "2026-12-31")
            ),
            Zone(
                id = "zone_3_nature_quiz",
                name = "Doğa ve Keşif Alanı",
                businessName = "Kemerburgaz Doğa Manavı & Kafe",
                description = "Kızıl sincaplar ve meşe palamutları arasında doğanın sırlarını çöz.",
                qrSecretCode = "KEMER_SECURE_ZONE_3",
                orderIndex = 3,
                isUnlockedByDefault = false,
                activeSponsorCoupon = SponsorCoupon("%15", "MANAV15", "2026-12-31")
            ),
            Zone(
                id = "zone_4_lake_view",
                name = "Alibeyköy Gölet İskelesi",
                businessName = "Göl Kenarı Dinlenme Tesisi",
                description = "Sazlıkların arasındaki su kuşlarını ve biyolojik gölet filtresini gözlemle.",
                qrSecretCode = "KEMER_SECURE_ZONE_4",
                orderIndex = 4,
                isUnlockedByDefault = false,
                activeSponsorCoupon = SponsorCoupon("%10", "GOL10", "2026-12-31")
            ),
            Zone(
                id = "zone_5_climbing",
                name = "İp Parkuru ve Tırmanma Duvarı",
                businessName = "Boğaziçi Macera Kulübü",
                description = "Dengeyi koru, cesaretini topla ve yüksek ahşap köprüleri bir bir aş.",
                qrSecretCode = "KEMER_SECURE_ZONE_5",
                orderIndex = 5,
                isUnlockedByDefault = false,
                activeSponsorCoupon = SponsorCoupon("%25", "TIRMAN25", "2026-12-31")
            ),
            Zone(
                id = "zone_6_deer_trail",
                name = "Alageyik Yaban Hayatı Patikası",
                businessName = "Orman Koruma ve Yaban İstasyonu",
                description = "Ormanın asıl sahipleri olan geyiklerin ayak izlerini takip et.",
                qrSecretCode = "KEMER_SECURE_ZONE_6",
                orderIndex = 6,
                isUnlockedByDefault = false,
                activeSponsorCoupon = SponsorCoupon("%15", "GEYIK15", "2026-12-31")
            ),
            Zone(
                id = "zone_7_beehive",
                name = "Arı Kovanları ve Çiçek Vadisi",
                businessName = "Doğal Bal & Çiçek Evi",
                description = "Çiçeklerin tozlaşmasını sağlayan çalışkan arıların dünyasına katıl.",
                qrSecretCode = "KEMER_SECURE_ZONE_7",
                orderIndex = 7,
                isUnlockedByDefault = false,
                activeSponsorCoupon = SponsorCoupon("%10", "BAL10", "2026-12-31")
            ),
            Zone(
                id = "zone_8_watchtower",
                name = "Büyük Seyir Kulesi",
                businessName = "Kule Bistro & Seyir Terası",
                description = "Zirveye çık ve Kuzey Ormanları'nın sınırsız yeşilliğine yukarıdan bak.",
                qrSecretCode = "KEMER_SECURE_ZONE_8",
                orderIndex = 8,
                isUnlockedByDefault = false,
                activeSponsorCoupon = SponsorCoupon("%20", "KULE20", "2026-12-31")
            ),
            Zone(
                id = "zone_9_camp_valley",
                name = "Gelişim Vadisi İzcilik Kampı",
                businessName = "Gelişim Vadisi Sosyal Tesisleri",
                description = "Çadır kur, kamp ateşi çevresinde orman şarkıları söyle ve yıldızları izle.",
                qrSecretCode = "KEMER_SECURE_ZONE_9",
                orderIndex = 9,
                isUnlockedByDefault = false,
                activeSponsorCoupon = SponsorCoupon("%15", "KAMP15", "2026-12-31")
            ),
            Zone(
                id = "zone_10_north_forest",
                name = "Kuzey Ormanları Sınırı",
                businessName = "İBB Boğaziçi Muhafız Karargahı",
                description = "Büyük final! 10 durağı da tamamlayıp gerçek bir Orman Muhafızı olmanın gururunu yaşa.",
                qrSecretCode = "KEMER_SECURE_ZONE_10",
                orderIndex = 10,
                isUnlockedByDefault = false,
                activeSponsorCoupon = SponsorCoupon("%50", "MUHAFIZ50", "2026-12-31")
            )
        )
    }
}
