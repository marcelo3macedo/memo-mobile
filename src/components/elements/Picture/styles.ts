import { StyleSheet } from 'react-native';
import { PictureStylesProps } from '@interfaces/components/pictures/PictureStylesProps';
import { PictureTypes } from '@interfaces/components/pictures/PictureTypes';

export const styles = class StyleSheetFactory {  
  static getByType({ type }:PictureStylesProps) {
    let style;

    switch (type) {
      case PictureTypes.SMALL:
        style = StyleSheet.create({
          picture: {
            flex: 1,
            resizeMode: 'contain',
            maxWidth: 150
          }
        })
        break;
      case PictureTypes.FIXED_RIGHT:
        style = StyleSheet.create({
          picture: {
            position: 'absolute',
            right: 0,
            top: 0,
            width: '50%',
            maxHeight: '45%',
            resizeMode: 'stretch'
          }
        })
        break;
      default:
        style = StyleSheet.create({
          picture: {
            flex: 1,
            resizeMode: 'contain',
            maxWidth: '100%'
          }
        })
        break;
    }

    return style
  }
}