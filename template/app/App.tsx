import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from './navigation/AppNavigation';

const styles = StyleSheet.create({
  text: {
  },
});

type AppState = {
  error: boolean;
  resetKey: number;
};
export class App extends React.Component<{}, AppState> {
  state: AppState = {
    error: false,
    resetKey: 0,
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  private logout() {
    this.setState({ resetKey: this.state.resetKey + 1 });
  }

  private resetError() {
    this.setState({ error: false });
  }

  renderError() {
    return (
      <Text style={styles.text}>
        Error
      </Text>
    );
  }

  render() {
    if (this.state.error) {
      return this.renderError();
    }
    return (
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    );
  }
}
