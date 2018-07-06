import gql from "graphql-tag";

const GET_TODOS = gql`
  query {
    todos {
      id
      completed
      task
    }
  }
`;

const GET_USER = gql`
  query {
    getUser {
      name
      email
    }
  }
`;

export { GET_TODOS, GET_USER };
