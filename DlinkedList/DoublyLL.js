class Node{
	constructor(element,next=null,prev=null){
	this.element = element;
	this.next = next;
	this.prev = prev;
	}
}

class DLinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

append(element){
	let node = new Node(element);
	
	if(this.head==null){
		this.head = node;
		this.tail = node;
		this.size++;
	}else{
		node.prev = this.tail;
		this.tail.next = node
		this.tail = node;
		this.size++;
		}
	}
prepend(element){
	let node = new Node(element);
	if (this.head==null) {
	this.head = node;
	this.tail = node;
	this.size++;	
	} else {
		node.next = this.head;
		this.head.prev = node;
		this.head = node;
		node.prev = null;
		this.size++;
	}
	console.log(node)
}
insertAfterNode(element,insertAfterthis){
	let node = new Node(element);
	let temp = this.head;
	while(temp.element!==insertAfterthis){
		temp = temp.next;
	};
	node.next = temp.next;
	temp.next.prev = node;
	node.prev = temp;
	temp.next = node
	this.size++;
}
traverse(){
	let curr = this.head;
	let dList=' ';
	while(curr){
		dList+=  curr.element + ' ';
		curr = curr.next
		}
	console.log(dList,`number of element in the LinkedList is ${this.size}`);
	}
}

let dll = new DLinkedList();
dll.append(6);
dll.append(22);
dll.append(9);
dll.prepend(8);
dll.insertAfterNode(16,6)
dll.traverse();