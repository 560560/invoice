import React, { useState} from 'react';
import {Button} from "react-bootstrap";

const Acoount = ({logout, avatar}) => {
    const [showLogout, setShowLogout] = useState(false)

    return (
        <>
            <img src={avatar} alt="avatar"  onClick={() => setShowLogout(!showLogout)} />
            {showLogout && <Button variant="light" className="logout__button" onClick={logout}>Logout</Button>}
        </>
    );
}

export default Acoount;