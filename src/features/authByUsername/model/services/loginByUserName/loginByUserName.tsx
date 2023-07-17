import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAE_KEY } from 'shared/constants/localstorage';

 interface loginByUserNameProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<User, loginByUserNameProps, {rejectValue: string}>(
  'login/loginByUserName',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:5000/login', {
        authData,
      });
      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(USER_LOCALSTORAE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));
      return response.data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      return thunkAPI.rejectWithValue(error as string);
    }
  },
);
