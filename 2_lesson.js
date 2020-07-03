class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0
        this.tail = null
        this.head = null
    }
    push(val) {

        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            //moving the information into the next null property
            this.tail.next = newNode
            // moving the tail forward so it is the last thing
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined

        let currentNode = this.head
        let previousNode = currentNode
        while (currentNode.next) {
            previousNode = currentNode
            currentNode = currentNode.next
        }
        this.tail = previousNode
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return this
    }
    shift() {
        if (!this.head) return undefined
        var currentHead = this.head
        this.head = currentHead.next
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return this
    }
    unshift(val) {
        let newNode = new Node(val)

        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index) {
        if (index < 0 || index >= this.length) return null

        let count = 0
        let currentNode = this.head


        while (count !== index) {
            currentNode = currentNode.next
            count++
        }

        return currentNode
    }
}

var list = new SinglyLinkedList()
list.push('hello')
list.push('hello1')
list.push('hello2')
list.get(2)
// list.pop()
// list.push('hello3')

// "head": {
//     "value": 1, "next": {
//         "value": 2, "next": {
//             "value": 3, "next": null
//         }
//     }
// }