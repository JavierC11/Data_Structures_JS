class NodeC {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}



class Queue{
    constructor(){
        this.first =  null;
        this.last =  null;
        this.length = 0;
    }

    peek(){
        return this.first;
    }


    enqueue(value){
        const newnode = new NodeC(value);
        if(this.length == 0){
            this.first = newnode;
            this.last = newnode;
        }
        else{
            this.last.next = newnode;
            this.last = newnode;
        }

        this.length++;
        return this;
    }

    dequeuque(){
        if(!this.first){
            return null;
        }   
        if(this.last===this.first){
            this.last= null;
        }
        this.first= this.first.next;
        this.length--;

        return this;
        
    }
}

myqueuque =  new Queue();

