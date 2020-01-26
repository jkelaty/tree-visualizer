import React from 'react'
import{ CSSTransition } from 'react-transition-group'

import './Tooltips.scss';

export default class Tooltips extends React.Component {
    constructor(props) {
        super(props);

        this.initialStateOperation = 'Initial';

        this.visibleClasses = {
            appearDone: 'visible',
            enterDone: 'visible',
            exit: 'visible'
        };

        this.hiddenClasses = {
            appearActive: 'hiding',
            enterActive: 'hiding',
            appearDone: 'hidden',
            enterDone: 'hidden'
        };

        this.operationSteps = this.props.operationSteps;
        this.next = this.props.next;

        this.state = {
            active: this.props.active,
            timeout: this.props.timeout,
            operation: {
                current: this.props.operation,
                previous: this.props.operation
            }
        };
    }

    static getDerivedStateFromProps(newProps, state) {
        if ( (state.active !== newProps.active) || (state.operation.current !== newProps.operation) ) {
            return {
                active: newProps.active,
                timeout: newProps.timeout,
                operation: {
                    current: newProps.operation,
                    previous: state.operation.current
                }
            };
        }
        else {
            return null;
        }
    }

    getContent() {
        return null;
    }

    getPreviousTooltips() {
        return (
            <>
                <CSSTransition
                    in={this.state.operation.current !== this.state.operation.previous}
                    timeout={500}
                    classNames={this.hiddenClasses}
                    appear={true}
                    key={this.state.operation.previous}>

                    <div className='prev-tooltips'>
                        { this.getContent(this.state.operation.previous) }
                    </div>

                </CSSTransition>
            </>
        );
    }

    getCurrentTooltips() {
        return (
            <>
                <CSSTransition
                    in={this.state.operation.current !== this.state.operation.previous}
                    timeout={500}
                    classNames={this.visibleClasses}
                    appear={true}
                    key={this.state.operation.current}>

                    <div className='curr-tooltips'>
                        { this.getContent(this.state.operation.current) }
                    </div>

                </CSSTransition>
            </>
        );
    }

    getNextButton() {
        return (
            <>
                <CSSTransition
                    in={this.state.operation.current !== this.initialStateOperation}
                    timeout={this.state.timeout}
                    classNames={this.visibleClasses}
                    appear={true}
                    key={this.state.operation.current}>

                    <a
                        className='tooltips-next'
                        href='# '
                        onClick={this.next}>
                        Next step
                        <i className="fas fa-arrow-right" />
                        <div className='next-underline' />
                    </a>

                </CSSTransition>
            </>
        );
    }

    render() {
        return (
            <>
                <CSSTransition
                    in={this.state.active}
                    timeout={0}
                    classNames={this.visibleClasses}
                    appear={true}>

                    <div id='tooltips'>
                        { this.getPreviousTooltips() }
                        { this.getCurrentTooltips() }
                        { this.getNextButton() }
                    </div>

                </CSSTransition>
            </>
        );
    }
}