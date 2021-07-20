function Stack(){
    this.head = null;
    this.min = null;
}

function Nodos(data){
    this.data = data;
    this.next = null;
}

Stack.prototype.push = function(value){
    const nodo = new Nodos(value);

    nodo.next = this.head
    this.head = nodo;

    if(this.min === null){
        this.min = nodo.data
    }else{
        if(this.min > nodo.data){
            this.min = nodo.data;
        }
    }
}

Stack.prototype.pop = function(){
    if(this.head === null){
        return "no hay nodos";
    }
    const a = this.head.data
    this.head = this.head.next;
    return a;
}

Stack.prototype.minimo = function(){
    return this.min;
}

Stack.prototype.peek = function(){
    return this.head.data;
}

/* head --> 1 ---> 3 -->  2 --> 5 ---> null */

let stack = new Stack();

stack.push(5)
stack.push(2)
stack.push(3)
stack.push(1)
console.log('minimo', stack.minimo())
console.log('pop',stack.pop())
console.log(stack)

console.log(stack.peek())