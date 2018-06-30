import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  request: async operation => {
    // const token = await localStorage.getItem("authToken");
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjMyMDhiMDI3NjMzZmI5NzZkMTZjNzUiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTMwMDA1NjgwfQ.IV-rJ2kSQgHxBzvpHPTnfiLaMYIoaDh1PxS0vrVahuo";
    operation.setContext({
      headers: {
        "x-auth": token
      }
    });
  }
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
