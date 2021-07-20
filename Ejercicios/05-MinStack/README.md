# Min Stack
## Introducción
Para poder comprender el objetivo de esta actividad necesitamos saber **¿Qué es un stack?** Un stack, también conocido como pila es **LIFO** (Last-In First-Out), es decir, el último en entrar es el primero en salir.       

En este caso, el ejercicio es implementar un stack que tenga los siguientes métodos:
1. **push(value) :** añadir el elemento, value, al stack.
2. **pop() :** sacar un elemento del stack.
3. **min() :** obtener el elemento con el valor mínimo.
4. **peek():** obtener el elemento que está el en top del Stack

## Solución
### En palabras

1. Implementar un stack normal
2. Luego, implementar un stack con un requisito mas > encontrar el mínimo

##### Importante

**( ! ) IDEA:** Tener una estructura separada para guardar el mínimo por cada nodo que se agrega, y cuando sacamos el nodo removemos ese mínimo