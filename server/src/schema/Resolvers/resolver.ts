import login from "./mutation/login";
import UserResolver from "./query/UserResolver";

export default {
  Query: {
    Users: UserResolver,
  },
  Mutation: {
    login: login,
  },
};
