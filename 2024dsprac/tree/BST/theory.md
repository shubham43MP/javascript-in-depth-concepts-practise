# Binary Search Tree (BST) - Properties

A **Binary Search Tree (BST)** is a special type of binary tree where each node follows a specific ordering property.

---

## 📌 Basic BST Properties
1. **Node Structure**
   - Each node contains:
     - A **key** (value stored in the node).
     - A **left child** pointer.
     - A **right child** pointer.

2. **Ordering Property**
   - For any node with key `K`:
     - All keys in the **left subtree** are **less than K**.
     - All keys in the **right subtree** are **greater than K**.

3. **Recursive Definition**
   - The left and right subtrees are themselves BSTs.

4. **No Duplicates (usually)**
   - Standard BSTs do not allow duplicate keys (though some implementations allow them with a rule like keeping duplicates on the right).

---

## 🔄 Traversal Properties
5. **Inorder Traversal (LNR)**
   - Produces keys in **sorted ascending order**.

6. **Preorder and Postorder Traversals**
   - Preorder (NLR) and Postorder (LRN) are valid traversals but not inherently sorted.

---

## 🌳 Height & Balance Properties
7. **Height of Tree**
   - Number of edges on the longest path from root to a leaf.
   - Worst case (skewed tree): `O(n)`.
   - Best case (balanced tree): `O(log n)`.

8. **Balance**
   - BSTs can become unbalanced without rebalancing techniques (e.g., AVL, Red-Black Trees).

---

## 🔍 Search & Access Properties
9. **Efficient Searching**
   - Lookup complexity:
     - Best case: `O(log n)` (balanced tree).
     - Worst case: `O(n)` (skewed tree).

10. **Successor & Predecessor**
    - **Inorder predecessor**: largest node in left subtree.
    - **Inorder successor**: smallest node in right subtree.

---

## ➕➖ Insertion & Deletion Properties
11. **Insertion**
    - Always inserted as a **leaf node** while maintaining BST rules.

12. **Deletion**
    - Node with **no child** → simply remove.
    - Node with **one child** → promote child.
    - Node with **two children** → replace with inorder successor or predecessor.

---

## 🏗️ Structural Properties
13. **Minimum & Maximum**
    - **Minimum** = leftmost node.
    - **Maximum** = rightmost node.

14. **Sorted Range Queries**
    - BST supports efficient range queries via inorder traversal.

15. **Subtree Property**
    - Any subtree of a BST is also a BST (if ordering rules hold).

---

## ✅ Quick Summary

| Property              | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| Ordering Rule         | Left < Node < Right                                                        |
| Inorder Traversal     | Produces sorted order                                                      |
| Search Complexity     | `O(log n)` avg, `O(n)` worst                                                |
| Insertion             | Inserted as leaf node                                                      |
| Deletion              | Depends on 0, 1, or 2 children                                             |
| Min/Max               | Leftmost = Min, Rightmost = Max                                            |
| Successor/Predecessor | Smallest in right subtree / Largest in left subtree                        |
| Balance               | Not guaranteed, requires AVL/Red-Black Trees for self-balancing            |

---
