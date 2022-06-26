import React from 'react';
import { Image } from 'react-native';

import { PictureProps } from '@interfaces/components/pictures/PictureProps';

import { styles } from './styles';

export function Picture({ source, type }:PictureProps) {
    const stylePicture = styles.getByType({ type })

    return (
        <Image source={source} style={stylePicture.picture} />
    )
}
