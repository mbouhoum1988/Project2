var db = require("../models");
var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // db.Example.findAll({}).then(function() {
      res.sendFile(path.join(__dirname, "../public/assets/index.html"));
    });
  // });

  app.get("/recipeSearch", function(req, res) {
    // db.Example.findOne().then(function() {
    res.sendFile(path.join(__dirname, "../public/assets/recipesearch.html"));
    // });
  });

  app.get("/login", function(req, res) {
    // db.Example.findAll({}).then(function() {
      res.sendFile(path.join(__dirname, "../public/assets/login.html"));
    });
  // });

  app.get("/register", function(req, res) {
    // db.Example.findAll({}).then(function() {
      res.sendFile(path.join(__dirname, "../public/assets/signup.html"));
    });
  // });

  app.get("*", function(req, res) {
    res.redirect("/");
  });
};
