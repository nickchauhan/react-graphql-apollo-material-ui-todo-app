import React, { Component } from "react";
import { Mutation } from "react-apollo";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import { ADD_TODO } from "../../graphql/mutations";
import { GET_TODOS } from "../../graphql/queries";

class AddTodo extends Component {
  state = {
    input: ""
  };

  handleChange = () => event => {
    this.setState({
      input: event.target.value
    });
  };

  render() {
    return (
      <Mutation
        mutation={ADD_TODO}
        update={(cache, { data: { createTodo } }) => {
          const { todos } = cache.readQuery({ query: GET_TODOS });
          cache.writeQuery({
            query: GET_TODOS,
            data: { todos: todos.concat([createTodo]) }
          });
        }}
      >
        {createTodo => (
          <form
            onSubmit={e => {
              e.preventDefault();
              if (this.state.input) {
                createTodo({ variables: { task: this.state.input } });
                this.setState({ input: "" });
              }
            }}
          >
            <Grid container>
              <Grid item xs={12}>
                <Grid
                  container
                  spacing={16}
                  alignItems={grid_items.alignItems}
                  direction={grid_items.direction}
                  justify={grid_items.justify}
                >
                  <Grid item>
                    <TextField
                      id="addTodo"
                      label="Add New Todo"
                      margin="normal"
                      value={this.state.input}
                      onChange={this.handleChange()}
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="secondary"
                      size="small"
                      type="submit"
                    >
                      Add Todo
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        )}
      </Mutation>
    );
  }
}

const grid_items = {
  direction: "row",
  justify: "center",
  alignItems: "center"
};

export default AddTodo;
