import UserService from "../../services/user.service";

export default class UserResolver {
  private readonly userService = new UserService();

  public getUsers() {
    return this.userService.getAll();
  }
}
