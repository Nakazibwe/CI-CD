/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
/* eslint-disable eqeqeq */
/* eslint-disable no-throw-literal */

// Requiring models.
const PatientReg = require('../models/patientsRegModels');

// Getting the registration page.
exports.getRegPage = async (req, res) => {
  res.render('index');
};

// Getting all patients.
exports.getPatients = async (req, res) => {
  try {
    const availablePatients = await PatientReg.find();
    console.log(availablePatients);
    if (!availablePatients) {
      throw 'No registered patients currently';
    }
    res.status(200).json(availablePatients);
  } catch (error) {
    if (error == 'No registered patients currently') {
      return res.status(404).json({ error });
    }
    return res.status(400).json({ error });
  }
};
// Posting Patients to the database.
exports.postPatients = async (req, res) => {
  const {
    surname, givenname, patientdob, residence, occupation, nationality, gender, category,
  } = req.body;
  try {
    const newPatient = await PatientReg.create({
      surname, givenname, patientdob, residence, occupation, nationality, gender, category,
    });
    if (!newPatient) {
      throw 'Patient was  not added to database successfully';
    }
    res.redirect('/');
  } catch (error) {
    if (error == 'Patient was  not added to database successfully') {
      return res.status(400).send('Patient was  not added to database successfully');
    }
    return res.status(400).send('Something went wrong!!');
  }
};
