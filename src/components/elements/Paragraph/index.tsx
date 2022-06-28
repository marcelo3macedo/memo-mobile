import React, { Key } from 'react';
import { Text, View } from 'react-native';

import { style } from './styles';

export function Paragraph({ elements }:any) {
    if (!elements) {
        return <></>
    }
    
    return elements.map((e:any, i:Key) => (
        <View style={style.container} key={i}>
            <Text style={style.text}>{e}</Text>
        </View>
    ))
}
