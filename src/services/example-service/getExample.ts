import { makeRequest } from 'src/services/example-service/client';
import { Example, ResponsePromise } from 'src/services/example-service/types';


export const getExample = async(id: string): ResponsePromise<Example> => (
  makeRequest<Example>({
    method: 'GET',
    url: `/example/${id}`
  })
);
