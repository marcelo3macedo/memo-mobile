import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { sizes, style } from './styles';

export function Icon({ source, type=null, onPressAction }:any) {
    const { width, height } = sizes.getByType({ type })
    
    return (
        <TouchableOpacity onPress={onPressAction}>
            <SvgXml xml={source} style={style.light} width={width} height={height} />
        </TouchableOpacity>
    )
}
