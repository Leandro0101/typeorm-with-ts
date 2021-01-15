type errorResponse = {
  body: any,
  statusCode: number
}

export const badRequest = (error: Error): errorResponse => {
  return { body: error, statusCode: 400 }
}