// Pivot Helper

// · ln order to implement merge sort, it's useful to first implement a function responsible arranging elements,in an array on either side of a pivot
// · Given an array, this helper function should designate an element as the pivot
// · It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
// · The order of elements on either side of the pivot doesn't matter!
// · The helper should do this in pIace, that is, it should not create a new array
// · When complete, the helper should return the index of the pivot

function quickSort(arr){
  if(arr.length <=1) return arr
  let pivot = arr[0]
  let left = []
  let right = []
  for(let i = 1 ; i < arr.length ; i++){
    if(pivot < arr[i]){
      right.push(arr[i])
    }else{
      left.push(arr[i])
    }
  }
  return quickSort(left).concat(pivot,quickSort(right))
}
console.log(quickSort([4,8,2]))

console.log(quickSort([4,8,2,1,5,7,6,3]))