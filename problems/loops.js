/**
 * Takes in a number and returns an array filled with all numbers from 1 to given number (inclusive).
 * Must be written with a while loop
 * @param {number}
 * @returns {number[]}
 */
function oneTillDoneWhileLoop(n) {
  let arr = []
  let tracker = 1
// -> can use either < or <= 
  while (arr.length < n) {
    arr.push(tracker)
    tracker += 1
  }
  return arr
}


// console.log(oneTillDoneWhileLoop(7))


/**
 * Takes in a number and returns an array filled with all numbers from 1 to given number (inclusive).
 * Must be written with a for loop
 * @param {number}
 * @returns {number[]}
 */
function oneTillDoneForLoop(num) {
  let arr = []
  for(let n = 1; n <= num; n += 1){
    // arr[n - 1] = n
    arr.push(n)
  }
  return arr
}

// console.log(oneTillDoneForLoop(7))


/**
 * Takes in a number and returns an array filled with all numbers from number to 0 (exclusive)
 * Must be a while loop
 * @param {number}
 * @returns {number[]}
 */
function doneToZeroWhileLoop(number) {
  let numberArray = []

  while (number > 0) {
    numberArray.push(number)
    number --
  }
  return numberArray
}


// console.log(doneToZeroWhileLoop(8))


/**
 * Takes in a number and returns an array filled with all numbers from number to 0 (exclusive)
 * Must be written with a for loop
 * @param {number}
 * @returns {number[]}
 */
function doneToZeroForLoop(number) {
  let numberArray = []
  for(let n = number; n > 0; n -- ){
    numberArray.push(n)
  }
  return numberArray
}


// console.log(doneToZeroForLoop(8))


/**
 * Takes in the variable "max", and iterates over all numbers from 0 to "max".
 *  For each iteration, it will check if the current number is even or odd and add the result to a new array
 *  (e.g. "2 is even")
 * Must be done using a while loop

 * @param {number} max number
 * @returns {string[]} ["0 is even", "1 is odd", "2 is even", "3 is odd"] if max was 3
 */
function evenAndOddWhileLoop(max) {
  let arr = []
  let i = 0
  while (i <= max){
    if (i % 2 === 0) {
      arr.push (`${i} is even`)
      i++
    }
    arr.push (`${i} is odd`)
    i++
  }
return arr
}


// console.log(evenAndOddWhileLoop([10]))


/**
 * Takes in the variable "max", and iterates over all numbers from 0 to "max".
 *  For each iteration, it will check if the current number is even or odd and add the result to a new array
 *  (e.g. "2 is even")
 * Must be done using a for loop

 * @param {number} max number
 * @returns {string[]} ["0 is even", "1 is odd", "2 is even", "3 is odd"] if max was 3
 */
function evenAndOddForLoop(max) {
  let array = []
  for (let i = 0; i <= max; i++) {
if (i % 2 === 0){
array.push (i + " is even")
} else {
  array.push(i + " is odd")
}
}
  return array
}


// console.log(evenAndOddForLoop([10]))


/**
 * Takes in the variable "x", and iterates over all numbers from 0 to "x".
 *  For each iteration, it will multiply the current number by 9 and store the result in an array.
 * Must be done using a while loop

 * @param {number} x number
 * @returns {number[]} [0, 9, 18, 27, 36, 45] if x was 5.
* 0 * 9 = 0
* 1 * 9 = 9
* 2 * 9 = 18
* 3 * 9 = 27
* 4 * 9 = 36
* 5 * 9 = 45
 */
function tillXTimes9WhileLoop(x) {
  let i = 0
  let arr = []
  while (i <= x){
    arr.push (i * 9)
    i++
  }
  return arr
}


// console.log(tillXTimes9WhileLoop(10))


/**
 * Takes in the variable "x", and iterates over all numbers from 0 to "x".
 *  For each iteration, it will multiply the current number by 9 and store the result in an array.
 * Must be done using a for loop

 * @param {number} x number
 * @returns {number[]} [0, 9, 18, 27, 36, 45] if x was 5.
* 0 * 9 = 0
* 1 * 9 = 9
* 2 * 9 = 18
* 3 * 9 = 27
* 4 * 9 = 36
* 5 * 9 = 45
 */
function tillXTimes9ForLoop(x) {
  let arr = []
  for (i = 0; i <= x; i += 1) {
      arr.push(i * 9)
      }
    return arr
}


// console.log(tillXTimes9ForLoop(10))


/**
 * Returns an array with all the numbers that end in 5 from 1 to 100
* Must be done with a while loop
 * @returns {number[]} [5, 15, 25, ..., 95]

 */
function endsWithFiveWhileLoop() {
  let arr = []
  let i = 1
  while (i <= 100){
    if(i % 10 === 5){
      arr.push(i)
    i++
    } else {
    i ++
    }
  }    
  return arr
}


// console.log(endsWithFiveWhileLoop())


/**
 * Returns an array with all the numbers that end in 5 from 1 to 100
* Must be done with a for loop
 * @returns {number[]} [5, 15, 25, ..., 95]

 */
function endsWithFiveForLoop() {
// Try refactoring the code above to increment your i by 10 and starting at 5.
  let arr = []
  let i = 1
    for (let i = 5; i < 100; i += 10){
      arr.push(i)
    }
    return arr
  }


// console.log(endsWithFiveForLoop())


/**
 Without running/executing your code, how many times will the loop below run?
  Explain why.
 */
/*
let i = 5;

while (i > 3) {
    i += 1
}
*/

/**
 * // Write your explanation here!
 * The while loop will run infinitely because the while statment says while i is greater than 3 increment + 1, 
 * since i = 5, thats the starting point for i, and i is greater than 3 so it will continue to run infinitely, 
 * unless a stopping point is added.  
 */

 /**
 * Returns an array with all the numbers from all the numbers from 1 to 100.
 * For numbers divisible by 3, add "Fizz" instead of the number into the array.
 * For numbers divisible by 5 (and not 3), add "Buzz" instead of the number into the array.

 * @returns {Array} [1, 2, "Fizz", 4, "Buzz"... 98, "Fizz", "Buzz"]

 */
  function fizzBuzzPart1() {
    let arr = []
  for(let i = 1; i <= 100; i++){
    if (i % 3 === 0){      
      arr.push("Fizz")        
      } else if(i % 5 === 0){
      arr.push("Buzz")
    } else {
      arr.push(i)
    }
  }
  return arr 
  }


// console.log(fizzBuzzPart1())


 /**
 * Returns an array with all the numbers from all the numbers from 1 to 100.
 * For numbers divisible by 3, add "Fizz" instead of the number into the array.
 * For numbers divisible by 5 (and not 3), add "Buzz" instead of the number into the array.
 * For numbers that are divisible by both 3 and 5 add "FizzBuzz" into the array.

 * @returns {Array}

 */
function fizzBuzzPart2() {
  let arr = []
  for (let i = 1; i <= 100; i ++){
    if (i % 3 === 0 && i % 5 === 0){
      arr.push("FizzBuzz")
    } else if (i % 3 === 0) {
      arr.push("Fizz")
    } else if (i % 5 === 0) {
      arr.push("Buzz")
    } else {
      arr.push(i)
    }
  }
  return arr
}


// console.log(fizzBuzzPart2())


/**
 * Takes in range (inclusive) and returns the sum of all numbers in that range.

 * @param {number} min number
 * @param {number} max number
 * @returns {number} sum all all numbers from min to max
 */
function rangeSum(min, max) {
  let sum = 0
  for(let i = min; i <= max; i ++){
    sum += i
  }
  return sum
}


// console.log(rangeSum)


/**
 * Takes in range (inclusive) and returns an array in decreasing order of all odd numbers
 * in that range

 * @param {number} min number
 * @param {number} max number
 * @returns {number[]} all odd numbers in range decreasing
 */
function rangeOdd(min, max) {
  let arr = []
  for(let i = max; i >= min; i --){
    if (i % 2 !== 0){
      arr.push(i)
    }
  }
return arr
}


// console.log(rangeOdd(1,50))


/**
 * Takes in range (inclusive) and returns an array in increasing order of every other element.


 * @param {number} min number
 * @param {number} max number
 * @returns {number[]} includes every other element
 */
function rangeEveryOther(min, max) {
  let arr = []
  for(let i = min; i <= max; i += 2){
    arr.push(i)
  }
  return arr
}


// console.log(rangeEveryOther(1,50))


/**
 * Takes in an array and a target.
 * Determines whether or not that target exists in the array
 * Must be written with a while loop
 * Must NOT contain built in includes method.
 * @param {Array} elements
 * @param {number|string} target
 * @returns {boolean} true if the array contains our target, otherwise false
 */
function containsWhileLoop(elements, target) {
  let i = 0
  while(i < elements.length){
    if (elements[i] === target){
      return true
    }  
    i ++
  }
  return false
}



/**
 * Takes in an array and a target.
 * Determines whether or not that target exists in the array
 * Must be written with a for loop
 * Must NOT contain built in includes method.
 * @param {Array} elements
 * @param {number|string} target
 * @returns {boolean} true if the array contains our target, otherwise false
 */
function containsForLoop(elements, target) {
  for(let i = 0; i < elements.length; i ++){
    if(elements[i] === target){
      return true
    }
  }      
  return false
}



/**
 * Takes in an array and a target.
 * Determines how many times the target exists in the array
 * @param {Array} elements
 * @param {number|string} target
 * @returns {number} number of occurances
 */
function targetCount(elements, target) {
  let count = 0
  for(let i = 0; i < elements.length; i ++){
    if(elements[i] === target){
      count ++
    }
  }   
  return count
  }


// console.log(targetCount([1,1,1,2,3,4,5,6,7,7,7,7,7],7))


/**
 * Takes in an array and a target.
 * Determines the first index that the target is found at.
 * If the target is not found it should return -1
 * NOT allowed to use built in method indexOf
 * @param {Array} elements  
 * @param {number|string} target
 * @returns {number} first index found.
 */
function firstIndexFound(elements, target) {
  for(let i = 0; i < elements.length; i ++){
    if(elements[i] === target){
      return i
    }
  }
return -1
}


// console.log(firstIndexFound([1,7,7,7,7,7],7))


/**
 * Takes in an array and a target.
 * Determines the last index that the target is found at.
 * If the target is not found it should return -1
 * NOT allowed to use built in method lastIndexOf
 * @param {Array} elements
 * @param {number|string} target
 * @returns {number} last index found.
 */
function lastIndexFound(elements, target) {
  for(let i = elements.length - 1; i >= 0; i -- ){
    if(elements[i] === target){
      return i
        }
  }
  return - 1
}


// console.log(lastIndexFound([1,7,7,7,7,7],7))


/**
 * Takes in an array.
 * Returns a new array where each element has been multiplied by its index.
 * Exp: Input [2, 2, 2] Output: [0, 2, 4] because 0 * 2, 1 * 2, and 2 * 2
 * @param {number[]} elements
 * @returns {number[]}
 */
function timesIndex(elements) {
  let arr = []
  for(let i = 0; i <= elements.length - 1; i ++ ){
    arr[i] = elements[i] * i
  }    
return arr
}


// console.log(timesIndex([2,2,2]))


/**
 * Takes in an array.
 * Returns a new array where each element is the cumulative sum so far.
 * Exp: Input [5, 2, 9] Output: [5, 7, 16] . 5 is the first element so added to 0.
 *  7 because 5 + 2 is 7
 * 16 because 7 + 9 is 16
 * @param {number[]} elements
 * @returns {number[]}
 */
function cumulativeSum(elements) {
  let arr = []
  let sum = 0
  for(let i = 0; i <= elements.length - 1; i ++ ){
    sum += elements[i]
    arr.push(sum)
  }    
return arr
}


// console.log(cumulativeSum([2,2,2]))


module.exports = {
  oneTillDoneWhileLoop,
  oneTillDoneForLoop,
  doneToZeroWhileLoop,
  doneToZeroForLoop,
  evenAndOddWhileLoop,
  evenAndOddForLoop,
  tillXTimes9WhileLoop,
  tillXTimes9ForLoop,
  endsWithFiveWhileLoop,
  endsWithFiveForLoop,
  fizzBuzzPart1,
  fizzBuzzPart2,
  rangeSum,
  rangeOdd,
  rangeEveryOther,
  containsWhileLoop,
  containsForLoop,
  targetCount,
  firstIndexFound,
  lastIndexFound,
  timesIndex,
  cumulativeSum,
};
