import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/classNames/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/classNames/hooks/useAppDispatch/useAppDispatch';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';

export interface LoginFormProps {
  className?: string;
  onSuccess?: () => void;
}

const LoginForm = memo((props: LoginFormProps) => {
  const { className, onSuccess } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const inititalReducers: ReducersList = {
    loginForm: loginReducer,
  };

  const onChangeUsername = useCallback(
    (value: string) => {
      // @ts-ignore
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      // @ts-ignore
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(async () => {
    // @ts-ignore
    const result = await dispatch(loginByUserName({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      // @ts-ignore
      onSuccess();
    }
  }, [onSuccess, dispatch, password, username]);
  return (
    // eslint-disable-next-line i18next/no-literal-string
    <DynamicModuleLoader reducers={inititalReducers}>
      <div className={classNames(cls.LoginForm, {}, [className!])}>
        <Text text={t('Форма авторизации')} />
        {error && (
          <Text
            text={t('Вы ввели неверное имя пользователя или пароль')}
            theme={TextTheme.ERROR}
          />
        )}
        <Input
          type="text"
          className={cls.input}
          placeholder={t('Введите username')}
          autofocus
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          type="text"
          className={cls.input}
          placeholder={t('Введите пароль')}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          onClick={onLoginClick}
          theme={ThemeButton.OUTLINE}
          className={cls.loginBtn}
          disabled={isLoading}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
