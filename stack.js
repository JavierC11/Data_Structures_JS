class NodeB {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top =  null;
        this.buttom =  null;
        this.length =  0;
    }

    peek(){
        return this.top;
    }

    push(value){
        const NewNode = new NodeB(value);

        if(this.length==0){
            this.top = NewNode;
            this.buttom = NewNode;
        }else {
            const holdingPointer = this.top;
            this.top = NewNode;
            this.top.next = holdingPointer;
          }
      
          this.length++;
      
          return this;
    }

    pop(){
        if(!this.top){
            return null;
        }   
        if(this.buttom===this.top){
            this.buttom= null;
        }
        this.top= this.top.next;
        this.length--;

        return this;
        
    }
}

const myStack = new Stack();