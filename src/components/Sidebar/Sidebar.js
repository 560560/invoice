import React from 'react';
import {Link} from "react-router-dom";
import Acoount from "./acoount";
import * as MdIcons from 'react-icons/md'



const Sidebar = ({avatar, logout, isAuth}) => {
    return (
        <div className="col-xl-2 col-lg-0 col-md-0 col-sm-0 col-0">
        <div className="sidebar col-2 min">

            <div className="header">
                <div className="avatar">
                    {isAuth && <Acoount logout={logout} avatar={avatar}/>}
                </div>
            </div>
            <nav className="navigation">
                <Link to={"/terminals"} className="menu__bars"><MdIcons.MdBorderOuter/><span className="nav__description">Терминалы</span></Link>
                <Link to={"/buyers"} className="menu__bars"> <MdIcons.MdAccountCircle/><span className="nav__description">Клиенты</span></Link>
            </nav>
            <div className="footer">
                <span>Copyright © 2020</span>
            </div>
        </div>
        </div>
    );
}

export default Sidebar;