function SumArray(arr, n) {
    // Your code here:
  
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr.length; j++){
        if(arr[i] + arr[j] === n){
            return true;
        }
      }
    }
    return false;
  
}

