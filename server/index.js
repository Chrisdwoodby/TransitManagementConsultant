const express = require("express");
const app = express();
const port = 8001;

app.use(express.json());
app.use(express.static(__dirname + "/../dist"));

app.listen(port, () => {
  console.log(`listening on ${port}...`)
});
