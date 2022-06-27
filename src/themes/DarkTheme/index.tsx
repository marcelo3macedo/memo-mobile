import React from 'react';
import { StatusBar, View } from 'react-native';

import { PageWrapperProps } from '@interfaces/layouts/PageWrapperProps';
import { style } from './styles';

export function DarkTheme({ children }: PageWrapperProps) {
  return (
    <View style={style.container}>
      <StatusBar 
        barStyle="dark-content" 
        translucent 
        backgroundColor="transparent" 
      />
      {children}
    </View>
  )
}