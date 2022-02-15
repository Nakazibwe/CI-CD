const mongoose = require('mongoose');
const express = require('express');

const patientSchema = new mongoose.Schema({
  surname: {
    type: String,
    required: true,
    trim: true,
  },
  givenname: {
    type: String,
    required: true,
    trim: true,
  },
  patientdob: {
    type: Date,
    required: true,
    trim: true,
  },
  residence: {
    type: String,
    required: true,
    trim: true,
  },
  occupation: {
    type: String,
    required: true,
    trim: true,
  },
  nationality: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },

});
module.exports = mongoose.model('PatientReg', patientSchema);
