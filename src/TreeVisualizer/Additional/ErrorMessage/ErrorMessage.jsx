import React from 'react'

import './ErrorMessage.scss'

export default function ErrorMessage(props) {
    return (
        <>
            {props.message ?
                <div id="error-message">
                    <p>{props.message}</p>
                </div>
            : null}
        </>
    );
}