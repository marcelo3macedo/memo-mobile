import { ColorPalette } from '@interfaces/styles/ColorPalette';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
      flex: 1
    },
    drawerContent: {
      backgroundColor: ColorPalette.SECONDARYDARK
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      padding: 20
    },
    items: {
      flex: 1, 
      backgroundColor: ColorPalette.NEUTRAL10, 
      paddingTop: 10
    },
    footer: {
      padding: 20, 
      borderTopWidth: 1, 
      borderTopColor: ColorPalette.NEUTRAL80
    },
    footerItem: {
      paddingVertical: 15
    },
    footerItemElement: {
      flexDirection: 'row',
      alignItems: 'center'
    }
})