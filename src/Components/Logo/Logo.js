import React from 'react'
import logo from '../../Images/logo-white.png'
import './Logo.css'

const Logo = props => (
    <React.Fragment>
        {/*  An image should have a block level container, which can be more easily placed where it needs to be */}
        <div className="logo-box">
            <img src={logo} alt="Logo" className="logo"></img>
        </div>
    </React.Fragment>
);

export default Logo;