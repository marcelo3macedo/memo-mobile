import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { style } from './styles';

export function PrimaryButton({ onPress, title }:any) {
    return (        
        <TouchableOpacity style={style.container} onPress={onPress}>
            <Text style={style.text}>{title}</Text>
        </TouchableOpacity>
    )
}
