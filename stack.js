class Stack{
	constructor(){
		this.queue = [];
	}
Push(element){
	this.queue.unshift(element);
}
Pop(){
	this.queue.shift();
}
traverse(){
	console.log(this.queue);
	}
}

let qq = new Stack();
qq.Push(6);
qq.Push(1);
qq.Push(9);
qq.Push(34);
qq.Pop();
qq.traverse();

