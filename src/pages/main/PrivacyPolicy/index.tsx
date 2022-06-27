import React from 'react';
import { useTranslation } from 'react-i18next';

import { MainLayout } from '@layouts/MainLayout';
import { Title } from '@components/elements/Title';
import { Paragraph } from '@components/elements/Paragraph';

export function PrivacyPolicy() {  
  const { t } = useTranslation();
  const elements = t('privacyPolicy.content').split('|')

  return (
    <MainLayout>
      <Title content={t('privacyPolicy.title')} />
      <Paragraph elements={elements} />
    </MainLayout>
  )
}