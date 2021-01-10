import { AnyAction } from 'redux';
import { inject } from 'react-ioc';
import { StoreProvider } from '../storeProvider';
import { ApiService } from '../../lib/api';
import DB from '../../lib/db';
import { GlobalState } from '../../lib/types';
import { EventDispatcher } from '../../lib/events/eventDispatcher';

export default class Controller {
  @inject(EventDispatcher)
  eventDispatcher!: EventDispatcher;

  @inject(StoreProvider)
  protected storeProvider!: StoreProvider;

  @inject(ApiService)
  protected api!: ApiService;

  @inject(DB)
  protected db!: DB;

  protected get store() {
    return this.storeProvider.store;
  }

  protected getState(): GlobalState {
    return this.store.getState();
  }

  protected dispatch(action: AnyAction) {
    this.store.dispatch(action);
  }

  protected getToken() {
    // todo:
    // return this.getState().user.token;
    return '';
  }
}
