import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import Todo from "./containers/Todo";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" component={Todo} />
        </Switch>
      </Layout>
    );
  }
}
export default withRouter(App);
