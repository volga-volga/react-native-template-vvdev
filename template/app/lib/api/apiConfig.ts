import { Config } from 'rest-api-helper';

declare const global: any;

const RUN_IN_V8 = Boolean(global.origin);

const requests = {
  auth: {
    method: 'post',
    url: '/user/auth',
  },
};

export type AvailableRequest = keyof (typeof requests);

export const config: Config = {
  baseURL: '',
  logger: __DEV__ && RUN_IN_V8,
  statusDescription: {
    200: 'OK',
    401: 'Invalid API token',
  },
  headers: {
    'content-type': 'application/json',
  },
  successStatus: [200],
  request: requests,
};
