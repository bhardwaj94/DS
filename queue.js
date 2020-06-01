class Queue{
	constructor(){
		this.queue = [];
		this.size=0;
	}
enqueue(element){
this.queue.push(element);
this.size++;
}
dequeue(){
	this.queue.pop();
	this.size--;
}
traverse(){
	console.log(this.queue);
	}
}

let qq = new Queue();
qq.enqueue(6);
qq.enqueue(1);
qq.enqueue(9);
qq.enqueue(34);
qq.dequeue();
qq.traverse();

