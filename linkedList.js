function LinkedList() {
	var Node = function(element) {
		this.element =element;
		this.next = null;
	};

	var length = 0;
	var head = null;

	this.append = function(element) {
		var node = new Node(element);
		var current;

		if (head == null) {
			head = node;
		} else {
			current = head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}

		length++;
	};

	this.insert = function(position, element) {
		if (position > -1 && position < length) {
			var node = new Node(element);
			var current = head;

			if (position == 0) {
				node.next = current;
				head = node;
			} else {
				var i = 0;
				while (i++ < position) {
					previous = current;
					current = current.next;
				}
				node.next = current;
				previous.next = node;
			}

			length++;

			return true;
		} else {
			return false;
		}
	};

	this.removeAt = function(position) {
		if (position > -1 && position < length) {
			var current = head;

			if (position == 0) {
				// Can we use head.next here?
				// how javascript free memory?
				head = current.next;
			} else { 
				var i = 0;
				var previous;
				while (i++ < position) {
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
			}

			length--;

			return current.element;
		} else {
			return null;
		}
	};

	this.remove = function(element) {
		var index = this.indexOf(element);
		return this.removeAt(index);
	};

	this.indexOf = function(element) {
		var current = head;
		var index = 0;

		while (current) {
			if (current.element == element) {
				return index;
			}
			index ++;
			current = current.next;
		}

		return -1;
	};

	this.isEmpty = function() {
		return length == 0;
	};

	this.size = function() {
		return length;
	};

	this.toString = function() {
		var current = head;
		var string = '';

		while (current) {
			string += current.element;
			string += ',';
			current = current.next;
		}

		return string;
	};

	this.print = function() {
		console.log(this.toString());
	};

	this.getHead = function() {
		return head;
	};
}


var list = new LinkedList();
list.append(1);
list.append(100);
list.append(10);
list.print();

list.remove(100);
list.print();

list.insert(1,100);
list.print();
