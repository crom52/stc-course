export {};

declare global {
  type RequestConfig = {
    url: string;
    method: ERequestMethod;
    body?: any;
    params?: any;
    timeout?: number;
  }

  type RequestOptions = {
    isAuth?: boolean;
    successMsg?: string;
    errorMsg?: string;
    isShowLoading?: boolean;
    loadingMessage?: string;
    getDataDirectly?: boolean;
  }
}
