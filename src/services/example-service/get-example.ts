import { ResponsePromise } from 'src/services/example-service/service-api-responses';
import { makeRequest } from 'src/services/example-service/service-axios-client';
import { Example } from 'src/services/example-service/service-types';

/**
 * Client for interfacing with the Todo Api
 */
export const getExample = async(id: string): ResponsePromise<Example> => (
  makeRequest<Example>({
    method: 'GET',
    url: `/example/${id}`
  })
);
