/* @flow */
const express = require('express')
  , app = express()
  , DEFALUT_PORT = 4000
  , port = parseInt(process.env.PORT || DEFALUT_PORT);

require('./lib/render')(app, port);
