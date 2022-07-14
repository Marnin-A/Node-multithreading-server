// Handles requests and response
const http = require("http");
// File handling
const fs = require("fs");
// Port value
const port = 5500;

// Server
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-type": "text/html" });

  fs.readFile("index.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error: File not found");
    } else {
      res.write(data);
    }
    res.end();
  });
});
// Error handling
server.listen(port, function (error) {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log("Server listening on port" + port);
  }
});
