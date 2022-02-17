/* eslint-disable no-throw-literal */
/* eslint-disable no-console */
const express = require('express');
const patientController = require('../controllers/patientControllers');

const router = express.Router();

// Router to get the registration page.
router.get('/', patientController.getRegPage);

// Get all the available patients.
router.get('/patients', patientController.getPatients);

// Router to post data from the form.
router.post('/', patientController.postPatients);

module.exports = router;
