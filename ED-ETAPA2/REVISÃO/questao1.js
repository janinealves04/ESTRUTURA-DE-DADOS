/*Implemente um método reverse() na classe Pilha que inverta a ordem dos elementos na
pilha sem usar uma estrutura de dados adicional.*/


class StackReverse {
    constructor(){
        this.items = [];
    }

        push(element){
            this._items.push(element);
        }
    
        pop(){
            return this._items.pop();
        }
 
        peek(){
            return this._items.at(-1);
        }
    

        isEmpty(){
            return this._items.length == 0;
        }    
    
        size(){
            return this._items.length;
        }
    
        reverse(){
            if ()
        }
    }
    
   

//Verificar se está vazia
//usar pilha auxiliar para guardar as informações 
//last in fist out : o primeiro a entrar é o primeiro a sair. O primeiro a ser removido
//percorrer o valor do vetor 

const Stack = new StackReverse();
Stack.insert(30);
Stack.insert(20);
Stack.insert(40);
Stack.insert(5);
Stack.insert(2);
Stack.insert(8);
Stack.insert(25);
Stack.insert(32);
Stack.insert(45);
Stack.insert(42);


export default Stack;
