package com.zekaoformani.macera.bridge

import android.content.Context
import android.os.Build
import android.os.VibrationEffect
import android.os.Vibrator
import android.os.VibratorManager
import android.webkit.JavascriptInterface
import android.webkit.WebView
import android.widget.Toast
import com.zekaoformani.macera.data.models.Campaign
import com.zekaoformani.macera.data.models.Zone
import com.zekaoformani.macera.data.repository.CampaignRepository
import com.zekaoformani.macera.data.repository.ZoneRepository
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import org.json.JSONArray
import org.json.JSONObject

/**
 * Android Native <-> JavaScript Bridge
 * Connects the rich HTML5 game to live Firebase Firestore services,
 * remote configuration, device sensors, and haptic feedback.
 */
class AndroidFirebaseBridge(
    private val context: Context,
    private val webView: WebView,
    private val zoneRepository: ZoneRepository,
    private val campaignRepository: CampaignRepository,
    private val coroutineScope: CoroutineScope
) {
    private var cachedZones: List<Zone> = zoneRepository.getDefaultZones()
    private var cachedCampaigns: List<Campaign> = campaignRepository.getDefaultCampaigns()

    init {
        // Asynchronously fetch live Firestore data from kentormanimaceraparki project
        coroutineScope.launch(Dispatchers.IO) {
            try {
                val zones = zoneRepository.getZones()
                if (zones.isNotEmpty()) {
                    cachedZones = zones
                }
            } catch (_: Exception) {}

            try {
                val campaigns = campaignRepository.getCampaigns(isChildMode = true)
                if (campaigns.isNotEmpty()) {
                    cachedCampaigns = campaigns
                }
            } catch (_: Exception) {}

            // Send live data to webview once loaded
            launch(Dispatchers.Main) {
                notifyWebviewOfFirebaseSync()
            }
        }
    }

    private fun notifyWebviewOfFirebaseSync() {
        val zonesJson = getZonesJson()
        val campaignsJson = getCampaignsJson()
        val script = "if (window.onFirebaseDataReady) { window.onFirebaseDataReady($zonesJson, $campaignsJson); }"
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
                "STAGE_COMPLETED" -> {
                    vibrate(100)
                }
                "GAME_OVER" -> {
                    vibrate(150)
                }
                "COIN_COLLECTED" -> {
                    vibrate(25)
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

    @JavascriptInterface
    fun showToast(message: String) {
        coroutineScope.launch(Dispatchers.Main) {
            Toast.makeText(context, message, Toast.LENGTH_SHORT).show()
        }
    }
}
