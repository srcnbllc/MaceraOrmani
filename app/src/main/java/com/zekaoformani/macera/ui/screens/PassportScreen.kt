package com.zekaoformani.macera.ui.screens

import android.content.res.Configuration
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.Lock
import androidx.compose.material.icons.filled.Verified
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.zekaoformani.macera.data.models.GameState
import com.zekaoformani.macera.data.models.Zone
import com.zekaoformani.macera.ui.components.ZoneDiscoveryDialog
import com.zekaoformani.macera.ui.theme.AmberGold
import com.zekaoformani.macera.ui.theme.EmeraldGreen
import com.zekaoformani.macera.ui.theme.ForestGreenDark
import com.zekaoformani.macera.ui.theme.ForestGreenDeep
import com.zekaoformani.macera.ui.theme.SoftCream
import com.zekaoformani.macera.ui.theme.WoodBark
import com.zekaoformani.macera.ui.theme.WoodBrownDark

@Composable
fun PassportScreen(
    zones: List<Zone>,
    gameState: GameState,
    onBack: () -> Unit,
    onPlayZone: (Zone) -> Unit
) {
    val configuration = LocalConfiguration.current
    val isLandscape = configuration.orientation == Configuration.ORIENTATION_LANDSCAPE
    val gridColumns = if (isLandscape) 4 else 2

    var selectedZoneForDialog by remember { mutableStateOf<Zone?>(null) }

    val backgroundGradient = Brush.verticalGradient(
        colors = listOf(ForestGreenDeep, ForestGreenDark, WoodBark)
    )

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(backgroundGradient)
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(16.dp)
        ) {
            // Üst Başlık Barı
            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically
            ) {
                IconButton(
                    onClick = onBack,
                    modifier = Modifier
                        .size(42.dp)
                        .clip(CircleShape)
                        .background(Color.Black.copy(alpha = 0.4f))
                        .border(1.dp, AmberGold, CircleShape)
                ) {
                    Icon(
                        imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                        contentDescription = "Geri",
                        tint = SoftCream
                    )
                }
                Spacer(modifier = Modifier.width(12.dp))
                Column {
                    Text(
                        text = "📜 DOĞA PUL DEFTERİ (PASAPORT)",
                        color = AmberGold,
                        fontSize = if (isLandscape) 18.sp else 20.sp,
                        fontWeight = FontWeight.Black
                    )
                    Text(
                        text = "Kent Ormanı'ndaki 10 Durağın Damgalarını Topla!",
                        color = SoftCream.copy(alpha = 0.8f),
                        fontSize = 12.sp
                    )
                }
            }

            Spacer(modifier = Modifier.height(16.dp))

            // İlerleme Özeti
            val unlockedCount = zones.count { gameState.unlockedZoneIds.contains(it.id) || it.isUnlockedByDefault }
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(16.dp))
                    .background(Color.Black.copy(alpha = 0.4f))
                    .border(1.dp, EmeraldGreen.copy(alpha = 0.5f), RoundedCornerShape(16.dp))
                    .padding(horizontal = 16.dp, vertical = 10.dp)
            ) {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(
                        text = "Keşfedilen Duraklar: $unlockedCount / ${zones.size}",
                        color = SoftCream,
                        fontWeight = FontWeight.Bold,
                        fontSize = 13.sp
                    )
                    Text(
                        text = if (unlockedCount == zones.size) "🏆 ORMAN MUHAFIZI" else "🌲 Keşfe Devam",
                        color = AmberGold,
                        fontWeight = FontWeight.ExtraBold,
                        fontSize = 12.sp
                    )
                }
            }

            Spacer(modifier = Modifier.height(14.dp))

            // Modül 3.4: Dikeyde 2 Sütun, Yatayda 4 Sütun Dinamik Izgara Düzeni
            LazyVerticalGrid(
                columns = GridCells.Fixed(gridColumns),
                contentPadding = PaddingValues(bottom = 24.dp),
                horizontalArrangement = Arrangement.spacedBy(12.dp),
                verticalArrangement = Arrangement.spacedBy(12.dp),
                modifier = Modifier.fillMaxSize()
            ) {
                items(zones) { zone ->
                    val isUnlocked = gameState.unlockedZoneIds.contains(zone.id) || zone.isUnlockedByDefault

                    Card(
                        modifier = Modifier
                            .fillMaxWidth()
                            .height(if (isLandscape) 170.dp else 190.dp)
                            .clip(RoundedCornerShape(16.dp))
                            .clickable { selectedZoneForDialog = zone },
                        colors = CardDefaults.cardColors(
                            containerColor = if (isUnlocked) WoodBrownDark else Color(0xFF2C241E)
                        ),
                        elevation = CardDefaults.cardElevation(6.dp)
                    ) {
                        Box(
                            modifier = Modifier
                                .fillMaxSize()
                                .border(
                                    width = 2.dp,
                                    color = if (isUnlocked) AmberGold else Color.Gray.copy(alpha = 0.4f),
                                    shape = RoundedCornerShape(16.dp)
                                )
                                .padding(12.dp),
                            contentAlignment = Alignment.Center
                        ) {
                            Column(
                                horizontalAlignment = Alignment.CenterHorizontally,
                                verticalArrangement = Arrangement.Center
                            ) {
                                // Damga / Pul Rozeti
                                Box(
                                    modifier = Modifier
                                        .size(if (isLandscape) 52.dp else 60.dp)
                                        .clip(CircleShape)
                                        .background(
                                            if (isUnlocked) Brush.radialGradient(listOf(EmeraldGreen, ForestGreenDark))
                                            else Brush.radialGradient(listOf(Color.DarkGray, Color.Black))
                                        )
                                        .border(2.dp, if (isUnlocked) AmberGold else Color.Gray, CircleShape),
                                    contentAlignment = Alignment.Center
                                ) {
                                    if (isUnlocked) {
                                        Icon(
                                            imageVector = Icons.Default.Verified,
                                            contentDescription = "Açık",
                                            tint = AmberGold,
                                            modifier = Modifier.size(30.dp)
                                        )
                                    } else {
                                        Icon(
                                            imageVector = Icons.Default.Lock,
                                            contentDescription = "Kilitli",
                                            tint = Color.LightGray,
                                            modifier = Modifier.size(24.dp)
                                        )
                                    }
                                }

                                Spacer(modifier = Modifier.height(8.dp))

                                Text(
                                    text = "Durak #${zone.orderIndex}",
                                    color = if (isUnlocked) AmberGold else Color.LightGray,
                                    fontSize = 11.sp,
                                    fontWeight = FontWeight.Bold
                                )

                                Text(
                                    text = zone.name,
                                    color = SoftCream,
                                    fontSize = if (isLandscape) 12.sp else 13.sp,
                                    fontWeight = FontWeight.Bold,
                                    textAlign = TextAlign.Center,
                                    maxLines = 2
                                )

                                Spacer(modifier = Modifier.height(4.dp))

                                Text(
                                    text = if (isUnlocked) "✓ KİLİT AÇIK" else "📷 QR İLE AÇ",
                                    color = if (isUnlocked) EmeraldGreen else AmberGold,
                                    fontSize = 10.sp,
                                    fontWeight = FontWeight.ExtraBold
                                )
                            }
                        }
                    }
                }
            }
        }

        // Durak Detay ve QR Tarama Modalı (Modül 3.3)
        selectedZoneForDialog?.let { zone ->
            val isUnlocked = gameState.unlockedZoneIds.contains(zone.id) || zone.isUnlockedByDefault
            ZoneDiscoveryDialog(
                zone = zone,
                onDismiss = { selectedZoneForDialog = null },
                onScanQR = {
                    // QR Okutulduğunda kilit açılır
                    selectedZoneForDialog = null
                    onPlayZone(zone)
                },
                onPlayLevel = {
                    selectedZoneForDialog = null
                    onPlayZone(zone)
                },
                isUnlocked = isUnlocked
            )
        }
    }
}
