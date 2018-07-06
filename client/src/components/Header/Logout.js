import React from "react";
import { Mutation } from "react-apollo";
import { LOCAL_UPDATE_LOGGED_IN_STATUS } from "../../graphql/local-state/mutations";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

const Logout = props => {
  return (
    <Mutation
      mutation={LOCAL_UPDATE_LOGGED_IN_STATUS}
      update={() => {
        props.history.push("/");
      }}
    >
      {updateLoggedInStatus => (
        <Button
          color="inherit"
          onClick={() =>
            updateLoggedInStatus({
              variables: {
                isLoggedIn: false
              }
            })
          }
        >
          Logout
        </Button>
      )}
    </Mutation>
  );
};

export default withRouter(Logout);
