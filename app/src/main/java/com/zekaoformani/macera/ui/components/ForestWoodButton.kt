package com.zekaoformani.macera.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.material.ripple.rememberRipple
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.zekaoformani.macera.ui.theme.AmberGold
import com.zekaoformani.macera.ui.theme.SoftCream
import com.zekaoformani.macera.ui.theme.WoodBark
import com.zekaoformani.macera.ui.theme.WoodBrown
import com.zekaoformani.macera.ui.theme.WoodBrownDark

@Composable
fun ForestWoodButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    icon: ImageVector? = null,
    iconEmoji: String? = null,
    height: Dp = 66.dp,
    enabled: Boolean = true
) {
    val shape = RoundedCornerShape(16.dp)
    val woodGradient = Brush.verticalGradient(
        colors = listOf(
            WoodBrown,
            WoodBrownDark,
            WoodBark
        )
    )

    Box(
        modifier = modifier
            .fillMaxWidth()
            .height(height)
            .shadow(elevation = 6.dp, shape = shape)
            .clip(shape)
            .background(woodGradient)
            .border(
                width = 2.dp,
                brush = Brush.verticalGradient(listOf(AmberGold, WoodBrown)),
                shape = shape
            )
            .clickable(
                enabled = enabled,
                interactionSource = remember { MutableInteractionSource() },
                indication = rememberRipple(color = AmberGold),
                onClick = onClick
            ),
        contentAlignment = Alignment.Center
    ) {
        Row(
            verticalAlignment = Alignment.CenterVertically,
            modifier = Modifier.padding(horizontal = 16.dp)
        ) {
            if (iconEmoji != null) {
                Text(text = iconEmoji, fontSize = 22.sp)
                Spacer(modifier = Modifier.width(10.dp))
            } else if (icon != null) {
                Icon(
                    imageVector = icon,
                    contentDescription = null,
                    tint = AmberGold,
                    modifier = Modifier.size(24.dp)
                )
                Spacer(modifier = Modifier.width(10.dp))
            }
            Text(
                text = text,
                color = SoftCream,
                fontWeight = FontWeight.Bold,
                fontSize = if (height < 60.dp) 15.sp else 17.sp,
                letterSpacing = 0.5.sp
            )
        }
    }
}
