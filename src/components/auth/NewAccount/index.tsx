import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { style } from './styles';
import { global } from '@styles/global';

export function NewAccount() {
    const {t} = useTranslation();

    function goToNewAccount() {
        console.log("TODO: Navigate to new account")
    }

    return (
        <View style={style.container}>
            <Text style={global.textMedium}>{t('auth.hasAccount')}</Text>
            <TouchableOpacity style={style.touchArea} onPress={goToNewAccount}>
                <Text style={global.textMediumHighlight}>{t('auth.createNow')}</Text>
            </TouchableOpacity>
        </View>
    )
}
