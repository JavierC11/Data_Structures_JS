class NodeD{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class MyDoubleList{
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null,
        };
        this.tail = this.head;

        this.length = 1;
    }

    append(value){
        const newNode = new NodeD(value);
        
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;
        
        return this;
    }
    

    prepend(value){
        const newNode = new NodeD(value);
        const head = this.head;

        newNode.next = this.head;
        head.prev = newNode;
        this.head = newNode;
        
        this.length++;
        
        return this;
    }    



    //we're starting with the most dificult test

    insert(value, index){
        if(index >= this.length){
            return this.append(value);
        }
        const newNode = new NodeD(value);
        const firstposition = this.getposition(index - 1);
        const secondposition = firstposition.next;

        firstposition.next = newNode;
        newNode.prev = firstposition;
        newNode.next = secondposition;
        secondposition.prev =  newNode;
        
        
        this.length++;
        return this;
    }

    getposition(index){
        let counter = 0;
        let CurrenNode =  this.head;

        while(counter !==index){
            CurrenNode = CurrenNode.next;
            counter ++;
        }
        return CurrenNode;
    }
    

}



mydoubleLinekedList = new MyDoubleList(1);