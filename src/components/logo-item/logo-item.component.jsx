import React from "react";
import { Link } from "react-router-dom";

import { Logo } from "./logo-item.styles";

export const LogoItem = ({ name, className, src, span, p, img }) => (
    <Logo name={className}>
        <Link to='/' className="left" title={name}>
            <img src={src} alt='' />
            <div className='text'>
                {p && <p>{p}</p>}
                <span>{span}</span>
            </div>
        </Link>
        <Link to='#' className="right">
            <img src={img} alt='' />
        </Link>
    </Logo>
);
