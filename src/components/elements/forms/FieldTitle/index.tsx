import React from 'react';
import { Text, View } from 'react-native';

import { FieldTitleProps } from '@interfaces/components/forms/FieldTitleProps';

import { style } from './styles';

export function FieldTitle({ title }:FieldTitleProps) {
    if (!title) {
        return <></>
    }

    return (        
        <View style={style.container}>
            <Text style={style.textInput}>{title}</Text>
        </View>
    )
}
