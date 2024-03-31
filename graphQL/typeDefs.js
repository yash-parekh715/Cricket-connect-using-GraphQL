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

  input playerEdit {
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
    addPlayer(PlayerInput: playerInput): player!
    editPlayer(ID: ID!, PlayerEdit: playerEdit): Boolean
    deletePlayer(ID: ID!): Boolean
  }
`;

module.exports = { typeDefs };
