/* eslint-disable i18next/no-literal-string */
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';

const MainPage: FC = () => {
  const { t } = useTranslation('main');
  return (
    <div>
      {t('Главная страница')}
    </div>
  );
};

export default MainPage;
