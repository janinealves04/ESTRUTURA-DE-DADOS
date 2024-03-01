//////Criação de classe com function:
function Carro (nome, fabricante){
    this.nome = nome
    this.fabricante = fabricante
}

const carro = new Carro ("Corsa", "Chevrolet")

console.log (carro.nome);