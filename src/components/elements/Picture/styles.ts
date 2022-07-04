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
            maxWidth: 150,
            height: 150
          }
        })
        break;
      case PictureTypes.MEDIUM:
          style = StyleSheet.create({
            picture: {
              display: 'flex',
              resizeMode: 'contain',
              width: '100%',
              height: 100
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
      case PictureTypes.FIXED_CENTERED:
        style = StyleSheet.create({
          picture: {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: 200,
            resizeMode: 'contain'
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