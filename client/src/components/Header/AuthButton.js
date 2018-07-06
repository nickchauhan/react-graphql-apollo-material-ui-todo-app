import React from "react";
import { GET_USER } from "../../graphql/queries";
import { Query } from "react-apollo";
import Typography from "@material-ui/core/Typography";
import Logout from "./Logout";

const AuthButton = () => {
  return (
    <Query query={GET_USER}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading</p>;
        if (error) return <p>Error :(</p>;

        return (
          <React.Fragment>
            <Typography color="inherit">Hello {data.getUser.name}</Typography>
            <Logout />
          </React.Fragment>
        );
      }}
    </Query>
  );
};

export default AuthButton;
