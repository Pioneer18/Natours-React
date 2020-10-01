import React from 'react';

const Navigation = props => {

    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
            
            <label htmlFor="navi-toggle" className="navigation__button">MENU</label>
            
            <div className="navigation__background">&nbsp;</div> {/* &nbsp; is to indicate 'white space' or 'empty' */}
            
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