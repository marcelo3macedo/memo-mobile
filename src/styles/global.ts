import { ColorPalette } from '@interfaces/styles/ColorPalette';
import { StyleSheet } from 'react-native';

export const global = StyleSheet.create({
    textH2Light: {
      fontSize: 28,
      fontWeight: 'bold',
      color: ColorPalette.NEUTRAL10,
      fontFamily: 'RobotoSlab-Regular'
    },
    textH4Light: {
      fontSize: 24,
      fontWeight: 'bold',
      letterSpacing: 1,
      color: ColorPalette.NEUTRAL10,
      fontFamily: 'RobotoSlab-Regular'
    },
    textH6Dark: {
      fontSize: 14,
      color: ColorPalette.NEUTRAL90,
      fontFamily: 'RobotoSlab-Regular'
    },
    buttonPrimary: {
      backgroundColor: ColorPalette.SECONDARYDARK
    }
})