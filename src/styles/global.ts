import { ColorPalette } from '@interfaces/styles/ColorPalette';
import { StyleSheet } from 'react-native';

export const global = StyleSheet.create({
    textH2Light: {
      fontSize: 28,
      fontWeight: 'bold',
      color: ColorPalette.PRIMARY,
      fontFamily: 'RobotoSlab-Regular'
    },
    buttonPrimary: {
      backgroundColor: ColorPalette.SECONDARYDARK
    }
})