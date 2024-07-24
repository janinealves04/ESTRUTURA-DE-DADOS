class Node {
    constructor(value){
        this.value = value ;
        this.next = null;
     }
}

class SimpleLinkedList{
    constructor(){
        this.head = null;
        this.lenght = 0;
    }

    insert(){
        if (this.head === null){
            this.head = new Node (value);
        }
    }

    shift(value){
        let node = new Node (value);
        if(this.head === null){
            this.head = node;

        }else{
            node.next = this.head;
            this.head = node;
        }    
        this.lenght++;e
        }

        clear(){
            this.head =  null;
            this.lenght = 0;
        }
    }
//buscar elemnto por index
at(index){
    if (this.length() === 0) return undefined;
    let current = this.head;
    if (index === 0)
        return current.value; 

    else{
        let count = 1;
        while (current.next !== null){
            current = current.next;
            if (index === count)
                break 
            count ++;
            }
            return current.value ;
        }
    };









/*
length(){
    return this.lenght;
}
 */

/*
at(index){
    if (this.lenght() === 0) return undefined;
    let current = this.head;
}
 */
