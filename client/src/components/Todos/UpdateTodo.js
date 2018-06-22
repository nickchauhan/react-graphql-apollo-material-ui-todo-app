import React from "react";
import { Mutation } from "react-apollo";
import Checkbox from "@material-ui/core/Checkbox";
import { UPDATE_TODO } from "../../graphql/mutations";
import { GET_TODOS } from "../../graphql/queries";

const UpdateTodo = props => {
  return (
    <Mutation
      mutation={UPDATE_TODO}
      update={cache => {
        let { todos } = cache.readQuery({ query: GET_TODOS });

        todos = todos.map(
          todo =>
            todo.id === props.todo.id
              ? { ...props.todo, completed: !props.todo.completed }
              : todo
        );
        cache.writeQuery({
          query: GET_TODOS,
          data: { todos: todos }
        });
      }}
    >
      {updateTodo => (
        <Checkbox
          checked={props.todo.completed}
          tabIndex={-1}
          disableRipple
          onClick={() =>
            updateTodo({
              variables: {
                id: props.todo.id,
                completed: !props.todo.completed
              }
            })
          }
        />
      )}
    </Mutation>
  );
};

export default UpdateTodo;
