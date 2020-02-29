const express = require('express');
const getTodos = require('./services/get-todos');

const route = express.Router();

route.get('/todos', getTodos);

module.exports = route;