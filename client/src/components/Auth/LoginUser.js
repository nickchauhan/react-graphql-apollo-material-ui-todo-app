import React from "react";
import { Mutation } from "react-apollo";
import { LOGIN_USER } from "../../graphql/mutations";
import { LOCAL_ISLOGGEDIN } from "../../graphql/local-state/queries";
import Button from "@material-ui/core/Button";

const updateMutation = (cache, { data: { loginUser } }) => {

  const { isLoggedIn } = cache.readQuery({ query: LOCAL_ISLOGGEDIN });
  if (loginUser.authToken) {
    cache.writeQuery({
      query: LOCAL_ISLOGGEDIN,
      data: {
        isLoggedIn: {
          __typename: "isLoggedIn",
          login: !isLoggedIn.login
        }
      }
    });
  }
};

const LoginUser = props => {
  return (
    <Mutation mutation={LOGIN_USER} update={updateMutation}>
      {loginUser => (
        <Button
          variant="contained"
          color="secondary"
          style={style.loginButton}
          onClick={async () => {
            var email = props.email;
            var password = props.password;
            if (email && password) {
              try {
                var result = await loginUser({
                  variables: {
                    email: email,
                    password: password
                  }
                });
                if (result.data.loginUser.authToken) {
                  localStorage.setItem(
                    "authToken",
                    result.data.loginUser.authToken
                  );
                  props.handleRedirect();
                }
              } catch (e) {
                props.handleResponsError(e.message);
              }
            } else {
              props.handleError(email, password);
            }
          }}
        >
          LOGIN
        </Button>
      )}
    </Mutation>
  );
};

const style = {
  loginButton: {
    marginTop: "20px"
  }
};
export default LoginUser;
