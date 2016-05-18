/**
 * Created by sergey on 17.10.15.
 */
'use strict';
var express = require('express');
var app = express();

app.use(express.static('dist'));

app.listen(4100, function(){
  console.info('Express server start at 4100 port');
});
