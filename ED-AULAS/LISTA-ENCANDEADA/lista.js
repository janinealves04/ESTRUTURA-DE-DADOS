//lista encadeada é um conjunto de n´´ós , inserir fim(VALOR), está vazio, tamanho,indice(indice), CONTEM (valor)

class No {
    constructor(valor) {
        this.valor = valor; 
        this.proximo = null; //link para o proximo nó.
    }
}
class ListaEncadeada {
    constructor() {
        this.cabeca = null; //guardar o inicio da lista. 
    }    

    inserirInicio(valor) {
        let no = new No(valor); //cria um objeto.
        no.proximo = this.cabeca; //passa o endereço de cabeca, para no.proximo
        this.cabeca = no; //this cabeça recebe o endereço do objeto 
    }

    paraArray() {
        let array = []; //inicia vetor
        if (this.cabeca == null) //perguntase ta nula
            return array;       // se sim retorna um array

        let no = this.cabeca; // guarda a cabeça 
        array.push(no.valor); // guarda o valor do nó

        while (no.proximo != null) {  //confere que é difernte de nulo
            no = no.proximo;
            array.push(no.valor);
        }
        return array;
    }
}


const lista = new ListaEncadeada();
lista.inserirInicio(5);
lista.inserirInicio(3);
lista.inserirInicio(7);
console.log(lista.paraArray());