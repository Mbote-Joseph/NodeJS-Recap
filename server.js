const express = require("express");
const port = 3000;
const app = express();

app.listen(port);

// Register vies engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Welcome, Joseph Mbote" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});
