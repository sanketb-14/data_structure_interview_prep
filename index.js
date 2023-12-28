// Big 0 Shorthands
// 1. Arithmetic operations are constant
// 2. Variable assignment is constant
// 3. Accessing elements in an array (by index) or object (by key) is constant
// 4. In a Ioop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop

const { Console } = require("console");

// · To analyze the performance of an algorithm, we use Big O Notation
// · Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
// · Big O Notation doesn't care about precision, only about general trends (linear? quadratic? constant?)
// · The time or space complexity (as measured by Big O)'
// depends only on the algorithm, not the hardware used to run the algorithm

  function getDigit(num , i){
    return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10
  }
function digitCount(num){
  if(num ===0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}
function mostDigit(nums){
  let maxDigit = 0
  for(let i = 0 ; i < nums.length ; i++){
    maxDigit = Math.max(maxDigit, digitCount(nums[i]))
  }
  return maxDigit
}
console.log(mostDigit([45,45,560,10,1,1020]))

function radixSort(arr){
  maxDigitCount = mostDigit(arr)
  for(let i = 0 ; i < maxDigitCount ; i++){
    let digitBucket = Array.from({length:10},()=>[])
    for(let j = 0 ; j< arr.length ; j++){
      let digit = getDigit(arr[j],i)
      digitBucket[digit].push(arr[j])
    }
    arr =[].concat(...digitBucket)
    console.log(arr)
    
  
  }
  return arr
  
}



console.log(radixSort([45,256,23,41,45666]))



