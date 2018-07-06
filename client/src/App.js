import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import Todo from "./containers/Todo";
import Auth from "./containers/Auth";

import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { Query } from "react-apollo";
import { LOCAL_ISLOGGEDIN } from "./graphql/local-state/queries";

class App extends Component {
  render() {
    const AuthRoutes = (
      <Switch>
        <Route path="/" exact component={Auth} />
        <Route path="/todos" component={Todo} />
      </Switch>
    );

    const UnAuthRoutes = (
      <Switch>
        <Route path="/" exact component={Auth} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <Layout>
        <Query query={LOCAL_ISLOGGEDIN}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading</p>;
            if (error) return <p>Error :(</p>;

            if (data.isLoggedIn.login) {
              return AuthRoutes;
            } else {
              return UnAuthRoutes;
            }
          }}
        </Query>
      </Layout>
    );
  }
}
export default withRouter(App);
