package com.zekaoformani.macera.ui.screens

import android.content.res.Configuration
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.LinearEasing
import androidx.compose.animation.core.RepeatMode
import androidx.compose.animation.core.infiniteRepeatable
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.gestures.detectVerticalDragGestures
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Pause
import androidx.compose.material.icons.filled.PlayArrow
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material.icons.filled.Shield
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.geometry.CornerRadius
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.drawscope.DrawScope
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.window.Dialog
import com.zekaoformani.macera.data.models.GameState
import com.zekaoformani.macera.ui.components.ForestWoodButton
import com.zekaoformani.macera.ui.components.ThumbDockControls
import com.zekaoformani.macera.ui.theme.AmberGold
import com.zekaoformani.macera.ui.theme.AmberOrange
import com.zekaoformani.macera.ui.theme.EmeraldGreen
import com.zekaoformani.macera.ui.theme.ForestGreenDark
import com.zekaoformani.macera.ui.theme.ForestGreenDeep
import com.zekaoformani.macera.ui.theme.ForestGreenPrimary
import com.zekaoformani.macera.ui.theme.ShieldCyan
import com.zekaoformani.macera.ui.theme.SoftCream
import com.zekaoformani.macera.ui.theme.WoodBark
import com.zekaoformani.macera.ui.theme.WoodBrownDark
import kotlinx.coroutines.delay
import kotlinx.coroutines.isActive
import kotlin.math.abs

enum class HeroAction { RUN, JUMP, SLIDE }

data class Obstacle(
    val id: Long,
    var x: Float,
    val type: ObstacleType, // ROCK, BRANCH, STUMP
    val width: Float,
    val height: Float
)

enum class ObstacleType { LOW_ROCK, HIGH_BRANCH, TREE_STUMP }

data class Collectible(
    val id: Long,
    var x: Float,
    val y: Float,
    val isAcorn: Boolean // Gold or Acorn
)

@Composable
fun GameScreen(
    gameState: GameState,
    onBackToMenu: () -> Unit,
    onCompleteLevel: (Int, Int) -> Unit
) {
    val configuration = LocalConfiguration.current
    val isLandscape = configuration.orientation == Configuration.ORIENTATION_LANDSCAPE

    // Ekran & Kahraman Ölçekleme: Yatay modda 115dp, dikeyde 90dp
    val heroSizeDp: Dp = if (isLandscape) 115.dp else 90.dp
    val obstacleScaleFactor: Float = if (isLandscape) 0.82f else 1.0f

    // Oyun Değişkenleri
    var score by remember { mutableIntStateOf(0) }
    var coinsCollected by remember { mutableIntStateOf(0) }
    var shieldsLeft by remember { mutableIntStateOf(gameState.baseShields) }
    var isPaused by remember { mutableStateOf(false) }
    var isGameOver by remember { mutableStateOf(false) }
    var isVictory by remember { mutableStateOf(false) }

    // Dokunulmazlık Aurası (Auto-Shield Rescue tetiklendiğinde 1 saniye altın parlama)
    var isInvincible by remember { mutableStateOf(false) }
    var showRescueToast by remember { mutableStateOf(false) }

    // Karakter Aksiyonu (RUN, JUMP, SLIDE)
    var heroAction by remember { mutableStateOf(HeroAction.RUN) }
    var heroYOffset by remember { mutableFloatStateOf(0f) }

    // Engeller ve Toplanabilirler
    val obstacles = remember { mutableStateListOf<Obstacle>() }
    val collectibles = remember { mutableStateListOf<Collectible>() }

    // Oyun Döngüsü
    LaunchedEffect(isPaused, isGameOver, isVictory) {
        var nextObstacleId = 1L
        var nextCollectibleId = 1L
        var spawnTimer = 0

        while (isActive && !isPaused && !isGameOver && !isVictory) {
            delay(16L) // ~60 FPS
            score += 1
            spawnTimer += 1

            // Engel Üretimi
            if (spawnTimer % 130 == 0) {
                val obsType = if (spawnTimer % 260 == 0) ObstacleType.HIGH_BRANCH else ObstacleType.LOW_ROCK
                val w = (60f * obstacleScaleFactor)
                val h = (if (obsType == ObstacleType.HIGH_BRANCH) 50f else 60f) * obstacleScaleFactor
                obstacles.add(
                    Obstacle(
                        id = nextObstacleId++,
                        x = 1200f,
                        type = obsType,
                        width = w,
                        height = h
                    )
                )
            }

            // Altın/Palamut Üretimi
            if (spawnTimer % 80 == 0) {
                collectibles.add(
                    Collectible(
                        id = nextCollectibleId++,
                        x = 1200f,
                        y = if (spawnTimer % 160 == 0) 180f else 270f,
                        isAcorn = spawnTimer % 240 == 0
                    )
                )
            }

            // Hareketi İlerlet
            val speed = 8f
            val obsIterator = obstacles.iterator()
            while (obsIterator.hasNext()) {
                val obs = obsIterator.next()
                obs.x -= speed
                if (obs.x < -100f) {
                    obsIterator.remove()
                }
            }

            val colIterator = collectibles.iterator()
            while (colIterator.hasNext()) {
                val col = colIterator.next()
                col.x -= speed
                if (col.x < -100f) {
                    colIterator.remove()
                }
            }

            // Çarpışma ve Tolerans Kontrolleri (%15-20 Tolerans Payı)
            val heroLeft = 140f
            val heroRight = 140f + (if (heroAction == HeroAction.SLIDE) 90f else 60f)
            val heroBottom = 320f - heroYOffset
            val heroTop = heroBottom - (if (heroAction == HeroAction.SLIDE) 40f else 80f)

            // Engellere Çarpışma Kontrolü
            for (obs in obstacles) {
                // Toleranslı Çarpışma Kutusu: Görsel sınırlara %18 tolerans
                val tolerance = 0.18f
                val obsEffectiveWidth = obs.width * (1f - tolerance)
                val obsEffectiveHeight = obs.height * (1f - tolerance)
                val obsLeft = obs.x + (obs.width * tolerance * 0.5f)
                val obsRight = obsLeft + obsEffectiveWidth
                val obsBottom = 320f
                val obsTop = if (obs.type == ObstacleType.HIGH_BRANCH) 320f - 140f else 320f - obsEffectiveHeight

                val isHorizontallyOverlapping = heroRight > obsLeft && heroLeft < obsRight
                val isVerticallyOverlapping = heroBottom > obsTop && heroTop < obsBottom

                if (isHorizontallyOverlapping && isVerticallyOverlapping) {
                    if (!isInvincible) {
                        // Modül 2.2: Otomatik Kalkan Kurtarma (Auto-Shield Rescue)
                        if (shieldsLeft > 0) {
                            shieldsLeft -= 1
                            isInvincible = true
                            showRescueToast = true
                            // 1 saniyelik altın parıltılı dokunulmazlık
                            // hasar alma, oyuna devam et
                        } else {
                            isGameOver = true
                        }
                    }
                }
            }

            // Altın Toplama
            val colCheckIterator = collectibles.iterator()
            while (colCheckIterator.hasNext()) {
                val col = colCheckIterator.next()
                if (abs(col.x - heroLeft) < 50f && abs(col.y - heroTop) < 60f) {
                    coinsCollected += if (col.isAcorn) 5 else 1
                    colCheckIterator.remove()
                }
            }

            // Seviye Zafer Şartı (Örn: 1500 Puan)
            if (score >= 1500) {
                isVictory = true
            }
        }
    }

    // Dokunulmazlık Süresi (1000ms)
    LaunchedEffect(isInvincible) {
        if (isInvincible) {
            delay(1000L)
            isInvincible = false
            showRescueToast = false
        }
    }

    // Zıplama & Eğilme Zamanlayıcısı
    LaunchedEffect(heroAction) {
        if (heroAction == HeroAction.JUMP) {
            // Zıplama animasyonu yükselme ve alçalma
            for (i in 0..10) {
                heroYOffset += 12f
                delay(18L)
            }
            for (i in 0..10) {
                heroYOffset -= 12f
                delay(18L)
            }
            heroYOffset = 0f
            heroAction = HeroAction.RUN
        } else if (heroAction == HeroAction.SLIDE) {
            delay(550L)
            heroAction = HeroAction.RUN
        }
    }

    // Jestler: Swipe Up = Zıpla, Swipe Down = Eğil
    val gestureModifier = Modifier.pointerInput(Unit) {
        detectVerticalDragGestures { _, dragAmount ->
            if (dragAmount < -20f && heroAction == HeroAction.RUN) {
                heroAction = HeroAction.JUMP
            } else if (dragAmount > 20f && heroAction == HeroAction.RUN) {
                heroAction = HeroAction.SLIDE
            }
        }
    }

    BoxWithConstraints(
        modifier = Modifier
            .fillMaxSize()
            .then(gestureModifier)
            .background(
                Brush.verticalGradient(
                    colors = listOf(
                        Color(0xFF81D4FA), // Açık Gökyüzü
                        ForestGreenDark,   // Orman Ağaçları
                        WoodBark           // Zemin Tabanı
                    )
                )
            )
    ) {
        val screenHeight = maxHeight
        val screenWidth = maxWidth

        // 1. Zemin & Dünya Çizimi (Canvas)
        Canvas(modifier = Modifier.fillMaxSize()) {
            val groundY = size.height * 0.78f

            // Arka Plan Ağaç Silüetleri
            drawCircle(
                color = ForestGreenDeep.copy(alpha = 0.5f),
                radius = 180f,
                center = Offset(200f, groundY - 80f)
            )
            drawCircle(
                color = ForestGreenPrimary.copy(alpha = 0.6f),
                radius = 240f,
                center = Offset(600f, groundY - 100f)
            )

            // Toprak Zemin Çizgisi
            drawRect(
                color = WoodBrownDark,
                topLeft = Offset(0f, groundY),
                size = Size(size.width, size.height - groundY)
            )
            // Üst Çim Şeridi
            drawRect(
                color = EmeraldGreen,
                topLeft = Offset(0f, groundY - 10f),
                size = Size(size.width, 10f)
            )

            // Toplanabilir Altın / Palamut Çizimi
            for (col in collectibles) {
                val drawY = groundY - (col.y * (groundY / 420f))
                val drawX = col.x * (size.width / 1200f)
                if (col.isAcorn) {
                    drawCircle(color = AmberOrange, radius = 18f, center = Offset(drawX, drawY))
                } else {
                    drawCircle(color = AmberGold, radius = 14f, center = Offset(drawX, drawY))
                }
            }

            // Engel Çizimi
            for (obs in obstacles) {
                val drawX = obs.x * (size.width / 1200f)
                val obsW = obs.width * (size.width / 1200f)
                val obsH = obs.height * (groundY / 420f)
                if (obs.type == ObstacleType.HIGH_BRANCH) {
                    // Yüksek Dal (Eğilerek geçilir)
                    drawRoundRect(
                        color = WoodBark,
                        topLeft = Offset(drawX, groundY - (obsH * 2.2f)),
                        size = Size(obsW, obsH),
                        cornerRadius = CornerRadius(8f, 8f)
                    )
                } else {
                    // Alçak Kaya / Kütük (Zıplayarak geçilir)
                    drawRoundRect(
                        color = Color(0xFF5D4037),
                        topLeft = Offset(drawX, groundY - obsH),
                        size = Size(obsW, obsH),
                        cornerRadius = CornerRadius(12f, 12f)
                    )
                }
            }
        }

        // 2. Koşan Kahraman (Tilki) & Otomatik Kalkan Aurası
        val heroBottomY = screenHeight * 0.78f
        val heroXPos = if (isLandscape) 120.dp else 60.dp
        val heroActualY = heroBottomY - (heroYOffset.dp) - (if (heroAction == HeroAction.SLIDE) 45.dp else heroSizeDp)

        Box(
            modifier = Modifier
                .padding(start = heroXPos, top = heroActualY)
                .size(heroSizeDp),
            contentAlignment = Alignment.Center
        ) {
            // Dokunulmazlık / Doğa Kalkanı Aurası (Altın Parlama Efekti)
            if (isInvincible) {
                Box(
                    modifier = Modifier
                        .size(heroSizeDp + 24.dp)
                        .clip(CircleShape)
                        .background(
                            Brush.radialGradient(
                                listOf(AmberGold.copy(alpha = 0.8f), ShieldCyan.copy(alpha = 0.4f), Color.Transparent)
                            )
                        )
                        .border(2.dp, AmberGold, CircleShape)
                )
            }

            // Karakter Görseli / Emojisi
            val heroEmoji = when (heroAction) {
                HeroAction.RUN -> "🦊"
                HeroAction.JUMP -> "🦊✨"
                HeroAction.SLIDE -> "🦊💨"
            }
            Text(
                text = heroEmoji,
                fontSize = if (heroAction == HeroAction.SLIDE) 40.sp else if (isLandscape) 64.sp else 52.sp
            )
        }

        // 3. Üst Bilgi Barı (Skor, Altın, Kalkan, Duraklat Butonu)
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 12.dp),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            // Skor & Altın Paneli
            Row(
                modifier = Modifier
                    .clip(RoundedCornerShape(16.dp))
                    .background(Color.Black.copy(alpha = 0.45f))
                    .border(1.dp, AmberGold.copy(alpha = 0.6f), RoundedCornerShape(16.dp))
                    .padding(horizontal = 12.dp, vertical = 6.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(text = "🪙 $coinsCollected", color = AmberGold, fontWeight = FontWeight.Bold, fontSize = 14.sp)
                Spacer(modifier = Modifier.width(12.dp))
                Text(text = "⭐ $score", color = SoftCream, fontWeight = FontWeight.Bold, fontSize = 14.sp)
            }

            // Kurtarma Bildirimi Toast (Auto-Shield Rescue Toast)
            AnimatedVisibility(visible = showRescueToast, enter = fadeIn(), exit = fadeOut()) {
                Box(
                    modifier = Modifier
                        .clip(RoundedCornerShape(12.dp))
                        .background(EmeraldGreen.copy(alpha = 0.9f))
                        .border(1.dp, Color.White, RoundedCornerShape(12.dp))
                        .padding(horizontal = 10.dp, vertical = 4.dp)
                ) {
                    Text(
                        text = "🛡️ KALKAN KURTARDI!",
                        color = Color.White,
                        fontWeight = FontWeight.ExtraBold,
                        fontSize = 11.sp
                    )
                }
            }

            // Duraklat Butonu
            IconButton(
                onClick = { isPaused = true },
                modifier = Modifier
                    .size(40.dp)
                    .clip(CircleShape)
                    .background(Color.Black.copy(alpha = 0.45f))
                    .border(1.dp, AmberGold, CircleShape)
            ) {
                Icon(
                    imageVector = Icons.Default.Pause,
                    contentDescription = "Duraklat",
                    tint = SoftCream
                )
            }
        }

        // 4. Modül 2.1: Zemin Çizgisinin Altında Çift Başparmak Kumandası (Ground Layer Dock)
        // Kahramanın ve engellerin önünü kesinlikle kapatmaz!
        Box(
            modifier = Modifier
                .align(Alignment.BottomCenter)
                .fillMaxWidth()
        ) {
            ThumbDockControls(
                onSlide = {
                    if (heroAction == HeroAction.RUN) {
                        heroAction = HeroAction.SLIDE
                    }
                },
                onJump = {
                    if (heroAction == HeroAction.RUN) {
                        heroAction = HeroAction.JUMP
                    }
                },
                shieldsCount = shieldsLeft,
                isLandscape = isLandscape
            )
        }

        // 5. Popup Pencereleri (Tümünde verticalScroll - Butonlar Asla Taşmaz - Weight Hatası Yok)
        if (isPaused) {
            Dialog(onDismissRequest = { isPaused = false }) {
                Card(
                    modifier = Modifier
                        .fillMaxWidth(0.9f)
                        .heightIn(max = 480.dp),
                    shape = RoundedCornerShape(24.dp),
                    colors = CardDefaults.cardColors(containerColor = WoodBrownDark)
                ) {
                    Column(
                        modifier = Modifier
                            .fillMaxWidth()
                            .verticalScroll(rememberScrollState())
                            .padding(24.dp),
                        horizontalAlignment = Alignment.CenterHorizontally
                    ) {
                        Text(text = "⏸️ OYUN DURAKLATILDI", color = AmberGold, fontSize = 20.sp, fontWeight = FontWeight.Bold)
                        Spacer(modifier = Modifier.height(16.dp))
                        Text(text = "Ormanda mola verdin. Hazır olduğunda devam edebilirsin.", color = SoftCream, textAlign = TextAlign.Center, fontSize = 14.sp)
                        Spacer(modifier = Modifier.height(24.dp))
                        ForestWoodButton(
                            text = "DEVAM ET",
                            icon = Icons.Default.PlayArrow,
                            onClick = { isPaused = false },
                            height = 50.dp
                        )
                        Spacer(modifier = Modifier.height(12.dp))
                        ForestWoodButton(
                            text = "HARİTAYA DÖN",
                            onClick = onBackToMenu,
                            height = 50.dp
                        )
                    }
                }
            }
        }

        // Modül 2.4: Pozitif ve Teşvik Edici Oyun Sonu ("HAYDİ TEKRAR DENE! 🦊")
        if (isGameOver) {
            Dialog(onDismissRequest = {}) {
                Card(
                    modifier = Modifier
                        .fillMaxWidth(0.9f)
                        .heightIn(max = 520.dp),
                    shape = RoundedCornerShape(24.dp),
                    colors = CardDefaults.cardColors(containerColor = WoodBrownDark)
                ) {
                    Column(
                        modifier = Modifier
                            .fillMaxWidth()
                            .verticalScroll(rememberScrollState())
                            .padding(24.dp),
                        horizontalAlignment = Alignment.CenterHorizontally
                    ) {
                        Text(
                            text = "HAYDİ TEKRAR DENE! 🦊",
                            color = AmberGold,
                            fontSize = 22.sp,
                            fontWeight = FontWeight.Black,
                            textAlign = TextAlign.Center
                        )
                        Spacer(modifier = Modifier.height(10.dp))
                        Text(
                            text = "Orman Muhafızı pes etmez, her adım bir macera!",
                            color = SoftCream,
                            fontSize = 14.sp,
                            textAlign = TextAlign.Center,
                            lineHeight = 20.sp
                        )
                        Spacer(modifier = Modifier.height(16.dp))
                        Box(
                            modifier = Modifier
                                .clip(RoundedCornerShape(12.dp))
                                .background(Color.Black.copy(alpha = 0.35f))
                                .padding(horizontal = 20.dp, vertical = 10.dp)
                        ) {
                            Text(
                                text = "Kazanılan Altın: 🪙 $coinsCollected  •  Puan: ⭐ $score",
                                color = EmeraldGreen,
                                fontWeight = FontWeight.Bold,
                                fontSize = 13.sp
                            )
                        }
                        Spacer(modifier = Modifier.height(20.dp))
                        ForestWoodButton(
                            text = "Yeniden Başla",
                            icon = Icons.Default.Refresh,
                            onClick = {
                                score = 0
                                coinsCollected = 0
                                shieldsLeft = gameState.baseShields
                                obstacles.clear()
                                collectibles.clear()
                                heroAction = HeroAction.RUN
                                isGameOver = false
                            },
                            height = 50.dp
                        )
                        Spacer(modifier = Modifier.height(12.dp))
                        ForestWoodButton(
                            text = "Haritaya Dön",
                            onClick = onBackToMenu,
                            height = 50.dp
                        )
                    }
                }
            }
        }

        // Seviye Zafer Ekranı
        if (isVictory) {
            Dialog(onDismissRequest = {}) {
                Card(
                    modifier = Modifier
                        .fillMaxWidth(0.9f)
                        .heightIn(max = 520.dp),
                    shape = RoundedCornerShape(24.dp),
                    colors = CardDefaults.cardColors(containerColor = WoodBrownDark)
                ) {
                    Column(
                        modifier = Modifier
                            .fillMaxWidth()
                            .verticalScroll(rememberScrollState())
                            .padding(24.dp),
                        horizontalAlignment = Alignment.CenterHorizontally
                    ) {
                        Text(text = "🎉 TEBRİKLER KAŞİF!", color = EmeraldGreen, fontSize = 22.sp, fontWeight = FontWeight.Black)
                        Spacer(modifier = Modifier.height(8.dp))
                        Text(text = "Parkuru başarıyla tamamladın ve yeni bir damga kazandın!", color = SoftCream, textAlign = TextAlign.Center, fontSize = 14.sp)
                        Spacer(modifier = Modifier.height(16.dp))
                        ForestWoodButton(
                            text = "ÖDÜLLERİ AL & DEVAM ET",
                            onClick = {
                                onCompleteLevel(coinsCollected, score)
                                onBackToMenu()
                            },
                            height = 50.dp
                        )
                    }
                }
            }
        }
    }
}
