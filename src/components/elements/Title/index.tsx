import React from 'react';
import { Text, View } from 'react-native';

import { style } from './styles';

export function Title({ content }:any) {
    return (
        <View style={style.container}>
            <Text style={style.text}>{content}</Text>
        </View>
    )
}
