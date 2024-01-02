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
const queue = new Queue()
queue.enqueue(10)
queue.enqueue(500)

queue.enqueue(450)


console.log(queue.dequeue())
