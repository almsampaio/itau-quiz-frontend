import axios from 'axios';

const config = {
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const authenticatedInstance = axios.create(config);
export const unauthenticatedInstance = axios.create(config);

export default {
  unauthorized() {
    unauthenticatedInstance.interceptors.request.use(
      (response) => response,
      (error) => error,
    );

    return unauthenticatedInstance;
  },

  authorized() {
    authenticatedInstance.interceptors.request.use(
      async (config) => {
        config.headers = {
          Authorization: `Bearer ${localStorage.getItem('auth')}`,
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        };
        return config;
      },
      (error) => {
        Promise.reject(error);
      },
    );

    authenticatedInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        //   const originalRequest = error.config;
        //   if (error.response.status === 403 && !originalRequest._retry) {
        //     originalRequest._retry = true;
        //     const access_token = await refreshAccessToken();
        //     axios.defaults.headers.common[
        //       'Authorization'
        //     ] = `Bearer ${access_token}`;
        //     localStorage.setItem('auth', access_token.data);
        //     return authenticatedInstance(originalRequest);
        //   }
        return Promise.reject(error);
      },
    );

    return authenticatedInstance;
  },
};
