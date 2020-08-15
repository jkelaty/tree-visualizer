import React from 'react'
import Tooltips from '../../../Tooltips/Tooltips.jsx'

export default class BinarySearchTreeTooltips extends Tooltips {
    getContent(operation) {
        var tooltip = '';

        switch( operation ) {
            case 'Search':      tooltip = this.SearchTooltips();     break;
            case 'Insert':      tooltip = this.InsertionTooltips1(); break;
            case 'Insert 2':    tooltip = this.InsertionTooltips2(); break;
            case 'Remove 1':    tooltip = this.RemovalTooltips1();   break;
            case 'Remove 2':    tooltip = this.RemovalTooltips2();   break;
            case 'Remove 3':    tooltip = this.RemovalTooltips3();   break;
            case 'Remove 4':    tooltip = this.RemovalTooltips4();   break;
            case 'Pre-Order':
            case 'In-Order':
            case 'Post-Order':
            case 'Level Order': tooltip = this.TraversalTooltips();  break;
            case 'Initial':
            default:            tooltip = this.InitialTooltips();    break;
        }

        return (
            <>
                <div className='tooltip'>
                    <p>{tooltip}</p>
                </div>
            </>
        );
    }

    InitialTooltips() {
        return (
            <>
                {'A Binary Search Tree is a data structure for which every node\'s value is greater than every node in its left subtree and less than every node in its right subtree.'}
            </>
        );
    }

    RemovalTooltips1() {
        return (
            <>
                {'The first step in removing an element from a BST is to find the node to be deleted.'}
            </>
        );
    }

    RemovalTooltips2() {
        return (
            <>
                {'If the target node is not a leaf node, we must then find its in-order successor place the node in place of our target node.'}
            </>
        );
    }

    RemovalTooltips3() {
        return (
            <>
                {'We must then delete the in-order successor from the tree.'}
            </>
        );
    }

    RemovalTooltips4() {
        return (
            <>
                {'Finally, we reassign the in-order successor\'s subtree to complete our tree.'}
            </>
        );
    }

    InsertionTooltips1() {
        return (
            <>
                {'To insert an element in our BST, we must first search through our tree as if we\'re finding an element until we\'ve found an open position to insert our new leaf node. The time complexity for finding the open position is O(n)'}
            </>
        );
    }

    InsertionTooltips2() {
        return (
            <>
                {'Once we\'ve found the open position, we can insert our new node. This operation has a time complexity of O(1)'}
            </>
        );
    }

    SearchTooltips() {
        return (
            <>
                {'To search through our BST, we check if our current node matches our target value. If we have no found our target, we check if the target is greater than our current node, in which case we traverse to the right child, else we traverse to the left child. If the child is a null node, the target elelment is not in our tree. This operation has a time complexity of O(n)'}
            </>
        );
    }

    TraversalTooltips() {
        return (
            <>
                {'We have 4 different traversals for out BST. Pre-order, in-order, post-order, and level order. The first three are most easily implmented as a recursive function call as follows:'}
                <br />
                {'Pre-order: Current node -> left subtree -> right subtree'}
                <br />
                {'In-order: Left Substree -> current node -> right subtree'}
                <br />
                {'Post-order: Left subtree -> right subtree -> current node'}
                <br />
                {'Level order traversal can be implemented using a queue, where we enqueue each node\'s child nodes when we pop them from the queue. Each traveral operation has a time complexity of O(n)'}
            </>
        );
    }
}

