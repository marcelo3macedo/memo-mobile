import React from 'react';
import './translations/i18n';
import { StatusBar } from 'react-native';

import { PrivacyPolicy } from '@pages/main/PrivacyPolicy';

export default function App() {
  return (
    <>
      <StatusBar 
        barStyle="dark-content" 
        translucent 
        backgroundColor="transparent" 
      />
      <PrivacyPolicy />
    </>
  )
}