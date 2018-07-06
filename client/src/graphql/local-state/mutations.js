import gql from "graphql-tag";

const LOCAL_UPDATE_LOGGED_IN_STATUS = gql`
  mutation($isLoggedIn: Boolean) {
    updateLoggedInStatus(isLoggedIn: $isLoggedIn) @client
  }
`;

export { LOCAL_UPDATE_LOGGED_IN_STATUS };
