///////MANIPULAÇÃO DE ARRAYS

//////////////Exemplo 1: /////////////////////
const vetor = [1, 20, 1000, 30]; //vetor inicializado, exemplo com 1000 e 1 presente no mesmo vetor.
const novoVetor = vetor.sort();
console.log(novoVetor)

function ordenar(a, b) {
    return a - b
};

const novoVetorII = vetor.sort(ordenar);
console.log(novoVetorII);

/* O metodo sort organizou os numeros de forma crescente
mas sem considerar as casas seguintes dos elementos.*/

/*Na função criada (linha 9) para reordenar o novoVetor a função 
compara dois números e subtrai, se negativo "a" vem 
antes de "b", se positivo b vem antes de "a".*/

/////////// Exemplo 2: ///////////////////

const pessoas = [{ nome: "Joao", idade: 15 }, { nome: "André", idade: 10 }]; // inicializa um vetor com pessoas
const pessoasOrdenado = pessoas.sort((p1, p2) => p1.idade - p2.idade); //reordernando a idade das pessoas
console.log(pessoasOrdenado);

for (let pessoa of pessoasOrdenado) {
    console.log(pessoa.nome, pessoa.idade);
}

for (let pessoa in pessoasOrdenado[0]) {
    console.log(pessoasOrdenado[0][pessoa])
}

const texto = "abcd";
for (let letra of texto) {
    console.log(letra);
};

/* Linhas 25 e 26: O sort() é usado para reordenar o vetor. Apartir das variáveis "p1" e "p2" 
que são objetos associados a idade das pessoas. Ele reordena subtraindo. */

/* Bloco 29 e 30: P1 é 15 e P2 é 10, logo a subtração resulta em um valor positivo, isso indica que P2 é menor e vem na frente de P2. Então André*/