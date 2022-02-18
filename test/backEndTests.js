/* eslint-disable prefer-template */
/* eslint-disable no-undef */
const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http');
const { describe } = require('mocha');
const controller = require('../controllers/patientControllers');
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
        done();
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
        done();
      });
  });
  it('Updating patient', (done) => {
    const patientId = '618e35aac71423e66b7766c2';
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
        done();
      });
  });
  it('Unavailable patient for deleting', (done) => {
    const patientid = '618e33df815bba7af6ad59d4';
    chai.request(app)
      .delete('/patients/' + patientid)
      .end((error, response) => {
        response.should.have.status(404);
        done();
      });
  });
  it('Deleting a patient', (done) => {
    const patientid = '620db0bbd007b9b9b396f950';
    chai.request(app)
      .delete('/patients/' + patientid)
      .end((error, response) => {
        response.should.have.status(200);
        done();
      });
  });
});
