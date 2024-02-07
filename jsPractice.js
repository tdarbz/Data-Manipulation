// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


//PART 1 MATH PROBLEMS 

//Check if all numbers are divisible by 5. Cache the result in a variable.
const divisibleBy5 = ((n1 % 5) && (n2 % 5) && (n3 % 5) && (n4 % 5) == 0);

//Check if the first number is larger than the last. Cache the result in a variable.
if (n1 > n4) {
    console.log("The first number is larger than the last is " + true);
} else {
    console.log("The first number is not larger than the last is " + false); 
} 

//Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
var SubFirstFromSecond = n2 - n1;
var muliplyByThird = SubFirstFromSecond * n3;
var modulo = muliplyByThird / n4;

console.log(modulo) //remainder

// Change the way that isOver25 calculates so that we do not need 
// to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25

// PART 2 Practical Math

let budget = 175;
let gasCost = 3;
let distance = 1500;
let maxGas = budget / gasCost

var speed55Fuel = distance / 30
var speed60Fuel = distance / 28
var speed75Fuel = distance / 23

// How many gallons of fuel will you need for the entire trip?
console.log('Gallons of fuel need for speed55 is ' + speed55Fuel );
console.log('Gallons of fuel need for speed60 is ' + speed60Fuel );
console.log('Gallons of fuel need for speed75 is ' + speed75Fuel );

//Will your budget be enough to cover the fuel expense?
if (speed55Fuel <= maxGas) {
    console.log(speed55Fuel <= maxGas)
}
if (speed60Fuel / gasCost <= maxGas) {
    console.log(speed60Fuel <= maxGas)
}
if (speed75Fuel / gasCost <= maxGas) {
    console.log(speed75Fuel  <= maxGas)
} else {
    console.log("MPG can't be calculated")
}

//Part 3

// Constants
const tripDistance = 1500; // miles
const fuelBudget = 175; // dollars
const fuelCost = 3; // cost per gallon

// Fuel efficiency for different speeds (miles per gallon)
const fuelMPG = {
  '55': 30,
  '60': 28,
  '75': 23
};

// Function to calculate trip details
function calculateTripDetails(speed) {
  const efficiency = fuelMPG[speed];
  const gallonsNeeded = tripDistance / efficiency;
  const cost = gallonsNeeded * fuelCost;
  const time = tripDistance / speed;
  const withinBudget = cost <= fuelBudget;

  console.log(`Traveling at ${speed} mph:`);
  console.log(`You will need ${gallonsNeeded} gallons of fuel.`);
  console.log(`The fuel will cost $${cost}.`);
  console.log(`The trip will take ${time} hours.`);
  console.log(`It is ${withinBudget ? '' : 'not '}within the budget.`);
  console.log('');
}

// Calculate trip details for different speeds
calculateTripDetails('55');
calculateTripDetails('60');
calculateTripDetails('75');
console.log('A speed of 55 mph is makes the most sense for the trip')
