import {combineReducers} from '@reduxjs/toolkit';
import coreSlice from './core/coreSlice';
import walletSlice from './wallet/walletSlice';

const rootReducer = combineReducers({
  core: coreSlice,
  wallet: walletSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
