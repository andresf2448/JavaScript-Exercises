/* function SumArray(arr, n) {
  // Your code here:

  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] + arr[j] === n){
          return true;
      }
    }
  }
  return false;

} */
/* [-1,2,3,4,6] 7
      i j */

function SumArray(arr, n) {
  // Your code here:
  let i = 0;
  let j = arr.length - 1;
  while(i < j){
    if(arr[i] + arr[j] === n){
      return true;
    }
    if(arr[i] + arr[j] < n){
      i++;
    }else{
      j--;
    }
  }
  return false;
}

module.exports = SumArray;