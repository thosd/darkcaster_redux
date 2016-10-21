var express = require('express');
var server = express();
var port = process.env.PORT || 8080;
var logger = reuire('./middleware/logger.js');
var axios = require('axios');
var cors = require('cors');
var forecastRouter = require('./routers/forecast.router.js');
var indexRouter = require('./routers/index.router.js');

server.use(express.static(__dirname + '/public'));
server.use(logger);
server.use(cors());
server.use(indexRouter);
server.use(forecastRouter);

server.listen(port, function(){
  console.log('Now listening on port...',port);
});
