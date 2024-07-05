//Revisão de pilas que é uma estrutura de dados linear
//lifo: last in  (input) first out () - ultimo a entrar primeiro a sair
//conceito de TAD: que tem interfac que são os métodos - deixa algo para alguém utilizar.
// sem o this é pego a variavél local ;
//jsdoc: gera a documntação automatica
//npx : executa sem instalar 

/**
 * stack with array
 */

class Stack {
    constructor (){
        /**
         * @type {Array} List to add elements
         */
        this._items = [];

    }
/**
 * ojetivo do método // como gerar documentação na internet
 * @param {any} element - explicação do paramtro
 * @returns{object}
 */
    push(element){
        this._items.push(element)
    }
    /**
     * Remove element from stack
     * @returns {any} element
     */


    pop(){
     return this._items.pop();
    }

    peek(){
        return this._items.peek()
    }
/**
 * check is stack is empty
 * @returns {boolean} results
 */
    isEmpty (){
        return this._items.length == 0
    }
/**
 * siz of stack 
 * @returns  {number}size
 */
    size (){
        return this._items.length;
    }
}

export default Stack; 