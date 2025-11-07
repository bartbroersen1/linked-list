class LinkedList {
    constructor () {
        this.head = null;
    }

    head() {
        return this.head
    }

    tail() {
        if (this.head === null) return this.head

        let tmp = this.head;
        while (tmp.next !== null) {
            tmp = tmp.next;
        }
        return tmp
    }

    size() {
        if (this.head === null) return 0

        let size = 1;
        let tmp = this.head;

        while (tmp.next !== null) {
            size++;
            tmp = tmp.next;
        }

        return size
    }

    at(index) {
        if (this.head === null) return new Error (`No item at this index, the list is 0 items long.`);

        let tmp = this.head;

        for (let i = 0; i < index; i++) {
            if (tmp.next === null) return new Error (`No item at this index, the list is ${i + 1} items long.`);
            tmp = tmp.next;
        }

        return tmp
    }

    contains(value) {
        if (this.head === null) return false
        
        let tmp = this.head;

        while (tmp.value !== value) {
            if (tmp.next === null) return false
            tmp = tmp.next;
        }

        return true
    }

    find(value) {
        if (this.head === null) return null

        let index = 0;
        let tmp = this.head;

        while (tmp.value !== value) {
            if (tmp.next === null) return null
            index++;
            tmp = tmp.next;
        }

        return index
    }

    prepend(value) {
        this.head = new Node (value, this.head)
    }

    append(value) {
        if (this.head === null) this.prepend(value);
        else {
            this.tail().next = new Node (value);
        }
    }

    pop() {
        if (this.head === null) return

        if (this.head.next === null) {
            this.head = null;
            return
        }

        let tmp = this.head;
        while (tmp.next.next !== null) tmp = tmp.next;
        tmp.next = null;
    }

    toString() {
        let string = "";
        let tmp = this.head

        while (tmp !== null) {
            string += `( ${tmp.value} ) -> `;
            tmp = tmp.next;
        }

        return string + "null"
    }
}

class Node {
    constructor (value = null, nextNode = null) {
        this.value = value;
        this.next = nextNode;
    }
}

export {LinkedList};