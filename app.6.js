/*global require:false */
/*global module:false */

import foo from 'routes/foo.6';

var express = require('express');
var logger = require('morgan');
var favicon = require('static-favicon');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(logger('dev'));

app.use(favicon());
app.use(express.static('public'));

app.use(cors());
app.use(bodyParser());
app.use('/foo', foo);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found: ' + req.url);
    err.status = 404;
    next(err);
});

/// error handlers
app.use(function(err, req, res, next) {
    res.writeHead(err.status || 500);
    res.end();
});

module.exports = app;