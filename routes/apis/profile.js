const express = require('express');
const route = express.Router();

//@ route         Test Route
//@description   /apis/profile
//@token        public
route.get('/', (req, res) => res.send('profile Route'));

module.exports = route;
