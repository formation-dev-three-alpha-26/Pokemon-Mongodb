const mongoose = require("mongoose");
const Pokemon = require("../model/Pokemon.js");
const allPokemons = require("../../data/pokemon.json");

const insertAllPokemons = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/pokemon");

    await Pokemon.create(allPokemons);

    console.log("Pokemons inserted successfully");
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.disconnect();
  }
};

insertAllPokemons();
