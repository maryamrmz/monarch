import React from "react";
import Menu from "../menu/menu.component";
import Logo from "../logo/logo.component";

import "./header.styles.scss";

function Header() {
    return (
        <div className='head'>
            <Logo />
            <Menu />
        </div>
    );
}

export default Header;
