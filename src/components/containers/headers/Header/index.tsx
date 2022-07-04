import React from 'react';
import { View } from 'react-native';

import HeaderWithBack from '../HeaderWithBack';
import HeaderWithMenu from '../HeaderWithMenu';

import { style } from './styles';

export default function Header({ isHome }:any) {
  const header = isHome ? <HeaderWithMenu/> : <HeaderWithBack />;

  return (
    <View style={style.container}>
      {header}
    </View>
  )
}