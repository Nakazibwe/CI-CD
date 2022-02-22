/* eslint-disable no-console */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prefer-template */
/* eslint-disable no-path-concat */
/* eslint-disable no-unused-vars */
// Requiring the dependecies.
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { urlencoded } = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;


// Requiring the dotenv
require('dotenv').config();


// Creating the mongoose connection.
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true,
  tlsCAFile: './ca-certificate.crt',
  // useCreateIndex: true,
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection currently open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });



// Requiring the models.
const PatientsReg = require('./models/patientsRegModels');

// Requiring the routes.
const PatientRegRoutes = require('./routes/patientsRegRoutes');

// Configutations.
app.set('view engine', 'pug');
app.set('views', path.join(__dirname + '/views'));

// Middleware.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/public')));
app.use('/public/imagefiles', express.static(__dirname + '/public/imagefiles'));



// Routes for the project.
app.use('/', PatientRegRoutes);

// Server port
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
module.exports = app;
