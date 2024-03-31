const { gql } = require("apollo-server");

typeDefs = gql`
  type player {
    name: String
    age: Int
    nationality: String
    role: String
    battingType: String
    bowlingType: String
  }

  input playerInput {
    name: String
    age: Int
    nationality: String
    role: String
    battingType: String
    bowlingType: String
  }

  type Query {
    getOnePlayer(ID: ID!): player!
    getAllPlayers(amount: Int): [player]
  }

  type Mutation {
    addPlayer(playerInput: playerInput): player!
    editPlayer(ID: ID!, playerInput: playerInput): Boolean
    deletePlayer(ID: ID!): Boolean
  }
`;

module.exports = { typeDefs };
