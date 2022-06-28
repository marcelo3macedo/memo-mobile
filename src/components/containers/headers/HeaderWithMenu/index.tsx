import React from 'react';
import { View } from 'react-native';

import ListIcon from '@assets/icons/list.svg';
import { Icon } from '@components/elements/Icon';

import { style } from './styles';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export default function HeaderWithMenu() {
  const navigation = useNavigation();

  function openMenuAction() {
    navigation.dispatch(DrawerActions.openDrawer())
  }

  return (
    <View style={style.container}>
      <Icon source={ListIcon} onPressAction={openMenuAction} />
    </View>
  );
}