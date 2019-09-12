const express = require("express");

let app = express();

app.get("/", (request, response) => {
  response.send("Hello world");
});

app.listen(80, () => {
  console.log("Server Is Online");
});
