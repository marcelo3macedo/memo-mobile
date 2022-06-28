import React from 'react';
import './translations/i18n';

import { Routes } from '@routes/index.routes';
import { DarkTheme } from '@themes/DarkTheme';

export default function App() {
  return (
    <DarkTheme>
      <Routes />
    </DarkTheme>
  )
}