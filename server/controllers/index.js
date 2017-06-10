var path = require('path');
var db = require('../db');
var Sequelize = require('sequelize')
// var express = require('express');


module.exports = {
  messages: {
    get:(req, res) => {
      console.log('GOTTEM')
      db.findAll()
      .then((data) => {
      res.send(data);
      })
    },
    post:(req, res) => {
      console.log('POSTED')
      console.log('message =', req.body.message)
      db.create({
        'message': req.body.message,
        'username': req.body.username,
        'title': req.body.title
      }).then(() => {
        res.send('POSTED');
      })
      
    }
  }
}