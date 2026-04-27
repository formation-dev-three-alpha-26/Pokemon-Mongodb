var express = require('express');
require('./db/config');


var app = express();










var PORT = 3000;

app.listen(PORT,() => {
  console.log(`PokeMon server on http://localhost:${PORT}`);
});
