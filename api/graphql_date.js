import { GraphQLScalarType, Kind } from "graphql";
import { UserInputError } from "apollo-server-express";

const GraphQLDate = new GraphQLScalarType({
  name: "GraphQlDate",
  description: "Custom Date scalar for GraphQL",
  serialize: (value) => value.toISOString(),
  parseValue: (value) => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime()))
      throw new UserInputError("Invalid Date Format");
    return date;
  },
  parseLiteral: (ast) => {
    if (ast.kind === Kind.STRING) {
      const date = new Date(ast.value);
      if (Number.isNaN(date.getTime()))
        throw new UserInputError("Invalid Date Format");
      return date;
    }
    return undefined;
  },
});

export default GraphQLDate;
