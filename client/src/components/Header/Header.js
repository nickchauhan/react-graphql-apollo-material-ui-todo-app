import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { LOCAL_ISLOGGEDIN } from "../../graphql/local-state/queries";
import { Query } from "react-apollo";
import AuthButton from "./AuthButton";

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Todo
          </Typography>

          <Query query={LOCAL_ISLOGGEDIN}>
            {({ loading, error, data }) => {
              if (loading) return <p>Loading</p>;
              if (error) return <p>Error :(</p>;
              return data.isLoggedIn.login && <AuthButton />;
            }}
          </Query>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
