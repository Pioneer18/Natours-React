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