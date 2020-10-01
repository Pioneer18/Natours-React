import React from 'react';

const Navigation = props => {

    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
            
            {/* This is a round button for opening and closing the Navigation */}
            <label htmlFor="navi-toggle" className="navigation__button">MENU</label>
            
            {/* This background is displayed when the Navigation is opened */}
            <div className="navigation__background">&nbsp;</div> {/* &nbsp; is to indicate 'white space' or 'empty' */}
            
            {/* This Navigation is centered, fixed in the middle of the page */}
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#" className="navigation__link">About Natours</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Your benefits</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Popular tours</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Stories</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Book now</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;