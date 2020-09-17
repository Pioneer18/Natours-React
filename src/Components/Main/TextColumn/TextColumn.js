import React from 'react';

const TextColumn = props => (
    < >
        <h3 className="heading-tertiary" style={{ marginBottom: '1.5rem' }}>{props.heading1}</h3>
        <p className="paragraph">
            {props.paragraph1}
        </p>

<h3 className="heading-tertiary" style={{ marginBottom: '1.5rem' }}>{props.heading2}</h3>
        <p className="paragraph">
            {props.paragraph2}
        </p>
    </ >
);

export default TextColumn;