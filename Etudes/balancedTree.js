/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
//  * @param {TreeNode} root
//  * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root) return true;
    const getHeight = (node) => {
        if (!node) return true;
        
        const leftNode = getHeight(node.left);
        const rightNode = getHeight(node.right);
        
        if (!leftNode || !rightNode || Math.abs(leftNode - rightNode) > 1) return false;
        return Math.max(leftNode, rightNode) + 1;
    }
    return getHeight(root);
};

