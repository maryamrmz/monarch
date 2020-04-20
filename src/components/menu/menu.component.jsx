import React from "react";
import { Link } from "react-router-dom";

import "./menu.styles.scss";

export const Menu = ({ name, className, src, badge }) => (
    <Link to='#' title={name} className={className}>
        <img src={src} alt='' />
        <img src={badge} alt='' className='small' />
    </Link>
);
