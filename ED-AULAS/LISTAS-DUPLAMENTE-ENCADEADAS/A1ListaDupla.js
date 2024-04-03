
//import NoDuplo from "./A1NoDuplo.js";
//console.log(new NoDuplo(3));


import NoDuplo from "./A1NoDuplo.js";

class ListaDupla {
    constructor(){
        this.inicio = null;
        this.final = null;
    }
    inserirInicio(valor){
        const novoNo = new NoDuplo(valor);
        if (this.inicio === null){
            this.inicio = novoNo;
            this.final = novoNo;
        }
    }
}