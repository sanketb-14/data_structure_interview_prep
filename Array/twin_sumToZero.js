var twin = function(arr) {
    let set  = new Set()
    let sum = 0
    for(let i of arr){
        sum += i
        if(set.has(sum) ||sum === 0){
            return true
        }
        set.add(sum)

    }
    return false

};
console.log(twin([1,2,3,4,5,6,7,8,9])