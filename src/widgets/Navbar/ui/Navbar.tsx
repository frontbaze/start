/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/authByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { t } = useTranslation();

  const openModalHandler = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const closeModalHandler = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  return (
    <div className={classNames(cls.Navbar, {}, [className as string])}>
      <Button
        theme={ThemeButton.CLEAR_INVERTED}
        className={cls.links}
        onClick={openModalHandler}
      >
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={closeModalHandler} />
    </div>
  );
};
