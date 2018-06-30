const { server, options } = require("./graphql/graphql-server");
const { mongoose } = require("./db/mongoose");

mongoose.connection.once("open", function() {
  server.start(options, () =>
    console.log("Server is running on localhost:4000")
  );
});
