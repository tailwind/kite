/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  FailedResponse,
  Response,
  ResponsePromise,
  SuccessResponse
} from 'src/services/exampleService/types';

const MAX_RETRY_ATTEMPTS = 3;

export const axiosClient = axios.create({
  baseURL: process.env.SERVICE_URL,
  responseType: 'json',
  validateStatus: () => true
})

export const makeRequest = async<T>(
  config: AxiosRequestConfig,
  attempts = 1
): ResponsePromise<T> => {
  config.headers = {
    ...(config.headers || {}),
    ...{
      'Content-Type': 'application/json',
    },
  };

  const axiosResponse = await axiosClient.request<T>(config);

  if (!responseIsSuccessful(axiosResponse) && attempts < MAX_RETRY_ATTEMPTS) {
    return makeRequest<T>(config, attempts + 1);
  }

  return buildApiResponse(axiosResponse, config);
}

const buildApiResponse = <T>(
  response: AxiosResponse<T>,
  initialConfig: AxiosRequestConfig
): Response<T> => {
  if (!responseIsSuccessful(response)) {
    const failedResponse: FailedResponse = {
      wasSuccessful: false,
      statusCode: response.status,
      error: response.data,
      headers: response.headers,
      request: {
        endpoint: initialConfig.url || '',
        params: initialConfig.params,
      },
    };

    return failedResponse;
  }

  const successResponse: SuccessResponse<T> = {
    wasSuccessful: true,
    statusCode: response.status,
    body: response.data,
    headers: response.headers,
    request: {
      endpoint: initialConfig.url || '',
      params: initialConfig.params,
    },
  };

  return successResponse;
}

const responseIsSuccessful = (response: AxiosResponse): boolean => {
  if (response.status < 200 || response.status >= 300) {
    return false;
  }

  return true;
}
