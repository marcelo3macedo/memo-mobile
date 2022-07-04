import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native-gesture-handler';

import LogoutIcon from '@assets/icons/logout.svg';
import { Icon } from '@components/elements/Icon';

import { style } from './styles';
import { global } from '@styles/global';
import { IconTypes } from '@interfaces/components/icon/IconTypes';

export default function SideMenuFooter() {
  const {t} = useTranslation();

  return (
      <View style={style.container}>
        <TouchableOpacity style={style.item}>
          <View style={style.element}>
            <Icon source={LogoutIcon} type={IconTypes.SMALL} />
            <View style={style.textArea}>
              <Text style={global.textH6Dark}>{t('auth.logout')}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
  );
}