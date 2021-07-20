const maxValue = (stocks) => {
  let max = stocks[1] - stocks[0];
  for (let i = 0; i < stocks.length - 1; i += 1) {
      for (let j = i + 1; j < stocks.length; j += 1){
          const potential = stocks[j] - stocks[i];
          max = potential > max ? potential : max;    
      }  
  }
  return max;
};