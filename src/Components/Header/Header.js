/**
 * Large Header holds the Logo and TitleBox
 * Green linear Gradient cover with nature background image
 * Animated Headings and button
 */

import React from 'react'
import '../../sass/Components/_header.scss'
import Logo from '../Logo';
import TitleBox from '../TitleBox';

const Header = props => (
    <React.Fragment>
        <header className="header">
            <Logo></Logo>
            <TitleBox></TitleBox>
        </header>
    </React.Fragment>
);

export default Header;