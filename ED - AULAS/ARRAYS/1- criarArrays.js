
////////Formas de criar array em JS:
const vetor1 = []; //Não inicializada.
const vetor2 = [1, 2, 7, 4]; //Inicializada.
const vetor3 = new Array();

/////////Comando para identificar o tipo do objeto:
console.log(typeof vetor1);

////////Indexação:
console.log(vetor2[0]); //Imprime o primeiro elemento de um vetor.
console.log(vetor2.length); //Imprime o tamanho do vetor.
console.log(vetor2[vetor2.length - 1]); //Imprime o último elemento do vetor.
console.log(vetor2.at(-1)); //Segunda forma de imprimir o último elemento do vetor.

vetor2[4] = 45; //Insere um novo elemento.
vetor2[vetor2.length] = 54; //Insere um novo elemento na próxima posição.