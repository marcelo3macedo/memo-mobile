import React from 'react';

import WelcomeMessage from '@components/containers/WelcomeMessage';
import { MainLayout } from '@layouts/MainLayout';

export function Main() {  
  const name = "Marcelo"

  return (
    <MainLayout isHome={true}>
      <WelcomeMessage name={name} />      
    </MainLayout>
  )
}