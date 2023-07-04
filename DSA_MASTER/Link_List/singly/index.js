// // // create a new constructor

// // 1 -->10-->99-->5-->16
class LinkList {
  constructor(value) {
    this.head = {
      value: value,
      null: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: this.head,
    };
    this.head.next = newNode;
    this.head = newNode;
    return this;
  }
}

const myLinkList = new LinkList(10);
myLinkList.append(5);
myLinkList.append(16);
myLinkList.prepend(1);
console.log(myLinkList);

// // insert data
// 1 -->10-->99-->5-->16

// class LinkList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value) {
//     const newNode = {
//       value: value,
//       next: null,
//     };
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }
//   prepend(value) {
//     const newNode = {
//       value: value,
//       next: this.head,
//     };
//     this.head = newNode;
//     this.length++;
//     return this;
//   }
//   printList() {
//     let currentNode = this.head;
//     let linkedListAsString = "";
//     while (currentNode !== null) {
//       linkedListAsString += `${currentNode.value} -> `;
//       currentNode = currentNode.next;
//     }
//     linkedListAsString += "null";
//     return linkedListAsString;
//   }
//   insert(index, value) {
//     if (index >= this.length) {
//       return this.append(value);
//     }
//     const newNode = {
//       value: value,
//       next: null,
//     };
//     if (index === 0) {
//       newNode.next = this.head;
//       this.head = newNode;
//     } else {
//       const leader = this.traverseToIndex(index - 1);
//       const holdingPointer = leader.next;
//       leader.next = newNode;
//       newNode.next = holdingPointer;
//     }
//     this.length++;
//     return this.printList();
//   }
//   traverseToIndex(index) {
//     let counter = 0;
//     let currentNode = this.head;
//     while (counter !== index) {
//       currentNode = currentNode.next;
//       counter++;
//     }
//     return currentNode;
//   }
// }

// const myLinkList = new LinkList(10);
// myLinkList.append(5);
// myLinkList.append(16);
// myLinkList.prepend(1);
// myLinkList.insert(0, 119);
// const linkedListAsString = myLinkList.printList();
// console.log(linkedListAsString);

// optimized code


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function insertAtBeginning(head, data) {
  const newNode = new Node(data);
  newNode.next = head;
  return newNode;
}

function insertAtEnd(head, data) {
  const newNode = new Node(data);
  if (head === null) {
    return newNode;
  }
  let current = head;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = newNode;
  return head;
}

function createLinkedList(arr) {
  let head = null;
  for (let i = 0; i < arr.length; i += 2) {
    const data = arr[i];
    const indicator = arr[i + 1];
    if (indicator === 0) {
      head = insertAtBeginning(head, data);
    } else {
      head = insertAtEnd(head, data);
    }
  }
  return head;
}

function printLinkedList(head) {
  let current = head;
  let result = '';
  while (current !== null) {
    result += current.data + ' ';
    current = current.next;
  }
  console.log(result.trim());
}

// Example usage:
const arr1 = [9, 0, 5, 1, 6, 1, 2, 0, 5, 0];
const head1 = createLinkedList(arr1);
printLinkedList(head1); // Output: 5 2 9 5 6

const arr2 = [5, 1, 6, 1, 9, 1];
const head2 = createLinkedList(arr2);
printLinkedList(head2); // Output: 5 6 9
