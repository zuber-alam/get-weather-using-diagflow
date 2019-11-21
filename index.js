var request = require("request");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
var path = require("path");
var server = require("http").Server(app);
var io = require("socket.io")(server);

/**
 * Webhook
 */

app.post("/webhook", function(req, res) {
  console.log("Received a post request");
});

var apiKey = "";

var result;

function cb(err, response, body) {
  if (err) {
    console.log("error hai");
  }
  console.log("aa gya");
  var weather = JSON.parse(body);
  console.log(weather);
}

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

io.on("connection", function(client) {
  console.log("socket connection established");
  client.on("SendLocation", function(data) {
    console.log("Location Received");
    console.log(data);
  });
});

server.listen(4200, function() {
  console.log("listening on *:4200");
});
