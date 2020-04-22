import React from "react";
import Menu from "../menu/menu.component";
import Logo from "../logo/logo.component";

import "./header.styles.scss";

function Header() {
    return (
        <div className='head'>
            <div className='head__logo'>
                <Logo />
            </div>
            <div className='head__menu'>
                <Menu />
            </div>
        </div>
    );
}

export default Header;
