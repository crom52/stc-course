import axios from 'axios';
import type {
  AxiosRequestConfig,
} from 'axios';
import { uniqueSlash } from '@/utils/url.util';

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
const VITE_TEMP_URL = import.meta.env.VITE_TEMP_URL;
const VITE_XPRT_URL = import.meta.env.VITE_XPRT_URL;

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
  const {
    getDataDirectly = true,
    isTemp,
    isXprt,
  } = options;

  const axiosConfig: AxiosRequestConfig = {
    ...config,
    data: config.body,
  };

  if (isTemp)
    axiosConfig.url = uniqueSlash(`${VITE_TEMP_URL}/${config.url}`);

  else if (isXprt)
    axiosConfig.url = uniqueSlash(`${VITE_XPRT_URL}/${config.url}`);

  else
    axiosConfig.url = uniqueSlash(`${VITE_BASE_URL}/${config.url}`);

  try {
    const response = await service.request(axiosConfig);

    return getDataDirectly ? response.data : response;
  } catch (error: any) {
    return null as T;
  }
};
