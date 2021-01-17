import React, { Component } from 'react';

import Landscape from "../Landscape/Landscape";
import HaikuList from "../../features/haikus/components/HaikuList";
import NotFound from "../NotFound/NotFound";
import ContactForm from "../Form/ContactForm";

import './Main.module.scss';
import {Redirect, Route, Switch} from "react-router-dom";

class Main extends Component {
   constructor(props){
       super(props)
   }

   render(){
       const { homepage , haikus } = this.props
       return (
                <Switch>
                    <Route exact path="/haikus/homepage" render={ () => (
                        <div className="main">
                            <Landscape homepage={ homepage } />
                            <HaikuList haikus={ haikus } />
                        </div>
                    )} />
                    <Route exact path="/haikus/all">
                        <div className="compendium">

                        </div>
                    </Route>
                    <Route exact path="/contact"  render={ () => (
                        <div className="main">
                            <ContactForm />
                        </div>
                    )}/>
                    <Redirect from="/" to="/haikus/homepage" />
                    <Route component={NotFound} />
                </Switch>



       )
   }
}

export default Main;
