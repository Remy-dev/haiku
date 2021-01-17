
import React, { Component, Suspense } from 'react';
import ReactDom from 'react-dom';

import Header from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import Main from './components/Main/Main';

import './base.module.scss';

import {BrowserRouter as Router} from "react-router-dom";
import apiPgsql from "./config/apiPgsql";




class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            haikus: [],
            homepage: {},
            loading: false
        }
    }
    componentDidMount() {
        this.loadingHaikus();
        this.setState({
            loading: false
        });

        this.loadingHomepage();

    }

    loadingHaikus() {

        apiPgsql.get('/api/homepage/haikus/list')
            .then ( res => {
                    this.setState({
                        haikus: res.data,
                        loading: true
                    })},
                error => console.log(error))
    }

    loadingHomepage() {
        console.log('hello');
        apiPgsql.get('/api/homepage')
            .then( res => {
                this.setState({
                    homepage: res.data[0],
                    loading: true
                })
                console.log(res.data[0])},
                error => console.log(error))
    }

    render() {
        const { haikus, homepage } = this.state
        return (
            <Suspense fallback={<h1>Loading...</h1>}>
                    <Header homepage={ homepage }/>
                    <Main homepage={ homepage } haikus={ haikus } />
                    <Footer />
            </Suspense>

        )
    }
}



ReactDom.render(
        <Router>
            <App />
        </Router>
    ,
    document.getElementById('root')
);
