import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.module.scss';

const Header = ({ homepage }) => {
    return (

            <div className="header">
                <h1>{ homepage.title }</h1>
                <div className="header__navBar">
                    <NavLink to="/haikus/all" activeClassName="active" className="header__navBar-link">Accueil</NavLink>
                    <NavLink to="/haikus/meshaikus" className="header__navBar-link">
                       Mes Haïkus
                    </NavLink>
                    <NavLink to="/haikus/rose" className="header__navbar-link">Rose</NavLink>
                </div>
            </div>



    )

}










export default Header;
