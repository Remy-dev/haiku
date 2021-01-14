import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import './Header.module.scss';


const Button = ({ onClick, isToggleOn }) => (
    <>
        <button onClick={() => onClick() } type="button" className="navBar__btn">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </button>
        { isToggleOn && <NavBar /> }
    </>


);

const NavBar = () => (
    <div className="header__navBar">
        <NavLink to="/haikus/homepage" activeClassName="active" className="header__navBar--link">Accueil</NavLink>
        <NavLink to="/haikus/all" className="header__navBar--link">Haïkus</NavLink>
        <NavLink to="/haikus/prose" className="header__navBar--link">Prose</NavLink>
    </div>
)

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            isToggleOn: false,
            isPhoneViewport: false,
        }

    }
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);

    }

    updatePredicate = () => {

        this.setState({
            isPhoneViewport: window.innerWidth <= 375
        });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    displayMenu = () => {
        const { isToggleOn } = this.state;

        this.setState({
            isToggleOn: !isToggleOn
        })

    }


    render() {
        const { homepage } = this.props;

        return (

            <div className="header">
                <h1>{homepage.title}</h1>

                    { this.state.isPhoneViewport ? (
                        <Button onClick={ this.displayMenu } isToggleOn={ this.state.isToggleOn } />
                    ) : (
                        <NavBar  />
                    )}



                <div className="header__searchBar">
                    <input type="text" name="search" placeholder="rechercher un haikus"/>
                    <button className="searchBar__btn">search</button>

                </div>
            </div>


        )
    }

}










export default Header;
