import React from 'react';
import {Link} from "react-router-dom";
import Acoount from "./acoount";
import * as MdIcons from 'react-icons/md'
import {Container} from "react-bootstrap";


const Sidebar = ({avatar, logout, isAuth}) => {
    return (
        <div className="sidebar">
            <Container>
            <div className="header">
                <div className="avatar">
                    {isAuth && <Acoount logout={logout} avatar={avatar}/>}
                </div>
            </div>
            <nav className="navigation">
                <Link to={"/terminals"} className="menu__bars"><MdIcons.MdBorderOuter/>Терминалы</Link>
                <Link to={"/buyers"} className="menu__bars"> <MdIcons.MdAccountCircle/>Клиенты</Link>
            </nav>

            </Container>
            <div className="footer">
                <span>Copyright © 2020</span>
            </div>
        </div>
    );
}

export default Sidebar;