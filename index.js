var secret = require('./conf/secret.json')
var url = secret.mongodb

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(url, function(err, db) {
    var dbo = db.db("marketplace");
    var cursor = dbo.collection("Suppliers").find();

    cursor.each(function(err, doc) {
      if (doc) {
        console.log(doc);
      }
    });
});
