class Notebook {
    constructor (marca, memoria, processador, armazenamento ) {
        this.marca = marca;
        this.memoria = memoria;
        this.processador = processador;
        this.armazenamento = armazenamento;
    }

    aumentarMemoria(novaMemoria){
        this.memoria = novaMemoria; 
    }

}

let lenovo = new Notebook("lenovo");
lenovo.aumentarMemoria('8gb');
lenovo.armazenamento = "1TB"
console.log(lenovo);





