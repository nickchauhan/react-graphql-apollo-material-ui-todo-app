import React from "react";
import { Query } from "react-apollo";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from '@material-ui/core/CircularProgress';


import UpdateTodo from "./UpdateTodo";
import RemoveTodo from "./RemoveTodo";

import { GET_TODOS } from "../../graphql/queries";

const listTodos = () => (
  <Query query={GET_TODOS}>
    {({ loading, error, data }) => {
      if (loading) return <CircularProgress/>;
      if (error) return <p>Error :(</p>;

      return (
        <List>
          {data.todos.map(todo => (
            <ListItem key={todo.id} dense>
              <UpdateTodo todo={todo} />
              <ListItemText primary={todo.task} />
              <ListItemSecondaryAction>
                <IconButton aria-label="Remove Todo">
                  <RemoveTodo todo={todo} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      );
    }}
  </Query>
);

export default listTodos;
