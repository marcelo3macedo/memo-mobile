import { Icon } from '@components/elements/Icon';
import React from 'react';
import { View } from 'react-native';

import BackIcon from '@assets/icons/back.svg';

import { style } from './styles';

export default function HeaderWithBack() {
  return (
    <View style={style.container}>
      <Icon source={BackIcon} />
    </View>
  );
}