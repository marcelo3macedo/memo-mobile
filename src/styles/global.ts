import { ColorPalette } from '@interfaces/styles/ColorPalette';
import { StyleSheet } from 'react-native';

export const global = StyleSheet.create({
    textSmall: {
      fontSize: 12,
      fontWeight: 'bold',
      color: ColorPalette.NEUTRAL90
    },
    textMedium: {
      fontSize: 16,
      color: ColorPalette.NEUTRAL90
    },
    textMediumHighlight: {
      fontSize: 16,
      fontWeight: 'bold',
      color: ColorPalette.SECONDARYDARK,
      textDecorationLine: 'underline',
    },
    buttonPrimary: {
      backgroundColor: ColorPalette.SECONDARYDARK
    }
})