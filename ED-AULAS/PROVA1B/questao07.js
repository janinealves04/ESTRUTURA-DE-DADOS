/*Implemente uma fila que simule o atendimento de clientes em um banco, onde os
clientes são atendidos por ordem de chegada, mas com prioridade para clientes

preferenciais (por exemplo, idosos, grávidas). Crie uma classe filaDeBancoPrioridade
com métodos para adicionar clientes à fila com diferentes níveis de prioridade e
atendê-los. Simule a chegada de clientes e o atendimento dos mesmos, exibindo
mensagens no console para indicar o estado da fila e as ações realizadas.*/

class filaDeBancoPrioridade {
    constructor (){
     this.filaPrioridade1 = []; //60+
     this.filaPrioridade2 = []; //gestante
     this.filaComum = [];
    }

    add (nome, prioridade = 0) {
        if (prioridade === 1 ){ //idoso
            this.filaPrioridade1.push(nome);
            console.log(`Cliente ${nome} chegou na fila prioritária 1 (maior de 60 anos)`);
        }else if (prioridade === 2) { //gestante
            this.filaPrioridade2.push(nome);
            console.log(`Cliente ${nome} chegou na fila prioritária 2 (gestante)`);
        }else{
            this.filaComum.push(nome);
            console.log (`Cliente ${nome} chegou na fila comum`)
        }
    }
    atenderCliente (){
        if (this.filaPrioridade1.length > 0){
            const atendendoCliente = this.filaPrioridade1.shift();
            console.log(`Atendendo cliente prioritário 1 (Maior de 60 anos): ${atendendoCliente}`);
        } else if (this.filaPrioridade2.length > 0){
                const atendendoCliente = this.filaPrioridade2.shift();
                console.log(`Atendendo o(a) cliente prioritário 2 (gestante): ${atendendoCliente}`);
            } else if(this.filaComum.length > 0) {
                const atendendoCliente = this.filaComum.shift();
                console.log (`Atendendo o(a) cliente: ${atendendoCliente}`)
                } else { 
                    if (this.filaComum.length === 0)
                        console.log (`Não há cliente na fila.`);
                    }
     } 

        listarFilas(){
            console.log(`Pessoas na fila Prioritária 1 (Maior de 60 anos): ${this.filaPrioridade1.join(', ')}`);
            console.log(`Pessoas na fila Prioritária 2 (Gestante): ${this.filaPrioridade2.join(', ')}`);
            console.log(`Pessoas na fila comum: ${this.filaComum.join(', ')}`);    
        }
    } 
    

const filaDeBanco = new filaDeBancoPrioridade();


filaDeBanco.add('João', 1);
filaDeBanco.add('Ana', 1);
filaDeBanco.add('Cláudia', 2);
filaDeBanco.add('Maria');
filaDeBanco.add('Pedro');


filaDeBanco.listarFilas();

filaDeBanco.atenderCliente();
filaDeBanco.atenderCliente();
filaDeBanco.atenderCliente();
filaDeBanco.atenderCliente();
filaDeBanco.atenderCliente();
filaDeBanco.atenderCliente();

