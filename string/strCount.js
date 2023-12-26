function strCount(str){

  let obj ={}
  for(let i=0;i<str.length;i++){
    if(/^[a-zA-Z0-9]+$/.test(str[i])){
      let char = str[i].toLowerCase()
      obj[char] = ++obj[char] || 1



    }
}
  return obj
}
console.log(strCount("  sanket 12 3"))