import { IIngredient, IUserData, IOrder } from 'shared/types'

export interface ISetUserInfoRequest {
  name: string;
  email: string;
  password: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IUpdateTokenRequest {
  refreshToken: string;
}

export interface ILogoutRequest extends IUpdateTokenRequest {}

export interface IVerificationCodeRequest {
  email: string;
}

export interface IPasswordResetRequest {
  password: string;
  token: string;
}

export interface IAuthSuccessResponse {
  success: boolean;
  user: IUserData;
  accessToken: string;
}

export interface IUserInfoSuccessResponse {
  success: boolean;
  user: IUserData;
}

export interface IPasswordRecoverySuccessResponse {
  success: boolean;
  message: string;
}

export type IngredientsSuccessResponse = Record<number, IIngredient>

export interface IPlaceOrderRequest {
  ingredients: string[];
}

export interface IPlaceOrderSuccessResponse {
  success: boolean;
  name: string;
  order: {
    number: number;
  }
}

export interface IOrdersSuccessResponse {
  success: boolean;
  orders: IOrder[];
  total: number;
  totalToday: number;
}

export interface IApiFailureResponse {
  message: string;
}
