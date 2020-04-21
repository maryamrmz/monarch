import React from "react";
import { Link } from "react-router-dom";

import "./cart-list.styles.scss";

export const CartList = ({ className, name, src, img }) => {
    return (
        <li className={className} title={name}>
            <Link to='/'>
                <img src={src} alt='' />
                <span>{name}</span>
            </Link>
            {img && (
                <Link to='#'>
                    <img src={img} alt='' />
                </Link>
            )}
        </li>
    );
};
