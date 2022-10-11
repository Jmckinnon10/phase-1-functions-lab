// Code your solution in this file!

function distanceFromHqInBlocks(someValue){
  const hqLocation = 42

  return Math.abs(hqLocation - someValue)
}


function distanceFromHqInFeet(someValue){
  // each block in manhattan is 264ft long
  return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(start, destination){
  // takes in both the start and destination blocks

  // returns the number of feet travelled
  return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination) {
  const farePrice = Math.abs(start - destination) * 264;


  if (farePrice < 400){
    return 0;
  } else if (farePrice >= 400 && farePrice <= 2000) {
    return (farePrice - 400) * .02; 
  } else if (farePrice > 2000 && farePrice <= 2500) {
    return 25;
  } else if (farePrice > 2500){
    return "cannot travel that far";
  }

  }
console.log(calculatesFarePrice(66, 60));
  
  
  


