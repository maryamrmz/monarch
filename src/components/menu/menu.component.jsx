import React from "react";

import "./menu.styles.scss";

export const Menu = ({ name, className, src, badge }) => (
    <a href='#' title={name} className={className}>
        <img src={src} alt='' />
        <img src={badge} alt='' className='small' />
    </a>
);
