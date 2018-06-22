const { GraphQLServer } = require("graphql-yoga");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/MERN_todoApp");

var TodoSchema = mongoose.Schema({
  task: String,
  completed: Boolean
});

var Todo = mongoose.model("task", TodoSchema);

const typeDefs = `
  type Query {
    hello(name: String): String!
    todos: [Todo]
  }

  type Todo {
    id: ID,
    task : String,
    completed: Boolean
  }

  type Mutation {
    createTodo( task : String!): Todo
    updateTodo( id: ID!, complete:Boolean!): Boolean!
    removeTodo( id: ID!): ID
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"}`,
    todos: () => Todo.find()
  },
  Mutation: {
    createTodo: async (_, { task }) => {
      var todo = new Todo({ task: task, completed: false });
      await todo.save();
      return todo;
    },
    updateTodo: async (_, { id, complete }) => {
      var todo = await Todo.findByIdAndUpdate(id, { completed: complete });
      var ID = todo.id;
      var updatedTodo = await Todo.findById(ID);
      return updatedTodo.completed;
      
    },
    removeTodo: async (_, { id}) => {
      var todo = await Todo.findByIdAndRemove(id);
      return todo.id;
    }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
const options = { port: 4000 }
mongoose.connection.once("open", function() {
  server.start(options,() => console.log("Server is running on localhost:4000"));
});
