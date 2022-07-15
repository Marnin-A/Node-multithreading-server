// Handles requests and response
const express = require("express");
// File handling
const app = express();
// Port value
const port = process.env.PORT || 4000;
//Enables server HTML file rendering
app.set("view engine", "ejs");

// Server
app.get("/", (req, res) => {
  //Get method
  res.render("index", { title: "Login page" });
});

// app.post();
app.listen(port, () =>
  console.log("Listening to the server on http://localhost:4000")
);
