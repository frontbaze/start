/* eslint-disable i18next/no-literal-string */
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';

const MainPage: FC = () => {
  const { t } = useTranslation('main');
  const [value, setValue] = useState('');
  const onChange = (val: string) => {
    setValue(val);
  };
  return (
    <div>
      {t('Главная страница')}
      <Input value={value} onChange={onChange} placeholder="Enter" />
    </div>
  );
};

export default MainPage;
