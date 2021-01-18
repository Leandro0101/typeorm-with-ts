export class AlreadyExist extends Error {
  constructor() {
    super("You're trying save a resource that already exists");
    this.name = 'AlreadyExists'
  }
}