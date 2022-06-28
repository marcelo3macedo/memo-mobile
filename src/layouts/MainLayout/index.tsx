import React from 'react';
import { ScrollView } from 'react-native';

import Header from '@components/containers/headers/Header';
import { PageWrapperProps } from '@interfaces/layouts/PageWrapperProps';

import { style } from './styles';

export function MainLayout({ children, isHome }: PageWrapperProps) {
  return (
    <ScrollView style={style.container}>
      <Header isHome={isHome} />
      {children}
    </ScrollView>
  )
}