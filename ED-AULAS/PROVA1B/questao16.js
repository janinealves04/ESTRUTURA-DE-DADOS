/* 16. Escreva uma função que encontre o elemento mais frequente em um array. */

class EncontrarElementoMaisFrequente {
    constructor() {
        this.contagem = {};
    }

    contarElemento(array) { 
        this.contagem = {}; 
        for (const elemento of array) {
            if (this.contagem[elemento]) {
                this.contagem[elemento]++;
            } else {
                this.contagem[elemento] = 1;
            }
        }
    }

    maisFrequente() {
        let elementoMaisFrequente = null;
        let frequenciaMaxima = 0;

        for (const [elemento, frequencia] of Object.entries(this.contagem)) {
            if (frequencia > frequenciaMaxima) {
                frequenciaMaxima = frequencia;
                elementoMaisFrequente = elemento;
            }
        }
        return elementoMaisFrequente;
    }
}

const array1 = [5, 5, 3, 3, 3, 2, 2];
const array2 = [10, 10, 20, 20, 30, 30, 30, 30];
const instancia1 = new EncontrarElementoMaisFrequente();
const instancia2 = new EncontrarElementoMaisFrequente();

instancia1.contarElemento(array1);
console.log(instancia1.maisFrequente()); 

instancia2.contarElemento(array2);
console.log(instancia2.maisFrequente()); 

