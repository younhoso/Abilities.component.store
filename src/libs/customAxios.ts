/**
 * axios의 interceptors 구조 입니다.
 */
import axios, { AxiosHeaders } from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_SHOPBY_CLIENT_ID || 'x+qbJGxgUeET3/KGqHj48g==';

export const customAxios = () => {
  const instance = axios.create({
    withCredentials: false,
  });

  /**
   * axios 요청이 전달되기 전에 작업 수행
   */
  instance.interceptors.request.use(
    async config => {
      if (config.headers) {
        (config.headers as AxiosHeaders).set('Content-Type', 'application/json; charset=UTF-8');
        (config.headers as AxiosHeaders).set('Accept', 'application/json');
        (config.headers as AxiosHeaders).set('clientid', CLIENT_ID);
      }

      return config;
    },
    error => Promise.reject(error),
  );

  /**
   * axios 응답을 받은 후에(error handling 포함) 작업 수행
   */
  instance.interceptors.response.use(
    response => response,
    async error => {
      if (!error.response) return Promise.reject(error);

      const { status } = error.response;

      switch (status) {
        case 401:
          if (typeof window !== 'undefined' && !window.location.pathname.includes('/sign/out')) {
            window.location.href = '/sign/out?expired=true';
          }
          break;
        default:
          break;
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
