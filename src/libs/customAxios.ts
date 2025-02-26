/**
 * axios의 interceptors frame(구조)입니다.
 */
import axios from 'axios';

type customAxiosType = {
  baseURL?: string;
};

export const customAxios = ({
  baseURL = 'https://jsonplaceholder.typicode.com',
}: customAxiosType = {}) => {
  const instance = axios.create({
    baseURL,
    withCredentials: false,
  });

  /**
   * axios 요청 전 인터셉터
   */
  instance.interceptors.request.use(
    async config => {
      if (config.headers) {
        config.headers['Content-type'] = 'application/json; charset=UTF-8';
        config.headers['Accept'] = 'application/json;';

        config.headers['clientid'] =
          process.env.NEXT_PUBLIC_SHOPBY_CLIENT_ID ?? 'x+qbJGxgUeET3/KGqHj48g==';
      }

      // 특정 조건에 따라 baseURL을 동적으로 설정
      if (config.url?.includes('/api/membership')) {
        config.baseURL = 'http://localhost:3000'; // 다른 URL을 설정
      }

      return config;
    },
    error => Promise.reject(error),
  );

  /**
   * axios 요청 후 인터셉터
   */
  instance.interceptors.response.use(
    config => {
      return config;
    },
    async error => {
      const { config } = error;
      if (error.response && error.response.status) {
        switch (error.response.status) {
          case 401:
            if (window.location.pathname.includes('/sign/out')) {
              break;
            }

            config.sent = true;

            window.location.href = '/sign/out?expired=true';
            return Promise.reject(error);
          default:
            return Promise.reject(error);
        }
      }

      return Promise.reject(error);
    },
  );

  return instance;
};

type Headers = {
  [key: string]: string;
};

/**
 *  서버와 통신 시 동적 추가 헤더를 설정하는 함수
 */
export const createHeaders = (additionalHeaders: Headers): Headers => {
  return {
    ...additionalHeaders,
  };
};
