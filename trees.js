class NodeT {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinaryTree{   
    constructor(){
        this.root = null;
    }

    Insert(value){
        const NewNodeT = new NodeT(value);
        if(this.root === null){
            this.root = NewNodeT;
        }else{
            let currentnodet = this.root;
            while(true){
                if(value < currentnodet.value){
                    if(!currentnodet.left){
                        currentnodet.left =  NewNodeT;
                        return this;
                    }else{
                        currentnodet =  currentnodet.left;
                    }
                }else{
                    if(!currentnodet.right){
                        currentnodet.right =  NewNodeT;
                        return this;
                    }else{
                        currentnodet =  currentnodet.right;
                    }
                }
            }
        }

    }

    search(value){
    
        if(this.root === null){
            return "Tree vacio";
        }else{
            let currentnodet = this.root;
            while(true){
                if(value === currentnodet.value){
                    return currentnodet;
                }
                
                if(value < currentnodet.value){
                    if(!currentnodet.left){
                        return "No existe el Nodo";
                    }else if(value === currentnodet.left.value){
                        return currentnodet.left;
                    }else{
                        currentnodet =  currentnodet.left;
                    }
                }else{
                    if(!currentnodet.right){
                        return "No existe el Nodo";
                    }else if(value === currentnodet.right.value){
                        return currentnodet.right;
                    }else{
                        currentnodet =  currentnodet.right;
                    }
                    }
                }
            }
        }



/*search(value) {
    let current = this.root;
    while( current && current.value != value ) {
      if( value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return current;
  }
  */
}

const mytree = new BinaryTree();