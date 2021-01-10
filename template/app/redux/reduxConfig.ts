import { createLogger } from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './reducers';

const loggerMiddleware = createLogger({
  predicate: () => __DEV__,
  collapsed: true,
  timestamp: true,
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(loggerMiddleware),
});
