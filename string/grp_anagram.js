var groupAnagrams = function(strs) {
    let h={}
    for(let i = 0 ; i < strs.length ; i++){
        const word = strs[i]
        const key = word.split("").sort().join()
        if(!h[key]){
            h[key]=[]
        }
        h[key].push(word)
    }
    return Object.values(h)
    
};