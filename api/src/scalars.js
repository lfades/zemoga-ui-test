const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

exports.DateType = new GraphQLScalarType({
  name: 'Date',
  description: 'Javascript Date',
  parseValue(value) {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  },
  serialize(value) {
    // Sometimes the date is already a timestamp
    return value.getTime ? value.getTime() : value;
  },
  parseLiteral(ast) {
    if (ast.kind !== Kind.INT) {
      const date = new Date(ast.value);

      if (!Number.isNaN(date.getTime())) return date;
    }
    return null;
  }
});
