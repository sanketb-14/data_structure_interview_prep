// FIFO
// BIG O of QUEUES

// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)

class Node{
  constructor(val){
    this.val = val
    this.next = null
  }
  
}
class Queue{
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
  }
  // -Enqueue Pseudocode

  // - This function accepts some value

  // . Create a new node using that value passed to the
  // function ;

  // If there are no nodes in the queue, set this node to be
  // the first and last property of the queue
  // Otherwise, set the next property on the current last
  // to be that node, and then set the last property of the
  // queue to be that node

  // Increment the size of the queue by 1
  enqueue(val){
    let newVal = new Node(val)
    if(this.size === 0){
      this.first = newVal
      this.last = newVal
    }
    else{
      this.last.next = newVal
      this.last = newVal
    }
    return ++this.size
    
  }
  // *********Dequeue pseudocode

  // If there is no first property, just return null
  // Store the first property in a variable
  // See if the first is the same as the last (check if there is
  // only 1 node). If so, set the first and last to be null
  // lf there is more than 1 node, set the first property to
  // be the next property of first
  // Decrement the size by 1
  // Return the value of the node dequeued
  dequeue(){
    if(!this.first) return null
    let temp = this.first
    if(this.first === this.last){
      
      this.last === null
    }
    else{
      this.first = this.first.next 
    }
    this.size--
    return temp.val
  }
  
  
}
