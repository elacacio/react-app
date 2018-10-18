import React from 'react';

export const DivContainer = (props) => (
    <div className="container">
        <div className={'row'} role={'main'}>
            {props.children}
        </div>
    </div>
);