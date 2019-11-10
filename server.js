const express = require('express');
const bodyParser = require('body-parser');
const Rudy = require('./views/rudy_views');


express()
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .post('/Rudy/getPlace', function (req, res) {
    Rudy.callPlace(req.body.keyword)
      .then(function (rs) {
        res.send(rs)
      })
  })
  .get('/Rudy/findXYZ', function (req, res) {
    Rudy.findArray()
      .then(function (rs) {
        res.send(rs)
      })
  })
  .listen(4000, () => {
    console.log("Server is listening on port 4000");
  });
