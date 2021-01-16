import { ErrorResponse } from '../../protocols/ErrorResponse'

export const badRequest = (error: Error): ErrorResponse => {
    return { error, statusCode: 400, message: error.message }
}