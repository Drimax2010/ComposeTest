var restify = require("restify");

// Retrieve
var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://composite-test-db:27017";
var db;

// Connect to the db
mongoClient.connect(url, function(err, database) {
  if (err) {
    return console.dir(err);
  }
  global.db = database.db("ComposeTest");
  var chatRoom = this.db.collection("Device");
  chatRoom.count(function(err, count) {
    console.log("registros actuales: "+count)
    /*
    if (count <= 0) {
      this.db.createCollection("chatRoom", function(err, res) {
        if (err) throw err;
        for (var i = 1, len = 10; i < len; i++) {
          console.log("crea registros")
          var defaultChatRoom = { id: i, name: "sample " + i };
          chatRoom.insertOne(defaultChatRoom, function(err, res) {
            if (err) throw err;
          });
        }
      });
    }
    */
  });
});

function respond(req, res, next) {
  global.db
    .collection("Device")
    .find({})
    .toArray(function(err, result) {
      console.log("Se envia respuesta");
      // Website you wish to allow to connect
      res.setHeader("Access-Control-Allow-Origin", "*");
      // Request methods you wish to allow
      res.setHeader("Access-Control-Allow-Methods", "GET");
      // Request headersinx", " you wish to allow
      res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
      );
      res.send(result);

      next();
    });
}

var server = restify.createServer();

server.get("/get-info", respond);
server.listen(3100, function() {
  console.log("%s listening at %s", server.name, server.url);
});
