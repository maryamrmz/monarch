import React from 'react';

import "./menu.styles.scss";

export const Menu = (props) => (
    <div className="top-row">
        <div className="right-row">
            {props.items.map(item => (
                <a href="#" title={item.name} className={item.class}>
                    <img src={item.src} />
                </a>
            ))}
        </div>
    </div>
)

