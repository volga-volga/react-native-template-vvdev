import { createReducer } from '@reduxjs/toolkit';
import { reset, setInitialized } from '../actions';
import { AppState } from '../../lib/types';

const initialState = {
  initialized: false,
};

export const appReducer = createReducer<AppState>(initialState, (builder) => {
  builder
    .addCase(setInitialized, state => ({ ...state, initialized: true }))
    .addCase(reset, () => initialState);
});
