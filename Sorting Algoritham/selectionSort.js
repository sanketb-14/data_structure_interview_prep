// Selection Sort Pseudocode
// · Store the first element as the smallest value you've seen so far.
// · Compare this item to the next item in the array until you find a smaller number.
// · lf a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
// · lf the "minimum" is not the value (index) you initially began with, swap the two values.
// · Repeat this with the next element until the array is sorted.

function selectionSort(arr){
  for(let i = 0 ; i < arr.length ; i++){
    let min = i
    for(let j = i  + 1 ; j < arr.length ; j++){
      if(arr[j] < arr[min]){
        min = j
      }
    }
    if(min !== i){
      [arr[i],arr[min]]=[arr[min],arr[i]]
    }
  }
  return arr
}
console.log(selectionSort([8,20,-2,4,-6]))