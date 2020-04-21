import React from "react";
import { Link } from "react-router-dom";

import "./dashboard-item.styles.scss";

export const DashboardItem = ({
    dollar,
    percentColor,
    percent,
    text,
    src,
    footer,
    box,
    name,
    img,
}) => {
    return (
        <div className='boxes'>
            <div className='header'>
                <span className='dollar'>{dollar}</span>
                <span className={percentColor}>{percent}</span>
            </div>
            <div className='main'>
                <span className='text'>{text}</span>
            </div>
            <div className='content'>
                <img src={src} alt='' />
            </div>
            <div className='footer'>
                <Link to='/' className='text'>
                    {footer}
                </Link>
                <Link to='/' className={box} title={name}>
                    <img src={img} alt='' />
                </Link>
            </div>
        </div>
    );
};
