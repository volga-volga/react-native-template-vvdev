import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { AppNavigator } from './navigation/AppNavigation';
import { AppProvider } from './redux/AppProvider';
import { AppEvents, EventDispatcher } from './lib/events/eventDispatcher';

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

  eventDispatcher = new EventDispatcher();

  componentDidMount() {
    this.eventDispatcher.on(AppEvents.LOGOUT, this.logout);
  }

  componentWillUnmount() {
    this.eventDispatcher.removeListener(AppEvents.LOGOUT, this.logout);
  }

  componentDidCatch() {
    this.setState({ error: true });
  }

  private logout = () => {
    this.setState({ resetKey: this.state.resetKey + 1 });
  }

  private resetError = () => {
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
      <AppProvider key={this.state.resetKey}>
        <AppNavigator />
      </AppProvider>
    );
  }
}
