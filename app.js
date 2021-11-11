const express = require('express');
const router = require('./router');
const {
  errorHandler,
  mongooseErrorHandler,
} = require('./middleware/errorHandlers.mw');

const app = express();

app.use(express.json());

app.use('/api', router);

app.use(mongooseErrorHandler, errorHandler);

module.exports = app;
