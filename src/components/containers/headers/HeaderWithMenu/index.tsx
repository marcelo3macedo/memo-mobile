import React from 'react';
import { View } from 'react-native';

import ListIcon from '@assets/icons/list.svg';
import { Icon } from '@components/elements/Icon';

import { style } from './styles';

export default function HeaderWithMenu() {
  return (
    <View style={style.container}>
      <Icon source={ListIcon} />
    </View>
  );
}