const express = require("express");
const morgan = require("morgan");
const port = 3000;
const app = express();

app.listen(port);

app.use(express.static("./public"));
app.use(morgan("dev"));

// Register vies engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Welcome, Joseph Mbote" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Us" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404 - Page not found" });
});
