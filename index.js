// Script modified: Sat July 11, 2020 @ 04:38:29 EDT
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

app.listen(3000);
