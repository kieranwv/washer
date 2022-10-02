export interface IObject<T = any> {
  [key: string]: T;
}

export interface ResponseData<T = any> {
  code: number;
  data: T;
  msg: string;
}
