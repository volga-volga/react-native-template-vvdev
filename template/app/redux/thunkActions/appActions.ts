import { Alert } from 'react-native';
import { reset, setInitialized } from '../actions';
import { AppEvents, EventDispatcher } from '../../lib/events/eventDispatcher';
import { AppThunk } from '../../lib/types';
import DB from '../../lib/db';

export const loadDictionaries = (): AppThunk => () => {
};

export const init = (): AppThunk => (dispatch) => {
  // SplashScreen.hide();
  dispatch(setInitialized());
  dispatch(loadDictionaries());
};

const _logout = (): AppThunk => async (dispatch) => {
  await DB.clear();
  dispatch(reset());
  EventDispatcher.instance.dispatchEvent(AppEvents.LOGOUT);
};

export const logout = (): AppThunk => (dispatch) => {
  Alert.alert('Logout?', '', [
    {
      text: 'Yes',
      onPress: () => dispatch(_logout()),
    },
    {
      text: 'Cancel',
      style: 'cancel',
    },
  ]);
};
