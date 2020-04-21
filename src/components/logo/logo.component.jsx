import React from "react";
import { Link } from "react-router-dom";

import "./logo.styles.scss";

export const Logo = ({ name, className, src, span, p, img }) => (
    <div className={className}>
        <Link to='/' className='left' title={name}>
            <img src={src} alt='' className='logo-image' />
            <div className='text'>
                {p && <p>{p}</p>}
                <span>{span}</span>
            </div>
        </Link>
        <Link to='#' className='right'>
            <img src={img} alt='' />
        </Link>
    </div>
);
