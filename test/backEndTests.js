/* eslint-disable no-undef */
const chai = require('chai');
const mocha = require('mocha');
const chaiHttps = require('chai-http');
const { describe } = require('mocha');
const controller = require('../controllers/patientControllers');
const server = require('../server');

chai.use(chaiHttps);

// Testing API end points.
describe('Health Center API', () => {
  // Testing the get route.
  describe('GET/All patients', () => {
    it('Get All existing patients', (done) => {
      chai.request(server)
        .get('/')
        .end((error, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          done();
        });
    });
    it('Post All existing patients', (done) => {
      chai.request(server)
        .post('/')
        .end((error, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          done();
        });
    });
  });
});
