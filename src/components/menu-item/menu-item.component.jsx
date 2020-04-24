import React from "react";

import { Size, SmallContainer } from "./menu-item.styles";

export const MenuItem = ({ name, className, src, badge }) => (
    <Size to='/menu' title={name} name={className}>
        <img src={src} alt='' />
        <SmallContainer src={badge} alt='' />
    </Size>
);
