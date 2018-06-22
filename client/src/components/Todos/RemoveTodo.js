import React from "react";
import { Mutation } from "react-apollo";
import CloseIcon from "@material-ui/icons/Close";

import { REMOVE_TODO } from "../../graphql/mutations";
import { GET_TODOS } from "../../graphql/queries";

const RemoveTodo = props => {
  return (
    <Mutation
      mutation={REMOVE_TODO}
      update={cache => {
        let { todos } = cache.readQuery({ query: GET_TODOS });
        todos = todos.filter(todo => todo.id !== props.todo.id);
        cache.writeQuery({
          query: GET_TODOS,
          data: { todos: todos }
        });
      }}
    >
      {removeTodo => (
        <CloseIcon
          onClick={() =>
            removeTodo({
              variables: {
                id: props.todo.id
              }
            })
          }
        />
      )}
    </Mutation>
  );
};

export default RemoveTodo;
