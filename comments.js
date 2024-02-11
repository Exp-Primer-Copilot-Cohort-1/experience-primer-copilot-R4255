//create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/Comments';
var db;
var collection;
var collectionName = 'comments';
//connect to the database
MongoClient.connect(url, function(err, database) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  db = database;
  collection = db.collection(collectionName);
  //db.close();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/comments', function(req, res){
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    res.json(docs);
  });
});

app.post('/comments', function(req, res){
  console.log(req.body);
  collection.insertOne(req.body, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the collection");
    console.log(result);
    res.json(result);
  });
});

app.listen(3000, function(){
  console.log('running on port 3000');
});