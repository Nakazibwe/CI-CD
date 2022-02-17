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
        // response.body.should.be.a('array');
        done();
      });
  });
  it('Posting  patients', (done) => {
    chai.request(app)
      .post('/')
      .end((error, response) => {
        response.should.have.status(200);
        done();
      });
  });
});
