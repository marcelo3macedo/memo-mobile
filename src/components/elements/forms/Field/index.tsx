import React from 'react';
import { TextInput, View } from 'react-native';

import { FieldProps } from '@interfaces/components/forms/FieldProps';
import { ColorPalette } from '@interfaces/styles/ColorPalette';
import { FieldTitle } from '../FieldTitle';

import { style } from './styles';

export function Field({ title, type, placeholder, onChangeText, value }:FieldProps) {
    if (!type) {
        return <></>;
    }

    switch (type) {
        case "text":
        case "password":
            const secureTextEntry = (type === "password")
            return (        
                <View style={style.container}>
                    <FieldTitle title={title} />
                    <TextInput 
                        value={value}
                        placeholder={placeholder}
                        style={style.textInput} 
                        onChangeText={onChangeText}
                        placeholderTextColor={ColorPalette.NEUTRAL80}
                        secureTextEntry={secureTextEntry}
                    />
                </View>
            )
        default:
            return <></>
    }
}
