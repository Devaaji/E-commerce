import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';
import type { GetServerSidePropsContext, NextPageContext } from 'next';
import { parseCookies } from 'nookies';

import useUserStore from '../store/useUserStore';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api/',
});

axiosInstance.interceptors.request.use((config) => {
    let newConfig: AxiosRequestConfig<any> | undefined;
  
    if (typeof window !== 'undefined') {
      newConfig = config;
  
      newConfig.headers = {
        ...newConfig.headers,
        Authorization: `bearer ${useUserStore.getState().accessToken}`,
      };
    }
  
    return newConfig || config;
  }, undefined);

  export const fetcher = (resource: any, init: AxiosRequestConfig<any>) =>
  axiosInstance.get(resource, init).then((res) => res.data);

export const fetcherWithContext = async <T = any>(
  resource: string,
  context: NextPageContext | GetServerSidePropsContext
): Promise<T | undefined> => {
  const { _t: accessToken } = parseCookies(context);

  try {
    const response = await axiosInstance.get<T>(
      resource,
      accessToken
        ? {
            headers: {
              Authorization: `bearer ${accessToken}`,
            },
          }
        : undefined
    );

    return response.data;
  } catch (error) {
    return undefined;
  }
};

export default axiosInstance;