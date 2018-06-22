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
export { UPDATE_TODO, REMOVE_TODO, ADD_TODO };
