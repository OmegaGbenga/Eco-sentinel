import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isAuthenticated: boolean;
  address: string | null;
  loading: boolean;
}

const initialState: UserState = {
  isAuthenticated: false,
  address: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthenticated(state, action: PayloadAction<boolean>) {
