'use strict';

module.exports = function(app, port) {

  const React = require('react')
    , express = require('express')
    , bodyParser = require('body-parser')
    , ReactDOMServer = require('react-dom/server')
    , jade = require('jade')
    , babel = require('babel-core/register')
    , path = require('path')
    , viewsLocation = path.resolve(__dirname, '..', 'views', 'src');

  app.use(bodyParser.json());
  app.use(express.static('public'));
  app.set('views', viewsLocation);
  app.set('view engine', 'jade');

  app.use('/', function(req, res) {
    console.log('[react-server]: request:', req.body);

    try {
      // module is the view to load.
      var module = 'index';

      // Turn a Jade template file into HTML with React server-side rendering.
      var fn = jade.compileFile(viewsLocation + '/' + module + '.jade');
      // var html = ReactDOMServer.renderToString(fn());

      // Send HTML back to PHP server
      res.status(200).render(module, {
        html: fn(),
        props: JSON.stringify({})
      });
    } catch (err) {
      console.error(`[react-server]: ${err}`);
      res.status(500).send(err.message);
    }
  });

  app.listen(port, function() {
    console.log(`[react-server]: listening on port ${port}`);
  });
};
