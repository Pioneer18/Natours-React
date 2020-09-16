import React from 'react'
import logo from '../../Images/logo-white.png'
import '../../sass/Components/_logo.scss'

const Logo = props => (
    <React.Fragment>
        {/*  An image should have a block level container, which can be more easily placed where it needs to be */}
        <div className="header__logo-box">
            <img src={logo} alt="Logo" className="header__logo"></img>
        </div>
    </React.Fragment>
);

export default Logo;