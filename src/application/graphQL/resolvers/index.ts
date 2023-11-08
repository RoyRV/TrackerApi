import UserResolver from "./user.resolver";

const userResolver = new UserResolver();

// the resolver should expose Query and Mutation
export default {
  Query: {
    getUsers () {
        return userResolver.getUsers();
    }
  },
};