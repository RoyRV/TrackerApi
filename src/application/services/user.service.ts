import { User } from "../../domain/entities/user.model";
import UserRepository from "../../domain/repositories/user.repository";

export default class UserService {
  private readonly _repository: UserRepository;

  constructor() {
    this._repository = new UserRepository();
  }

  public async getAll() {
    return await this._repository.getAll();
  }

  public create(user: User) {
    this._repository.create(user);
  }
}
