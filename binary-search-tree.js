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
    if (this.root === null) {
      this.root = new Node(val)
      return this;
    }

    let current = this.root

    while (val < current.val) {
      if (current.left === null) {
        current.left = new Node(val)
        return this;
      }
      current = current.left;
    }
    while (val > current.val) {
      if (current.right === null) {
        current.right = new Node(val)
        return this;
      }
      current = current.right;
    }
  }


  

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (this.root === null) {
      this.root = new Node(val)
      return this;
    }

    if (val < current.val) {
      if (current.left === null) {
        current.left = new Node(val)
        return this;
      }
      this.insertRecursively(val, current.left)
    }
    if (val > current.val) {
      if (current.right === null) {
        current.right = new Node(val)
        return this;
      }
      this.insertRecursively(val, current.right)
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (this.root === null) {
      return undefined;
    }

    if (this.root.val === val) {
      return this.root.val
    }

    let current = this.root

    while (val !== current.val) {
      if (val < current.val) {
        if (current.left === null) {
          return undefined;
        }
        if (current.left.val === val) {
          return current.left
        }
        current = current.left;
      }
      if (val > current.val) {
        if (current.right === null) {
          return undefined;
        }
        if (current.right.val === val) {
          return current.right
        }
        current = current.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (this.root === null) {
      return undefined;
    }

    if (this.root.val === val) {
      return this.root.val
    }

    if (val < current.val) {
      if (current.left === null) {
        return undefined;
      }
      if (current.left.val === val) {
        return current.left
      }
      this.findRecursively(val, current.left);
    }
    if (val > current.val) {
      if (current.right === null) {
        return undefined;
      }
      if (current.right.val === val) {
        return current.right
      }
      this.findRecursively(val, current.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let current = this.root;
    const order = [];

    function traverse(node) {
      order.push(node.val)
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }
    traverse(current)
    
    return order;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let current = this.root;
    const order = [];

    function traverse(node) {
      if(node.left) traverse(node.left)
      order.push(node.val)
      if(node.right) traverse(node.right)
    }
    traverse(current)
    
    return order;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let current = this.root;
    const order = [];

    function traverse(node) {
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      order.push(node.val);
    }
    traverse(current)
    
    return order;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let order = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      order.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return order;
  }
}

module.exports = BinarySearchTree;
