import React from 'react';
import { Icon } from "@components/elements/Icon";
import { IconTypes } from "@interfaces/components/icon/IconTypes";
import { ColorPalette } from "@interfaces/styles/ColorPalette";

export const styles = {
    drawerScreenOptions: {
        headerShown: false,
        drawerActiveBackgroundColor: ColorPalette.SECONDARY80,
        drawerActiveTintColor: ColorPalette.NEUTRAL10,
        drawerInactiveTintColor: ColorPalette.NEUTRAL90,
    }
}

export const loadIcon = function({icon}:any) {
    return {
        drawerIcon: () => (<Icon source={icon} type={IconTypes.SMALL} />),
    }
}