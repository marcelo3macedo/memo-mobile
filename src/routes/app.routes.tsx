import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTranslation } from 'react-i18next';

import SideMenu from '@components/containers/navigation/SideMenu';
import { About } from "@pages/main/About";
import { Gallery } from '@pages/main/Gallery';
import { Help } from '@pages/main/Help';
import { Main } from '@pages/main/Main';
import { PrivacyPolicy } from '@pages/main/PrivacyPolicy';
import { Sessions } from '@pages/main/Sessions';
import { PATH_ABOUT, PATH_GALLERY, PATH_HELP, PATH_MAIN, PATH_PRIVACYPOLICY, PATH_SESSIONS } from '@services/Navigation';
import { styles } from '@routes/styles.routes';

const { Navigator, Screen } = createDrawerNavigator();

export function AppRoutes() {
    const { t } = useTranslation();

    return (
        <Navigator initialRouteName={PATH_MAIN}            
            drawerContent={props => <SideMenu {...props} />}
            screenOptions={styles.drawerScreenOptions}>
            <Screen name={PATH_MAIN} component={Main} options={{title: t('menu.home')}} />
            <Screen name={PATH_SESSIONS} component={Sessions} options={{title: t('menu.sessions')}} />
            <Screen name={PATH_GALLERY} component={Gallery} options={{title: t('menu.gallery')}} />
            <Screen name={PATH_PRIVACYPOLICY} component={PrivacyPolicy} options={{title: t('menu.privacyPolicy')}} />
            <Screen name={PATH_HELP} component={Help} options={{title: t('menu.help')}} />
            <Screen name={PATH_ABOUT} component={About} options={{title: t('menu.about')}} />
        </Navigator>
    )
}