var lengthOfLongestSubstring = function(s) {
    let h = {}
    let start = 0
    let maxx = 0
    for(let i = 0 ; i < s.length ; i++){
        const end = s[i]
        if(h[end] >= start){
            start = h[end] +1
        }
        h[end] = i
        maxx = Math.max(maxx , i - start + 1)
    }
    return maxx
};