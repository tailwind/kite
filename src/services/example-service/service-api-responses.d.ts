export type SuccessResponse<T> = {
  wasSuccessful: true;
  statusCode: number;
  body: T;
  headers: Record<string, string>;
  request?: {
    endpoint: string;
    params: Record<string, string | number>;
  };
};

export type FailedResponse = {
  wasSuccessful: false;
  statusCode: number;
  error: unknown;
  headers: Record<string, string>;
  request?: {
    endpoint: string;
    params: Record<string, string | number>;
  };
};

export type Response<T> = SuccessResponse<T> | FailedResponse;

export type ResponsePromise<T> = Promise<Response<T>>;
