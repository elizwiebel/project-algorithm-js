/*
    226. Invert Binary Tree
    https://leetcode.com/problems/invert-binary-tree/
    Easy
    15 mins
    Binary Tree
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (root) {
        swap(root);
        invertTree(root.left);
        invertTree(root.right);
    }
    return root;
};

var swap = function (node) {
    var left = node.left;
    node.left = node.right;
    node.right = left;
};
