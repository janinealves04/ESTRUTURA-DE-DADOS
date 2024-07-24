 /**
  * QueueOnObhect class
  */
 
 
 class QueueObject  {
    constructor (){
        this.items = {};
        this.front = 0;
        this.end = 0;
    }

    /**
     *enqueue elemnt 
     */

    enqueue(element){
        this.items[this.end] = element;
        this.end++; 
    }

    /**
     * 
     */

    dequeue(){
        let element =  this.items[this.front]
        }

    }
 }


 //não colocar como array a strategia de objetos. Para objtos 'ncssario informar o primeiro e o ultimo.