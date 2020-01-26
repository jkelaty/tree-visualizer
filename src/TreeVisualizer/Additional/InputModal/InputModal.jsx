import React from 'react'

import './InputModal.scss'

export default class InputModal extends React.Component {
    constructor(props) {
        super(props);
        
        this.value = null;

        this.state = {
            active: this.props.active,
            operation: this.props.operation,
            callback: this.props.callback
        }

        this.updateInputValue = this.updateInputValue.bind(this);
        this.confirm = this.confirm.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    updateInputValue(e) {
        this.value = parseInt( e.target.value );
    }

    confirm() {
        this.state.callback(this.value);
    }

    cancel() {
        this.state.callback(null);
    }

    render() {
        console.log(this.state.active);
        if ( this.state.active ) {
            return (
                <>
                    <div id='prompt-container'>

                        <div id='input-container'>
                            <div id='input-message'>Please select element:</div>

                            <input id='input-number' onChange={this.updateInputValue} type='number' step='1' />

                            <button
                                id='input-confirm'
                                className='input-prompt-button'
                                onClick={this.confirm}>
                                    
                                { this.state.operation }    

                            </button>

                            <button
                                id='input-cancel'
                                className='input-prompt-button'
                                onClick={this.cancel}>
                                    
                                Cancel
                            </button>
                        </div>

                        <div id='prompt-background' onClick={this.cancel} />

                    </div>
                </>
            );
        }
        else {
            return null;
        }
    }
}