const typeDefs = `
  type Query {
    todos: [Todo]
    loginUser(email:String,password:String):AuthPayLoad
  }

  type Todo {
    id: ID,
    task : String,
    completed: Boolean,
    completedAt: String,
    _creator:ID
  }

  type AuthPayLoad {
     id : ID,
     email: String 
     authToken: String
     }

  type Mutation {
    createTodo( task : String!): Todo
    updateTodo( id: ID!, complete:Boolean!): Boolean!
    removeTodo( id: ID!): ID
    createUser( name: String!, email: String!, password : String!): AuthPayLoad
  }
`;

module.exports = {
  typeDefs
};
