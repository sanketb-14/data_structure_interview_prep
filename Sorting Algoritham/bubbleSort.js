// BubbleSort Pseudocode
// · Start looping from with a variable called i the end of the array towards the beginning
// · Start an inner loop with a variable called j from the beginning until i-1
// · lf arr[j] is greater than arr[j+1], swap those two values!
// · Return the sorted array

function bubbleSort(arr){
  for(let i =0 ; i < arr.length; i++){
    let swap = false
    for(let j = 0 ; j < arr.length - 1 - i ; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j]
        arr[j]= arr[j+1]
        arr[j+1]= temp
        swap =  true
      }
    }
    if(!swap){
      break
    }
  }
  return arr
}


console.log(bubbleSort([8,20,-2,4,-6]))