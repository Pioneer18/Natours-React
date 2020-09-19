import React from 'react';
import '../../../../sass/Components/_feature-box.scss'

const FeatureBox = props => (
    <>
        <div className="feature-box">
            {/** Linea Icon Font: <i /> is for icon font*/}
            <i className={`feature-box__icon ${props.icon}`}></i>
            <h3 className="heading-tertiary u-margin-bottom-small">{props.header}</h3>
            <p className="feature-box__text">
                {props.text}
            </p>
        </div>
    </>
);

export default FeatureBox;
