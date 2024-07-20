class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinarySearchTree {
	constructor(root = null) {
		this.root = root;
	}

	/** insert(val): insert a new node into the BST with value val.
	 * Returns the tree. Uses iteration. */

	insert(val) {
		const newNode = new Node(val);

		if (this.root === null) {
			this.root = newNode;
			return this;
		}

		let current = this.root;
		while (true) {
			if (val < current.val) {
				if (current.left === null) {
					current.left = newNode;
					return this;
				} else {
					current = current.left;
				}
			} else {
				if (current.right === null) {
					current.right = newNode;
					return this;
				} else {
					current = current.right;
				}
			}
		}
	}

	/** insertRecursively(val): insert a new node into the BST with value val.
	 * Returns the tree. Uses recursion. */

	insertRecursively(val, node = this.root) {
		const newNode = new Node(val);

		if (this.root === null) {
			this.root = newNode;
			return this;
		}

		if (val < node.val) {
			if (node.left === null) {
				node.left = newNode;
			} else {
				this.insertRecursively(val, node.left);
			}
		} else {
			if (node.right === null) {
				node.right = newNode;
			} else {
				this.insertRecursively(val, node.right);
			}
		}

		return this;
	}

	/** find(val): search the tree for a node with value val.
	 * return the node, if found; else undefined. Uses iteration. */

	find(val) {
		let current = this.root;

		while (current !== null) {
			if (val === current.val) {
				return current;
			} else if (val < current.val) {
				current = current.left;
			} else {
				current = current.right;
			}
		}

		return undefined;
	}

	/** findRecursively(val): search the tree for a node with value val.
	 * return the node, if found; else undefined. Uses recursion. */

	findRecursively(val, node = this.root) {
		if (node === null) return undefined;

		if (val === node.val) {
			return node;
		} else if (val < node.val) {
			return this.findRecursively(val, node.left);
		} else {
			return this.findRecursively(val, node.right);
		}
	}

	/** dfsPreOrder(): Traverse the array using pre-order DFS.
	 * Return an array of visited nodes. */

	dfsPreOrder(node = this.root, result = []) {
		if (node !== null) {
			result.push(node.val);
			this.dfsPreOrder(node.left, result);
			this.dfsPreOrder(node.right, result);
		}

		return result;
	}

	/** dfsInOrder(): Traverse the array using in-order DFS.
	 * Return an array of visited nodes. */

	dfsInOrder(node = this.root, result = []) {
		if (node !== null) {
			this.dfsInOrder(node.left, result);
			result.push(node.val);
			this.dfsInOrder(node.right, result);
		}

		return result;
	}

	/** dfsPostOrder(): Traverse the array using post-order DFS.
	 * Return an array of visited nodes. */

	dfsPostOrder(node = this.root, result = []) {
		if (node !== null) {
			this.dfsPostOrder(node.left, result);
			this.dfsPostOrder(node.right, result);
			result.push(node.val);
		}

		return result;
	}

	/** bfs(): Traverse the array using BFS.
	 * Return an array of visited nodes. */

	bfs() {
		const queue = [this.root];
		const result = [];

		while (queue.length > 0) {
			const node = queue.shift();
			if (node !== null) {
				result.push(node.val);
				if (node.left !== null) queue.push(node.left);
				if (node.right !== null) queue.push(node.right);
			}
		}

		return result;
	}

	/** Further Study!
	 * remove(val): Removes a node in the BST with the value val.
	 * Returns the removed node. */

	remove(val) {}

	/** Further Study!
	 * isBalanced(): Returns true if the BST is balanced, false otherwise. */

	isBalanced() {}

	/** Further Study!
	 * findSecondHighest(): Find the second highest value in the BST, if it exists.
	 * Otherwise return undefined. */

	findSecondHighest() {}
}

module.exports = BinarySearchTree;
