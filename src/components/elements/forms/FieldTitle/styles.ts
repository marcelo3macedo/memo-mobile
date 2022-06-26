import { ColorPalette } from '@interfaces/styles/ColorPalette';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
      padding: 5
    },
    textInput: {
      color: ColorPalette.NEUTRAL90,
      fontSize: 12,
      fontWeight: 'bold'
    },
})