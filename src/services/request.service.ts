import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

const service = axios.create();

/**
 * @param config axios config
 * @param options axios option
 * @returns {string} return url + object params in string
 */
export const request = async <T>(
  config: RequestConfig,
  options: RequestOptions = {},
): Promise<T | null> => {
  const axiosConfig: AxiosRequestConfig = {
    ...config,
    data: config.body,
  };

  try {
    const response = await service.request(axiosConfig);

    return response.data;
  } catch (error: any) {
    return null as T;
  }
};
