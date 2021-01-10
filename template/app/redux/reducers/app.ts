import { createReducer } from '@reduxjs/toolkit';
import { reset, setInitialized } from '../actions';

const initialState = {};

export const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setInitialized, state => ({ ...state, initialized: true }))
    .addCase(reset, () => initialState);
});
