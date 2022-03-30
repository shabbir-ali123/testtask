export const instance = axios.create({
    baseURL: 'https://apiagent.cikatechdev.fun/api/v1',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });