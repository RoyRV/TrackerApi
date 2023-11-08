import { User } from "../../domain/entities/user.model";
import UserRepository from "../../domain/repositories/user.repository";

export default class UserService {
  private readonly _repository: UserRepository;

  constructor() {
    this._repository = new UserRepository();
  }

  public getAll(): Array<User> {
    return this._repository.getAll();
  }
}
