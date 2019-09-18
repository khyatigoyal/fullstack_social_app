const express = require('express');
const route = express.Router();

//@ route         Test Route
//@description   /apis/users
//@token        public
route.get('/', (req, res) => res.send('users Route'));

module.exports = route;
