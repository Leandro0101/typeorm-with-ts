import { ErrorResponse } from './ErrorResponse'
export interface IError {
  handler(error: Error, statusCode: number): ErrorResponse
}
