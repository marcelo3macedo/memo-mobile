import { global } from '@styles/global';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import background from '@assets/images/pages/auth/background.png';
import { Picture } from '@components/elements/Picture';
import { PictureTypes } from '@interfaces/components/pictures/PictureTypes';

import { style } from './styles';

export default function WelcomeMessage({ name }:any) {
  const { t } = useTranslation();

  return (
    <View style={style.container}>
      <Picture source={background} type={PictureTypes.FIXED_CENTERED}/>
      <Text style={global.textH2Light}>{t('welcome.title')}{name}</Text>
    </View>
  );
}