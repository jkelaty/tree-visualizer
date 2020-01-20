import React from 'react';

import './Tooltips.scss';

export default class Tooltips extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: this.props.active,
            operation: this.props.operation,
            step: this.props.step
        };
    }

    static getDerivedStateFromProps(newProps, state) {
        if ( state.active !== newProps.active ) {
            return { active: newProps.active };
        }
        else {
            return null;
        }
    }

    render() {
        if( this.state.active ) {
            return (
                <>
                    <div id="tooltips">
                        <div>Tooltips active</div>
                        <div>{this.state.operation} : {this.state.step}</div>
                        <button onClick={this.props.next}>Next</button>
                    </div>
                </>
            );
        }
        else {
            return null;
        }
    }
}