// criar conjunto a e b 
// criar uniao dos dois conjuntos 
//criar intercessão dos dois conjuntos
//union,append, has, intercssão

class SetArray {
    constructor(){
        this.items = []
    }

    union(){
       let newSet = new SetArray();
       for (let element of this.items){

       } 
    }

    add(element){
        if (!this.has(element))
            this.items.push(element);
    }

    has(element){
        return this.items.includes(element);
    }

    intersection(){

    }

    

    
}


