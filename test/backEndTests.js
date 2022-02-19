/* eslint-disable no-unused-vars */
/* eslint-disable prefer-template */
/* eslint-disable no-undef */
const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http');
const { describe } = require('mocha');
const app = require('../server');

chai.should();
chai.use(chaiHttp);

// Testing API end points.
describe('Health Center API', () => {
  // Testing the get route.

  it('Get All existing patients', (done) => {
    chai.request(app)
      .get('/patients')
      .end((error, response) => {
        response.should.have.status(200);
        response.body.should.be.a('array');
        done(0);
      });
  });
  it('Post patients ', (done) => {
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
    chai.request(app)
      .post('/')
      .send(patient)
      .end((error, response) => {
        response.should.have.status(200);
        done(0);
      });
  });
  it('Updating patient', (done) => {
    const patientId = '620db2bfe5fc468f109c7fed';
    const updatepatient = {
      surname: 'Grace',
      givenname: 'Ushindi',
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
        done(0);
      });
  });
  it('Unavailable patient for deleting',(done) => {
    const patientid = '618e33df815bba7af6ad59d4';
    chai.request(app)
      .delete('/patients/' + patientid)
      .end((error, response) => {
        response.should.have.status(404);
        done(0);
      });
  });
  it('Deleting a patient', (done) => {
    const patientid = '620db8bb869dd317ba45d4bc';
    chai.request(app)
      .delete('/patients/' + patientid)
      .end((error, response) => {
        response.should.have.status(200);
        done(0)
      });
  });
});
