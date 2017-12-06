
const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const port = 8000;
const dbUrl = 'mongodb://pipette307:bgvjhxtq@ds157185.mlab.com:57185/tatarchat';
const MongoClient = require('mongodb').MongoClient;

var db;
//const.db
//db.url = 'mongodb://pipette307:bgvjhxtq@ds157185.mlab.com:57185/tatarchat';

MongoClient.connect(dbUrl,(err, database) => {
  if (err) return console.log("Error connecting to Mongo");
  db = database;
  app.listen(port, () => {
    console.log("Server is running on port: " + port);
  })
});

app.use(bodyParser.urlencoded({extended: true}))

app.post('/postword2', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  db.collection('words').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log(req.body.word + ' word posted to database: ' );
  })
})

app.post('/postword', (req, res) => {
    db.collection('words').find({word: req.body.word}).toArray((err, result) => {
      if (result.length < 1) { // if login doesnt exist true
        db.collection('words').save(req.body, (err, result) => {
          if (err) return console.log(err);
          console.log('Success!');
        })
      } else{ 
        console.log("Palyndrome is already exist");
      }
    });
})

app.get('/getwords', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  db.collection('words').find().toArray((err, result) => {
    if (err) return console.log(err)
      res.send(result);
  });
});



