
const batteryCounts = [10, 5, 3, 8, 5];  // This totals up to 31

// Reducer function to sum up battery counts
const totalBatteries = batteryCounts.reduce((total, count) => total + count, 0);

// Provided test suite
describe('reducer', function() {
  describe('batteries', function() {
    it('should have a `totalBatteries` variable', function() {
      expect(totalBatteries).to.exist;
    });

    it('should have a number as a result', function() {
      expect(totalBatteries).to.be.a('number');
    });

    it('should have made the sum of all the assembled batteries', function() {
      expect(totalBatteries).to.eql(31);
    });
  });
});
