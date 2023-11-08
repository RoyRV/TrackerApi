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
};
