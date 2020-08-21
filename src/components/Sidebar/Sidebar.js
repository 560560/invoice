import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Acoount from "./acoount";
import * as MdIcons from 'react-icons/md'


const Sidebar = ({avatar, clearSPALoginData, isAuth}) => {
    const [showMenu, setShowMenu] = useState(false)

const showHiddenMenu= (status) => {
    setShowMenu(status)
}

    return (
        <>
            <div className="col-xl-2 col-1">
                <div className="sidebar col-2 min" style={showMenu ? {left: 0, minWidth:220, display: "flex"} : {}} onMouseLeave={() => {showHiddenMenu(false)}}>

                    <div className="header">
                        <div className="avatar">
                            {isAuth && <Acoount logout={clearSPALoginData} avatar={avatar}/>}
                        </div>
                    </div>
                    <nav className="navigation">
                        <Link to={"/terminals"} className="menu__bars"><MdIcons.MdBorderOuter/><span className="nav__description">Терминалы</span></Link>
                        <Link to={"/buyers"} className="menu__bars"> <MdIcons.MdAccountCircle/><span className="nav__description">Покупатели</span></Link>
                    </nav>
                    <div className="footer">
                        <span>Copyright © 2020</span>
                    </div>
                </div>

                <div className="sidebar-small"   style={showMenu ? {display:"none" } : {}}  onMouseEnter={() => {showHiddenMenu(true)}}>

                    <div className="header">
                        <div className="avatar">
                            {isAuth && <Acoount logout={clearSPALoginData} avatar={avatar}/>}
                        </div>
                    </div>
                    <nav className="navigation">
                        <Link to={"/terminals"} className="menu__bars"><MdIcons.MdBorderOuter/></Link>
                        <Link to={"/buyers"} className="menu__bars"> <MdIcons.MdAccountCircle/></Link>
                    </nav>
                    <div className="footer">
                        <span></span>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Sidebar;