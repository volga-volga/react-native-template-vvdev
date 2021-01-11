import { RestApiHelper, Config } from 'rest-api-helper';
import { AvailableRequest, config } from './apiConfig';

export class ApiService {
  private baseURL: string = '';

  config: Config;

  constructor() {
    this.config = { ...config };
    this.baseURL = this.config.baseURL;
    RestApiHelper.builder().withConfig(this.config);
  }

  parseError(error: Error) {
    let message = 'Server error';
    try {
      const response: { code: number, en?: string, ru?: string } = JSON.parse(error.message);
      if (response.en) {
        message = response.en;
      }
    } catch (ignore) {}
    return message;
  }

  async auth(login: string, password: string): Promise<string> {
    const METHOD: AvailableRequest = 'auth';
    const response = await RestApiHelper.build<{ securityToken: {token: string } }>(METHOD)
      .withBody({
        login,
        password,
      })
      .fetch();
    return response.body.securityToken.token;
  }
}
