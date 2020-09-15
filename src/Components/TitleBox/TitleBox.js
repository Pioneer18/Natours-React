import React from 'react';
import './TitleBox.scss';
import Button from '../Button';

const TitleBox = props => (
    <React.Fragment>
        <div className="header__title-box">
            {/* The default heading and sub heading */}
            <h1 className="heading-primary">
                <span className="heading-primary--main">Outdoors</span>
                <span className="heading-primary--sub">is where life happens</span>
            </h1>
            
            {/* A button component may be placed here */}
            <Button></Button>
        </div>

    </React.Fragment>
);

export default TitleBox;
