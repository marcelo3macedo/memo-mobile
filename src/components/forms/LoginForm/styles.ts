import { ColorPalette } from '@interfaces/styles/ColorPalette';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: ColorPalette.NEUTRAL10,
      justifyContent: 'center',
      width: '80%',
      padding: 20
    },
    fields: {
      paddingTop: 20,
      paddingBottom: 10,
      maxWidth: '100%'
    }
})