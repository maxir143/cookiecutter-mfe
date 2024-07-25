export type UseFetchData<T> = {
  isLoading: boolean;
  data: T | undefined;
  error: Error | undefined;
};

export type OnSuccessParam<T> = (data: T | undefined) => void;

export type OnErrorParam = (error: Error) => void;

export type ExecuteParms = {
  endpoint: string;
  requestData?: any;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  responseKey?: string;
  headers?: Record<string, any>;
  internalOnSuccessFN?: () => void;
};
