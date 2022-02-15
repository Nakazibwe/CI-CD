/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const PatientsReg = require('../models/patientsRegModels');

const router = express.Router();

// Router to get the registration page.
router.get('/', (req, res) => {
  res.render('index');
});

// Router to post data from the form.
router.post('/', async (req, res) => {
  try {
    const patientsReg = new PatientsReg(req.body);
    await patientsReg.save((err) => {
      if (err) {
        throw err;
      }
      res.redirect('/');
    });
  } catch (error) {
    console.log(error)
    res.status(400).send('Data was not sent to Patients Database');
  }
});

module.exports = router;
