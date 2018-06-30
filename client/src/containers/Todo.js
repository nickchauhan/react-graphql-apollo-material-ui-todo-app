import React, { Component } from "react";
import ListTodos from "../components/Todos/ListTodos";
import BoxLayout from "../hoc/BoxLayout/BoxLayout";
import AddTodo from "../components/Todos/AddTodo";

export default class Todo extends Component {
  render() {
    return (
      <BoxLayout>
        <AddTodo />
        <ListTodos />
      </BoxLayout>
    );
  }
}
