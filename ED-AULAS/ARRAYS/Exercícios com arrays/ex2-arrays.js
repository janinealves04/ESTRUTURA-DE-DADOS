/*
### Questão 2: Inversão de Array
Escreva um algoritmo que inverta os elementos de 
um array sem usar um array auxiliar.
*/

const numeros = [1, 2, 3, 4, 5];
numeros.reverse()
console.log(numeros)

/*

const numeros = [1, 2, 3, 4, 5];

 function InverterVetor(numeros){
    let inicio = 0;
    let fim = numeros.length - 1;
    while (inicio < fim) {
        let temp = numeros[fim];
        numeros[fim] = vetor[inicio];
        vetor[inicio] = temp;
        inicio++;
        fim--;
    }
    return numeros;
};



console.log(InverterVetor());*/