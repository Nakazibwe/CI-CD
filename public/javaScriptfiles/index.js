/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
// Assigning variables to the different inputs.
const surName = document.patientform.surname;
const givenName = document.patientform.givenname;
const patientDOB = document.patientform.patientdob;
const patientresidence = document.patientform.residence;
const patientoccupation = document.patientform.occupation;
const patientNationality = document.patientform.nationality;
const patientCategory = document.patientform.category;
const male = document.getElementById('malegender');
const female = document.getElementById('femalegender');

// Assigning variables to the error messages.
const surnameError = document.getElementById('surname-error');
const givennameError = document.getElementById('givenname-error');
const patientDOBError = document.getElementById('dob-error');
const patientResidenceError = document.getElementById('residence-error');
const patientOccupationError = document.getElementById('occupation-error');
const patientNationalityError = document.getElementById('nationality-error');
const patientCategoryError = document.getElementById('category-error');

// Assigning variables  to the error messages.
const successMessage = document.getElementById('success-div');

// Regular expressions.
const nonumber = /^[A-Za-z ]+$/;

const validate = (event) => {
  let isValid = true;
  // Validating the surname input.
  const Surname = surName.value.trim();
  if (Surname == '') {
    surnameError.innerHTML = 'This field is required';
    surnameError.style = 'color:red';
    surName.style.border = '1px solid red';
    surName.focus();
    isValid = false;
  } else if (!(Surname.length > 1 && Surname.length < 16)) {
    surnameError.innerHTML = 'Surnames are between 1-16 letters';
    surnameError.style = 'color:red';
    surName.style.border = '1px solid red';
    surName.focus();
    isValid = false;
  } else if (!Surname.match(nonumber)) {
    surnameError.innerHTML = 'Surnames never have numbers';
    surnameError.style = 'color:red';
    surName.style.border = '1px solid red';
    surName.focus();
    isValid = false;
  } else {
    successMessage.innerHTML = 'Registration was Successful !';
    successMessage.style = 'color:#fff; background-color:#32cd32';
    successMessage.style.border = '1px solid #32cd32';
  }
  // Validating the given name input.
  const Givenname = givenName.value.trim();
  if (Givenname == '') {
    givennameError.innerHTML = 'This field is required';
    givennameError.style = 'color:red';
    givenName.style.border = '1px solid red';
    givenName.focus();
    isValid = false;
  } else if (!(Givenname.length > 1 && Givenname.length < 16)) {
    givennameError.innerHTML = 'Given names are between 1-16 letters';
    givennameError.style = 'color:red';
    givenName.style.border = '1px solid red';
    givenName.focus();
    isValid = false;
  } else if (!Givenname.match(nonumber)) {
    givennameError.innerHTML = 'Given names never have numbers';
    givennameError.style = 'color:red';
    givenName.style.border = '1px solid red';
    givenName.focus();
    isValid = false;
  } else {
    successMessage.innerHTML = 'Registration was Successful !';
    successMessage.style = 'color:#fff; background-color:#32cd32';
    successMessage.style.border = '1px solid #32cd32';
  }

  // Validating the date of birth of the patient.
  const today = new Date();
  const birth = new Date(patientDOB.value);
  const age = today.getFullYear() - birth.getFullYear();
  if (patientDOB.checked == false && patientDOB.value == '') {
    patientDOBError.innerHTML = 'This field is required';
    patientDOBError.style = 'color:red';
    patientDOB.style.border = '1px solid red';
    patientDOB.focus();
    isValid = false;
  } else if (age < 1) {
    patientDOBError.innerHTML = 'Patient is too young to take test';
    patientDOBError.style = 'color:red';
    patientDOB.style.border = '1px solid red';
    patientDOB.focus();
    isValid = false;
  } else if (age > 150) {
    patientDOBError.innerHTML = 'Patient is too old to take test';
    patientDOBError.style = 'color:red';
    patientDOB.style.border = '1px solid red';
    patientDOB.focus();
    isValid = false;
  } else {
    successMessage.innerHTML = 'Registration was Successful !';
    successMessage.style = 'color:#fff; background-color:#32cd32';
    successMessage.style.border = '1px solid #32cd32';
  }

  // Validating the  patient residence.
  const patientResidence = patientresidence.value.trim();
  if (patientResidence == '') {
    patientResidenceError.innerHTML = 'This field is required ';
    patientResidenceError.style = 'color:red';
    patientresidence.style.border = '1px solid red';
    patientresidence.focus();
    isValid = false;
  } else if (!(patientResidence.length > 1 && patientResidence.length < 20)) {
    patientResidenceError.innerHTML = 'Residence is  between 1-20 letters';
    patientResidenceError.style = 'color:red';
    patientresidence.style.border = '1px solid red';
    patientresidence.focus();
    isValid = false;
  } else if (!patientResidence.match(nonumber)) {
    patientResidenceError.innerHTML = 'Residence dont have numbers';
    patientResidenceError.style = 'color:red';
    patientresidence.style.border = '1px solid red';
    patientresidence.focus();
    isValid = false;
  } else {
    successMessage.innerHTML = 'Registration was Successful !';
    successMessage.style = 'color:#fff; background-color:#32cd32';
    successMessage.style.border = '1px solid #32cd32';
  }

  // Validating the occupation input .
  const patientOccupation = patientoccupation.value.trim();
  if (patientOccupation == '') {
    patientOccupationError.innerHTML = 'This field is required';
    patientOccupationError.style = 'color:red';
    patientoccupation.style.border = '1px solid red';
    patientoccupation.focus();
    isValid = false;
  } else if (!(patientOccupation.length > 5 && patientOccupation.length < 50)) {
    patientOccupationError.innerHTML = 'Occupation is between 5-50 letters';
    patientOccupationError.style = 'color:red';
    patientoccupation.style.border = '1px solid red';
    patientoccupation.focus();
    isValid = false;
  } else if (!patientOccupation.match(nonumber)) {
    patientOccupationError.innerHTML = 'Occupation  dont have numbers';
    patientOccupationError.style = 'color:red';
    patientoccupation.style.border = '1px solid red';
    patientoccupation.focus();
    isValid = false;
  } else {
    successMessage.innerHTML = 'Registration was Successful !';
    successMessage.style = 'color:#fff; background-color:#32cd32';
    successMessage.style.border = '1px solid #32cd32';
  }

  // Validating the nationality of the patient.
  const Patientnationality = patientNationality.value.trim();
  if (Patientnationality == '') {
    patientNationalityError.innerHTML = 'This field is required';
    patientNationalityError.style = 'color:red';
    patientNationality.style.border = '1px solid red';
    patientNationality.focus();
    isValid = false;
  } else if (!(Patientnationality.length > 5 && Patientnationality.length < 20)) {
    patientNationalityError.innerHTML = 'Nationality is between 5-20 letters.';
    patientNationalityError.style = 'color:red';
    patientNationality.style.border = '1px solid red';
    patientNationality.focus();
    isValid = false;
  } else if (!Patientnationality.match(nonumber)) {
    patientNationalityError.innerHTML = 'Nationality shouldnot have numbers';
    patientNationalityError.style = 'color:red';
    patientNationality.style.border = '1px solid red';
    patientNationality.focus();
    isValid = false;
  } else {
    successMessage.innerHTML = 'Registration was Successful !';
    successMessage.style = 'color:#fff; background-color:#32cd32';
    successMessage.style.border = '1px solid #32cd32';
  }

  // Validating the category input .
  const patientcategory = patientCategory.value.trim();
  if (patientcategory == 'default') {
    patientCategoryError.innerHTML = 'This field is required';
    patientCategoryError.style = 'color:red';
    patientCategory.style.border = '1px solid red';
    patientCategory.focus();
    isValid = false;
  } else {
    successMessage.innerHTML = 'Registration was Successful !';
    successMessage.style = 'color:#fff; background-color:#32cd32';
    successMessage.style.border = '1px solid #32cd32';
  }
  if (!isValid) {
    event.preventDefault();
    return false;
  }
};

// Assigning a variable to the form.
const patientForm = document.getElementById('form-id');

// Adding an event listener to the form.
patientForm.addEventListener('submit', (event) => {
  validate(event);
});
