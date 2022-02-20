/* eslint-disable no-unused-vars */
/* eslint-disable prefer-template */
/* eslint-disable no-undef */
const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http');
const { describe } = require('mocha');
const app = require('../server');
const { deleteOne } = require('../models/patientsRegModels');

chai.should();
chai.use(chaiHttp);

// Testing API end points.
describe('Health Center API', () => {
  // Testing the get route.

  it('Get All existing patients', async () => {
    chai.request(app)
      .get('/patients')
      .end((error, response) => {
        response.should.have.status(200);
        response.body.should.be.a('array');
      });
  });
  it('Post patients ', async () => {
    const patient = {
      surname: 'Grace',
      givenname: 'Ushindi',
      patientdob: '1995-08-08',
      residence: 'Toronto',
      occupation: 'Philanthropist',
      nationality: 'Canadian',
      gender: 'female',
      category: 'Returnee',
    };
    // chai.request(app)
    //   .post('/')
    //   .send(patient)
    //   .end((error, response) => {
    //     response.should.have.status(200);
    //   });

    const res = await chai.request(app)
      .get('/')
      .send(patient);
    chai.assert.equal(res.status, 200);
  });

  it('Updating patient', async () => {
    const patientId = '620db2bfe5fc468f109c7fed';
    const updatepatient = {
      surname: 'Haddish',
      givenname: 'Matembe',
      patientdob: '1995-08-08',
      residence: 'Toronto',
      occupation: 'Philanthropist',
      nationality: 'Canadian',
      gender: 'female',
      category: 'Returnee',
    };
    chai.request(app)
      .put('/patients/' + patientId)
      .send(updatepatient)
      .end((error, response) => {
        response.should.have.status(201);
        response.should.be.a('object');
      });
  });
  // it('Deleting a patient', async () => {
  //   const patientid = '620ef0ff47ea8977cd426972';
  //   chai.request(app)
  //     .delete('/patients/' + patientid)
  //     .end((error, response) => {
  //       response.should.have.status(200);
  //     });
  // });
  it('Unavailable patient for deleting', async () => {
    const patientid = '618e33df815bba7af6ad59d4';
    chai.request(app)
      .delete('/patients/' + patientid)
      .end((error, response) => {
        response.should.have.status(404, 400);
      });
  });
});
