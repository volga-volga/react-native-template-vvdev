import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

export interface AppState {
  initialized: boolean;
}

export interface GlobalState {
  app: AppState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  GlobalState,
  unknown,
  Action<string>
>;
