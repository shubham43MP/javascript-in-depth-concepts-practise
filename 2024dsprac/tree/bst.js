class GraphNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null
  }

  insert(value) {
    const treeNode = new GraphNode(value)
    if(this.root === null) {
      this.root = treeNode
    } else {
      this.insertValue(this.root, treeNode)
    }

  }

  insertValue(root, node){
    if(root.value < node.value) {
      if(root.left === null){
        root.left = node
      } else {
        this.insertValue(root.left, node)
      }
    } else {
        if(root.right === null){
        root.right = node
      } else {
        this.insertValue(root.right, node)
      }
    }
  }
}

const bst = new BinarySearchTree();
console.log('Is tree empty', bst.isEmpty())
