class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const node = new Node(value);
    if(this.head) {
      let current = this.head;
      while(current.next !== null) {
        current = this.head.next;
      }
      current.next = node;
      this.tail = node;
    } else this.head = node
  }

  forwardTraversePrint() {
    if(this.head) {
      let current = this.head;
      let aggregator = ''
      while(current.next !== null) {
        aggregator += `${current.value} ==> `
        current = current.next;
      }
      console.log(aggregator + current.value)
    } else console.log(this.head.value);
  }
}

const ll = new LinkedList();
ll.push(5)
ll.push(8)
ll.push(25)
ll.forwardTraversePrint();
