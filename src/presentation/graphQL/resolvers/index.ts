import UserResolver from "./user.resolver";
import DateTimeResolver from "./datetime.resolver";

const userResolver = new UserResolver();

// the resolver should expose Query and Mutation
export default {
  DateTime: DateTimeResolver,
  Query: {
    getUsers() {
      return userResolver.getUsers();
    },
  },
  Mutation: {
    createUser(_parent: any,
      args: { input: any },
      _context: any,
      _info: any) {
      console.log("args",args);
      userResolver.create(args.input)
      return true;
    },
  },
};
