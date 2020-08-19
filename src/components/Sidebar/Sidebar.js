import React from 'react';
import {Link} from "react-router-dom";
import Acoount from "./acoount";


const Sidebar = ({avatar, logout}) => {
    return (
        <div className="sidebar">
            <div className="header">
                <div className="avatar">
                    <Acoount logout={logout} avatar={avatar}/>
                </div>
            </div>
            <nav className="navigation">
                <Link to={"/terminals"} className="menu__bars">Терминалы</Link>
                <Link to={"/buyers"} className="menu__bars">Клиенты</Link>
            </nav>

        </div>
    );
}

export default Sidebar;