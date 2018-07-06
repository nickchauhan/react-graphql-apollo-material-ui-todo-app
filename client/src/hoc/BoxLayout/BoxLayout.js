import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";

export default class BoxLayout extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ margin: "auto", width: "400px" }}>
          <Paper style={{ marginTop: "20px", padding: "20px" }}>
            {this.props.children}
          </Paper>
        </div>
      </div>
    );
  }
}
