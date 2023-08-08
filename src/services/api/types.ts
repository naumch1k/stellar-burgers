import { IUserData } from '../../shared/types/user-data';

export interface IRegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILogoutRequest {
  refreshToken: string;
}

export interface IAuthSuccessResponse {
  user: IUserData;
  accessToken: string;
}

export interface IAuthFailureResponse {
  message: string;
}
