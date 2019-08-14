// Code your solution in this file!
let test = [1,2,3,4,5,6] 
const returnFirstTwoDrivers = (arr)  => {
    return arr.slice(0, 2)
}
const returnLastTwoDrivers = (arr)  => {
    return arr.slice(-2)    
}
const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]
const createFareMultiplier = (mult) => {
    return function (fare) {
        return fare * mult
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (arr, func) => {
    return func(arr)
}

// console.log(selectDifferentDrivers(test, selectingDrivers[0]))

// console.log(fareTripler(10))
// console.log(selectingDrivers)
// console.log(returnFirstTwoDrivers(test))
// console.log(returnLastTwoDrivers(test))