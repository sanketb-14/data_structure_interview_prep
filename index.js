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


function merge(arr1 ,arr2){
  let res = []
  let i = 0
  let j = 0
  while ( i < arr1.length && j < arr2.length){
    if(arr2[j]>arr1[i]){
      res.push(arr1[i])
      i++
    }
    else{
      res.push(arr2[j])
      j++
    }
  }
  while(i < arr1.length){
    res.push(arr1[i])
    i++
  }
  while(j < arr2.length){
    res.push(arr2[j])
    j++
  }
  return res
}
console.log(merge([1,10,50],[2,14,99,100]))