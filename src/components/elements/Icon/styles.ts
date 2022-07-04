import { IconStylesProps } from '@interfaces/components/icon/IconStylesProps';
import { IconTypes } from '@interfaces/components/icon/IconTypes';
import { ColorPalette } from '@interfaces/styles/ColorPalette';
import { StyleSheet } from 'react-native';

export const sizes = class StyleSheetFactory {  
  static getByType({ type }:IconStylesProps) {
    let width, height;

    switch (type) {
      case IconTypes.SMALL:
        width = 26;
        height = 26;
        break;
      default:
        width = 64;
        height = 64;
        break;
    }

    return {
      width,
      height
    }
  }
}

export const style = StyleSheet.create({
    light: {
      fill: ColorPalette.NEUTRAL90
    }
})