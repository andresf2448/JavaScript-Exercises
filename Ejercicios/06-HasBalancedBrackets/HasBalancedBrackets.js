const hasBalancedBrackets = (string) => {
  //  Tenemos un diccionario para chequear las opening brackets con sus closing brackets
  const validBrackets = {
      '{' : '}',
      '[' : ']',
      '(' : ')',  
  };
  const openBrackets = [];
  for (let i = 0; i < string.length; i += 1) {
      if (validBrackets[string[i]]) {
         openBrackets.push(string[i]);
      } else if (validBrackets[openBrackets.pop()] !== string[i]) {
         return false;
      }
  }
  return !openBrackets.length;
};