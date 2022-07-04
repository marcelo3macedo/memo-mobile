import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import logo from '@assets/images/logo/logo.png';
import { Picture } from '@components/elements/Picture';
import SideMenuFooter from '@components/containers/navigation/SideMenuFooter';
import { PictureTypes } from '@interfaces/components/pictures/PictureTypes';

import { style } from './styles';
import { global } from '@styles/global';

export default function SideMenu(props:any) {
  const {t} = useTranslation();

  return (
    <View style={style.container}>
      <DrawerContentScrollView 
        contentContainerStyle={style.drawerContent}>
          <View style={style.header}>
            <Picture type={PictureTypes.MEDIUM} source={logo} />
            <Text style={global.textH4Light}>{t('app.name')}</Text>
          </View>
          <View style={style.items}>
            <DrawerItemList {...props} />
          </View>
      </DrawerContentScrollView>
      <SideMenuFooter />
    </View>
  );
}