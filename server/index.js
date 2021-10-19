const express = require("express");
const app = express();
const port = 9009;

app.use(express.json());
app.use(express.static(__dirname + "/../dist"));

app.listen(port, () => {
  console.log(`listening on ${port}...`)
});