const express = require("express");
const path = require("path");

// init app
const app = express();

//load view engine **imp
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//home route
app.get("/", function(req, res) {
  let articles = [
    {
      id: 1,
      title: "Article One",
      author: "Azim Shaik",
      body: "This is Article one"
    },
    {
      id: 2,
      title: "Aricle two",
      author: "Abid Shaik",
      body: "This is article 2"
    }
  ];
  res.render("index", {
    title: "Azim",
    articles: articles
  });
});

// add route
app.get("/articles/add", function(req, res) {
  res.render("add_article", {
    title: "add articles "
  });
});

app.listen("3000", () => console.log("article app running at 3000"));
