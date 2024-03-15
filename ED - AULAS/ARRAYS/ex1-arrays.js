/*REVISAR
1 - Crie uma classe JS para implementar um array com cinco métodos básicos: 
inserirFinal, [inserirInicio], [retirarInicio] e [retirarFinal]. Não utilize os 
métodos push, pop, shift e unshift.*/


class Pessoas {
  constructor() {
    this.Vetor = ["janine", "joão", "Maria"];
    }

  inserirFinal(){
      for (let pessoinha of this.Vetor){
          this.Vetor[3] = "Daniel"
      }
  }

  inserirInicio(valor){
    let NovasPessoas = [];
    NovasPessoas[NovasPessoas.length] = valor ;
    for (let i = 1; i< Vetor.length; i++){
      NovasPessoas[NovasPessoas.length] = Vetor[i]
    }
     this.Vetor  = NovasPessoas;
    }
    
 }



//Mostrando a lista atual:
let pessoas = new Pessoas();
console.log (pessoas.Vetor);

//Inserindo um novo valor ao final do vetor:
pessoas.inserirFinal();
console.log(pessoas.Vetor);

//Inserindo um novo valor ao inicio do vetor: