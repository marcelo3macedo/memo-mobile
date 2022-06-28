import { ColorPalette } from '@interfaces/styles/ColorPalette';
import { FontSize } from '@interfaces/styles/FontSize';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
      padding: 10,
      alignItems: 'center'
    },
    text: {
      color: ColorPalette.PRIMARY,
      fontSize: FontSize.H2,
      fontFamily: 'RobotoSlab-Regular'
    }
})