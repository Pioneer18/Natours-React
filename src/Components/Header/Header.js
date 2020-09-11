import React from 'react'
import './Header.css'
import logo from '../../Images/logo-white.png'

const Header = props => (
    <React.Fragment>
        <header className="header">
            {/*  An image should have a block level container, which can be more easily placed where it needs to be */}
            <div className="logo-box">
                <img src={logo} alt="Logo" className="logo"></img>
            </div>

            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main">Outdoors</span>
                    <span className="heading-primary-sub">is where life happens</span>
                </h1>

                {/* This a tag is inlin-block and position relative: for it's child pseudo element */}
                <a href="#" className="btn btn-white btn-animated">Discover our tours</a>
            </div>

        </header>
    </React.Fragment>
);

export default Header;