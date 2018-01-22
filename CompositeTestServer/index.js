var restify = require("restify");

// Retrieve
var mongoClient = require("mongodb").MongoClient;
var ObjectID = require('mongodb').ObjectID;
var url = "mongodb://composite-test-db:27017";
var db;

// Connect to the db
mongoClient.connect(url, function(err, database) {
  if (err) {
    return console.dir(err);
  }
  global.db = database.db("ComposeTest");
  var device = this.db.collection("Device");
  device.count(function(err, count) {
    console.log("registros actuales: "+count)
    
  });
});

function getInfoResp(req, res, next) {
  global.db
    .collection("Device")
    .find({})
    .toArray(function(err, result) {
      console.log("Se envia respuesta "+ result);
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

function getDeviceResp(req, res, next) {
  console.log("Se consulta con el idd "+ req.params.id);
  global.db
    .collection("Device")
    .findOne({_id: new ObjectID.createFromHexString(req.params.id)},function(err, result) {
      console.log("Se envia respuesta "+ result);
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

server.get("/get-info", getInfoResp);
server.get("/get-device/:id",getDeviceResp)
server.listen(3100, function() {
  console.log("%s listening at %s", server.name, server.url);
});
