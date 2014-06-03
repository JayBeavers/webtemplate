var debug = require('debug')('wifi');
var router = require('express').Router();
var assert = require('assert');
var util = require('util');
var _ = require('underscore');

var foo = (request, response) => {
  response.send(200, 'bar');
};

router.get('/', foo);

export default router;