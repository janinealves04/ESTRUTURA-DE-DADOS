class fila {
    constructor() {
        this.vetor = []
    }

    enfirelar(obj) {
        this.vetor.push(obj);
    }
    desenfileirar() {
        if (this.vetor.length === 0){   //pode usar this.estaVAzia() pois é o mesmo código
        console.log("Fila vazia");
        return null;
    }
        return this.vetor.shift();
    }

   
    estaVazia(){
        return this.vetor.length === 0
    }
}