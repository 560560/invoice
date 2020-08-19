import React, {useRef, useState} from 'react';
import {Overlay} from "react-bootstrap";

const Acoount = ({logout, avatar}) => {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    return (
        <>
            <img src={avatar} alt="avatar"  ref={target} onClick={() => setShow(!show)}/>
            <Overlay target={target.current} show={show} placement="bottom">
                {({placement, arrowProps, show: _show, popper, ...props}) => (
                    <div
                        {...props}
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.85)',
                            padding: '2px 10px',
                            color: 'black',
                            borderRadius: 3,
                            ...props.style,
                        }}
                        onClick={logout}
                    >
                        Logout
                    </div>
                )}
            </Overlay>
        </>
    );
}

export default Acoount;