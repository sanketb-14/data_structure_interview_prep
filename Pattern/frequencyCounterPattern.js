// function for finding sqaure array 1 element present in array 2
// naive approach  (O(n^2))

function findSqr(arr1 , arr2){
  if(arr1.length !== arr2.length) return false

  for(let i = 0 ; i < arr1.length ; i++){
    let noIndex = arr2.indexOf(arr1[i]**2)
    if(noIndex === - 1){
      return false
    }
    arr2.splice(noIndex,1)

  }
  return true
}
console.log(findSqr([1,2,3,4],[1,4,9,16]))

// frequency Pattern technique O(n)

function findSqr2(arr1 , arr2){
  if(arr1.length !== arr2.length) return false
  obj1 = {}
  obj2 = {}
  for(let no of arr1){
    obj1[no] = ++obj1[no] || 1

  }
  for(let no of arr2){
    obj2[no] = ++obj2[no] || 1
  }
  for(let key in obj1){
    console.log(key)
    if(!(key ** 2 in obj2)){
      return false
    }
    if(obj2[key ** 2] !== obj1[key]){
      return false
    }
  }
  console.log(obj1)
  console.log(obj2)

  return true


}
console.log(findSqr2([1,2,3,4 , 2],[1,4,4,9,16]))
