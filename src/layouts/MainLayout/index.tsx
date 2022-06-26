import React from 'react';
import { View } from 'react-native';

import { PageWrapperProps } from '@interfaces/layouts/PageWrapperProps';

import { style } from './styles';

export function MainLayout({ children }: PageWrapperProps) {
  return (
    <View style={style.container}>
      {children}
    </View>
  )
}