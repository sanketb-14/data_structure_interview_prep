// WHAT IS A STACK?
// A LIFO data structure!
// The last element added to the stack will be
// the first ele ment removed from the stack

//creating a stack 

// BIG O of STACKS

// Insertion - O(1)
// Removal- O(1) °

// Searching - O(N)
// Access - O(N) 
class Node(){
  constructor(val){
    this.val = val
    this.next = null
  }
}
class Stack(){
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
  }
  / *********PUSHING PSEUDOCODE

  // - The function should accept a value
  // ' Create a new node with that value ,
  // If there are no nodes in the stack, set the first and last
  // property to be the newly created node
  // If there is at least one node, create a variable that stores
  // the current first property on the stack
  // - Reset the first property to be the newly created node
  // - Set the next property on the node to be the previously
  // created variable
  // _ Increment the size of the stack by 1 
  push(val){
    let newNode = new Node(Val)
    if(!this.first){
      this.first = newNode
      this.last = newNode
    }
    else{
      let temp = this.first
      this.first = newNode
      this.first.next = temp
      
    }
    return ++this.size
    
  }
  pop(){
    if(!this.first) return null
    let temp = this.first
    if(this.first === this.last){
      this.last = null
    }
    this.size--
    this.first = this.first.next
    return temp.val
    
  }
  

}


