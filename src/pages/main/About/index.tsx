import React from 'react';
import { useTranslation } from 'react-i18next';

import { MainLayout } from '@layouts/MainLayout';
import { Title } from '@components/elements/Title';
import { Paragraph } from '@components/elements/Paragraph';

export function About() {  
  const { t } = useTranslation();
  const elements = t('about.content').split('|')

  return (
    <MainLayout>
      <Title content={t('about.title')} />
      <Paragraph elements={elements} />
    </MainLayout>
  )
}