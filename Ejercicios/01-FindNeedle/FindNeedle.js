function FindNeedle(haystack, needle) {
    for (let haystackIndex = 0; haystackIndex < haystack.length; haystackIndex += 1) {
        
        for (let needleIndex = 0; needleIndex < needle.length; needleIndex += 1 ) {
            
            if (haystack[haystackIndex + needleIndex] !== needle[needleIndex]) break;
            
            if (needleIndex + 1 === needle.length) return haystackIndex;
        }
    }
    
    return -1;
}