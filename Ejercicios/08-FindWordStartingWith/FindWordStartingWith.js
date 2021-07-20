function FindWordStartingWith(book, query) {
    // Your code here:
    
    const text = book.text.toLowerCase();
    const array = text.split("");
    const position = [];
    var result;
  
    if(array[0] === query[0]){
        
        const longitud = query.length;
        const corte = array.slice(0,longitud);
        for(let i = 0; i < longitud; i++){
            if(text[i] !== corte[i]){
                result = false;
            }
        }
        
        if(result !== false){
            position.push(0)
        }

        result = true;
    }
    
    for(var j = query.length; j < text.length; j++){
        if(text[j] === query[0] && text[j-1] === " "){
            const longitud = query.length;
            const corte = array.slice(j, j + longitud);
            
            for(let i = j; i < j + longitud; i++){
                
                if(text[i] !== corte[i - j]){
                    result = false;
                }
            }
            
            if(result !== false){
                position.push(j)
                result = true;
            }
        }
    }
    return position;
}

/* Prueba */
const book = {
    id: 1,
    text: 'Erase una vez un libro de palabras que era un poco aburrido pero tenia muchas'
}

console.log(FindWordStartingWith(book, "un"))