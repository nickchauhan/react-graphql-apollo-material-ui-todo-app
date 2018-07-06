import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//Local State
import { defaults } from "./graphql/local-state/defaults";
import { resolvers } from "./graphql/local-state/resolvers";

const client = new ApolloClient({
  uri: "http://localhost:4000",

  // For Sending the Auth Token on Every Request
  request: async operation => {
    const token = await localStorage.getItem("authToken");
    operation.setContext({
      headers: {
        "x-auth": token
      }
    });
  },
  clientState: {
    defaults,
    resolvers
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
