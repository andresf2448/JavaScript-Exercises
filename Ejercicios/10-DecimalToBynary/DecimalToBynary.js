/* primera forma */

const decimalToBinaryRec = (num) => {
  if (num) {
      return decimalToBinaryRec(Math.floor(num / 2)) + num % 2
  }
  return '';
}

/* Segunda forma */

function DecimalToBynary(num) {
  let string = '';
  while(num){
    let modulo = num % 2;
    string = modulo + string;
    num = Math.floor(num/2);
  }
  return string;
}