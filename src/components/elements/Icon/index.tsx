import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { style } from './styles';

export function Icon({ source, onPressAction }:any) {
    const width = 62, height = 62;
    
    return (
        <TouchableOpacity onPress={onPressAction}>
            <SvgXml xml={source} style={style.light} width={width} height={height} />
        </TouchableOpacity>
    )
}
