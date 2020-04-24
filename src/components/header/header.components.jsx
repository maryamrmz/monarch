import React from "react";
import Menu from "../menu/menu.component";
import Logo from "../logo/logo.component";

import { HeaderContainer } from "./header.styles";

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <Menu />
        </HeaderContainer>
    );
}

export default Header;
