import React from 'react';
import './translations/i18n';
import { StatusBar } from 'react-native';

import { About } from './src/pages/main/About';

export default function App() {
  return (
    <>
      <StatusBar 
        barStyle="dark-content" 
        translucent 
        backgroundColor="transparent" 
      />
      <About />
    </>
  )
}