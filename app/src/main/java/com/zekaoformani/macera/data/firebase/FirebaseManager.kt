package com.zekaoformani.macera.data.firebase

import android.util.Log
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.ktx.auth
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.ktx.firestore
import com.google.firebase.ktx.Firebase
import com.google.firebase.remoteconfig.FirebaseRemoteConfig
import com.google.firebase.remoteconfig.ktx.remoteConfig
import com.google.firebase.remoteconfig.ktx.remoteConfigSettings
import kotlinx.coroutines.tasks.await

object FirebaseManager {
    private const val TAG = "FirebaseManager"

    fun ensureInitialized(context: android.content.Context) {
        try {
            if (com.google.firebase.FirebaseApp.getApps(context).isEmpty()) {
                com.google.firebase.FirebaseApp.initializeApp(context)
                Log.d(TAG, "FirebaseApp explicitly initialized.")
            }
        } catch (e: Exception) {
            Log.e(TAG, "FirebaseApp initialization error: ${e.localizedMessage}")
        }
    }

    val auth: FirebaseAuth?
        get() = try { Firebase.auth } catch (e: Exception) { Log.w(TAG, "Auth unavailable: ${e.message}"); null }

    val firestore: FirebaseFirestore?
        get() = try { Firebase.firestore } catch (e: Exception) { Log.w(TAG, "Firestore unavailable: ${e.message}"); null }

    val remoteConfig: FirebaseRemoteConfig?
        get() = try { Firebase.remoteConfig } catch (e: Exception) { Log.w(TAG, "RemoteConfig unavailable: ${e.message}"); null }

    suspend fun initAndSignInAnonymously() {
        try {
            val currentAuth = auth ?: return
            if (currentAuth.currentUser == null) {
                val result = currentAuth.signInAnonymously().await()
                Log.d(TAG, "Firebase Anonymous Sign-In successful. UID: ${result.user?.uid}")
            } else {
                Log.d(TAG, "Already signed in. UID: ${currentAuth.currentUser?.uid}")
            }
        } catch (e: Exception) {
            Log.e(TAG, "Anonymous sign-in failed: ${e.localizedMessage}")
        }

        try {
            val config = remoteConfig ?: return
            val configSettings = remoteConfigSettings {
                minimumFetchIntervalInSeconds = 3600
            }
            config.setConfigSettingsAsync(configSettings)
            val defaults = mapOf(
                "game_speed_multiplier" to 1.0,
                "base_shields_count" to 1,
                "child_mode_default" to true
            )
            config.setDefaultsAsync(defaults)
            config.fetchAndActivate()
            Log.d(TAG, "RemoteConfig initialized and activated")
        } catch (e: Exception) {
            Log.w(TAG, "RemoteConfig setup warning: ${e.localizedMessage}")
        }
    }
}
