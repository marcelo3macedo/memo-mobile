import React from 'react';
import { ScrollView } from 'react-native';

import { PageWrapperProps } from '@interfaces/layouts/PageWrapperProps';

import { style } from './styles';

export function MainLayout({ children }: PageWrapperProps) {
  return (
    <ScrollView style={style.container}>
      {children}
    </ScrollView>
  )
}