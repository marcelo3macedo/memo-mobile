import { ColorPalette } from '@interfaces/styles/ColorPalette';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
      padding: 20, 
      borderTopWidth: 1, 
      borderTopColor: ColorPalette.NEUTRAL80
    },
    item: {
      paddingVertical: 15
    },
    element: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    textArea: {
      paddingHorizontal: 10
    }
})