const express = require('express');
const route = express.Router();

//@ route         Tesr Route
//@description   /apis/auth
//@token        public
route.get('/',(req,res)=>res.send('auth Route'));

module.exports=route;