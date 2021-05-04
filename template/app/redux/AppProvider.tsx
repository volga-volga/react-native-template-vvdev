import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './reduxConfig';

export class AppProvider extends React.Component<{}> {
  render() {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          {this.props.children}
        </Provider>
      </SafeAreaProvider>
    );
  }
}
