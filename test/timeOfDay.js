const chai = require('chai');
const expect = chai.expect;
const timeOfDay = require("./../timeOfDay");


describe('Time of day', function() {
    it('should return Morning at 00:00', function () {
        let time = new Date(2018, 0,1,0, 0);
        let label = timeOfDay(time);
        expect(label).to.equal("Morning")
    });
    it('should return Morning at 09:59', function () {
        let time = new Date(2018, 0,1,9, 59);
        let label = timeOfDay(time);
        expect(label).to.equal("Morning")
    });
    it('should return Before dinner at 10:00', function () {
        let time = new Date(2018, 0,1,10, 0);
        let label = timeOfDay(time);
        expect(label).to.equal("Before dinner")
    });
    it('should return Before dinner at 12:59', function () {
        let time = new Date(2018, 0,1,12, 59);
        let label = timeOfDay(time);
        expect(label).to.equal("Before dinner")
    });
    it('should return Afternoon at 13:00', function () {
        let time = new Date(2018, 0,1,13, 0);
        let label = timeOfDay(time);
        expect(label).to.equal("Afternoon")
    });
    it('should return Afternoon at 17:59', function () {
        let time = new Date(2018, 0,1,17, 59);
        let label = timeOfDay(time);
        expect(label).to.equal("Afternoon")
    });
    it('should return Evening at 18:00', function () {
        let time = new Date(2018, 0,1,18, 0);
        let label = timeOfDay(time);
        expect(label).to.equal("Evening")
    });
    it('should return Evening at 22:59', function () {
        let time = new Date(2018, 0,1,22, 59);
        let label = timeOfDay(time);
        expect(label).to.equal("Evening")
    });
    it('should return Night at 23:00', function () {
        let time = new Date(2018, 0,1,23, 0);
        let label = timeOfDay(time);
        expect(label).to.equal("Night")
    });
    it('should return Night at 23:59', function () {
        let time = new Date(2018, 0,1,23, 59);
        let label = timeOfDay(time);
        expect(label).to.equal("Night")
    });
});