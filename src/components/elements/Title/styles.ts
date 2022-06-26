import { ColorPalette } from '@interfaces/styles/ColorPalette';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
      padding: 10,
    },
    text: {
      color: ColorPalette.SECONDARYDARK,
      fontWeight: 'bold',
      fontSize: 28
    }
})