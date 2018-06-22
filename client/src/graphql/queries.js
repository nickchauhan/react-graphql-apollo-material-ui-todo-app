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

export { GET_TODOS };
