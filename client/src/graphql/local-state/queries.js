import gql from "graphql-tag";

const LOCAL_ISLOGGEDIN = gql`
  query {
    isLoggedIn @client {
      login
    }
  }
`;

export { LOCAL_ISLOGGEDIN };
