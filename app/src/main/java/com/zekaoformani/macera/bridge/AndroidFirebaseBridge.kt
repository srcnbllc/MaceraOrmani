package com.zekaoformani.macera.bridge

import android.content.Context
import android.os.Build
import android.os.VibrationEffect
import android.os.Vibrator
import android.os.VibratorManager
import android.webkit.JavascriptInterface
import android.webkit.WebView
import com.google.firebase.firestore.ListenerRegistration
import com.zekaoformani.macera.data.models.Campaign
import com.zekaoformani.macera.data.models.LeaderboardItem
import com.zekaoformani.macera.data.models.Zone
import com.zekaoformani.macera.data.repository.CampaignRepository
import com.zekaoformani.macera.data.repository.LeaderboardRepository
import com.zekaoformani.macera.data.repository.ZoneRepository
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import org.json.JSONArray
import org.json.JSONObject

/**
 * Android Native <-> JavaScript Bridge
 * Connects the rich HTML5 game to live Firebase Firestore services (Zones, Leaderboard, Campaigns),
 * remote configuration, device sensors, and haptic feedback.
 */
class AndroidFirebaseBridge(
    private val context: Context,
    private val webView: WebView,
    private val zoneRepository: ZoneRepository,
    private val campaignRepository: CampaignRepository,
    private val leaderboardRepository: LeaderboardRepository,
    private val coroutineScope: CoroutineScope
) {
    private var cachedZones: List<Zone> = zoneRepository.getDefaultZones()
    private var cachedCampaigns: List<Campaign> = campaignRepository.getDefaultCampaigns()
    private var cachedLeaderboard: List<LeaderboardItem> = leaderboardRepository.getDefaultLeaderboard()

    private var zoneListener: ListenerRegistration? = null
    private var leaderboardListener: ListenerRegistration? = null

    init {
        // Initial async fetch from Firestore
        coroutineScope.launch(Dispatchers.IO) {
            try {
                val zones = zoneRepository.getZones()
                if (zones.isNotEmpty()) cachedZones = zones
            } catch (_: Exception) {}

            try {
                val campaigns = campaignRepository.getCampaigns(isChildMode = true)
                if (campaigns.isNotEmpty()) cachedCampaigns = campaigns
            } catch (_: Exception) {}

            try {
                val lb = leaderboardRepository.getLeaderboard()
                if (lb.isNotEmpty()) cachedLeaderboard = lb
            } catch (_: Exception) {}

            launch(Dispatchers.Main) {
                notifyWebviewOfFirebaseSync()
                notifyWebviewOfLeaderboardSync()
            }

            // Real-time Snapshot Listeners:
            // Whenever an admin updates zones or leaderboard in Firebase Console,
            // the listener fires immediately and notifies the running web game.
            try {
                zoneListener = zoneRepository.listenToZones { updatedZones ->
                    cachedZones = updatedZones
                    coroutineScope.launch(Dispatchers.Main) {
                        notifyWebviewOfFirebaseSync()
                    }
                }
            } catch (_: Exception) {}

            try {
                leaderboardListener = leaderboardRepository.listenToLeaderboard { updatedLb ->
                    cachedLeaderboard = updatedLb
                    coroutineScope.launch(Dispatchers.Main) {
                        notifyWebviewOfLeaderboardSync()
                    }
                }
            } catch (_: Exception) {}
        }
    }

    fun cleanup() {
        zoneListener?.remove()
        zoneListener = null
        leaderboardListener?.remove()
        leaderboardListener = null
    }

    private fun notifyWebviewOfFirebaseSync() {
        val zonesJson = getZonesJson()
        val campaignsJson = getCampaignsJson()
        val script = "if (window.onFirebaseDataReady) { window.onFirebaseDataReady($zonesJson, $campaignsJson); }"
        webView.evaluateJavascript(script, null)
    }

    private fun notifyWebviewOfLeaderboardSync() {
        val lbJson = getLeaderboardJson()
        val script = "if (window.onFirebaseLeaderboardReady) { window.onFirebaseLeaderboardReady($lbJson); }"
        webView.evaluateJavascript(script, null)
    }

    @JavascriptInterface
    fun isAndroidApp(): Boolean = true

    @JavascriptInterface
    fun postMessage(jsonString: String) {
        try {
            val json = JSONObject(jsonString)
            val event = json.optString("event")
            when (event) {
                "STAGE_COMPLETED" -> vibrate(100)
                "GAME_OVER" -> vibrate(150)
                "COIN_COLLECTED" -> vibrate(25)
                "SUBMIT_SCORE" -> {
                    val name = json.optString("name", "Kaşif")
                    val score = json.optLong("score", 0L)
                    val heroId = json.optInt("heroId", 1)
                    val stages = json.optInt("stages", 1)
                    val coins = json.optInt("coins", 0)
                    submitScore(name, score, heroId, stages, coins)
                }
            }
        } catch (_: Exception) {}
    }

    @JavascriptInterface
    fun getZonesJson(): String {
        val array = JSONArray()
        for (z in cachedZones) {
            val obj = JSONObject()
            obj.put("id", z.id)
            obj.put("orderIndex", z.orderIndex)
            obj.put("name", z.name)
            obj.put("businessName", z.businessName)
            obj.put("description", z.description)
            obj.put("qrSecretCode", z.qrSecretCode)
            obj.put("isUnlockedByDefault", z.isUnlockedByDefault)
            obj.put("xPercent", z.xPercent)
            obj.put("yPercent", z.yPercent)
            obj.put("facilities", z.facilities)
            obj.put("fact", z.fact)
            obj.put("targetScore", z.targetScore)
            z.activeSponsorCoupon?.let { sc ->
                val cObj = JSONObject()
                cObj.put("discountRate", sc.discountRate)
                cObj.put("couponCode", sc.couponCode)
                cObj.put("expiryDate", sc.expiryDate)
                obj.put("activeSponsorCoupon", cObj)
            }
            array.put(obj)
        }
        return array.toString()
    }

    @JavascriptInterface
    fun getLeaderboardJson(): String {
        val array = JSONArray()
        for (item in cachedLeaderboard) {
            val obj = JSONObject()
            obj.put("id", item.id)
            obj.put("name", item.name)
            obj.put("score", item.score)
            obj.put("heroId", item.heroId)
            obj.put("stages", item.stages)
            obj.put("rankTitle", item.rankTitle)
            obj.put("coins", item.coins)
            obj.put("orderIndex", item.orderIndex)
            array.put(obj)
        }
        return array.toString()
    }

    @JavascriptInterface
    fun submitScore(name: String, score: Long, heroId: Int, stages: Int, coins: Int) {
        coroutineScope.launch(Dispatchers.IO) {
            leaderboardRepository.submitScore(name, score, heroId, stages, coins)
        }
    }

    @JavascriptInterface
    fun getCampaignsJson(): String {
        val array = JSONArray()
        for (c in cachedCampaigns) {
            val obj = JSONObject()
            obj.put("id", c.id)
            obj.put("title", c.title)
            obj.put("description", c.description)
            obj.put("sponsorName", c.sponsorName)
            obj.put("badgeUrl", c.badgeUrl)
            obj.put("targetZoneId", c.targetZoneId)
            obj.put("isActive", c.isActive)
            obj.put("isCommercial", c.isCommercial)
            array.put(obj)
        }
        return array.toString()
    }

    @JavascriptInterface
    fun vibrate(durationMs: Long) {
        try {
            val ms = durationMs.coerceIn(10, 500)
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                val vibratorManager = context.getSystemService(Context.VIBRATOR_MANAGER_SERVICE) as? VibratorManager
                vibratorManager?.defaultVibrator?.vibrate(
                    VibrationEffect.createOneShot(ms, VibrationEffect.DEFAULT_AMPLITUDE)
                )
            } else {
                @Suppress("DEPRECATION")
                val vibrator = context.getSystemService(Context.VIBRATOR_SERVICE) as? Vibrator
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                    vibrator?.vibrate(VibrationEffect.createOneShot(ms, VibrationEffect.DEFAULT_AMPLITUDE))
                } else {
                    @Suppress("DEPRECATION")
                    vibrator?.vibrate(ms)
                }
            }
        } catch (_: Exception) {}
    }
}
