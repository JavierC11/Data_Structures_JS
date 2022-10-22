class HashTable {
    constructor(size) {
      this.data = new Array(size);
    }
    hashMethod(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }
      return hash;
    }
   set(key, value){
    const address = this.hashMethod(key);
    if(!this.data[address]){
        this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
   }

   get(key){
    const address = this.hashMethod(key);
    const currentBuket = this.data[address];
    if(currentBuket){
      for(let i=0; i < currentBuket.length; i++){
        if(currentBuket[i][0] === key){
          return currentBuket[i][1];
        }
      }
    }
    return undefined;
   }
   

   deletet(key){
     const address = this.hashMethod(key);
     const currentBuket = this.data[address];
     if(currentBuket){
       for(let i=0; i < currentBuket.length; i++){
         if(currentBuket[i][0] === key){
          currentBuket[i][0] = 0;
          currentBuket[i][1] = 0;
          return currentBuket[i][0], currentBuket[i][1];

        }
      }
    } 
    
    return undefined;
   }

  }
  
  const myHashTable = new HashTable(50);