function camino(grafo, nodoSalida, nodoLlegada){

  if(grafo[nodoSalida].find(elem => elem === nodoLlegada) !== undefined){
      return true;
  }

  for(let i = 0; grafo[nodoSalida].length; i++){
      return camino(grafo, grafo[nodoSalida][i], nodoLlegada);
  }

  return false;
}

/* Prueba */
const grafo = {
  a: ['c', 'r'],
  c: ['r'],
  r: ['z'],
  s: [ ],
  z: [ ]
}

console.log(camino(grafo,'a','s'))