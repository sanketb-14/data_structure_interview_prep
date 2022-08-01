var isAnagram = function(a, b) {
    if(a.length !== b.length){
            return false
        }
        let h={}
        for(let i = 0 ; i < a.length ; i++){
            const char = a[i]
            h[char]=h[char] + 1 || 1
        }
        for(let i = 0 ; i < b.length ; i++){
            const bchar = b[i]
            if(!h[bchar]){
                return false
            }
            else{
                h[bchar]--
            }
            
        }
        return true
    
};