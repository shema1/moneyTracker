import {createSlice} from '@reduxjs/toolkit';

interface WalletState {}

const initialState: WalletState = {};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    increment: () => {},
    decrement: () => {},
  },
});

export const {increment, decrement} = walletSlice.actions;

export default walletSlice.reducer;
