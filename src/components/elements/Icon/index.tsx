import React from 'react';
import { SvgXml } from 'react-native-svg';

import { style } from './styles';

export function Icon({ source }:any) {
    const width = 62, height = 62;
    
    return (
        <SvgXml xml={source} style={style.light} width={width} height={height} />
    )
}
