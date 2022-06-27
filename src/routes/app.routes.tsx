import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "@pages/auth/Login";
import { About } from "@pages/main/About";
import { PATH_ABOUT, PATH_HOME } from '@services/Navigation';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    const screenOptions = { headerShown: false }
    
    return (
        <NavigationContainer>
            <Navigator initialRouteName={PATH_HOME}
                    screenOptions={screenOptions}>
                <Screen name={PATH_HOME} component={Login} />
                <Screen name={PATH_ABOUT} component={About} />
            </Navigator>
        </NavigationContainer>
    )
}