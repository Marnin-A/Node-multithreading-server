// Import Modules
const express = require("express");
const bodyparser = require("body-parser")
const app = express();
const path = require("path");
const session = require("express-session")
const {v4: uuidv4} =require("uuid")


// Port value
const port = process.env.PORT || 4000;

//Parse file body
app.use(bodyparser.json())
app.use(bodyparser.urlencoded(({extended:true})))

//Create site session
app.use(session({
  secret: uuidv4(),
  resave: false,
  saveUninitialized: true
}))

//Load static assets
app.use("/static", express.static(path.join(__dirname, 'public')))
app.use("/assets", express.static(path.join(__dirname, "assets/images")))

//Enables server HTML file rendering
app.set("view engine", "ejs");

// Server
app.get("/", (req, res) => {
//Get method
  res.render("index", { title: "Group B" });
});

// Post method
app.listen(port, () =>
  console.log("Listening to the server on http://localhost:4000")
);
