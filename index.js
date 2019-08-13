// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = function (num) {
  return function (value) {
    return num * value;
  };
};

const fareDoubler = function (fares){
  return fares * 2
}

const fareTripler = function (fares){
  return fares * 3
}

const selectDifferentDrivers = function (drivers, whichDrivers) {
  return whichDrivers(drivers);
};