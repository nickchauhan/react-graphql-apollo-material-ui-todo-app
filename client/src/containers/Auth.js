import React, { Component } from "react";
import BoxLayout from "../hoc/BoxLayout/BoxLayout";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import LoginUser from "../components/Auth/LoginUser";

export default class Auth extends Component {
  state = {
    login: true, // switch between Login and SignUp
    email: "",
    password: "",
    confirmPwd: "",
    name: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  loginErrorHandle = (email, password) => {
    console.log(email, password);
  };

  redirectHandler = () => {
    this.props.history.push("/todos");
  };

  handleResponsError = err => {
    console.log(err);
  };

  render() {
    var isLogin = this.state.login;
    var SubmitButton;
    if (isLogin) {
      SubmitButton = (
        <LoginUser
          email={this.state.email}
          password={this.state.password}
          handleError={this.loginErrorHandle}
          handleRedirect={this.redirectHandler}
          handleResponsError={this.handleResponsError}
        />
      );
    } else {
      SubmitButton = (
        <Button variant="contained" color="secondary" style={style.loginButton}>
          {this.state.login ? "Login" : "Sign Up"}
        </Button>
      );
    }

    return (
      <BoxLayout>
        <Typography variant="headline" component="h3">
          {this.state.login ? "Login" : "Sign Up"}
        </Typography>
        {!this.state.login && (
          <TextField
            id="name"
            label="Name"
            value={this.state.name}
            onChange={this.handleChange("name")}
            margin="normal"
            style={style.input}
          />
        )}
        <TextField
          id="email"
          label="Email"
          value={this.state.email}
          onChange={this.handleChange("email")}
          margin="normal"
          style={style.input}
        />
        <TextField
          id="password"
          label="Password"
          value={this.state.password}
          onChange={this.handleChange("password")}
          margin="normal"
          style={style.input}
          type="password"
        />
        {!this.state.login && (
          <TextField
            id="confirmPwd"
            label="Confirm Password"
            value={this.state.confirmPwd}
            onChange={this.handleChange("confirmPwd")}
            margin="normal"
            style={style.input}
          />
        )}
        <Grid container>
          <Grid item xs={12}>
            {SubmitButton}
          </Grid>
          <Grid item xs={12}>
            <Typography
              color="primary"
              component="a"
              style={style.isloginLink}
              onClick={() => this.setState({ login: !this.state.login })}
            >
              {this.state.login
                ? "Need to create an account?"
                : "Already have an account?"}
            </Typography>
          </Grid>
        </Grid>
      </BoxLayout>
    );
  }
}

const style = {
  input: {
    width: "100%",
    marginBottom: "10px"
  },
  loginButton: {
    marginTop: "20px"
  },
  isloginLink: {
    marginTop: "20px",
    cursor: "pointer"
  }
};
