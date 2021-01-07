import React, { Component } from 'react'
import HaikuList from "./components/HaikuList";
import {Route, Switch} from "react-router-dom";

class Haikus extends Component {
    constructor(props){
        super(props)
    }

   render() {
       const { haikus } = this.props
       return (
           <>
               <HaikuList haikus={ haikus } />
           </>
       )
   }
}

export default Haikus;
