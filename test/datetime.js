var chai = require('chai');
chai.Should();
chai.use(require('../dist/').chaiModule);

describe('Datetime in the full tree', function() {
  it("should be valid", function() {
    require('./data/datetime.json').should.be.validSignalKIgnoringSelf;
  })
});
describe('Timezone in Environment', function() {
  it("should be valid", function() {
    require('./data/datetime_timezone.json').should.be.validSignalKIgnoringSelf;
  });
  it("should fail with invalid timezoneRegion", function() {
    require('./data/datetime_timezone-invalid1.json').should.not.be.validSignalKIgnoringSelf;
  });
  it("should fail with timezoneRegion but no timezone", function() {
    require('./data/datetime_timezone-invalid2.json').should.not.be.validSignalKIgnoringSelf;
  });
});
