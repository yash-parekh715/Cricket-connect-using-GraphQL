const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
  {
    // CapNo: {
    //   type: Number,
    //   required: true,
    //   unique: true,
    // },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      min: [1, "age cannot be lesser than 1"],
    },
    nationality: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "All-Rounder",
      emu: ["Batsman", "Bowler", "All-Rounder"],
    },
    battingType: {
      type: String,
      default: "Right Handed",
      emu: ["Left Handed", "Right Handed"],
    },
    bowlingType: {
      type: String,
      default: "Right Arm off-spinner",
      emu: [
        "Right Arm off-spinner",
        "Right Arm leg spin",
        "Right Arm  fast medium",
        "Left Arm orthodox",
        "Left Arm Unorthodox",
        "Left Arm fast medium",
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("player", playerSchema);
