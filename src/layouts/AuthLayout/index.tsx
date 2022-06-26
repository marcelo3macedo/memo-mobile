import React from 'react';
import { View } from 'react-native';

import background from '@assets/images/pages/auth/background.png';
import { Picture } from '@components/elements/Picture';
import { PageWrapperProps } from '@interfaces/layouts/PageWrapperProps';
import { PictureTypes } from '@interfaces/components/pictures/PictureTypes';

import { style } from './styles';

export function AuthLayout({ children }: PageWrapperProps) {
  return (
    <View style={style.container}>
      <Picture source={background} type={PictureTypes.FIXED_RIGHT}/>
      {children}
    </View>
  )
}