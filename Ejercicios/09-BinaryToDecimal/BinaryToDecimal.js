function BinaryToDecimal(binary) {
  // Your code here:
  var acum = 0;
  for(let i = 0; i < binary.length; i++){
    acum += Number(binary[i])*Math.pow(2, binary.length - i - 1);
  }
  
  return acum;
}

const binaryToDecimalRec = (binary) => {
  const sum = Math.pow(2, binary.length - 1) * binary[0]
  if (binary.length !== 1) {
      return sum + binaryToDecimalRec(binary.slice(1));
  }
  return sum
}