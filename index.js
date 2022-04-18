// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2)
}

returnFirstTwoDrivers

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}

returnLastTwoDrivers

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
    const multiply = function(fare){
        return fare * num
    }
return multiply
}

let fareDoubler = createFareMultiplier(2)

let fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(fruit, aFunction){
    return aFunction(fruit)
}