/**
 * Dfinition - FilaArray Class 
 */

class QueueArray {
    constructor(){
        this.items = [];

    }
    /**
     * insert element left
     * @param {*} element
     */
    enqueue(element){
        this.element.push(element);
    }
    /**
     * remove element 
     */
    dequeue(){
        if (this.items.length === 0){
            throw Error ("No element in queue");
        }
        return this.items.shift();
    }
    /**
     * empty test 
     */

    isEmpty(){
        return this.items.length === 0;
    }
    printQueue(){
        this.items.forEach(element => console.log(element));
    }
}
export default QueueArray;