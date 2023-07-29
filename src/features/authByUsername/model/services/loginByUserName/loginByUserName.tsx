import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAE_KEY } from 'shared/constants/localstorage';

interface loginByUserNameProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<
  User,
  loginByUserNameProps,
  ThunkConfig<string>
>('login/loginByUserName', async (authData, thunkApi) => {
  const { extra, dispatch, rejectWithValue } = thunkApi;
  try {
    const response = await extra.api.post<User>('/login', {
      authData,
    });
    if (!response.data) {
      throw new Error();
    }
    localStorage.setItem(USER_LOCALSTORAE_KEY, JSON.stringify(response.data));
    dispatch(userActions.setAuthData(response.data));
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return rejectWithValue('error');
  }
});
