/*
Questão 1: NOVO OBJETO DE ARRAY
Crie uma classe JS para implementar um array com cinco métodos 
básicos: inserirFinal, inserirInicio, retirarInicio e retirarFinal. 
Não utilize os métodos push, pop, shift e unshift.
*/


class Pessoas {
  constructor() {
    this.Vetor = ["janine", "joão", "Maria"];
  }

  inserirFinal() {
    for (let pessoinha of this.Vetor) {
      this.Vetor[3] = "Daniel"
    }
  }

  removerFinal() {
    let NovasPessoas = [];
    for (let i = 0; i < this.Vetor.length - 1; i++) {
      NovasPessoas[NovasPessoas.length] = this.Vetor[i];
    }
    this.Vetor = NovasPessoas;
  }

  inserirInicio(valor) {
    let NovasPessoas = [];
    NovasPessoas[NovasPessoas.length] = valor; //porque essa linha foi adicionada
    for (let i = 0; i < this.Vetor.length; i++) {
      NovasPessoas[NovasPessoas.length] = this.Vetor[i];
    }
    this.Vetor = NovasPessoas;
  }


  removerInicio() {
    let NovasPessoas = [];
    //NovasPessoas[NovasPessoas.length] = valor ; porque aqui foi removido?
    for (let i = 1; i < this.Vetor.length; i++) {
      NovasPessoas[NovasPessoas.length] = this.Vetor[i];
    }
    this.Vetor = NovasPessoas;
  }

};



//Mostrando a lista atual:
let pessoas = new Pessoas();
console.log(pessoas.Vetor);

//Inserindo um novo valor ao final do vetor:
pessoas.inserirFinal();
console.log(pessoas.Vetor);

//Removendo do final:
pessoas.removerFinal();
console.log(pessoas.Vetor);

//Inserindo um novo valor ao inicio do vetor:
pessoas.inserirInicio("Lucas");
console.log(pessoas.Vetor);

//Removendo do inicio:
pessoas.removerInicio();
console.log(pessoas.Vetor);