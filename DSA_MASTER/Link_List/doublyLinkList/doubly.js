class LinkList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head
        this.length = 1;
    }
    append(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.prev = this.tail,
        this.tail.next = newNode;
        this.tail = newNode
        this.length++
        return this
    }
    prepend(value) {
        const newAdd = {
            value: value,
            next: null
        }
        newAdd.next = this.head;
        this.head = newAdd
        this.length++
        return this
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next
        }
        return array
    }
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value)
        }
        const newNode = {
            value: value,
            next: null
        }
        const leader = this.traversalToIndex(index - 1)
        const holdingpointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingpointer;
        this.length++;
        return this.printList()
    }
    traversalToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

const myLinkList = new LinkList(10)
myLinkList.prepend(1);
myLinkList.append(5);
// myLinkList.append(16);
// myLinkList.printList()
// myLinkList.insert(2, 99)

console.log(myLinkList);