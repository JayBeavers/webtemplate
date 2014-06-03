#!/usr/bin/env node
'use strict';

require('./node_modules/grunt-traceur-simple/node_modules/traceur/bin/traceur-runtime.js');

var debugService = require('debug');
debugService.enable('server');

var debug = require('debug')('server');

var app = require('./app');
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
});