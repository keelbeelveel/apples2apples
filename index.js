// Script modified: Sat July 11, 2020 @ 02:43:00 EDT
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//IMPORT ROUTES
codeTypeRoute = require('./routes/api/codeTypes');
app.use('/api/codeTypes', codeTypeRoute);

//Conntext to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
    console.log('connected.')
);
