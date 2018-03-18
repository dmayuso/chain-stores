export interface UserModel {
  username?: string,
  password?: string
}

export class User {

  model: UserModel;

  constructor() {
    this.model = {
      username: '',
      password: ''
    }
  }
}
