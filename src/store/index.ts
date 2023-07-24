import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from './rootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const createFlipperDebuger = require('redux-flipper').default;
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // Optionally, you can add a whitelist or a blacklist to choose which parts of the state tree to persist. For example:
  // whitelist: ['me']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // devTools: true,
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(
      createFlipperDebuger(),
    ),
});

export const persistor = persistStore(store);

export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
