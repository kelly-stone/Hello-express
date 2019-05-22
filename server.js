var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");

var app = express();

//Using template engines with Express, https://expressjs.com/en/guide/using-template-engines.html
app.set("view engine", "ejs");

var multer = require("multer");
//var upload = multer({ dest: "uploads/" });

//https://www.npmjs.com/package/multer
//https://www.cnblogs.com/chyingp/p/express-multer-file-upload.html
var createFolder = function(folder) {
  try {
    fs.accessSync(folder);
  } catch (e) {
    fs.mkdirSync(folder);
  }
};

var uploadFolder = "./upload/";

createFolder(uploadFolder);

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, uploadFolder);
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname); //with original file name
  }
});
var upload = multer({ storage: storage });

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
app.get("/form/:name", function(req, res) {
  var data = { age: 28, hobbies: ["sleeping", "coding", "eating"] };
  res.render("form", { data: data }); //sec person = line 63, first person is views/form
});

//header.ejs
app.get("/about", function(req, res) {
  res.render("about"); //sec person = line 63, first person is views/form
});

// https://www.npmjs.com/package/multer
app.post("/upload", upload.single("logo"), function(req, res) {
  console.dir(req.file);
  res.send({ ret_code: 0 });
});

app.post("/", urlencodedParser, function(req, res) {
  console.dir(req.body);
  res.send(req.body.name);
});

app.listen(3001);
console.log("listening to port 3001");
