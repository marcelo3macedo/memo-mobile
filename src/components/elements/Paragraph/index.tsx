import React from 'react';
import { Text, View } from 'react-native';

import { style } from './styles';

export function Paragraph({ elements }:any) {
    if (!elements) {
        return <></>
    }
    
    return elements.map((e:any) => (
        <View style={style.container}>
            <Text style={style.text}>{e}</Text>
        </View>
    ))
}
