class MyArray{
  constructor(){
    this.length = 0
    this.data = {}
  }
  get(index){
    return this.data[index]
  }
  push(item){
    this.data[this.length] = item
    this.length++
    return this.length
  }
  pop(){
    const lastItem = this.data[this.length-1]
    delete this.data[this.length - 1]
    this.length--
    return this.length
  }
  delete(index){
    const item = this.data[index]
    this.shiftItem(index)
  }
  shiftItem(index){
    if(index=== this.length - 1){
      this.pop()
    }
    for(let i = index ; i < this.length - 1 ; i++){
      this.data[i] = this.data[i+1]
    }
     delete this.data[this.length - 1]
    this.length--
  }
}
const myArray = new MyArray()
myArray.push("hi")
myArray.push("you")
myArray.push("!")
myArray.delete(1)
console.log(myArray)