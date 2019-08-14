
// Code your solution in this file!
const returnFirstTwoDrivers = (drivers)=>{
    return [drivers[0],drivers[1]]
}

const returnLastTwoDrivers = (drivers) =>{
    return [drivers[drivers.length-2],drivers[drivers.length-1]]
}

const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function(fare){
        return integer * fare;
    }
}

const fareDoubler = (fare)=>{
    let double = createFareMultiplier(2)
    return double(fare)
}

const fareTripler = (fare)=>{
    let triple = createFareMultiplier(3)
    return triple(fare)
}

function selectDifferentDrivers(drivers, fn){
   return fn(drivers)
}