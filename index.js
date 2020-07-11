// Script modified: Sat July 11, 2020 @ 05:25:05 EDT
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//IMPORT ROUTES
codeTypeRoute = require('./routes/api/codeTypes');
app.use('/api/codeTypes', codeTypeRoute);
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Connects to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
    console.log('connected.')
);

app.listen(3000);
