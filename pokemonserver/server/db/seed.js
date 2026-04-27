const mongoose  = require('mongoose');
const Pokemon = require('../model/Pokemon.js');

const allPokemons = require('../../data/pokemon.json')

const insertAllPokemons = function() {
  Pokemon.create(allPokemons)
    .then(() => mongoose.disconnect());
};

insertAllPokemons();