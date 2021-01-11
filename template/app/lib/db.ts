import AsyncStorage from '@react-native-community/async-storage';

const TOKEN = 'token';

export default class DB {
  private parseStoredItem(item: null | string) {
    if (item === null) {
      return undefined;
    }
    return JSON.parse(item);
  }

  clear(): Promise<void> {
    return AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove);
  }

  async getToken(): Promise<undefined | string> {
    const token = await AsyncStorage.getItem(TOKEN);
    return token || undefined;
  }

  setToken(token: undefined | string): Promise<void> {
    if (token) {
      return AsyncStorage.setItem(TOKEN, token);
    } else {
      return AsyncStorage.removeItem(TOKEN);
    }
  }
}
