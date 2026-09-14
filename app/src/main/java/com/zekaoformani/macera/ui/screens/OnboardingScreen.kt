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
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.Check
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.OutlinedTextFieldDefaults
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
import com.zekaoformani.macera.data.models.Hero
import com.zekaoformani.macera.ui.components.ForestWoodButton
import com.zekaoformani.macera.ui.theme.AmberGold
import com.zekaoformani.macera.ui.theme.EmeraldGreen
import com.zekaoformani.macera.ui.theme.ForestGreenDark
import com.zekaoformani.macera.ui.theme.ForestGreenDeep
import com.zekaoformani.macera.ui.theme.SoftCream
import com.zekaoformani.macera.ui.theme.WoodBark
import com.zekaoformani.macera.ui.theme.WoodBrownDark

@Composable
fun OnboardingScreen(
    currentExplorerName: String,
    currentHeroId: String,
    onSaveProfile: (String, String) -> Unit,
    onBack: () -> Unit
) {
    val configuration = LocalConfiguration.current
    val isLandscape = configuration.orientation == Configuration.ORIENTATION_LANDSCAPE

    var explorerName by remember { mutableStateOf(currentExplorerName) }
    var selectedHeroId by remember { mutableStateOf(currentHeroId) }

    val backgroundGradient = Brush.verticalGradient(
        colors = listOf(ForestGreenDeep, ForestGreenDark, WoodBark)
    )

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(backgroundGradient)
    ) {
        // Modül 3.5: Tanıtım kartının orta alanına verticalScroll eklendi, weight() kesinlikle yok!
        Column(
            modifier = Modifier
                .fillMaxSize()
                .verticalScroll(rememberScrollState())
                .padding(horizontal = if (isLandscape) 40.dp else 20.dp, vertical = 16.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            // Üst Bar
            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically
            ) {
                IconButton(
                    onClick = onBack,
                    modifier = Modifier
                        .size(40.dp)
                        .clip(CircleShape)
                        .background(Color.Black.copy(alpha = 0.4f))
                        .border(1.dp, AmberGold, CircleShape)
                ) {
                    Icon(imageVector = Icons.AutoMirrored.Filled.ArrowBack, contentDescription = "Geri", tint = SoftCream)
                }
                Spacer(modifier = Modifier.width(12.dp))
                Text(
                    text = "🌲 KAŞİF PROFİLİ & AYARLAR",
                    color = AmberGold,
                    fontSize = 18.sp,
                    fontWeight = FontWeight.Black
                )
            }

            Spacer(modifier = Modifier.height(16.dp))

            // Tanıtım Kartı
            Card(
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(20.dp),
                colors = CardDefaults.cardColors(containerColor = WoodBrownDark)
            ) {
                Column(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(18.dp),
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Text(
                        text = "Kemerburgaz Kent Ormanı'na Hoş Geldin!",
                        color = AmberGold,
                        fontSize = 17.sp,
                        fontWeight = FontWeight.Bold,
                        textAlign = TextAlign.Center
                    )
                    Spacer(modifier = Modifier.height(8.dp))
                    Text(
                        text = "Doğanın içinde koşarken sana rehberlik edecek kahramanını seç ve ormandaki kaşif adını belirle.",
                        color = SoftCream.copy(alpha = 0.9f),
                        fontSize = 13.sp,
                        textAlign = TextAlign.Center,
                        lineHeight = 18.sp
                    )
                }
            }

            Spacer(modifier = Modifier.height(16.dp))

            // Kaşif Adı Girişi
            OutlinedTextField(
                value = explorerName,
                onValueChange = { explorerName = it },
                label = { Text("Orman Kaşifinin Adı", color = AmberGold) },
                singleLine = true,
                colors = OutlinedTextFieldDefaults.colors(
                    focusedBorderColor = AmberGold,
                    unfocusedBorderColor = EmeraldGreen,
                    focusedTextColor = SoftCream,
                    unfocusedTextColor = SoftCream,
                    cursorColor = AmberGold
                ),
                shape = RoundedCornerShape(14.dp),
                modifier = Modifier.fillMaxWidth()
            )

            Spacer(modifier = Modifier.height(20.dp))

            // Kahraman Seçimi Başlığı
            Text(
                text = "KAHRAMANINI SEÇ",
                color = AmberGold,
                fontSize = 16.sp,
                fontWeight = FontWeight.Bold,
                letterSpacing = 1.sp
            )

            Spacer(modifier = Modifier.height(12.dp))

            // Kahraman Kartları Listesi
            Hero.ALL_HEROES.forEach { hero ->
                val isSelected = hero.id == selectedHeroId

                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(vertical = 5.dp)
                        .clip(RoundedCornerShape(16.dp))
                        .background(if (isSelected) EmeraldGreen.copy(alpha = 0.25f) else Color.Black.copy(alpha = 0.35f))
                        .border(
                            width = if (isSelected) 2.dp else 1.dp,
                            color = if (isSelected) AmberGold else Color.Gray.copy(alpha = 0.4f),
                            shape = RoundedCornerShape(16.dp)
                        )
                        .clickable { selectedHeroId = hero.id }
                        .padding(12.dp)
                ) {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        Text(text = hero.emoji, fontSize = 34.sp)
                        Spacer(modifier = Modifier.width(14.dp))
                        Column(modifier = Modifier.weight(1f)) {
                            Text(
                                text = hero.name,
                                color = SoftCream,
                                fontSize = 15.sp,
                                fontWeight = FontWeight.Bold
                            )
                            Text(
                                text = hero.specialAbility,
                                color = AmberGold,
                                fontSize = 12.sp
                            )
                        }
                        if (isSelected) {
                            Icon(
                                imageVector = Icons.Default.Check,
                                contentDescription = "Seçildi",
                                tint = EmeraldGreen,
                                modifier = Modifier.size(24.dp)
                            )
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.height(20.dp))

            // Kaydet Butonu
            ForestWoodButton(
                text = "KAYDET VE ORMANA DÖN 🌲",
                onClick = {
                    onSaveProfile(explorerName.ifBlank { "Orman Kaşifi" }, selectedHeroId)
                    onBack()
                },
                height = 54.dp
            )

            Spacer(modifier = Modifier.height(24.dp))
        }
    }
}
