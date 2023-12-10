import axios, { AxiosError } from 'axios'
import { IApiFailureResponse } from './types'

export const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<IApiFailureResponse>

    if (axiosError.response && axiosError.response.data && axiosError.response.data.message) {
      return { message: axiosError.response.data.message }
    }

    return { message: error.message }
  }

  return { message: 'An unknown error occurred' }
}
