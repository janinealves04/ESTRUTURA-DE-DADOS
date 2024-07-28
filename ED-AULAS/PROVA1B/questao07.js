/*Implemente uma fila que simule o atendimento de clientes em um banco, onde os
clientes são atendidos por ordem de chegada, mas com prioridade para clientes

preferenciais (por exemplo, idosos, grávidas). Crie uma classe FilaBancoPrioridade
com métodos para adicionar clientes à fila com diferentes níveis de prioridade e
atendê-los. Simule a chegada de clientes e o atendimento dos mesmos, exibindo
mensagens no console para indicar o estado da fila e as ações realizadas.*/

class FilaBancoPrioridade {
    constructor (){
     this.filaPrioridade = [];
     this.fila = [];
    }

    add (nome, prioridade = false) {
        if (prioridade === true){
            this.filaPrioridade.push(nome);
            console.log(`Cliente ${nome} adicionado à fila prioritária`);
            console.log('Fila prioritária:',this.filaPrioridade);
        }else {
            this.fila.push(nome);
            console.log(`Cliente ${nome} adicionado à fila`);
            console.log('Fila comum:',this.fila);
        }
    }

   
}


const filaDeBanco = new FilaBancoPrioridade();


filaDeBanco.add('João', true);
       /*  if (let prioridade.length > 0){
            nome.push(this.prioridade)
            prioridade.push(this.clienteAtendido);
            console.log("Cliente ${nome} atendido")
        } else{
            if (this.prioridade.length > 0){

            }
        }
        //com diferntees niveis d prioridade 
    } */


