import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { About } from "@pages/main/About";
import { Login } from "@pages/auth/Login";
import { Main } from '@pages/main/Main';
import { PrivacyPolicy } from '@pages/main/PrivacyPolicy';
import { PATH_ABOUT, PATH_LOGIN, PATH_MAIN, PATH_PRIVACYPOLICY } from '@services/Navigation';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    const screenOptions = { headerShown: false }
    
    return (
        <NavigationContainer>
            <Navigator initialRouteName={PATH_MAIN}
                    screenOptions={screenOptions}>
                <Screen name={PATH_ABOUT} component={About} />
                <Screen name={PATH_LOGIN} component={Login} />
                <Screen name={PATH_MAIN} component={Main} />
                <Screen name={PATH_PRIVACYPOLICY} component={PrivacyPolicy} />
            </Navigator>
        </NavigationContainer>
    )
}