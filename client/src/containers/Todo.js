import React, { Component } from "react";
import Todos from "../components/Todos/ListTodos";
import Paper from "@material-ui/core/Paper";
import AddTodo from "../components/Todos/AddTodo";

export default class Todo extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ margin: "auto", width: "400px" }}>
          <Paper>
            <AddTodo />
            <Todos />
          </Paper>
        </div>
      </div>
    );
  }
}
