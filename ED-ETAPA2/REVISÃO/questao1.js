/*Implemente um método reverse() na classe Pilha que inverta a ordem dos elementos na
pilha sem usar uma estrutura de dados adicional.*/


class Pilha {
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
        
        reverseStack(){
            if (!this.isEmpty()){
                let inicio = this.pop;
                this,reverse();
                this.inserirFinal(inicio);
               
            }

        }

        inserirFinal(item){
            if(let inicio = this.pop){
                this.inserirFinal(item);
                this.push(inicio);
            }
        }
        
}
    
 

const Pilha = new Stack();
Pilha.push(30);
Pilha.push(20);
Pilha.push(40);
Pilha.push(5);
Pilha.push(2);

export default Pilha;
