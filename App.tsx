import React from 'react';
import './translations/i18n';

import { AppRoutes } from '@routes/app.routes';
import { DarkTheme } from '@themes/DarkTheme';

export default function App() {
  return (
    <DarkTheme>
      <AppRoutes />
    </DarkTheme>
  )
}