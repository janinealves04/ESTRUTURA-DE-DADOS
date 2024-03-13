//////////Formas de  definição de arays em js
const vetor1 = []; // Vetor vazio.
const vetor2 = new Array(); //Segunda forma de definir vetor.
const vetor3 = [1, 2, 3, { nome: "janine", idade: 19 }] //Vetor iniciado.
const vetor4 = new Array("teste", 2, 3); //Vetor inicializado.
const vetor5 = new Array(10).fill(0) //Um vetor com dez elementos de valor zero. Fill sugnifica preencher.

///////////vetor  de vetores (arrays com mais de uma dimensão):
const vetor6 = [[1, 2], [3, 4]];
let posicao1 = vetor6[0]; //Imprime : [1,2]
let posicaoDe1 = vetor6[0][0] //Imprime : 1

/////////Acessar elementos de um array. 
let primeiroValor = vetor5[0];
let ultimoValor1 = vetor5[vetor5.length - 1] //Resgata o último elemento.
let ultimoValor2 = vetor5.at(-1); //Segunda forma de resgatar o último elemento.

/////////Para inserir novos valores. 
const vetor = [1, 2, { nome: "janine" }, [10, 20]];
vetor[4] = 3; //Sinaliza a indexação e o valor atribuído a posição informada.
//vetor[5] = undefined 
vetor[6] = 5

//////////Percorrer elementos de um vetor, é melhor criar um bloco quando relizar essa ação.
for (let i = 0; i < vetor.length; i++) {
    //console.log (vetor[i]);
}

//CallBack: função dentro de outra 
//ForEach: pecorre os itens de um vetor.
vetor.forEach(function (valor) { console.log(valor) }); //função anônima passada dentro do ForEach (callback).
vetor.forEach(valor => console.log(valor));


for (let elemento of vetor) {
    console.log(elemento)
}

// Usando Do WHile
do {
    console.log(vetor[++i]);
} while (i < vetor.length);

//////////////////////////////////////

console.log(typeof vetor);

//Outras formas de inserir elementos:
const novoVetor = [1, 2];
//Usado para pilha:
novoVetor.push(50)// insere um novo elemeno no final do vetor 
novoVetor.pop()// retira o ultimo elemento do vetor 
//Usado para fila: 
novoVetor.unshift(0); //insere um elemento na posiçao zero do vetor 
novoVetor.shift(); //retira o primeiro elemento
console.log(novoVetor);





