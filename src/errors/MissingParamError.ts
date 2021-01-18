export class MissingParamError extends Error {
  constructor() {
    super('must send all params')
    this.name = 'MissingParamError'
  }
}