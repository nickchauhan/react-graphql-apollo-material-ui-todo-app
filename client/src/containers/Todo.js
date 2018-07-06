import React, { Component } from "react";
import ListTodos from "../components/Todos/ListTodos";
import BoxLayout from "../hoc/BoxLayout/BoxLayout";
import AddTodo from "../components/Todos/AddTodo";
import { GET_USER } from "../graphql/queries";
import { Query } from "react-apollo";
export default class Todo extends Component {
  redirectToLogin = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <Query query={GET_USER}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading</p>;
          if (error) {
            this.redirectToLogin();
          }
          return (
            <BoxLayout>
              <AddTodo />
              <ListTodos />
            </BoxLayout>
          );
        }}
      </Query>
    );
  }
}
