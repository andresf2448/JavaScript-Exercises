/* Primera forma */
function SumArray(arr, n) {

  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] + arr[j] === n){
          return true;
      }
    }
  }
  return false;

}

/* Segunda forma */

function SumArray(arr, n) {

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