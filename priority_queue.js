
function PriorityQueue() {
	var items = [];

	function QueueElement (element, priority) {
		this.element = element;
		this.priority = priority;
	};

	this.enqueue = function (element, priority) {
		var queueElement = new QueueElement(element, priority);


		if (items.length == 0 ){
			items.push(queueElement);
		} else {
			var added = false;
			for (var i = 0; i < items.length; i++) {
				if (queueElement.priority < items[i].priority) {
					items.splice(i,0,queueElement);
					added = true;
					break;
				} 
			}
			if (!added) {
			       console.log("!added");
		       	       items.push(queueElement); 
			}
		}
	};

	this.print = function() {
		console.log(items);
	};
}

var priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Jinzhi", 10000);
priorityQueue.enqueue("lolol", 100);
priorityQueue.enqueue("tomas", 999);
priorityQueue.print();
