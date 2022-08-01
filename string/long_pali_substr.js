var longestPalindrome = function(s) {
    let sIndex = 0
    let mLength = 1
    function expandMid(left,right){
        while(left >=0 && right < s.length && s[left]===s[right]){
            const currLength = right - left + 1
            if(currLength > mLength){
                mLength = currLength
                sIndex= left
            }
            left -= 1
            right += 1
        }
    }
    for(let i = 0; i < s.length ; i++){
        expandMid(i-1 , i+1)
        expandMid(i,i+1)
        
    }
    return s.slice(sIndex , sIndex + mLength )
    
    
};