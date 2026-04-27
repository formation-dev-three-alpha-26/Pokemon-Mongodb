var express = require('express');
var db = require('./db');


var app = express();










var PORT = 3000;

app.listen(PORT,() => {
  console.log(`PokeMon server on http://localhost:${PORT}`);
});