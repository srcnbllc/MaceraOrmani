package com.zekaoformani.macera

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import com.zekaoformani.macera.data.models.Campaign
import com.zekaoformani.macera.data.models.GameState
import com.zekaoformani.macera.data.models.Zone
import com.zekaoformani.macera.data.repository.CampaignRepository
import com.zekaoformani.macera.data.repository.ZoneRepository
import com.zekaoformani.macera.ui.screens.GameScreen
import com.zekaoformani.macera.ui.screens.MainMenuScreen
import com.zekaoformani.macera.ui.screens.OnboardingScreen
import com.zekaoformani.macera.ui.screens.PassportScreen
import com.zekaoformani.macera.ui.screens.RewardsScreen
import com.zekaoformani.macera.ui.theme.ForestGreenDeep
import com.zekaoformani.macera.ui.theme.MaceraOrmaniTheme

class MainActivity : ComponentActivity() {
    private val zoneRepository = ZoneRepository()
    private val campaignRepository = CampaignRepository()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MaceraOrmaniTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = ForestGreenDeep
                ) {
                    MaceraApp(
                        zoneRepository = zoneRepository,
                        campaignRepository = campaignRepository
                    )
                }
            }
        }
    }
}

enum class ScreenState {
    MENU,
    GAME,
    PASSPORT,
    REWARDS,
    ONBOARDING
}

@Composable
fun MaceraApp(
    zoneRepository: ZoneRepository,
    campaignRepository: CampaignRepository
) {
    var currentScreen by remember { mutableStateOf(ScreenState.MENU) }
    var gameState by remember { mutableStateOf(GameState()) }
    var zones by remember { mutableStateOf(zoneRepository.getDefaultZones()) }
    var campaigns by remember { mutableStateOf(campaignRepository.getDefaultCampaigns()) }
    var activeZone by remember { mutableStateOf<Zone?>(null) }

    // Firebase'den Verileri Dinamik Olarak Çekme
    LaunchedEffect(Unit) {
        val fetchedZones = zoneRepository.getZones()
        if (fetchedZones.isNotEmpty()) {
            zones = fetchedZones
        }
        val fetchedCampaigns = campaignRepository.getCampaigns(isChildMode = gameState.isChildMode)
        if (fetchedCampaigns.isNotEmpty()) {
            campaigns = fetchedCampaigns
        }
    }

    when (currentScreen) {
        ScreenState.MENU -> {
            MainMenuScreen(
                gameState = gameState,
                onStartGame = {
                    activeZone = zones.firstOrNull()
                    currentScreen = ScreenState.GAME
                },
                onOpenPassport = { currentScreen = ScreenState.PASSPORT },
                onOpenRewards = { currentScreen = ScreenState.REWARDS },
                onOpenOnboarding = { currentScreen = ScreenState.ONBOARDING }
            )
        }

        ScreenState.GAME -> {
            GameScreen(
                gameState = gameState,
                onBackToMenu = { currentScreen = ScreenState.MENU },
                onCompleteLevel = { earnedCoins, earnedScore ->
                    val newCoins = gameState.coins + earnedCoins
                    val newScore = gameState.score + earnedScore
                    val newHighScore = maxOf(gameState.highScore, newScore)

                    // Aktif durak tamamlandıysa kilidi ve damgayı aç
                    val updatedUnlocked = activeZone?.let {
                        gameState.unlockedZoneIds + it.id
                    } ?: gameState.unlockedZoneIds

                    gameState = gameState.copy(
                        coins = newCoins,
                        score = newScore,
                        highScore = newHighScore,
                        unlockedZoneIds = updatedUnlocked
                    )
                }
            )
        }

        ScreenState.PASSPORT -> {
            PassportScreen(
                zones = zones,
                gameState = gameState,
                onBack = { currentScreen = ScreenState.MENU },
                onPlayZone = { zone ->
                    activeZone = zone
                    currentScreen = ScreenState.GAME
                }
            )
        }

        ScreenState.REWARDS -> {
            RewardsScreen(
                campaigns = campaigns,
                onBack = { currentScreen = ScreenState.MENU }
            )
        }

        ScreenState.ONBOARDING -> {
            OnboardingScreen(
                currentExplorerName = gameState.explorerName,
                currentHeroId = gameState.selectedHeroId,
                onSaveProfile = { name, heroId ->
                    gameState = gameState.copy(
                        explorerName = name,
                        selectedHeroId = heroId
                    )
                },
                onBack = { currentScreen = ScreenState.MENU }
            )
        }
    }
}
