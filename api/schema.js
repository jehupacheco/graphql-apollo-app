import { makeExecutableSchema } from 'graphql-tools';
import DB from './db';

const typeDefs = `
  type Comment {
    id: ID!
    content: String!
  }

  type Query {
    comments: [Comment]
  }

  type Mutation {
    addComment(content: String!): Comment
    removeComment(id: ID!): ID
  }
`;

const resolvers = {
  Query: {
    comments: (_, args) => DB.models.comment.findAll({ where: args }),
  },
  Mutation: {
    addComment: (_, args) => DB.models.comment.create(args),
    removeComment: (_, args) => DB.models.comment.destroy({ where: args }),
  },
};

export default makeExecutableSchema({ typeDefs, resolvers });
