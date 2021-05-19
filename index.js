// Code your solution in this file!
    let hq = 42
// test 1-3
function distanceFromHqInBlocks(blocks){
    return Math.abs(hq - blocks)
}

// test 4-6
function distanceFromHqInFeet(blocks){
   return distanceFromHqInBlocks(blocks) * 264
}
// test 7-9
function distanceTravelledInFeet(startLocation, endLocation){
    return Math.abs(startLocation - endLocation)*264
}
// test 10-13
function calculatesFarePrice(startLocation, endLocation){
   let distance = distanceTravelledInFeet(startLocation, endLocation)
    if  (distance < 400){
        return 0
    }else if (distance <2000){
        return Math.abs(distance-400)*0.02
    }else if (distance <2500){
        return 25
    }else
        return 'cannot travel that far'
}