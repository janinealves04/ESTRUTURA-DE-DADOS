/*Implemente uma fila que simule o atendimento de clientes em um banco, onde os
clientes são atendidos por ordem de chegada, mas com prioridade para clientes

preferenciais (por exemplo, idosos, grávidas). Crie uma classe filaDeBancoPrioridade
com métodos para adicionar clientes à fila com diferentes níveis de prioridade e
atendê-los. Simule a chegada de clientes e o atendimento dos mesmos, exibindo
mensagens no console para indicar o estado da fila e as ações realizadas.*/

class filaDeBancoPrioridade {
    constructor (){
     this.filaPrioridade = [];
     this.fila = [];
    }

    add (nome, prioridade = false) {
        if (prioridade === true){
            this.filaPrioridade.push(nome);
            console.log(`Cliente ${nome} chegou na fila prioritária`);
        }else {
            this.fila.push(nome);
            console.log(`Cliente ${nome} chegou na fila comum`);
        }
    }
    atenderCliente (){
        if (this.filaPrioridade.length > 0){
            const atendendoCliente = this.filaPrioridade.shift();
            console.log(`Atendendo cliente prioritário ${atendendoCliente}`);
        }
         else if (this.fila.length > 0){
                const atendendoCliente = this.fila.shift();
                console.log(`Atendendo o(a) cliente ${atendendoCliente}`);
            } else {
                if (this.fila.length === 0){
                    console.log (`Não há clientes na fila.`)
                }
            }
        } 

        listarFilas(){
            console.log(`Pessoas na fila Prioritária: ${this.filaPrioridade.join(', ')}`);
            console.log(`Pessoas na fila Comum: ${this.fila.join(', ')}`);    
        }
    } 
    


const filaDeBanco = new filaDeBancoPrioridade();


filaDeBanco.add('João', true);
filaDeBanco.add('Ana', true);
filaDeBanco.add('Cláudia', true);
filaDeBanco.add('Maria');
filaDeBanco.add('Pedro');


filaDeBanco.listarFilas();

filaDeBanco.atenderCliente();
filaDeBanco.atenderCliente();
filaDeBanco.atenderCliente();
filaDeBanco.atenderCliente();
filaDeBanco.atenderCliente();
filaDeBanco.atenderCliente();

