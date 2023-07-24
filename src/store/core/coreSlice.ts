import {createSlice} from '@reduxjs/toolkit';

interface CoreState {}

const initialState: CoreState = {};

const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {},
});

export const {} = coreSlice.actions;

export default coreSlice.reducer;
