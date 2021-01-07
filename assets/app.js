import React, { Component, lazy, Suspense } from 'react';
import ReactDom from 'react-dom';

import Header from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import NotFound from "./components/NotFound/NotFound";

import Landscape from "./components/Landscape/Landscape";
import './app.module.scss';

import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";
import apiPgsql from "./config/apiMySql";


const LazyHaikuList = lazy(() => import('./features/haikus'))

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            haikus: [],
            homepage: [],
            loading: false
        }
    }
    componentDidMount() {
        this.loadingHomepage();
        this.setState({
            loading: false
        });
        this.loadingHaikus();


    }

    loadingHaikus() {

        apiPgsql.get('/haikus/list')
            .then ( res => {
                    this.setState({
                        haikus: res.data,
                        loading: true
                    })},
                error => console.log(error))
    }

    loadingHomepage() {
        apiPgsql.get('/homepage')
            .then( res => {
                this.setState({
                    homepage: res.data,
                    loading: true
                })},
                error => console.log(error))
    }

    render() {
        const { haikus, homepage } = this.state
        return (
            <>
                <Header homepage={ homepage }/>
                <Landscape homepage={ homepage } />
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Switch>

                        <Route exact path="/haikus/all" render={ () => (<LazyHaikuList haikus={ haikus } />)} />
                        <Redirect from="/" to="/haikus/all" />
                        <Route component={NotFound}/>
                    </Switch>

                </Suspense>
                <Footer />
            </>

        )
    }
}



ReactDom.render(
    <Router>
        <App />
    </Router> ,
    document.getElementById('root')
);
