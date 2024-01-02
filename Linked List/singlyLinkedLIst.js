// what is a Linked list?
// A data structure that contains a head, tail and length
// property.
// Linked Lists consist of nodes, and each node has a value
// and a pointer to another node or null

// Comparisons with Arrays

// Singly Linked Lists are an excellent alternative to arrays
// when insertion and deletion at the beginning are frequently required
// Arrays contain a built in index whereas Linked Lists do
// not
//   The idea of a list data structure that consists of nodes is
// the foundation for other data structures like Stacks and
// Queues

// Lists

// e Do not have indexes!
// e Connected via nodes with a next pointer
// e Random access is not allowed

// Arrays

// e Indexed in order!
// e Insertion and deletion can be expensive
// e Can quickly be accessed at a specific index




class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}
class SinglyLinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.length = null
  }
  push(val){
    let newTail = new Node(val)
    if(!this.head){
      this.head = newTail
      this.tail = this.head
    }
    else{
      this.tail.next = newTail
      this.tail = newTail
    }
    this.length++
    return this

  }
  pop(){
    if(!this.head) return undefined
    let current = this.head
    let newTail = current
    while(current.next){
      newTail = current
      current  = current.next

    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if(this.length===0){
      this.head === null
      this.tail = null
    }
    return current
  }
  shift(){
    if(!this.head) return undefined
    let currHead = this.head
    this.head = currHead.next
    this.length--
    if(this.length=== 0){
      this.tail = null
    }
    return currHead
  }

  //************* Unshifting pseudocode**************
  // This function should accept a value
  //  Create a new node using the value passed to the function
  // If there is no head property on the list, set the head and
  // tail to be the newly created node
  // Otherwise set the newly created node's next property to
  // be the current head property on the list
  // Set the head property on the list to be that newly created
  // node
  // Increment the length of the list by 1
  // Return the linked list
  
  unshift(val){
  let newHead = new Node(val)
    if(!this.head){
      this.head = newHead
      this.tail = this.head
    }
  else{
    newHead.next = this.head
    this.head = newHead
  }
  this.length++
  return this

  }

//   ****************Get pseudocode

//   » This function should accept an index
//   » If the index is less than zero or greater than or equal to
//   the length of the list, return null
 // » Loop through the list until you reach the index and
//   return the node at that specific index

  get(index){
    if(index < 0 || index> this.length) return null
    let count = 0
    let current = this.head
    while(count !== index){
      current = current.next
      count++
    }
    return current
  }
  // *********set pseudocode

  // This function should accept a value and an index
  // Use your get function to find the specific node.
  // lf the node is not found, return false
  // If the node is found, set the value of that node to be the
  // value passed to the function and return true

  set(val,index){
    let newVal = new Node(val)
    let node = this.get(index)
    if(!node) return false
    else{
      node.value = newVal
      return true
      }
  }

  // *********Insert pseudocode

  // If the index is less than zero or greater than the length, return
  // false
  // If the index is the same as the length, push a new node to the
  // end of the list
  // If the index is 0, unshift a new node to the start of the list
  // Otherwise, using the get method, access the node at the index
  // =» | .
  // Set the next property on that node to be the new node
  // Set the next property on the new node to be the previous next
  // Increment the length
   // Return true

  insert(val,index){
    if(index< 0 || index > this.length) return false
    if(index=== this.length) return !!this.push(val)
    if(index=== 0) return !!this.unshift(val)

    let newVal = new Node(val)
    let prev = this.get(index - 1)
    let temp = prev.next
    prev.next = newVal
    newVal.next = temp
    this.length++
    return true



  }

  // *************Remove pseudocode

  // If the index is less than zero or greater than the length,
  // return undefined
  // If the index is the same as the length-1, pop
  // If the index is O, shift
  // Otherwise, using the get method, access the node at the
  // index - 1
  // Set the next property on that node to be the next of the
  // next node
  // Decrement the length
  // Return the value of the node removed

  remove(index){
      if(index < 0 || index >= this.length) return undefined;
      if(index === 0) return this.shift();
      if(index === this.length - 1) return this.pop();
      var previousNode = this.get(index - 1);
      var removed = previousNode.next;
      previousNode.next = removed.next;
      this.length--;
      return removed;
  }

  reverse(){
    let node = this.head
    this.head = this.tail
    this.tail = node
    let prev = null
    let next
    for(let i = 0  ; i < this.length ; i++ ){
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
    
  }
  print(){
    let arr = []
    let curr = this.head
    while(curr){
      arr.push(curr.val)
      curr = curr.next
    }
    console.log(arr)
  }

  
}

const list = new SinglyLinkedList()
list.push("hello")
list.push("goof")
list.push("!")
// console.log(list.shift())
list.unshift("hi")

