 //Metodos set : size, clear, issubsetof, isempty, teste com classe do js.


class SetObject {
    constructor(){
        this.items = {};
    }

    has(element){
        element.include(this.items);
    }
    add(){

    }
    toList(){

    }
    inion(){

    }
    intersection(){

    }
    size(){

    }
    clear(){

    }

    isSubset(set){
        for (let element of this.toList()){
            if (!set.has(element))
                return false;
        }
        return true;
    }

    //construção mais limpa com o for.
    /* isSubSetOf(a, b){
        a = new setA();
        b = new setB();
        if (a == b){
            return true
        } else{
            while(a ===!b){
                    return false
                }
            }
    } */
    isEmpty(){

    }

}
 




