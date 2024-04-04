
//import NoDuplo from "./A1NoDuplo.js";
//console.log(new NoDuplo(3));


import NoDuplo from "./A1NoDuplo.js";

class ListaDupla {
    //criar uma lista vazia
    constructor(){
        this.inicio = null;
        this.final = null;
    }
    //lista não é ninguem sem os metódos 
    inserirInicio(valor){
        //insere os valores
        const novoNo = new NoDuplo(valor);
        if (this.inicio === null){
            this.inicio = novoNo;
            this.final = novoNo;
        }

    }
            //ou
        /**if (!this.inicio){
            this.inicio = novoNo;
            this.final = novoNo;
        }else {
            this.inicio.anterior =nocoNo;
            novoNo.proximo =this.inicio;
            this.inicio =novoNo;
        }
        **/

    inserirFinal(valor){
        const novoNo = new NoDuplo(valor);
        if (this.inicio === null){
            this.inicio = novoNo;
            this.final = novoNo;
    
        }else {
            novoNo.anterior = this.final;
            this.final.proximo = novoNo;
        }
    }
    removerInicio(){
        //atende o caso de lista vazia
        if (!this.inicio){
            return null;
            }else{
                const valor = this.inicio.valor 
                //atende o caso de apenas um elemento na lista 
                if (this.inicio.proximo === null){
                    this.inicio = null;
                    this.final = null;
                } else {
                    const noProximo = this.inicio.proximo;
                    noProximo.anterior = null;
                    this.inicio.proximo = null;
                    this.inicio = noProximo;
                }
                return valor;
            }
        }

}
