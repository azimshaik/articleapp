const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//MongoDB Conenction
mongoose.connect("mongodb://mongo:27017/articledb");
let db = mongoose.connection;

//check connection
db.once("open", function() {
  console.log("👍 Connected to mongodb💪");
});

//check for db errors
db.on("error", function(err) {
  console.log(err);
});

// init app
const app = express();
//Bring in models
let Article = require("./models/article");

//load view engine **imp
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//BODY Parser MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
//parse application/json
app.use(bodyParser.json());

//set public folder
app.use(express.static(path.join(__dirname, "public")));

//home route
//we are passing from the function (from query ) and passing it to the view
app.get("/", function(req, res) {
  Article.find({}, function(err, articles) {
    if (err) {
      console.log("error");
    } else {
      res.render("index", {
        title: "Azim",
        articles: articles
      });
    }
  });
});

//get single article
app.get("/article/:id", function(req, res) {
  Article.findById(req.params.id, function(err, article) {
    res.render("article", {
      article: article
    });
  });
});

// add route
app.get("/articles/add", function(req, res) {
  res.render("add_article", {
    title: "add articles "
  });
});

//Add submit POST route
app.post("/articles/add", function(req, res) {
  let article = new Article();
  article.title = req.body.title;
  article.author = req.body.author;
  article.body = req.body.body;
  article.save(function(err) {
    if (err) {
      console.log("err");
    } else {
      res.redirect("/");
    }
  });
});

//add spider route
app.get("/spider", function(req, res) {
  res.render("add_spider");
});
app.listen("3000", () => console.log("article app running at 3000"));
