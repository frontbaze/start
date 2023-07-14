/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Modal from 'shared/ui/Modal/Modal';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { t } = useTranslation();

  const toggleModalHandler = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);
  return (
    <div className={classNames(cls.Navbar, {}, [className as string])}>
      <Button
        theme={ThemeButton.CLEAR_INVERTED}
        className={cls.links}
        onClick={toggleModalHandler}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={toggleModalHandler}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
        nemo consectetur alias odio molestias laborum, explicabo corporis,
        ratione nisi sequi soluta enim minus impedit velit. Tempora asperiores
        nihil sint magni!
      </Modal>
    </div>
  );
};
