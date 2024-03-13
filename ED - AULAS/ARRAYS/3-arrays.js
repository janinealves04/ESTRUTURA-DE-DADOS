///////Manipulaçõo de arrays | REVISAR
const vetor = [1, 20, 1000, 30]; //vetor inicializado, exemplo com 1000 e 1 presente no mesmo vetor.
const novoVetor = vetor.sort();
console.log(novoVetor)

/* O metodo sort organizou os numeros de forma crescente
mas sem considerar as casas seguintes dos elementos.*/

function ordenar(a, b) {
    return a - b
};

/*Acima função criada para reordenar o novoVetor a função 
compara dois números e subtrai, se negativo "a" vem 
antes de "b", se positivo b vem antes de "a".*/

/*const novoVetorII = vetor.sort(ordenar);
console.log(novoVetorII);

const pessoas = [{nome: "Joao", idade: 15},{nome: "André", idade: 10}];
const pessoasOrdenado = pessoas.sort((p1, p2) => p1.idade - p2.idade);
console.log(pessoasOrdenado);
for (let pessoa of pessoasOrdenado){
    console.log(pessoa.nome, pessoa.idade);
}

for (let pessoa in pessoasOrdenado[0]){
    console.log(pessoasOrdenado[0][pessoa])
}

const texto = "abcd";
for (let letra of texto){
    console.log(letra);
} */