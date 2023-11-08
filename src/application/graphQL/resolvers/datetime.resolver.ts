import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";
import { format } from "date-fns";

export default new GraphQLScalarType({
  name: "DateTime",
  description: "Custom DateTime Scalar",
  parseValue(value: any) {
    return new Date(value); // Convert from client input
  },
  serialize(value: any) {
    return format(value, "dd/MM/yyyy");
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }
    return null;
  },
});
