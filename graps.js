// This is the last DataStructure

const grap = {  
     // 1   3   4   5   6   8
    0: [0, 1,  1 , 0 , 1 , 0],
    3: [1, 0,  0 , 1 , 1 , 0],
    4: [1, 0,  0 , 1 , 0 , 0],
    5: [0, 1,  1 , 0 , 0 , 0],
    6: [1, 1,  0 , 0 , 0 , 0],
    8: [0, 0,  1 , 0 , 0 , 0],
}

class Graph {
    constructor(){
        this.nodes = 0;
        this.adjactenlist = {};
    }

    addVertex(node){
        this.adjactenlist[node] = []
        this.nodes++;
    }

    addEdge(node1, node2){
        this.adjactenlist[node1].push(node2);
        this.adjactenlist[node2].push(node1);
    }
}

const myGrap = new Graph();