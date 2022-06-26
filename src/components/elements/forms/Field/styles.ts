import { ColorPalette } from '@interfaces/styles/ColorPalette';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
      paddingTop: 5,
      paddingBottom: 5,
      maxWidth: '100%'
    },
    textInput: {
      height: 56,
      paddingHorizontal: 20,
      backgroundColor: ColorPalette.SECONDARY15,
      borderRadius: 5,
      color: ColorPalette.PRIMARY
    },
})