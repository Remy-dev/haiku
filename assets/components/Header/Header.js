import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import './Header.module.scss';


const Button = () => (

        <button type="button" className="navBar__btn">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </button>
);

const NavBar = () => (
    <div className="header__navBar">

        <NavLink to="/haikus/all" activeClassName="active" className="header__navBar-link">Accueil</NavLink>
        <NavLink to="/haikus/meshaikus" className="header__navBar-link">Mes Haïkus</NavLink>
        <NavLink to="/haikus/rose" className="header__navbar-link">Rose</NavLink>
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
        let buttonClickEvent = document.getElementsByClassName(".navBar__btn") ? document.getElementsByClassName(".navBar__btn") : null;
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
        { this.state.isPhoneViewport && buttonClickEvent.addEventListener("click", this.displayMenu) }

    }

    updatePredicate = () => {

        this.setState({
            isPhoneViewport: window.innerWidth <= 375
        });
    }

    componentWillUnmount() {
        let buttonClickEvent = document.getElementsByClassName(".navBar__btn") && document.getElementsByClassName(".navBar__btn");
        window.removeEventListener("resize", this.updatePredicate);
        { this.state.isPhoneViewport && buttonClickEvent.addEventListener("click", this.displayMenu) }
    }

    displayMenu = () => {
        console.log('click', this.state.isToggleOn);
        this.setState( state => {
            !state.isToggleOn
        })

    }


    render() {
        const { homepage } = this.props;

        return (

            <div className="header">
                <h1>{homepage.title}</h1>

                    { this.state.isPhoneViewport ? (
                        <Button onClick={ this.displayMenu } >
                            { this.state.isToggleOn ? (
                                <NavBar />
                            ) : null}
                        </Button>
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
