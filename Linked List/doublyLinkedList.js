// Almost identical to Singly Linked Lists,
// except every node has another
// pointer, to the previous node!

class Node{
  constructor(val){
    this.val = val
    this.next = null
    this.prev= null
  }
}
class DoublyLinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val){
    let newVal = new Node(val)
    if(this.length===0){
      this.head = newVal
      this.tail = newVal
    }
    else{
      this.tail.next = newVal
      newVal.prev = this.tail
      this.tail = newVal

    }
    this.length++
    return this
  }
//   ************Popping pseudocode

// If there is no head, return undefined
// Store the current tail in a variable to return later
//   If the length is 1, set the head and tail to be null
//   Update the tail to be the previous Node.
//   Set the newTail's next to null
//   Decrement the length
//   Return the value removed

  pop(){
    if(!this.head) return undefined
    let popVal = this.tail
    if(this.length === 1){
      this.head = null
      this.tail = null
    }
    else{
      this.tail = popVal.prev
      popVal.prev =null
      this.tail.next = null

    }
    this.length--
    return popVal


  }

 // *************** shifting pseudocode

 //  If length is 0, return undefined
 //  Store the current head property in a variable (we'll call
 //  it old head)
 //  If the length is one
 //  =» set the head to be null
 //  =» set the tail to be null
 //  Update the head to be the next of the old head
 //  Set the head's prev property to null
 //  Set the old head's next to null
 //  Decrement the length
 //  Return old head

  shift(){
    if(this.length===0) return undefined
    let removeHead = this.head
    if(this.length=== 1 ){
      this.head = null
      this.tail = null
    }
    else{
    this.head = removeHead.next
      this.head.prev = null
      removeHead.next = null
    }
    this.length--
    return removeHead

  }
  // ********Unshifting pseudocode

  // Create a new node with the value passed to the function
  // If the length is O
  // = Set the head to be the new node
  // = Set the tail to be the new node
  // Otherwise
  // =» Set the prev property on the head of the list to be the
  // new node
  // =» Set the next property on the new node to be the head
  // property
  // =» Update the head to be the new node
  // Increment the length
  // Return the list

  unshift(val){
    let newHead = new Node(val)
    if(this.length=== 0){
      this.head = newHead
      this.tail = newHead

    }
    else{
      this.head.prev = newHead
      newHead.next = this.head
      this.head  = newHead

    }
    this.length++
    return this

  }

   // ************** Get Pseudocode

   // If the index is less than O or greater or equal to the length, return null
   // If the index is less than or equal to half the length of the list
   // =» Loop through the list starting from the head and loop
   // towards the middle
   // =» Return the node once it is found
   // If the index is greater than half the length of the list
   // =» Loop through the list starting from the tail and loop towards
   // the middle
   // =» Return the node once it is found
  get(index){
    if(index < 0 || index > this.length) return undefined
    let count,curr
    if(index <= this.length / 2 ){
      count = 0
      curr = this.head
      while(count !== index){
        curr = curr.next
        count++
      }
    }
    else{
      count = this.length - 1
      curr = this.tail
      while(count !== index){
        curr = curr.prev
        count--
      }

    }
    return curr

  }

// *****************  set pseudocode

//   Create a variable which is the result of the
//   get method at the index passed to the function
// = If the get method returns a valid node, set
//   the value of that node to be the value passed
//   to the function

//   =» Return true

  set(index,val){
    let newNode = this.get(index)
    if(newNode !== null){
      newNode.val = val
      return true

    }
    return false
  }
  // ************Insert pseudocode

  // If the index is less than zero or greater than or equal to the
  // length return false
  // If the index is 0, unshift
  // If the index is the same as the length, push
  // Use the get method to access the index -1
  // Set the next and prev properties on the correct nodes to link
  // everything together
  // Increment the length
  // Return true

  insert(index,val){
    if(index < 0 || index > this.length) return false
    if(index===0) return !!this.unshift(val)
    if(index === this.length) !!this.push(val)
    let newNode = this.get(index)
    let prevNode = this.get(index - 1)
    let afterNode = prevNode.next
    prevNode.next = newNode
    afterNode.prev = newNode
    newNode.prev = prevNode
    newNode.next = afterNode
    this.length++
    return true





  }

  // ************Remove pseudocode

  // If the index is less than zero or greater than or equal to the
  // length return undefined
  // If the index is O, shift
  // If the index is the same as the length-1, pop .
  // Use the get method to retrieve the item to be removed
  // Update the next and prev properties to remove the found
  // node from the list
  // Set next and prev to null on the found node
  // Decrement the length
  // Return the removed node.
  remove(index){
    if(index < 0 || index > this.length) return undefined
    if(index===0) return this.shift()
    if(index === this.length- 1) this.pop()
    let removeElm = this.get(index)
    let beforeNode = removeElm.prev
    let afterNode = removeEl.next
    beforeNode.next = afterNode
    afterNode.prev = beforeNode

    removeElm.next = null
    removeElm.prev = null
    this.length--
    return removeElm




  }

}

const list = new DoublyLinkedList()
list.push(1)
list.push(2)
list.push(3)
console.log(list.remove(2))
console.log(list)




