/*Implemente um método reverse() na classe Pilha que inverta a ordem dos elementos na
pilha sem usar uma estrutura de dados adicional.*/


class Stack {
    constructor(){
        this.items = [];
    }

        push(element){
            this.items.push(element);
        }
    
        pop(){
            return this.items.pop();
        }
 
        peek(){
            return this.items.at(-1);
        }
    

        isEmpty(){
            return this._items.length == 0;
        }    
    
        size(){
            return this.items.length;
        }
        
        inverterPilha(){
            if (this.items > 0){
                if(this.items.length    )
            }

        }
        
}
    
 

const Stack = new StackReverse();
Stack.insert(30);
Stack.insert(20);
Stack.insert(40);
Stack.insert(5);
Stack.insert(2);

export default Stack;
