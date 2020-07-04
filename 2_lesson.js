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
    set(index, newVal) {
        var foundNode = this.get(index)
        if (foundNode) {
            foundNode.val = newVal
            return true
        }
        return false
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false

        if (this.length === index) return !!this.push(val)
        if (index === 0) return !!this.unshift(val)

        let previousNode = this.get(index - 1)
        let newNode = new Node(val);

        let temp = previousNode.next
        previousNode.next = newNode
        newNode.next = temp
        this.length++
        return true
    }
    remove(index) {
        if (index < 0 || index > this.length) return undefined

        if (index == 0) return this.shift()
        if (index == this.length) return this.pop()


        let prev = this.get(index - 1)
        let removed = prev.next
        let ahead = prev.next.next

        prev.next = ahead
        this.length--
        return removed
    }
    reverse() {
        // https://medium.com/outco/reversing-a-linked-list-easy-as-1-2-3-560fbffe2088

        let following = this.head
        let current = this.head
        let prev = null

        while (current !== null) {
            following = following.next
            current.next = prev
            prev = current
            current = following
        }
        return prev

    }
}

var list = new SinglyLinkedList()
list.push('1')
list.push('2')
list.push('3')
// list.insert(0, '1')
// list.remove(1)
// list.insert(0, 1)
// list.insert(1, 2)
// list.insert(3, 3)

// list.pop()
// list.push('hello3')

// "head": {
//     "value": 1, "next": {
//         "value": 2, "next": {
//             "value": 3, "next": null
//         }
//     }
// }