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
        if (index < 0) throw new Error (`Index must be non-negative.`);

        if (this.head === null) throw new Error (`List is empty.`);

        let tmp = this.head;

        for (let i = 0; i < index; i++) {
            if (tmp.next === null) throw new Error (`Index ${i} is out of range. list has ${i + 1} items.`);
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

    toString() {
        let string = "";
        let tmp = this.head

        while (tmp !== null) {
            console.log(tmp.value);
            string += `( ${tmp.value} ) -> `;
            tmp = tmp.next;
        }

        return string + "null"
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

    insertAt(value, index) {
        if (index <= 0) {
            this.prepend(value);
            return
        }

        const prev = this.at(index - 1);
        const next = prev.next || null;

        prev.next = new Node (value, next);
    }

    removeAt(index) {
        if (this.head === null) return

        if (index < 0) throw new Error(`Index must be non-negative.`);

        if (index === 0) {
            this.head = this.head.next;
            return
        }

        const prev = this.at(index - 1);
        const target = prev.next;
        if (!target) throw new Error(`Index ${index} out of range.`);
        prev.next = target.next;
    }
}

class Node {
    constructor (value = null, nextNode = null) {
        this.value = value;
        this.next = nextNode;
    }
}

export {LinkedList};