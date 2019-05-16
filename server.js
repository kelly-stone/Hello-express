var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// app.get("/", function(req, res) {
//   //res.send("this is the homepage")
//   var responseObj = {
//     name: "Hi Kelly, this is the homepage"
//   };
//   res.send(responseObj);
// });

// app.get("/profile/:id/user/:name", function(req, res) {
//   console.dir(req.params);
//   res.send("you are getting " + req.params.id);
// });

app.get("/", function(req, res) {
  //res.send("this is the homepage")
  console.dir(req.query);
  res.send("home page: " + req.query.name);
});

//upload form
app.get("/upload", function(req, res) {
  var form = fs.readFileSync("./form.html", { encoding: "utf-8" });
  res.send(form);
});
app.post("/upload", function(req, res) {});

app.post("/", urlencodedParser, function(req, res) {
  console.dir(req.body);
  res.send(req.body.name);
});

app.listen(3001);
console.log("listening to port 3001");
