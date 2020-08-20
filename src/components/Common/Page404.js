import React from 'react';
import img404 from "../../assets/images/img404.gif"

const Page404
= (props) => {
    return (
        <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
            <img src={img404} alt="404" width="50%"/>
            <h3>Страница не найдена</h3>
        </div>
    );
}

export default Page404;