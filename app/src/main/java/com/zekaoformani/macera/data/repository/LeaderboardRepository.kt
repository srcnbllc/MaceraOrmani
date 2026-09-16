package com.zekaoformani.macera.data.repository

import android.util.Log
import com.google.firebase.firestore.ListenerRegistration
import com.google.firebase.firestore.SetOptions
import com.zekaoformani.macera.data.firebase.FirebaseManager
import com.zekaoformani.macera.data.models.LeaderboardItem
import kotlinx.coroutines.tasks.await

class LeaderboardRepository {
    private val firestore = FirebaseManager.firestore
    private val leaderboardCollection = firestore.collection("leaderboard")

    suspend fun getLeaderboard(): List<LeaderboardItem> {
        return try {
            val snapshot = leaderboardCollection.orderBy("score", com.google.firebase.firestore.Query.Direction.DESCENDING).limit(50).get().await()
            if (!snapshot.isEmpty) {
                snapshot.documents.mapNotNull { doc ->
                    doc.data?.let { mapDocumentToLeaderboardItem(doc.id, it) }
                }
            } else {
                getDefaultLeaderboard()
            }
        } catch (e: Exception) {
            Log.w("LeaderboardRepository", "Failed to fetch leaderboard: ${e.localizedMessage}")
            getDefaultLeaderboard()
        }
    }

    /**
     * Real-time listener: Attaches Firestore SnapshotListener so changes made in Firebase Console
     * (editing scores, adding players, resetting leaderboard) instantly update the game screen!
     */
    fun listenToLeaderboard(onUpdate: (List<LeaderboardItem>) -> Unit): ListenerRegistration {
        return leaderboardCollection.orderBy("score", com.google.firebase.firestore.Query.Direction.DESCENDING)
            .limit(50)
            .addSnapshotListener { snapshot, error ->
                if (error != null) {
                    Log.w("LeaderboardRepository", "Leaderboard listen error: ${error.localizedMessage}")
                    return@addSnapshotListener
                }
                if (snapshot != null && !snapshot.isEmpty) {
                    val list = snapshot.documents.mapNotNull { doc ->
                        doc.data?.let { mapDocumentToLeaderboardItem(doc.id, it) }
                    }
                    if (list.isNotEmpty()) {
                        onUpdate(list)
                    }
                }
            }
    }

    suspend fun submitScore(name: String, score: Long, heroId: Int, stages: Int, coins: Int, customDeviceInfo: String? = null) {
        try {
            val uid = FirebaseManager.auth.currentUser?.uid ?: "anonymous_${System.currentTimeMillis()}"
            val docRef = leaderboardCollection.document(uid)
            val brand = android.os.Build.BRAND ?: ""
            val model = android.os.Build.MODEL ?: ""
            val manufacturer = android.os.Build.MANUFACTURER ?: ""
            val osVer = "Android ${android.os.Build.VERSION.RELEASE}"
            val deviceSummary = customDeviceInfo?.ifBlank { null } ?: "$manufacturer $model ($osVer)".trim()

            val data = hashMapOf(
                "name" to name,
                "score" to score,
                "heroId" to heroId,
                "stages" to stages,
                "coins" to coins,
                "rankTitle" to getRankTitle(score),
                "deviceBrand" to brand,
                "deviceModel" to model,
                "deviceManufacturer" to manufacturer,
                "deviceInfo" to deviceSummary,
                "updatedAt" to com.google.firebase.Timestamp.now()
            )
            docRef.set(data, SetOptions.merge()).await()
            Log.d("LeaderboardRepository", "Score submitted successfully for $name ($deviceSummary): $score")
        } catch (e: Exception) {
            Log.w("LeaderboardRepository", "Failed to submit score: ${e.localizedMessage}")
        }
    }

    private fun mapDocumentToLeaderboardItem(docId: String, data: Map<String, Any?>): LeaderboardItem {
        val score = (data["score"] as? Number)?.toLong() ?: 0L
        val heroId = (data["heroId"] as? Number)?.toInt() ?: 1
        val stages = (data["stages"] as? Number)?.toInt() ?: 1
        val coins = (data["coins"] as? Number)?.toInt() ?: 0
        val orderIndex = (data["orderIndex"] as? Number)?.toInt() ?: 99
        val name = data["name"]?.toString() ?: "Kaşif"
        val rankTitle = data["rankTitle"]?.toString() ?: getRankTitle(score)

        return LeaderboardItem(
            id = docId,
            name = name,
            score = score,
            heroId = heroId,
            stages = stages,
            rankTitle = rankTitle,
            coins = coins,
            orderIndex = orderIndex
        )
    }

    private fun getRankTitle(score: Long): String {
        return when {
            score >= 8000 -> "Orman Muhafızı Efsanesi"
            score >= 6500 -> "Baş İzci"
            score >= 5000 -> "Kıdemli Kaşif"
            score >= 3500 -> "Doğa Rehberi"
            score >= 2000 -> "Orman Muhafızı"
            else -> "Orman Kaşifi"
        }
    }

    fun getDefaultLeaderboard(): List<LeaderboardItem> {
        return listOf(
            LeaderboardItem("top_1", "Kerem A.", 8640, 1, 10, "Orman Muhafızı Efsanesi", 450, 1),
            LeaderboardItem("top_2", "Zeynep K.", 7920, 4, 9, "Baş İzci", 380, 2),
            LeaderboardItem("top_3", "Emir B.", 6850, 2, 8, "Kıdemli Kaşif", 310, 3),
            LeaderboardItem("top_4", "Elif S.", 5400, 3, 7, "Doğa Rehberi", 260, 4),
            LeaderboardItem("top_5", "Ali Y.", 4200, 5, 6, "Orman Çırağı", 190, 5)
        )
    }
}
