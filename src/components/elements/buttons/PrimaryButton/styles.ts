import { ColorPalette } from '@interfaces/styles/ColorPalette';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: ColorPalette.SECONDARYDARK,
      alignItems: 'center',
      padding: 10,
      borderRadius: 10
    },
    text: {
      color: ColorPalette.NEUTRAL10,
      fontWeight: 'bold'
    }
})