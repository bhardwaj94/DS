class Node{
	constructor(element){
	this.element = element;
	this.next = null;
	}
}

class LinkedList{
	constructor(){
		this.head = null;
		this.size = 0;
	}

addAtEnd(element){
	let node = new Node(element);
	let current;
	//in case of empty linked list
	if (this.head==null) {
		this.head = node;
	} else {
		current = this.head;
		// iterate to the end of the list
		while(current.next){
			current = current.next;
		}
		current.next = node;
	}
	this.size++;
	}
addAtBeg(element){
	let node = new Node(element);
	let temp;
	//in case of empty linked list
	if(this.head==null){
		this.head = node;
	}
	else{
		node.next = this.head;
		this.head = node;
	}
	this.size++;
}
addAtI(element,index){
	if(index>this.size){
		return false;
	}else{
		// creates a new node 
		let node = new Node(element);
		let current,prev,it=0;
		current = this.head;
		//in case of empty linked list
	if(this.head==null){
		this.head = node;
	}
	// add the element to the first index 
	else if(index==0){
		node.next = this.head;
		this.head = node;
	}else{
		// iterate over the list to find the position to insert
		while(it<index){
			prev = current;
			current = current.next;
			it++;
		}
		// adding an element
		node.next = current;
		prev.next = node
		}
	this.size++;
	}
}
printList(){
	let curr = this.head;
	let item = '';
	while(curr){
		item += '->' + curr.element;
		curr=curr.next;
		}
		console.log(item,`${this.size} number of element in the LinkedList`);
	}

removeFrom(index){
	let removedItem;
	if (index>this.size) {
		return console.log('index overflow!!!!!!');
	} else {
		let current,prev,it = 0;
		current = this.head;
		if (index == 0) {
			this.head = current.next;
		} else {
			while(it<index){
				it++;
				prev = current;
				current = current.next;
			}
			removedItem = current.element;
			prev.next = current.next;
		}
		this.size--;
		}
		return console.log(`${removedItem} removed from linked list`);
	}	
}
let ll = new LinkedList();
ll.addAtEnd('2');
ll.addAtBeg('3');
ll.addAtBeg('5');
ll.addAtEnd('7');
ll.addAtI('8',2);
ll.printList();
ll.removeFrom(2);
ll.printList();
