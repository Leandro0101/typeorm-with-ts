import { ErrorResponse } from '../protocols/ErrorResponse'
import { IError } from '../protocols/IError'

export default class Exception implements IError {
    handler(error: Error, statusCode: number): ErrorResponse {
        return { error, statusCode, message: error.message }
    }
}
