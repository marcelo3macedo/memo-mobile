import { Icon } from '@components/elements/Icon';
import React from 'react';
import { View } from 'react-native';

import BackIcon from '@assets/icons/back.svg';

import { style } from './styles';

export default function HeaderWithBack() {
  function backAction() {
    console.log("open menu action")
  }

  return (
    <View style={style.container}>
      <Icon source={BackIcon} onPressAction={backAction} />
    </View>
  );
}