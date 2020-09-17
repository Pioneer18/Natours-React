import React from 'react';
import '../../../sass/Components/_feature-box.scss'

const FeatureBox = props => (
    <>
        <div className="feature-box">
            {/** Linea Icon Font: <i /> is for icon font*/}
            <i className="feature-box__icon icon-basic-world"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
            <p className="feature-box__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, molestias iure tempore repellat porro cupiditate.
            </p>
        </div>
    </>
);

export default FeatureBox;
