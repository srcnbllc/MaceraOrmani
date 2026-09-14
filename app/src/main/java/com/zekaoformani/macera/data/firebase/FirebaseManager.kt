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

    val auth: FirebaseAuth by lazy { Firebase.auth }
    val firestore: FirebaseFirestore by lazy { Firebase.firestore }
    val remoteConfig: FirebaseRemoteConfig by lazy { Firebase.remoteConfig }

    suspend fun initAndSignInAnonymously() {
        try {
            if (auth.currentUser == null) {
                val result = auth.signInAnonymously().await()
                Log.d(TAG, "Firebase Anonymous Sign-In successful. UID: ${result.user?.uid}")
            } else {
                Log.d(TAG, "Already signed in. UID: ${auth.currentUser?.uid}")
            }
        } catch (e: Exception) {
            Log.e(TAG, "Anonymous sign-in failed: ${e.localizedMessage}")
        }

        try {
            val configSettings = remoteConfigSettings {
                minimumFetchIntervalInSeconds = 3600
            }
            remoteConfig.setConfigSettingsAsync(configSettings)
            val defaults = mapOf(
                "game_speed_multiplier" to 1.0,
                "base_shields_count" to 1,
                "child_mode_default" to true
            )
            remoteConfig.setDefaultsAsync(defaults)
            remoteConfig.fetchAndActivate()
            Log.d(TAG, "RemoteConfig initialized and activated")
        } catch (e: Exception) {
            Log.w(TAG, "RemoteConfig setup warning: ${e.localizedMessage}")
        }
    }
}
