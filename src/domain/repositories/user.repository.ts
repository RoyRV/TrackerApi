import { User } from "../entities/user.model";

export default class UserRepository {
  private readonly _users: Array<User>;
  constructor() {
    this._users = new Array<User>();
    let user = {
      id: "1",
      name: "123",
      email: "test",
      startDate: new Date(),
    } as User;
    this._users.push(user);
  }

  public getAll(): Array<User> {
    return this._users;
  }
}
