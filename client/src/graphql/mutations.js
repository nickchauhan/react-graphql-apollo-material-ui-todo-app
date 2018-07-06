import gql from "graphql-tag";

const UPDATE_TODO = gql`
  mutation updateTodo($id: ID!, $completed: Boolean!) {
    updateTodo(id: $id, complete: $completed)
  }
`;

const REMOVE_TODO = gql`
  mutation removeTodo($id: ID!) {
    removeTodo(id: $id)
  }
`;

const ADD_TODO = gql`
  mutation createTodo($task: String!) {
    createTodo(task: $task) {
      id
      task
      completed
    }
  }
`;

const CREATE_USER = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      id
      email
      authToken
    }
  }
`;

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      authToken
    }
  }
`;
export { UPDATE_TODO, REMOVE_TODO, ADD_TODO, CREATE_USER, LOGIN_USER };
