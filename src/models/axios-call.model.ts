import { AxiosResponse } from 'axios';

export interface AxiosCall<T> {
  call: Promise<AxiosResponse<T>>;
  controller?: AbortController;
}
