const { ApolloServer, startStandalone } = require("apollo-server");
const mongoose = require("mongoose");
require("dotenv").config();

const {typeDefs} = require("./graphQL/typeDefs");
const {resolvers} = require("./graphQL/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log(
        `connected to db and running on http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
