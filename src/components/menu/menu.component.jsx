import React, { useState, useEffect } from "react";
import { MenuItem } from "../menu-item/menu-item.component";

import { HeaderMenuContainer } from "./menu.styles";

const Menu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((items) => setMenu(items.menuItems));
    }, [menu])

    return (
        <HeaderMenuContainer>
            {menu.map(({ id, ...otherItemProps }) => (
                <MenuItem key={id} {...otherItemProps} />
            ))}
        </HeaderMenuContainer>
    );
}


export default Menu;
