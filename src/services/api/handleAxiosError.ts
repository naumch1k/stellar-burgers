import axios, { AxiosError } from 'axios'
import { IApiFailureResponse } from './types'

export const handleAxiosError = (error: unknown) => {
  if (!axios.isAxiosError(error))
    return { message: 'An unknown error occurred' }

  const axiosError = error as AxiosError<IApiFailureResponse>
  const errorMessage = axiosError.response?.data?.message

  if (errorMessage === 'Token is invalid')
    return { message: 'Your session has timed out. Please log in again.' }

  return { message: errorMessage || axiosError.message || 'An unknown error occurred' }
}
