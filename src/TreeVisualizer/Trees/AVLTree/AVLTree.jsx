import React from 'react'
import{ Transition, CSSTransition } from 'react-transition-group'

import AVLTreeTooltips from './AVLTreeTooltips/AVLTreeTooltips.jsx'
import InputModal from '../../Additional/InputModal/InputModal.jsx'
import ErrorMessage from '../../Additional/ErrorMessage/ErrorMessage.jsx'

import Queue from '../../Additional/Queue.js'
import { randomIntFromInverval } from '../../Additional/Helpers.js'

import './AVLTree.scss'

class AVLTreeNode {
    constructor(val) {
        this.value  = val;
        this.left   = null;
        this.right  = null;

        this.animations = {
            initial: {
                node: { active: false, delay: 0 },
                line: { active: false, delay: 0 }
            },
            visited: {
                node: { active: false, delay: 0 },
                line: { active: false, delay: 0 }
            },
            success: {
                node: { active: false, delay: 0 },
                line: { active: false, delay: 0 }
            },
            removed: {
                node: { active: false, delay: 0 },
                line: { active: false, delay: 0 }
            }
        };

        this.moveAnimations = {
            active: false,
            delay: 0,
            css: {
                entering: {},
                entered:  {},
                exiting:  {},
                exited:   {}
            }
        };
    }
}

export default class AVLTree extends React.Component {
    constructor(props) {
        super(props);

        this.initialStateOperation = 'Initial';

        this.visibleClasses = {
            appearDone: 'visible',
            enterDone: 'visible',
            exit: 'visible'
        };

        this.operationSteps = {
            Initial: [
                'Initial'
            ],
            Generate: [
                'Reset',
                'Generate'
            ],
            Reset: [
                'Hide',
                'Reset'
            ],
            Insert: [
                'Input',
                'Insert',
                'Complete'
            ],
            Remove: [
                'Input',
                'Remove 1',
                'Remove 2',
                'Remove 3',
                'Remove 4',
                'Complete',
                'test'
            ],
            Search: [
                'Input',
                'Search'
            ],
            'Pre-Order': [
                'Traverse'
            ],
            'In-Order': [
                'Traverse'
            ],
            'Post-Order': [
                'Traverse'
            ],
            'Level Order': [
                'Traverse'
            ]
        };

        this.name = 'AVLTree';
        this.key  = 'AVL';
        this.root = null;

        this.removeValue = null;
        this.targetValue = null;
        this.targetNode = null;
        this.timeout = 0;
        this.input = false;
        this.tooltipsStep = this.initialStateOperation;
        this.waiting = false;
        this.errorMessage = {
            message: '',
            key: null
        };

        this.state = {
            operation: this.initialStateOperation,
            step: 0,
            tooltips: false,
            destroy: false
        };

        this.receiveInput = this.receiveInput.bind(this);
        this.advanceOperationStepFromTooltips = this.advanceOperationStepFromTooltips.bind(this);
    }

    componentDidMount() {
        this.setState({ operation: 'Generate', step: 0 });
    }
    
    static getDerivedStateFromProps(newProps, state) {
        const initialStateOperation = 'Initial';
        const destroyStateOperation = 'Destroy';

        if ( newProps.operation === destroyStateOperation ) {
            return { operation: 'Reset', step: 0, destroy: true };
        }
        else if ( newProps.operation !== initialStateOperation ) {
            if ( state.operation === initialStateOperation ) {
                return { operation: newProps.operation, tooltips: newProps.tooltips };
            }
            else if ( newProps.tooltips !== state.tooltips ) {
                return { tooltips: newProps.tooltips };
            }
        }
        else if ( newProps.tooltips !== state.tooltips ) {
            return { tooltips: newProps.tooltips };
        }

        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        if ( nextState.destroy ) {
            return true;
        }
        else if ( this.waiting && (this.state.tooltips === nextState.tooltips) ) {
            if ( nextProps.operation !== this.initialStateOperation && nextProps.operation !== this.state.operation ) {
                this.errorMessage['message'] = 'Error: Tree performing operation';
                this.errorMessage['key'] = new Date().getTime();
                return true;
            }
            return false;
        }
        else {
            return true;
        }
    }

    render() {
        this.performOperationStep();

        return (
            <>
                <InputModal active = {this.input} operation = {this.state.operation} callback = {this.receiveInput} key = {this.input} />

                <ErrorMessage message = {this.errorMessage['message']} key = {this.errorMessage['key']} />

                <div
                    id={ this.name }
                    className='tree'
                    style={ {transform: this.getScaleFactor()} }>

                    { this.Tree() }

                </div>

                <AVLTreeTooltips
                    active = {this.state.tooltips}
                    operation = {this.tooltipsStep}
                    next = {this.advanceOperationStepFromTooltips}
                    timeout = {this.timeout}/>
            </>
        );
    }

    componentDidUpdate() {
        this.advanceOperationStep();
    }

    /* Handle calling function to perform animations for a given operation */

    performOperationStep() {
        switch( this.state.operation ) {
            case 'Generate':    this.GenerateTree();   break;
            case 'Reset':       this.ResetTree();      break;
            case 'Insert':      this.InsertInTree();   break;
            case 'Remove':      this.RemoveFromTree(); break; 
            case 'Search':      this.SearchTree();     break;
            case 'Pre-Order':
            case 'In-Order':
            case 'Post-Order':
            case 'Level Order': this.TraverseTree();   break;
            case 'Initial':
            default:            this.InitialTree();    break;
        }
    }

    /* Advances operation step asynchonously based on timeout set */
    
    advanceOperationStep() {
        if ( this.state.operation !== this.initialStateOperation ) {
            if ( this.state.step >= this.operationSteps[ this.state.operation ].length - 1 ) {
                if ( ! this.waiting ) {
                    let _this = this;
                    _this.waiting = true;
                    setTimeout(function() {
                        _this.waiting = false;
                        if ( ! _this.state.tooltips || (_this.timeout === 0) || (_this.state.operation === 'Generate') || (_this.state.operation === 'Reset') ) {
                            _this.setState({ operation: 'Initial', step: 0 });
                        }
                    }, _this.timeout);
                }
            }
            else {
                if ( this.operationSteps[ this.state.operation ][ this.state.step ] === 'Input' ) return;

                if ( ! this.waiting ) {
                    let _this = this;
                    _this.waiting = true;
                    setTimeout(function() {
                        _this.waiting = false;
                        if ( ! _this.state.tooltips || (_this.timeout === 0) || (_this.state.operation === 'Generate') || (_this.state.operation === 'Reset') ) {
                            _this.setState({ step: _this.state.step + 1 });
                        }
                    }, _this.timeout);
                }
            }
        }
    }

    advanceOperationStepFromTooltips() {
        if ( this.state.step >= this.operationSteps[ this.state.operation ].length - 1 ) {
            this.setState({ operation: 'Initial', step: 0 });
        }
        else {
            this.setState({ step: this.state.step + 1 });
        }
    }

    /* Basic internal tree operations */

    insertNumElements(elements) {
        for (let i = 0; i < elements; ++i) {
            let val = randomIntFromInverval(1, 150);
            if ( ! this.contains( val ) ) {
                this.root = this.insert( val );
            }
        }
    }

    reset() {
        this.root = null;
    }

    height(node = this.root) {
        if (node === null) return 0;
        else return Math.max( this.height(node.left), this.height(node.right) ) + 1;
    }

    contains(val, node = this.root) {
        if ( ! node ) return false;

        if (val < node.value) {
            return this.contains(val, node.left);
        }
        else if (val > node.value) {
            return this.contains(val, node.right);
        }
        else {
            return true;
        }
    }

    insert(val, node = this.root) {
        if (node === null) {
            return new AVLTreeNode(val); 
        }
        else if (node.value === val) {
            //tree contains key already
            return node;
        }
        else if (node.value < val) {
            node.right = this.insert(val, node.right);
        }
        else {
            node.left = this.insert(val, node.left);
        }

        let balanceFactor = this.getBalanceFactor(node);

        if ( balanceFactor > 1 && val < node.left.value ) {
            return this.rotateRight(node);
        }
        else if ( balanceFactor < -1 && val > node.right.value ) {
            return this.rotateLeft(node);
        }
        else if ( balanceFactor > 1 && val > node.left.value ) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }
        else if ( balanceFactor < -1 && val < node.right.value ) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }
        else {
            return node;
        }
    }

    getBalanceFactor(node) {
        if (node === null) return 0;
        else return this.height( node.left ) - this.height( node.right );
    }

    rotateRight(node) {
        let x = node.left;
        let y = x.right;

        x.right = node;
        node.left = y;

        return x;
    }

    rotateLeft(node) {
        let x = node.right;
        let y = x.left;

        x.left = node;
        node.right = y;

        return x;
    }

    remove(val, node = this.root) {
        if ( ! val ) return;

        if ( node === null ) return node;

        if ( val < node.value ) {
            node.left = this.remove(val, node.left);
        }
        else if ( val > node.value ) {
            node.right = this.remove(val, node.right);
        }
        else {
            if ( node.left === null ) {
                return node.right;
            }
            else if ( node.right === null ) {
                return node.left;
            }
            else {
                node.value = this.inOrderSuccessor(node.right);
                node.right = this.remove(node.value, node.right);
            }
        }

        if (this.root === null) return this.root;

        let balanceFactor = this.getBalanceFactor(node);

        if ( balanceFactor > 1 && this.getBalanceFactor(node.left) > -1 ) {
            return this.rotateRight(node);
        }
        else if ( balanceFactor < -1 && this.getBalanceFactor(node.left) < 1 ) {
            return this.rotateLeft(node);
        }
        else if ( balanceFactor > 1 && this.getBalanceFactor(node.left) < 0 ) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }
        else if ( balanceFactor < -1 && this.getBalanceFactor(node.left) > 0 ) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }
        else {
            return node;
        }
    }

    inOrderSuccessor(node) {
        if ( node.left !== null ) {
            return this.inOrderSuccessor(node.left);
        }
        else {
            return node.value;
        }
    }

    getScaleFactor() {
        let scale_factor = (window.innerWidth - 20) / ( Math.pow(2, this.height() - 1) * 70 );
        return 'scale(' + (scale_factor > 1 ? 1 : scale_factor) + ')';
    }

    /* Handle creating Tree nodes and lines in DOM */

    Tree(node = this.root, tree_height = this.height(), curr_height = 0, pos = 'root') {
        if (curr_height === tree_height) return null;

        const leftChild  = this.Tree(node ? node.left  : null, tree_height, curr_height + 1, 'left');
        const rightChild = this.Tree(node ? node.right : null, tree_height, curr_height + 1, 'right');
        
        const classes = ['node-wrapper', pos].join(' ');

        if ( node === null ) {
            return (
                <>
                    <div
                        className={classes}
                        node-value='null'>

                        <div className='node-value' />

                        {leftChild}
                        {rightChild}
                        
                    </div>
                </>
            );
        }
        else {
            const rootWidth = {
                width: ( node === this.root ) ? Math.pow(2, tree_height - 1) * 70 + 'px' : null
            };

            return (
                <>
                    <Transition
                        in={node.moveAnimations['active']}
                        timeout={node.moveAnimations['delay']}
                        appear={true}>

                        {state => (

                            <div
                                className={classes}
                                node-value={node.value}
                                node-height={tree_height - curr_height}
                                style={( node === this.root && ! node.moveAnimations['active'] ) ? rootWidth : node.moveAnimations['css'][state]}>

                                <CSSTransition
                                    in={node.animations['initial']['node']['active']}
                                    timeout={node.animations['initial']['node']['delay']}
                                    classNames={this.visibleClasses}
                                    appear={true}>

                                    <div className='node-value'>
                                        {this.getNodeHover(node.value)}
                                        {this.getCricle(node)}
                                    </div>

                                </CSSTransition>

                                {leftChild}
                                {rightChild}

                                {this.getConnectingLine(node, pos)}

                            </div>
                        )}

                    </Transition>
                </>
            );
        }
    }

    getCricle(node) {
        return (
            <>
                <svg className='circle node-value-circle' xmlns='http://www.w3.org/2000/svg'>

                    <circle className='circle node-circle initial' r='24' cx='25' cy='25' fill='none' />

                    <CSSTransition
                        in={node.animations['visited']['node']['active']}
                        timeout={node.animations['visited']['node']['delay']}
                        classNames={this.visibleClasses}
                        appear={true}>

                        <svg className='circle node-circle-traversal' xmlns='http://www.w3.org/2000/svg'>
                            <circle className='circle node-circle-background visited' r='24' cx='25' cy='25' fill='none' />
                            <circle className='circle node-circle visited' r='24' cx='25' cy='25' fill='none' />
                        </svg>

                    </CSSTransition>

                    <CSSTransition
                        in={node.animations['success']['node']['active']}
                        timeout={node.animations['success']['node']['delay']}
                        classNames={this.visibleClasses}
                        appear={true}>

                        <svg className='circle node-circle-traversal' xmlns='http://www.w3.org/2000/svg'>
                            <circle className='circle node-circle-background success' r='24' cx='25' cy='25' fill='none' />
                            <circle className='circle node-circle success' r='24' cx='25' cy='25' fill='none' />
                        </svg>

                    </CSSTransition>

                    <CSSTransition
                        in={node.animations['removed']['node']['active']}
                        timeout={node.animations['removed']['node']['delay']}
                        classNames={this.visibleClasses}
                        appear={true}>

                        <svg className='circle node-circle-traversal' xmlns='http://www.w3.org/2000/svg'>
                            <circle className='circle node-circle-background removed' r='24' cx='25' cy='25' fill='none' />
                            <circle className='circle node-circle removed' r='24' cx='25' cy='25' fill='none' />
                        </svg>

                    </CSSTransition>
                    
                    <text className='text node-value-text' x='50%' y='50%' fill='black' textAnchor='middle' dominantBaseline='central'>
                        {node.value}
                    </text>

                </svg>
            </>
        );
    }

    getNodeHover(val) {
        return (
            <>
                <CSSTransition
                    in={this.state.operation === this.initialStateOperation}
                    timeout={300}
                    classNames={this.visibleClasses}
                    appear={true}>

                    <span className='node-hover'>
                        <i className='fas fa-search' onClick={() => this.searchNode(val)} />
                        <span className='search'>
                            <svg className='circle' xmlns='http://www.w3.org/2000/svg'>
                                <circle className='circle node-hover-circle' r='24' cx='25' cy='25' fill='none' />
                            </svg>
                        </span>

                        <i className='fas fa-trash' onClick={() => this.deleteNode(val)} />
                        <span className='trash'>
                            <svg className='circle' xmlns='http://www.w3.org/2000/svg'>
                                <circle className='circle node-hover-circle' r='24' cx='25' cy='25' fill='none' />
                            </svg>
                        </span>
                    </span>

                </CSSTransition>
            </>
        );
    }
    
    getConnectingLine(node, pos) {
        if (pos === 'left' || pos === 'right') {
            return (
                <>
                    <CSSTransition
                        in={node.animations['initial']['line']['active']}
                        timeout={node.animations['initial']['line']['delay']}
                        classNames={this.visibleClasses}
                        appear={true}>

                        <svg className='line node-line' xmlns='http://www.w3.org/2000/svg'>

                            {this.getLine(pos, 'initial')}

                            <CSSTransition
                                in={node.animations['visited']['line']['active']}
                                timeout={node.animations['visited']['line']['delay']}
                                classNames={this.visibleClasses}
                                appear={true}>

                                {this.getLine(pos, 'visited')}

                            </CSSTransition>

                            <CSSTransition
                                in={node.animations['success']['line']['active']}
                                timeout={node.animations['success']['line']['delay']}
                                classNames={this.visibleClasses}
                                appear={true}>

                                {this.getLine(pos, 'success')}

                            </CSSTransition>

                            <CSSTransition
                                in={node.animations['removed']['line']['active']}
                                timeout={node.animations['removed']['line']['delay']}
                                classNames={this.visibleClasses}
                                appear={true}>

                                {this.getLine(pos, 'removed')}

                            </CSSTransition>

                        </svg>

                    </CSSTransition>
                </>
            );
        }
        else {
            return null;
        }
    }

    getLine(pos, addClass) {
        const classes = ['line', addClass].join(' ');

        if (pos === 'left')
            return ( <line className={classes} x1='0' y1='50' x2='100%' y2='0' /> );
        else if (pos === 'right')
            return ( <line className={classes} x1='0' y1='0' x2='100%' y2='50' /> );
        else
            return null;
    }

    /* Handle operation step animations */

    InitialTree() {
        this.removeValue = null;
        this.targetValue = null;
        this.targetNode = null;
        this.timeout = 0;
        this.input = false;
        this.tooltipsStep = this.initialStateOperation;
        this.waiting = false;

        this.setHideTraversalAnimations();
        this.setHideMoveAnimations();

        setTimeout(function() {
            if ( document.querySelector('.moved') ) {
                document.querySelector('.moved').classList.remove('moved');
            }
        }, 100);
    }

    GenerateTree() {
        this.tooltipsStep = this.initialStateOperation;

        switch( this.operationSteps[ this.state.operation ][ this.state.step ] ) {
            case 'Reset':
                if (this.root) {
                    this.setHideAnimations();
                    this.timeout = 1000;
                }
                else {
                    this.timeout = 0;
                }
                break;
            case 'Generate':
                this.reset();
                this.insertNumElements(15);
                this.setGenerationAnimations();
                this.timeout = 0;
                break;
            default:
                this.InitialTree();
                break;
        }
    }
    
    ResetTree() {
        this.tooltipsStep = this.initialStateOperation;

        switch( this.operationSteps[ this.state.operation ][ this.state.step ] ) {
            case 'Hide':
                if (this.root) {
                    this.setHideAnimations();
                    this.timeout = 1000;
                }
                else {
                    this.timeout = 0;
                }
                break;
            case 'Reset':
                this.reset();
                this.timeout = 0;
                break;
            default:
                this.InitialTree();
                break;
        }
    }
    
    InsertInTree(val) {
        this.tooltipsStep = this.initialStateOperation;

        switch( this.operationSteps[ this.state.operation ][ this.state.step ] ) {
            case 'Input':
                this.input = true;
                break;
            case 'Insert':
                if ( this.targetValue ) {
                    if ( ! this.contains(this.targetValue) ) {
                        this.root = this.insert(this.targetValue);
                        this.timeout = this.setInsertAnimations();
                        this.tooltipsStep = 'Insert';
                    }
                    else {
                        this.targetValue = null;
                        this.errorMessage['message'] = 'Error: Tree already contains element';
                        this.errorMessage['key'] = new Date().getTime();
                    }
                }
                break;
            case 'Complete':
                if ( this.targetValue ) {
                    this.setInsertionCompleteAnimations();
                    this.timeout = 5000;
                    this.tooltipsStep = 'Insert 2';
                }
                break;
            default:
                this.InitialTree();
                break;
        }
    }
    
    RemoveFromTree() {
        this.tooltipsStep = this.initialStateOperation;

        switch( this.operationSteps[ this.state.operation ][ this.state.step ] ) {
            case 'Input':
                if ( this.root ) {
                    this.input = true;
                }
                else {
                    this.errorMessage['message'] = 'Error: Tree is empty';
                    this.errorMessage['key'] = new Date().getTime();
                }
                break;
            case 'Remove 1':
                if ( this.targetValue ) {
                    if ( this.contains(this.targetValue) ) {
                        this.timeout = this.setRemoveAnimations() + 3000;
                        this.tooltipsStep = 'Remove 1';
                    }
                    else {
                        this.targetValue = null;
                        this.errorMessage['message'] = 'Error: Tree does not contain target element';
                        this.errorMessage['key'] = new Date().getTime(); 
                    }
                }
                break;
            case 'Remove 2':
                if ( this.targetValue ) {
                    this.tooltipsStep = 'Remove 2';
                    this.timeout = this.setMoveSubtreeAnimations() + 3000;
                }
                break;
            case 'Remove 3':
                if ( this.targetValue && this.targetNode ) {
                    this.tooltipsStep = 'Remove 3';
                    this.timeout = this.setRemoveAnimations() + 3000;
                }
                else {
                    this.timeout = 0;
                }
                break;
            case 'Remove 4':
                if ( this.targetValue && this.targetNode ) {
                    this.tooltipsStep = 'Remove 4';
                    this.timeout = this.setMoveSubtreeAnimations() + 3000;
                }
                else {
                    this.timeout = 0;
                }
                break;
            case 'Complete':
                if ( this.targetValue ) {
                    this.root = this.remove(this.removeValue);
                    this.setHideMoveAnimations();
                    this.setHideTraversalAnimations();
                    document.querySelector('.node-wrapper[node-value="' + this.targetValue + '"]').classList.add('moved');
                    this.timeout = 0;
                }
                break;
            case 'test':
                this.InitialTree();
                this.timeout = 100000;
                console.log('test');
                break;
            default:
                this.InitialTree();
                break;
        }
    }
    
    SearchTree() {
        this.tooltipsStep = this.initialStateOperation;

        switch( this.operationSteps[ this.state.operation ][ this.state.step ] ) {
            case 'Input':
                if ( this.root ) {
                    this.input = true;
                }
                else {
                    this.errorMessage['message'] = 'Error: Tree is empty';
                    this.errorMessage['key'] = new Date().getTime();
                }
                break;
            case 'Search':
                if ( this.targetValue ) {
                    this.timeout = this.setSearchAnimations() + 7000;
                    this.tooltipsStep = 'Search';

                    if ( ! this.contains(this.targetValue) ) {
                        let _this = this;
                        setTimeout(function() {
                            _this.errorMessage['message'] = 'Tree does not contain target element';
                            _this.errorMessage['key'] = new Date().getTime();
                            _this.forceUpdate();
                        }, _this.timeout - 6000);
                    }
                }
                break;
            default:
                this.InitialTree();
                break;
        }
    }

    TraverseTree() {
        this.tooltipsStep = this.initialStateOperation;
        
        if ( this.root ) {
            this.tooltipsStep = this.state.operation;

            switch( this.state.operation ) {
                case 'Pre-Order':
                case 'In-Order':
                case 'Post-Order':
                    this.timeout = this.setDFSTraversalAnimations( this.state.operation ) + 5000;
                    break;
                case 'Level Order':
                    this.timeout = this.setBFSTraversalAnimations() + 5000;
                    break;
                default:
                    this.InitialTree();
                    break;
            }
        }
        else {
            this.errorMessage['message'] = 'Error: Tree is empty';
            this.errorMessage['key'] = new Date().getTime();
        }
    }

    /* Node hover operations and input dialog */

    receiveInput(val) {
        this.targetValue = val;
        this.input = false;

        if ( this.state.operation === 'Remove' ){
            this.deleteNode(val);
        }
        else {
            this.setState({ step: this.state.step + 1 });
        }
    }

    searchNode(val) {
        this.targetValue = val;
        this.setState({ operation: 'Search', step: 1 });
    }

    deleteNode(val) {
        this.targetValue = val;
        this.removeValue = val;
        this.targetNode = this.root;
        this.setState({ operation: 'Remove', step: 1 });
    }

    /* Set animations for nodes for given operation step */

    setGenerationAnimations() {
        let queue = new Queue();
        queue.push(this.root);

        let delay = 150;

        while ( ! queue.empty() ) {
            let node = queue.front();

            if (node) {
                queue.push(node.left);
                queue.push(node.right);

                for (let key in node.animations['initial']) {
                    node.animations['initial'][key]['active'] = true;
                    node.animations['initial'][key]['delay'] = delay;
                }
                
                delay += 200;
            }
        }
    }

    setHideAnimations(node = this.root) {
        if (node === null) return;

        for (let state in node.animations) {
            for (let element in node.animations[state]) {
                node.animations[state][element]['active'] = false;
                node.animations[state][element]['delay'] = 150;
            }
        }

        this.setHideAnimations(node.left);
        this.setHideAnimations(node.right);
    }

    setHideTraversalAnimations(node = this.root) {
        if (node === null) return;

        for (let state in node.animations) {
            for (let element in node.animations[state]) {
                if (state === 'initial') {
                    node.animations[state][element]['active'] = true;
                    node.animations[state][element]['delay'] = 0;
                }
                else {
                    node.animations[state][element]['active'] = false;
                    node.animations[state][element]['delay'] = 150;
                }
            }
        }

        this.setHideTraversalAnimations(node.left);
        this.setHideTraversalAnimations(node.right);
    }

    setHideMoveAnimations(node = this.root) {
        if (node === null) return;

        node.moveAnimations['active'] = false;
        node.moveAnimations['delay'] = 0;
        node.moveAnimations['css'] = {
            entering: {},
            entered:  {},
            exiting:  {},
            exited:   {}
        };

        this.setHideMoveAnimations(node.left);
        this.setHideMoveAnimations(node.right);
    }

    setDFSTraversalAnimations(order, node = this.root, delay = 150) {
        if (node === null) return delay;

        let _delay = node === this.root ? delay : delay + 1000;

        node.animations['visited']['node']['active'] = true;
        node.animations['visited']['node']['delay'] = _delay + 500;
        node.animations['visited']['line']['active'] = true;
        node.animations['visited']['line']['delay'] = _delay;

        if (order === 'Pre-Order') {
            _delay += 1000;
            node.animations['success']['node']['active'] = true;
            node.animations['success']['node']['delay'] = _delay;
        }

        _delay = this.setDFSTraversalAnimations(order, node.left, _delay);

        if (order === 'In-Order') {
            _delay += 1000;
            node.animations['success']['node']['active'] = true;
            node.animations['success']['node']['delay'] = _delay;
        }

        _delay = this.setDFSTraversalAnimations(order, node.right, _delay);

        if (order === 'Post-Order') {
            _delay += 1000;
            node.animations['success']['node']['active'] = true;
            node.animations['success']['node']['delay'] = _delay;
        }

        node.animations['success']['line']['active'] = true;
        node.animations['success']['line']['delay'] = _delay;

        return _delay;
    }

    setBFSTraversalAnimations() {
        let queue = new Queue();

        let delay = 150;

        if (this.root) {
            queue.push(this.root);

            this.root.animations['visited']['node']['active'] = true;
            this.root.animations['visited']['node']['delay'] = delay;
        }

        while ( ! queue.empty() ) {
            let node = queue.front();

            if (node) {
                if (node.left) {
                    queue.push(node.left);

                    delay += 1000;
                    for (let element in node.left.animations['visited']) {
                        node.left.animations['visited'][element]['active'] = true;
                        node.left.animations['visited'][element]['delay'] = delay;
                    }
                }

                if (node.right) {
                    queue.push(node.right);

                    delay += 1000;
                    for (let element in node.right.animations['visited']) {
                        node.right.animations['visited'][element]['active'] = true;
                        node.right.animations['visited'][element]['delay'] = delay;
                    }
                }
                
                delay += 1000;
                for (let element in node.animations['success']) {
                    node.animations['success'][element]['active'] = true;
                    node.animations['success'][element]['delay'] = delay;
                }
            }
        }

        return delay;
    }

    setSearchAnimations(node = this.root, delay = 150) {
        if ( ! this.targetValue || ! node ) return delay;
        else {
            let _delay = delay;

            if (this.targetValue === node.value) {
                node.animations['success']['node']['active'] = true;
                node.animations['success']['node']['delay'] = delay + 1250;
            }
            else if (this.targetValue < node.value)
                _delay = this.setSearchAnimations(node.left, delay + 1000);
            else
                _delay = this.setSearchAnimations(node.right, delay + 1000);
                
            node.animations['visited']['node']['active'] = true;
            node.animations['visited']['node']['delay'] = delay + 500;
            node.animations['visited']['line']['active'] = true;
            node.animations['visited']['line']['delay'] = delay;

            return _delay;
        }
    }

    setInsertAnimations(node = this.root, delay = 150) {
        if ( ! this.targetValue || ! node ) return delay;
        else {
            let _delay = delay;

            if (this.targetValue === node.value) {
                this.targetNode = node;
                return _delay;
            }
            else if (this.targetValue < node.value)
                _delay = this.setInsertAnimations(node.left, delay + 1000);
            else
                _delay = this.setInsertAnimations(node.right, delay + 1000);
                
            node.animations['visited']['node']['active'] = true;
            node.animations['visited']['node']['delay'] = delay + 500;
            node.animations['visited']['line']['active'] = true;
            node.animations['visited']['line']['delay'] = delay;

            return _delay;
        }
    }

    setInsertionCompleteAnimations() {
        let node = this.targetNode;

        if ( node ) {
            node.animations['initial']['node']['active'] = true;
            node.animations['initial']['node']['delay'] = 650;
            node.animations['initial']['line']['active'] = true;
            node.animations['initial']['line']['delay'] = 150;
            node.animations['success']['node']['active'] = true;
            node.animations['success']['node']['delay'] = 1250;
        }
    }

    setRemoveAnimations(node = this.targetNode, delay = 150) {
        if ( ! this.targetValue || ! node ) return delay;
        else {    
            node.animations['visited']['node']['active'] = true;
            node.animations['visited']['node']['delay'] = delay + 500;
            node.animations['visited']['line']['active'] = true;
            node.animations['visited']['line']['delay'] = delay;

            if (this.targetValue === node.value) {
                node.animations['success']['node']['active'] = false;
                node.animations['success']['node']['delay'] = delay;
                node.animations['success']['line']['active'] = false;
                node.animations['success']['line']['delay'] = delay;

                node.animations['removed']['node']['active'] = true;
                node.animations['removed']['node']['delay'] = delay + 1500;
                node.animations['removed']['line']['active'] = true;
                node.animations['removed']['line']['delay'] = delay + 1000;

                node.animations['initial']['node']['active'] = false;
                node.animations['initial']['node']['delay'] = delay + 1500;
                node.animations['initial']['line']['active'] = false;
                node.animations['initial']['line']['delay'] = delay + 1500;

                this.targetNode = node;
            }
            else if (this.targetValue < node.value)
                return this.setRemoveAnimations(node.left, delay + 1000);
            else
                return this.setRemoveAnimations(node.right, delay + 1000);

            return delay;
        }
    }

    setMoveSubtreeAnimations() {
        let node = this.targetNode;
        let _delay = 0;

        if ( node ) {
            if ( node.left === null || node.right === null ) {
                node.animations['initial']['line']['active'] = true;
                node.animations['initial']['line']['delay'] = 3000;
    
                node.animations['visited']['node']['active'] = false;
                node.animations['visited']['node']['delay'] = 150;
                node.animations['visited']['line']['active'] = false;
                node.animations['visited']['line']['delay'] = 150;
    
                node.animations['removed']['node']['active'] = false;
                node.animations['removed']['node']['delay'] = 150;
                node.animations['removed']['line']['active'] = false;
                node.animations['removed']['line']['delay'] = 150;
    
                node.animations['success']['line']['active'] = true;
                node.animations['success']['line']['delay'] = 3500;

                if ( node.left === null && node.right === null ) {
                    node.animations['initial']['line']['active'] = false;
                    node.animations['initial']['line']['delay'] = 0;

                    node.animations['success']['line']['active'] = false;
                    node.animations['success']['line']['delay'] = 0;

                    if (
                        ( document.querySelectorAll('.node-wrapper[node-height="1"]').length === 1 ) && 
                        ( parseInt(document.querySelector('.node-wrapper[node-height="1"]').attributes['node-value'].value) === node.value )
                    ) {
                        this.root.moveAnimations['active'] = true;
                        this.root.moveAnimations['delay'] = 1000;
                        this.root.moveAnimations['css']['entering'] = {
                            'width': document.querySelector('.root').offsetWidth + 'px'
                        };
                        this.root.moveAnimations['css']['entered'] = {
                            'width': document.querySelector('.root').offsetWidth / 2 + 'px'
                        };
                    }
                }
                else {
                    if ( node.left === null ) {
                        node.right.animations['initial']['line']['active'] = false;
                        node.right.animations['initial']['line']['delay'] = 150;
                        
                        node.right.moveAnimations['active'] = true;
                        node.right.moveAnimations['delay'] = 1000;
                        node.right.moveAnimations['css']['entered'] = {
                            'width': '100%',
                            'zIndex': '1000',
                            'transform': 'translate(-50%, -50px)'
                        };
                        
                        _delay = this.setMoveSubtreeCompleteAnimations(node.right);
                    }
                    else if ( node.right === null ) {
                        node.left.animations['initial']['line']['active'] = false;
                        node.left.animations['initial']['line']['delay'] = 150;
                        
                        node.left.moveAnimations['active'] = true;
                        node.left.moveAnimations['delay'] = 1000;
                        node.left.moveAnimations['css']['entered'] = {
                            'width': '100%',
                            'zIndex': '1000',
                            'transform': 'translate(0, -50px)'
                        };
        
                        _delay = this.setMoveSubtreeCompleteAnimations(node.left);
                    }

                    if (
                        document.querySelectorAll('.node-wrapper[node-value="' + node.value + '"] .node-wrapper[node-height="1"]').length
                        === document.querySelectorAll('.node-wrapper[node-height="1"]').length
                    ) {
                        this.root.moveAnimations['active'] = true;
                        this.root.moveAnimations['delay'] = 1000;
                        this.root.moveAnimations['css']['entering'] = {
                            'width': document.querySelector('.root').offsetWidth + 'px'
                        };
                        this.root.moveAnimations['css']['entered'] = {
                            'width': document.querySelector('.root').offsetWidth / 2 + 'px'
                        };
                    }
                    
                    this.targetValue = node.value;
                }

                this.targetNode = null;
            }
            else {
                let delay = this.setInOrderSuccessorAnimations(node.right);

                delay += 1000;

                node.animations['visited']['node']['active'] = false;
                node.animations['visited']['node']['delay'] = delay;
                node.animations['visited']['line']['active'] = false;
                node.animations['visited']['line']['delay'] = delay;

                node.animations['removed']['node']['active'] = false;
                node.animations['removed']['node']['delay'] = delay;
                node.animations['removed']['line']['active'] = false;
                node.animations['removed']['line']['delay'] = delay;

                delay += 1000;

                node.animations['initial']['node']['active'] = true;
                node.animations['initial']['node']['delay'] = delay;
                node.animations['initial']['line']['active'] = true;
                node.animations['initial']['line']['delay'] = delay + 500;

                delay += 1000;

                node.animations['success']['node']['active'] = true;
                node.animations['success']['node']['delay'] = delay + 500;
                node.animations['success']['line']['active'] = true;
                node.animations['success']['line']['delay'] = delay;

                _delay = delay;
            }
        }

        return _delay;
    }

    setMoveSubtreeCompleteAnimations(node, delay = 4000, first = true) {
        let _delay = delay;

        if (node) {
            if (first) {
                node.animations['success']['node']['active'] = true;
                node.animations['success']['node']['delay'] = delay;
            }
            else {
                node.animations['success']['node']['active'] = true;
                node.animations['success']['node']['delay'] = delay;
                node.animations['success']['line']['active'] = true;
                node.animations['success']['line']['delay'] = delay;
            }

            _delay = Math.max(
                this.setMoveSubtreeCompleteAnimations(node.left, delay + 300, false), 
                this.setMoveSubtreeCompleteAnimations(node.right, delay + 300, false)
            );
        }

        return _delay;
    }

    setInOrderSuccessorAnimations(node, delay = 150) {
        node.animations['visited']['node']['active'] = true;
        node.animations['visited']['node']['delay'] = delay + 500;
        node.animations['visited']['line']['active'] = true;
        node.animations['visited']['line']['delay'] = delay;

        if ( node.left ) {
            return this.setInOrderSuccessorAnimations(node.left, delay + 1000);
        }
        else {
            node.animations['success']['node']['active'] = true;
            node.animations['success']['node']['delay'] = delay + 1500;
            node.animations['success']['line']['active'] = true;
            node.animations['success']['line']['delay'] = delay + 1000;

            document.querySelector('.node-wrapper[node-value="' + this.targetValue + '"]>.node-value .node-value-text').textContent = node.value;

            this.targetNode = node;
            this.targetValue = node.value;

            return delay + 1500;
        }
    }
}