import { IIngredient } from '../../shared/types/ingredient'
import { IUserData } from '../../shared/types/user-data'

export interface IRegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IUserInfoRequest {
  accessToken: string;
}

export interface ILogoutRequest {
  refreshToken: string;
}

export interface IAuthSuccessResponse {
  user: IUserData;
  accessToken: string;
}

export interface IMainApiFailureResponse {
  message: string;
}

export interface IUserInfoSuccessResponse {
  success: boolean;
  user: IUserData;
}

export type IngredientsSuccessResponse = Record<number, IIngredient>

export interface IIngredientsFailureResponse {
  message: string;
}

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

