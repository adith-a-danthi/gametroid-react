import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginAPI, signUpAPI } from '../utils/auth-utils';

const login = createAsyncThunk('auth/login', async (payload) => {
  try {
    const { email, password } = payload;
    const response = await loginAPI(email, password);
    return response;
  } catch (error) {
    console.log(error);
  }
});

const signUp = createAsyncThunk('auth/signup', async (payload) => {
  try {
    const { name, email, password } = payload;
    const response = await signUpAPI(name, email, password);
    return response;
  } catch (error) {
    console.log(error);
  }
});

const initialState = { isAuthenticated: false, user: undefined };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    loadUser: (state, action) => {
      const { user } = action.payload;
      state.user = user;
      state.isAuthenticated = true;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      const { user } = action.payload;
      state.user = user;
      state.isAuthenticated = true;
    },
    [signUp.fulfilled]: (state, action) => {
      const { user } = action.payload;
      state.user = user;
      state.isAuthenticated = true;
    },
  },
});

export default authSlice.reducer;

export const { logout, loadUser } = authSlice.actions;

export { login, signUp };
