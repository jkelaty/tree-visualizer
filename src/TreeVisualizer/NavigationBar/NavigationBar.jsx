import React from 'react';

import getHeaderLogo from '../Additional/headerLogo.jsx'

import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import './NavigationBar.scss';

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.visualizer = this.props.visualizer;
        
        this.trees = {
            BST : {
                name : 'Binary Search Tree',
                operations : [
                    'Insert',
                    'Remove',
                    'Search',
                    'Traversals'
                ]
            },
            AVL : {
                name : 'AVL Tree',
                operations : [
                    'Insert',
                    'Remove',
                    'Search'
                ]
            },
            RBT : {
                name : 'Red-Black Tree',
                operations : [
                    'Insert',
                    'Remove',
                    'Search'
                ]
            },
            BHP : {
                name : 'Binary Heap',
                operations : [
                    'Insert',
                    'Top'
                ]
            },
        };

        this.traversals = [
            'Pre-Order',
            'In-Order',
            'Post-Order',
            'Level Order'
        ];

        this.state = {
            active_tree: this.visualizer.state.menu_key
        };
    }

    static getDerivedStateFromProps(newProps, state) {
        if ( state.active_tree !== newProps.visualizer.state.menu_key ) {
            return { active_tree: newProps.visualizer.state.menu_key };
        }
        else {
            return null;
        }
    }

    render() {
        return (
            <>
                <div id='navbar-wrapper'>

                    <div className='navbar-logo'>
                        <a href='/tree-visualizer'>
                            { getHeaderLogo() }
                        </a>
                    </div>
                    
                    <div id='tree-dropdown' className='dropdown'>
                        <a
                            className='dropdown-toggle'
                            href='# '>
                            { this.state.active_tree ? this.trees[ this.state.active_tree ][ 'name' ] : 'Select..' }
                            <i className='fa fa-caret-down'></i>
                        </a>

                        <ul className='dropdown-menu'>
                            {Object.keys(this.trees).map((key, idx) => (
                                <li className='dropdown-menu-option' key={idx}>
                                    <a
                                        href='# '
                                        onClick={() => this.visualizer.changeTree(key)}>
                                        {this.trees[ key ][ 'name' ]}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    { this.state.active_tree && (
                        <>
                            <div id='operations-dropdown' className='dropdown'>
                                <a
                                    className='dropdown-toggle'
                                    href='# '>
                                    Operations
                                    <i className='fa fa-caret-down' />
                                </a>

                                <ul className='dropdown-menu'>
                                    {this.trees[ this.state.active_tree ][ 'operations' ].map((operation, op_idx) => (

                                        (operation === 'Traversals') ? (
                                            <li id='traversals-submenu' className='dropdown-menu-option submenu' key={op_idx}>
                                                <a
                                                    className='submenu-toggle'
                                                    href='# '>
                                                    {operation}
                                                    <i className='fa fa-caret-down' />
                                                </a>

                                                <ul className='dropdown-menu submenu-dropdown'>
                                                    {this.traversals.map((traversal, tr_idx) => (
                                                        <li className='dropdown-menu-option' key={tr_idx}>
                                                            <a
                                                                href='# '
                                                                onClick={() => this.visualizer.performOperation(traversal)}>
                                                                {traversal}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ) : (
                                            <li className='dropdown-menu-option' key={op_idx}>
                                                <a
                                                    href='# '
                                                    onClick={() => this.visualizer.performOperation(operation)}>
                                                    {operation}
                                                </a>
                                            </li>
                                        )

                                    ))}
                                </ul>
                            </div>
                        
                            <div id='generate-tree' className='navbar-button'>
                                <button
                                    onClick={() => this.visualizer.performOperation('Generate')}>
                                    Generate
                                </button>
                            </div>

                            <div id='reset-tree' className='navbar-button'>
                                <button
                                    onClick={() => this.visualizer.performOperation('Reset')}>
                                    Reset
                                </button>
                            </div>

                            <div id='tooltips-toggle'>
                                <span className='tooltips-text'>Tooltips:</span>
                                <label className='switch'>
                                    <input type='checkbox' onClick={this.visualizer.toggleTooltips} />
                                    <span className='slider round' />
                                </label>
                            </div>

                            <div id="about-information">
                                <div className="info-icon-wrapper">
                                    <i className="fas fa-info" />
                                </div>

                                <div className="about-dialogue">
                                    <p>Project repository can be found <a href='https://github.com/jkelaty/tree-visualizer' target='_blank' rel="noopener noreferrer">here</a>
                                    </p>
                                    <p>Created by Jonathan Kelaty</p>
                                </div>
                            </div>
                        </>
                    )}

                </div>
            </>
        );
    }
}