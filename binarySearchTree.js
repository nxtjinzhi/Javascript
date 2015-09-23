function BinarySearchTree() {

	var Node = function(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	};

	var root = null;

	var printNode = function(val) {
		console.log(val);
	};
	
	var insertNode = function(root, node) {
		if (node.key <= root.key) {
			if (root.left == null) {
				root.left = node
			} else {
				insertNode(root.left, node);
			}
		} else {
			if (root.right == null) {
				root.right = node;
			} else {
				insertNode(root.right, node);
			}
		}
	};

	this.insert = function(key) {
		var node = new Node(key);
		
		if (root == null) {
			root = node;
		} else {
			insertNode(root, node);
		}
	};

	var searchNode = function(root, key) {
		if (root == null) {
			return false;
		}

		if (key == root.key) {
			return true;
		}

		if (key < root.key) {
			return searchNode(root.left, key);
		} else {
			return searchNode(root.right, key);
		}

	};

	this.search = function(key) {
		return searchNode(root, key);
	};

	var inOrderTraverse = function(root, callback) {
		if (root != null) {
			inOrderTraverse(root.left, callback);
			callback(root.key);
			inOrderTraverse(root.right, callback);
		} 
	};

	this.inOrderTraverse = function(callback) {
		inOrderTraverse(root, callback);

	};

	var preOrderTraverse = function(root, callback) {
		if (root != null) {
			callback(root.key);
			preOrderTraverse(root.left, callback);
			preOrderTraverse(root.right, callback);
		}
	};

	this.preOrderTraverse = function(callback) {
		preOrderTraverse(root, callback);
	};

	var postOrderTraverse = function(root, callback) {
		if (root != null) {
			postOrderTraverse(root.left, callback);
			postOrderTraverse(root.right, callback);
			callback(root.key);
		}
	};

	this.postOrderTraverse = function(callback) {
		postOrderTraverse(root, callback);
	};

	this.min = function() {
		var node = root;
		while (node.left != null) {
			node = node.left;
		}
		return node.key;
	};

	this.max = function() {
		var node = root;
		while (node.right != null) {
			node = node.right;
		}
		return node.key;
	};

	var findMinNode = function(node) {
		if (node) {
			while (node && node.left != null) {
				node = node.left;
			}
			return node;
		} 
		return null;
	};

	var removeNode = function(node, key) {
		if (node == null) {
			return null;
		}

		if (key < node.key) {
			node.left = removeNode(node.left, key);

			// if this return is ommitted, it's error!
			return node;
		} else if (key > node.key) {
			node.right = removeNode(node.right, key);
			return node;
		} else {
			if (node.left == null && node.right == null) {
				//wait for gc, yes we can use return null, but may cause memory leak
				node = null;
				return node;
			}

			if (node.left == null) {
				node = node.right;
				return node;
			}

			if (node.right == null) {
				node = node.left;
				return node;
			}

			var knode = findMinNode(node.right);
			node.key = knode.key;
			node.right = removeNode(node.right, knode.key);
			return node;
		}
	};

	this.remove = function(key) {
		removeNode(root, key);
	};

	this.getRoot = function() {
		return root;
	};
}


var tree = new BinarySearchTree();
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

var printNode = function(value) {
	console.log(value +",");
};

console.log("inOrder>");
tree.inOrderTraverse(printNode);
console.log("preOrder>");
tree.preOrderTraverse(printNode);
console.log("postOrder>");
tree.postOrderTraverse(printNode);

console.log("MIN: "+tree.min());
console.log("MAX: "+tree.max());

console.log(tree.getRoot);
tree.remove(18);
tree.inOrderTraverse(printNode);
