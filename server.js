var express = require("express");

var app = express();

app.get("/", function(req, res) {
  //res.send("this is the homepage")
  var responseObj = {
    name: "Hi Kelly, this is the homepage"
  };
  res.send(responseObj);
});

app.listen(3001);
console.log("listening to port 3001");
