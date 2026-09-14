package com.zekaoformani.macera.ui.screens

import android.content.res.Configuration
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.CardGiftcard
import androidx.compose.material.icons.filled.Explore
import androidx.compose.material.icons.filled.Map
import androidx.compose.material.icons.filled.PlayArrow
import androidx.compose.material.icons.filled.Settings
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.zekaoformani.macera.data.models.GameState
import com.zekaoformani.macera.ui.components.ForestWoodButton
import com.zekaoformani.macera.ui.theme.AmberGold
import com.zekaoformani.macera.ui.theme.EmeraldGreen
import com.zekaoformani.macera.ui.theme.ForestGreenDark
import com.zekaoformani.macera.ui.theme.ForestGreenDeep
import com.zekaoformani.macera.ui.theme.SoftCream
import com.zekaoformani.macera.ui.theme.WoodBark
import com.zekaoformani.macera.ui.theme.WoodBrownDark

@Composable
fun MainMenuScreen(
    gameState: GameState,
    onStartGame: () -> Unit,
    onOpenPassport: () -> Unit,
    onOpenRewards: () -> Unit,
    onOpenOnboarding: () -> Unit
) {
    val configuration = LocalConfiguration.current
    val isLandscape = configuration.orientation == Configuration.ORIENTATION_LANDSCAPE
    val buttonHeight: Dp = if (isLandscape) 52.dp else 66.dp

    val backgroundGradient = Brush.verticalGradient(
        colors = listOf(
            ForestGreenDeep,
            ForestGreenDark,
            WoodBark
        )
    )

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(backgroundGradient)
    ) {
        // Ana Menü Kolonu: verticalScroll ile kaydırılabilir, KESİNLİKLE weight() kullanılmaz!
        Column(
            modifier = Modifier
                .fillMaxSize()
                .verticalScroll(rememberScrollState())
                .padding(horizontal = if (isLandscape) 40.dp else 24.dp, vertical = 16.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            // İBB & Boğaziçi Yönetim Kurumsal Üst Başlık Barı
            Box(
                modifier = Modifier
                    .clip(RoundedCornerShape(20.dp))
                    .background(Color.Black.copy(alpha = 0.45f))
                    .border(1.dp, AmberGold.copy(alpha = 0.5f), RoundedCornerShape(20.dp))
                    .padding(horizontal = 16.dp, vertical = 6.dp)
            ) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Text(
                        text = "İBB",
                        color = AmberGold,
                        fontWeight = FontWeight.Black,
                        fontSize = 12.sp
                    )
                    Text(text = " • ", color = SoftCream, fontSize = 12.sp)
                    Text(
                        text = "BOĞAZİÇİ YÖNETİM",
                        color = SoftCream,
                        fontWeight = FontWeight.Bold,
                        fontSize = 11.sp
                    )
                    Text(text = " • ", color = SoftCream, fontSize = 12.sp)
                    Text(
                        text = "KEMERBURGAZ KENT ORMANI",
                        color = EmeraldGreen,
                        fontWeight = FontWeight.Bold,
                        fontSize = 11.sp
                    )
                }
            }

            Spacer(modifier = Modifier.height(14.dp))

            // Ahşap Profil Hapı (Kaşif Adı & Avatar)
            Box(
                modifier = Modifier
                    .clip(RoundedCornerShape(30.dp))
                    .background(WoodBrownDark)
                    .border(2.dp, AmberGold, RoundedCornerShape(30.dp))
                    .clickable { onOpenOnboarding() }
                    .padding(horizontal = 16.dp, vertical = 8.dp)
            ) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Text(text = "🦊", fontSize = 24.sp)
                    Spacer(modifier = Modifier.width(10.dp))
                    Column {
                        Text(
                            text = "ORMAN KAŞİFİ",
                            color = AmberGold,
                            fontSize = 10.sp,
                            fontWeight = FontWeight.Bold
                        )
                        Text(
                            text = gameState.explorerName,
                            color = SoftCream,
                            fontSize = 15.sp,
                            fontWeight = FontWeight.Bold
                        )
                    }
                    Spacer(modifier = Modifier.width(12.dp))
                    Text(text = "✏️", fontSize = 14.sp)
                }
            }

            Spacer(modifier = Modifier.height(14.dp))

            // Sayaç Panoları: Altın ve Rekor Puan
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.Center
            ) {
                // Altın Kutusu
                Box(
                    modifier = Modifier
                        .clip(RoundedCornerShape(16.dp))
                        .background(Color.Black.copy(alpha = 0.5f))
                        .border(1.5.dp, AmberGold, RoundedCornerShape(16.dp))
                        .padding(horizontal = 16.dp, vertical = 6.dp)
                ) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Text(text = "🪙", fontSize = 18.sp)
                        Spacer(modifier = Modifier.width(6.dp))
                        Text(
                            text = "${gameState.coins}",
                            color = AmberGold,
                            fontSize = 16.sp,
                            fontWeight = FontWeight.ExtraBold
                        )
                    }
                }

                Spacer(modifier = Modifier.width(16.dp))

                // Puan Kutusu
                Box(
                    modifier = Modifier
                        .clip(RoundedCornerShape(16.dp))
                        .background(Color.Black.copy(alpha = 0.5f))
                        .border(1.5.dp, EmeraldGreen, RoundedCornerShape(16.dp))
                        .padding(horizontal = 16.dp, vertical = 6.dp)
                ) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Text(text = "⭐", fontSize = 18.sp)
                        Spacer(modifier = Modifier.width(6.dp))
                        Text(
                            text = "${gameState.highScore} Puan",
                            color = EmeraldGreen,
                            fontSize = 16.sp,
                            fontWeight = FontWeight.ExtraBold
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.height(if (isLandscape) 12.dp else 24.dp))

            // Ana Başlık
            Text(
                text = "MACERA ORMANI",
                color = AmberGold,
                fontSize = if (isLandscape) 24.sp else 30.sp,
                fontWeight = FontWeight.Black,
                letterSpacing = 2.sp
            )
            Text(
                text = "Kemerburgaz'ın Gizemli Patikaları",
                color = SoftCream.copy(alpha = 0.9f),
                fontSize = if (isLandscape) 13.sp else 15.sp,
                fontWeight = FontWeight.Medium
            )

            Spacer(modifier = Modifier.height(if (isLandscape) 16.dp else 26.dp))

            // 4 Adet Ana Menü Ahşap Butonları (Yatay: 52dp, Dikey: 66dp)
            ForestWoodButton(
                text = "MACERAYA BAŞLA",
                icon = Icons.Default.PlayArrow,
                onClick = onStartGame,
                height = buttonHeight
            )

            Spacer(modifier = Modifier.height(12.dp))

            ForestWoodButton(
                text = "PUL DEFTERİ (PASAPORT)",
                icon = Icons.Default.Map,
                onClick = onOpenPassport,
                height = buttonHeight
            )

            Spacer(modifier = Modifier.height(12.dp))

            ForestWoodButton(
                text = "ORMAN ÖDÜLLERİ & KUPONLAR",
                icon = Icons.Default.CardGiftcard,
                onClick = onOpenRewards,
                height = buttonHeight
            )

            Spacer(modifier = Modifier.height(12.dp))

            ForestWoodButton(
                text = "KAŞİF AYARLARI & PROFİL",
                icon = Icons.Default.Settings,
                onClick = onOpenOnboarding,
                height = buttonHeight
            )

            Spacer(modifier = Modifier.height(16.dp))

            // Yatay modda menü butonlarının üzerine binen alt dekoratif maskotlar YALNIZCA dikey modda gösterilir!
            if (!isLandscape) {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceEvenly,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(text = "🍄", fontSize = 32.sp)
                    Text(text = "🦊", fontSize = 48.sp)
                    Text(text = "🪵", fontSize = 32.sp)
                }
                Spacer(modifier = Modifier.height(12.dp))
            }
        }
    }
}
