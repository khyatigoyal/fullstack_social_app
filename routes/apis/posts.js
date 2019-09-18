const express = require('express');
const route = express.Router();

//@ route         Test Route
//@description   /apis/posts
//@token        public
route.get('/', (req, res) => res.send('posts Route'));

module.exports = route;
