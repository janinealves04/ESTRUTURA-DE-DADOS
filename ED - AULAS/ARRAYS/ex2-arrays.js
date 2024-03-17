/*
### Questão 2: Inversão de Array
Escreva um algoritmo que inverta os elementos de 
um array sem usar um array auxiliar.
*/

let numeros = [3,28,35,46];

function inverterArray (Array){
    let inicio = 0;
    let final = Array.length - 1;

    while (inicio < fim ){
        let x = Array[inicio];
        Array[inicio] = Array[final];
        Array[fim] = x;
 
    }
}

console.log(inverterArray)

