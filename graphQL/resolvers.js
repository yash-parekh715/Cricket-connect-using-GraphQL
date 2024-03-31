const player = require("../models/playerModels");

resolvers = {
  Query: {
    async getOnePlayer(_, { ID }) {
      return await player.findOne({ _id: ID });
    },

    async getAllPlayers(_, { amount }) {
      return await player.find().sort({ createdAT: -1 }).limit(amount);
    },
  },
  Mutation: {
    async addPlayer(
      _,
      {
        playerInput: {
          name: name,
          age: age,
          nationality: nationality,
          role: role,
          battingType: battingType,
          bowlingType: bowlingType,
        },
      }
    ) {
      let newPlayer = new player({
        name,
        age,
        nationality,
        role,
        battingType,
        bowlingType,
      });

      try {
        const result = await newPlayer.save();
        console.log(`New Player added to the database : ${result._id}`);
        return newPlayer;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },

    async deletePlayer(_, { ID }) {
      const deleted = await player.deleteOne({ _id: ID });
      if (deleted) {
        return true;
      }
      return false;
    },

    async editPlayer(
      _,
      {
        ID,
        playerInput: {
          name: name,
          age: age,
          nationality: nationality,
          role: role,
          battingType: battingType,
          bowlingType: bowlingType,
        },
      }
    ) {
      const update = await player.updateOne(
        { _id: ID },
        {
          name: name,
          age: age,
          nationality: nationality,
          role: role,
          battingType: battingType,
          bowlingType: bowlingType,
        }
      );
      if (update) {
        return true;
      }
      return false;
    },
  },
};

module.exports = { resolvers };
