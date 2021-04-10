import { makeRequest } from 'src/services/exampleService/client';
import { Example, ResponsePromise } from 'src/services/exampleService/types';


export const getExample = async(id: string): ResponsePromise<Example> => (
  makeRequest<Example>({
    method: 'GET',
    url: `/example/${id}`
  })
);
