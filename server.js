// Import Modules
const express = require("express");
const app = express();
const path = require("path");


// Port value
const port = process.env.PORT || 4000;

//Load static assets
app.use("/static", express.static(path.join(__dirname, 'public')))
app.use("/assets", express.static(path.join(__dirname, "assets/images")))

//Enables server HTML file rendering
app.set("view engine", "ejs");

// Server
app.get("/", (req, res) => {
//Get method
  res.render("index", { title: "Login page" });
});

// Post method
app.listen(port, () =>
  console.log("Listening to the server on http://localhost:4000")
);
