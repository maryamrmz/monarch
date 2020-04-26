import React, { useState, useEffect } from "react";
import { LogoItem } from "../logo-item/logo-item.component";

import { HeaderLogoContainer } from "./logo.styles";

const Logo = () => {
    const [logo, setLogo] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((items) => setLogo(items.logoItems));
    }, [logo]);

    return (
        <HeaderLogoContainer>
            {logo.map(({ id, ...otherItemProps }) => (
                <LogoItem key={id} {...otherItemProps} />
            ))}
        </HeaderLogoContainer>
    );
};

export default Logo;
