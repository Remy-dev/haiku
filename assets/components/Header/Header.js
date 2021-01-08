import React from 'react';
import './Header.module.scss'
import {Link} from "react-router-dom";

const Header = ({ homepage }) => {
    return (
        <>
            { homepage && homepage.map( (h, i) => (
                <div className="header">
                    <h1>{ h.title }</h1>
                    <h3>{ h.subTitle }</h3>
                    <div className="navBar">
                        <Link to="/haikus/all" className="navBar__button">Accueil</Link>
                        <Link to="/haikus/meshaikus" className="navBar__button">Mes Haïkus</Link>
                        <Link to="/haikus/rose" className="navBar__button">Rose</Link>
                    </div>
                    <hr className="separator" />
                </div>
            ))}
        </>

    )

}










export default Header;
