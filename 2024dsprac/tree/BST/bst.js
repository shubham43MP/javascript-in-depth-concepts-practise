class TreeNode {
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

  displayTreeRaw(){
    console.log('tree', this.root)
  }

  insert(value) {
    const treeNode = new TreeNode(value)
    if(this.root === null) {
      this.root = treeNode
    } else {
      this.insertValue(this.root, treeNode)
    }
  }

  insertValue(root, node){
    if(root.value > node.value) {
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

  preOrderTraversal(root = this.root) {
    if(root === null) {
      return
    } else {
      console.log(root.value)
      this.preOrderTraversal(root.left)
      this.preOrderTraversal(root.right)
    }
  }

  inOrderTraversal(root = this.root) {
    if(root === null) {
      return
    } else {
      this.inOrderTraversal(root.left)
      console.log(root.value)
      this.inOrderTraversal(root.right)
    }
  }

  postOrderTraversal(root = this.root) {
    if(root === null) {
      return
    } else {
      this.postOrderTraversal(root.left)
      this.postOrderTraversal(root.right)
      console.log(root.value)
    }
  }

  /**
   * Finds out the minimum value in the tree. This value is the leftmost leaf
   * @param {TreeNode} root
   */
  min(root = this.root) {
    if(root.left === null) {
      return root.value
    } else {
      return this.min(root.left)
    }
  }

  /**
   * Finds out the maximum value in the tree. This value is the rightmost leaf
   * @param {TreeNode} root
   */
  max(root = this.root) {
    if(root.right === null) {
      return root.value
    } else {
      return this.max(root.right)
    }
  }

  /**
   * Depth First Search, also called as the Inorder search.
   * @param {TreeNode} root
   */
  dfsInOrder(value, root = this.root) {
    if(root) {
      if(root.value === value) {
        return value
      }
      if(root.value > value) {
        return this.dfsInOrder(value, root.left)
      } else {
        return this.dfsInOrder(value, root.right)
      }
    }
  }
}

const bst = new BinarySearchTree();
console.log('Is tree empty', bst.isEmpty())
bst.insert(5)
bst.insert(8)
bst.insert(10)
bst.insert(4)
bst.insert(2)
bst.insert(1)
bst.displayTreeRaw()
console.log('preOrderTraversal', bst.preOrderTraversal())
console.log('inOrderTraversal', bst.inOrderTraversal())
console.log('postOrderTraversal', bst.postOrderTraversal())
console.log('Minimum value in BST', bst.min())
console.log('Maximum value in BST', bst.max())
console.log('DFS INORDER SEARCH', bst.dfsInOrder(8))
