/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  FailedResponse,
  Response,
  ResponsePromise,
  SuccessResponse
} from 'src/services/example-service/service-api-responses';

/**
 * Number of attempts before request fails
 */
const MAX_RETRY_ATTEMPTS = 3;

/**
 * Axios client for talking with a service
 */
export const axiosClient = axios.create({
  baseURL: process.env.SERVICE_URL,
  responseType: 'json',
  validateStatus: () => true
})

/**
 * Wrapper function to make a request to the service
 */
export const makeRequest = async<T>(
  config: AxiosRequestConfig,
  attempts = 1
): ResponsePromise<T> => {
  // Merge the Authorization header with any other potential headers
  config.headers = {
    ...(config.headers || {}),
    ...{
      'Content-Type': 'application/json',
    },
  };

  const axiosResponse = await axiosClient.request<T>(config);

  // Retry the request until we've reached the maximum attempts
  if (
    !responseIsSuccessful(axiosResponse) &&
    attempts < MAX_RETRY_ATTEMPTS
  ) {
    return makeRequest<T>(config, attempts + 1);
  }

  return buildApiResponse(axiosResponse, config);
}

/**
 * Construct an api response based off of a response returned
 * from Axios
 *
 * @param response
 * @param initialConfig
 */
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

/**
 * Utility class to determine whether or not a response was
 * successful
 *
 * @param response
 */
const responseIsSuccessful = (response: AxiosResponse): boolean => {
  if (response.status < 200 || response.status >= 300) {
    return false;
  }

  return true;
}
