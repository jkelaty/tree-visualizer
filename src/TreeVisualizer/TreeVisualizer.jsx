import React from 'react';

import NavigationBar from './NavigationBar/NavigationBar.jsx'

import BinarySearchTree from './Trees/BinarySearchTree/BinarySearchTree.jsx'
import AVLTree from './Trees/AVLTree/AVLTree.jsx';

import './TreeVisualizer.scss';


export default class TreeVisualizer extends React.Component {
    constructor(props) {
        super(props);
        
        this.initialStateOperation = 'Initial';

        this.state = {
            tree: 'AVL',
            menu_key: 'AVL',
            operation: this.initialStateOperation,
            tooltips: false,
            key: null
        };

        this.performOperation = this.performOperation.bind(this);
        this.toggleTooltips   = this.toggleTooltips.bind(this);
        this.changeTree       = this.changeTree.bind(this);
    }

    performOperation(operation) {
        this.setState({ operation: operation });
    }

    toggleTooltips() {
        this.setState({ tooltips: ! this.state.tooltips });
    }

    changeTree(tree_key) {
        if (tree_key !== this.state.tree) {
            let _this = this;
            let new_key = new Date().getTime();

            this.setState({ operation: 'Destroy', menu_key: tree_key, key: new_key });

            setTimeout(function() {
                if ( _this.state.key === new_key ) {
                    _this.setState({ tree: tree_key });
                }
            }, 1500);
        }
    }

    Tree() {
        return (
            <>
                { this.state.tree === 'BST' ?
                    <BinarySearchTree operation = {this.state.operation} tooltips = {this.state.tooltips} />
                : this.state.tree === 'AVL' ?
                    <AVLTree operation = {this.state.operation} tooltips = {this.state.tooltips} />
                : null }
            </>
        );
    }

    render() {
        return (
            <>
                <NavigationBar visualizer = {this} />
                
                { this.Tree() }
            </>
        );
    }

    componentDidUpdate() {
        if ( this.state.operation !== this.initialStateOperation ) {
            this.setState({ operation: this.initialStateOperation });
        }
    }
}