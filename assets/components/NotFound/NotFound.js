import React from 'react'
import {NavLink} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not_found">
            <h1>Page Not Found</h1>
            <NavLink style={{textdecoration: 'none'}} to="/">
                <button type="button" className="not_found__button">
                    Homepage
                </button>
            </NavLink>
        </div>
    )
}

export default NotFound;
