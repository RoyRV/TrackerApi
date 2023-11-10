import UserService from "../../../application/services/user.service";
import { User } from "../../../domain/entities/user.model";

export default class UserResolver {
  private readonly userService = new UserService();

  public async getUsers() {
    return await this.userService.getAll();
  }

  public create(user: User) {
    return this.userService.create(user);
  }
}
