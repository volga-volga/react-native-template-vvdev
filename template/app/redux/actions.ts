import { createAction } from '@reduxjs/toolkit';

export const setInitialized = createAction<void>('SET_INITIALIZED');

export const reset = createAction<void>('RESET');
