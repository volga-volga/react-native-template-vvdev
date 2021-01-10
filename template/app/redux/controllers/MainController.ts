import { Alert } from 'react-native';
import Controller from './controller';
import { reset, setInitialized } from '../actions';
import { AppEvents } from '../../lib/events/eventDispatcher';

export class MainController extends Controller {
  async init() {
    // SplashScreen.hide();
    this.dispatch(setInitialized());
    this.loadDictionaries();
  }

  async loadDictionaries() {
  }

  private async _logout() {
    await this.db.clear();
    this.dispatch(reset());
    this.eventDispatcher.dispatchEvent(AppEvents.LOGOUT);
  }

  logout() {
    Alert.alert('Logout?', '', [
      { text: 'Yes', onPress: () => this._logout() },
      { text: 'Cancel', style: 'cancel' },
    ]);
  }
}
