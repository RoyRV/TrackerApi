import { User } from "../../../domain/entities/user.model";
import UserService from "../../services/user.service";

export default class UserResolver {
  private readonly userService = new UserService();

  public async getUsers() {
    return await this.userService.getAll();
  }

  public create(user: User) {
    return this.userService.create(user);
  }
}
