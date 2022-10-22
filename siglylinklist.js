class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class MySinglyList{
    constructor(value){
        this.head = {
            value: value,
            next: null,
        };
        this.tail = this.head;

        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        
        return this;
    }

    prepend(value){
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        
        return this;
    }    

    insert(value, index){
        if(index >= this.length){
            return this.append(value);
        }
        const newNode = new Node(value);
        const firstposition = this.getposition(index - 1);
        const secondposition = firstposition.next;
        firstposition.next = newNode;
        newNode.next = secondposition;
        
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


myLinekedList = new MySinglyList(1);