export type TProduct = {
  _id: number;
  name: string;
  image: string;
  price: number;
  features: string[];
  status: boolean;
  rating: number;
  quantity?: number;
};
export type TErrorData = {
  success: boolean;
  errorName: string;
  errorMessages: [];
  stack?: string;
};
export type TError = TErrorData & {
  status: number;
  data: TErrorData;
};
