class LinkedList {
    constructor () {

    }

    append(value) {
        if (nextNode === null) {
            nextNode = new NOde (value, nextNode = null)
        }
    }
}

class Node {
    constructor (value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}