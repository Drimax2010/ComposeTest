var restify = require("restify");
const corsMiddleware = require("restify-cors-middleware");
const util = require("util");

// Retrieve
var mongoClient = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID;
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
    console.log("registros actuales: " + count);
  });
});

function getInfoResp(req, res, next) {
  global.db
    .collection("Device")
    .find({})
    .toArray(function(err, result) {
      console.log("Se envia respuesta " + result);

      res.send(result);

      return next();
    });
}

function getDeviceResp(req, res, next) {
  console.log("Se consulta con el idds " + req.params.id);
  global.db
    .collection("Device")
    .findOne({ _id: new ObjectID.createFromHexString(req.params.id) }, function(
      err,
      result
    ) {
      console.log("Se envia respuesta " + result);
      res.send(result);

      return next();
    });
}

function createDevice(req, res, next) {
  /*
  if (!req.is("application/json")) {
    return next(new errors.InvalidContentError("Expects 'application/json'"));
  }
*/
  let data = req.body || {};
  global.db.collection("Device").insertOne(data, function(err, result) {
    if (err) {
      throw err;
    }
    data._id = result.insertedId;
    res.send(data);
    return next();
  });
}

function updateDevice(req, res, next) {
  let data = req.body || {};
  console.log("data: "+ req.params.id);
  var newValues = { $set: {name: data.name, type: data.type, desc: data.desc, capType: data.capType, brokerUrl: data.brokerurl, image: data.image} }
  global.db  
    .collection("Device")
    .updateOne({ _id: new ObjectID.createFromHexString(req.params.id) },newValues, function(
      err,
      result
    ) {
      if (err) {
        throw err;
      }
      res.send(data);

      return next();
    });
}

function deleteDevice(req, res, next) {
  global.db
    .collection("Device")
    .remove({ _id: new ObjectID.createFromHexString(req.params.id) }, function(
      err,
      result
    ) {
      res.send(req.params.id);

      return next();
    });
}

var server = restify.createServer();
const cors = corsMiddleware({
  preflightMaxAge: 5, //Optional
  origins: ["*"],
  allowHeaders: ["X-Requested-With,content-type"]
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.pre(cors.preflight);
server.use(cors.actual);

server.get("/get-info", getInfoResp);
server.get("/get-device/:id", getDeviceResp);
server.post("/create-device", createDevice);
server.put("/update-device/:id", updateDevice);
server.del("/delete-device/:id", deleteDevice);

server.listen(3100, function() {
  console.log("%s listening at %s", server.name, server.url);
});
