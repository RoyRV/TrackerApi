import { User } from "../../domain/entities/user.model";
import UserRepository from "../../domain/repositories/user.repository";

export default class UserService {
  private readonly repository: UserRepository;

  constructor() {
    this.repository = new UserRepository();
  }

  public async getAll() {
    return await this.repository.getAll();
  }

  public create(user: User) {
    this.repository.create(user);
  }
}
