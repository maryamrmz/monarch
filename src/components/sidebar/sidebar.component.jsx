import React, { useState, useEffect } from "react";
import { SidebarList } from "../sidebar-list/sidebar-list.component";

const Sidebar = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((items) => setList(items.lists));
    }, [list]);

    return (
        <div>
            {list.map(({ id, ...otherItemProps }) => (
                <SidebarList key={id} {...otherItemProps} />
            ))}
        </div>
    );
};

export default Sidebar;
