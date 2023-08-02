/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/classNames/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  ProfileCard,
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  profileReducer,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import { useSelector } from 'react-redux';
import cls from './ProfilePage.module.scss';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          firstname: value || '',
        }),
      );
    },
    [dispatch],
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          lasttname: value || '',
        }),
      );
    },
    [dispatch],
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          age: Number(value || 0),
        }),
      );
    },
    [dispatch],
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          city: value || '',
        }),
      );
    },
    [dispatch],
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          username: value || '',
        }),
      );
    },
    [dispatch],
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          avatar: value || '',
        }),
      );
    },
    [dispatch],
  );

  const onChangeCurrency = useCallback(
    (currency?: Currency) => {
      dispatch(
        profileActions.updateProfile({
          currency,
        }),
      );
    },
    [dispatch],
  );

  const onChangeCountry = useCallback(
    (country?: Country) => {
      dispatch(
        profileActions.updateProfile({
          country,
        }),
      );
    },
    [dispatch],
  );

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount
    >
      <div
        className={classNames(cls.ProfilePage, {}, [
          className,
        ])}
      >
        <ProfilePageHeader />
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
