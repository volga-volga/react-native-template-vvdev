import React from 'react';
import { inject, provider } from 'react-ioc';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DB from '../lib/db';
import { StoreProvider } from './storeProvider';
import { ApiService } from '../lib/api';
import { MainController } from './controllers/MainController';
import { EventDispatcher } from '../lib/events/eventDispatcher';

@provider(
  DB,
  StoreProvider,
  MainController,
  ApiService,
  EventDispatcher,
)
export class AppProvider extends React.Component<{}> {
  @inject(StoreProvider)
  storeProvider!: StoreProvider;

  render() {
    return (
      <SafeAreaProvider>
        <Provider store={this.storeProvider.store}>
          {this.props.children}
        </Provider>
      </SafeAreaProvider>
    );
  }
}
