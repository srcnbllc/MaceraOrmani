package com.zekaoformani.macera.data.repository

import android.util.Log
import com.zekaoformani.macera.data.firebase.FirebaseManager
import com.zekaoformani.macera.data.models.Campaign
import kotlinx.coroutines.tasks.await

class CampaignRepository {
    private val firestore = FirebaseManager.firestore
    private val campaignsCollection = firestore.collection("campaigns")

    suspend fun getCampaigns(isChildMode: Boolean = true): List<Campaign> {
        return try {
            val snapshot = campaignsCollection.get().await()
            val list = if (!snapshot.isEmpty) {
                snapshot.documents.mapNotNull { doc ->
                    val data = doc.data ?: return@mapNotNull null
                    Campaign(
                        id = data["id"]?.toString() ?: doc.id,
                        title = data["title"]?.toString() ?: "",
                        description = data["description"]?.toString() ?: "",
                        sponsorName = data["sponsorName"]?.toString() ?: "",
                        badgeUrl = data["badgeUrl"]?.toString() ?: "",
                        targetZoneId = data["targetZoneId"]?.toString() ?: "",
                        isActive = data["isActive"] as? Boolean ?: true,
                        isCommercial = data["isCommercial"] as? Boolean ?: false
                    )
                }
            } else {
                getDefaultCampaigns()
            }

            // Çocuk Güvenliği Kuralı: isCommercial=true çocuk modunda gizlenir
            list.filter { campaign ->
                campaign.isActive && (!isChildMode || !campaign.isCommercial)
            }
        } catch (e: Exception) {
            Log.w("CampaignRepository", "Failed to fetch campaigns: ${e.localizedMessage}")
            getDefaultCampaigns().filter { !isChildMode || !it.isCommercial }
        }
    }

    fun getDefaultCampaigns(): List<Campaign> {
        return listOf(
            Campaign(
                id = "campaign_beltur",
                title = "%10 BELTUR İndirimi",
                description = "5 durağı başarıyla keşfeden doğa kaşiflerine özel BELTUR orman kafelerinde geçerli ikram indirimi!",
                sponsorName = "BELTUR",
                badgeUrl = "https://kentorman.istanbul/badges/beltur.png",
                targetZoneId = "zone_1_maglova",
                isActive = true,
                isCommercial = false
            ),
            Campaign(
                id = "campaign_zipline",
                title = "Ücretsiz Zipline Turu",
                description = "10 durağın tümünü tamamlayıp Orman Muhafızı olan cesur kaşiflere Zipline parkurunda 1 tur hediye!",
                sponsorName = "Orman Kafe & Macera A.Ş.",
                badgeUrl = "https://kentorman.istanbul/badges/zipline.png",
                targetZoneId = "zone_2_zipline",
                isActive = true,
                isCommercial = false
            ),
            Campaign(
                id = "campaign_commercial_icecream",
                title = "Doğal Orman Meyveli Dondurma Kuponu",
                description = "Gelişim Vadisi kafeteryasında geçerli orman meyveli dondurma kuponu.",
                sponsorName = "Gelişim Vadisi Kafe",
                badgeUrl = "https://kentorman.istanbul/badges/icecream.png",
                targetZoneId = "zone_9_camp_valley",
                isActive = true,
                isCommercial = true
            )
        )
    }
}
