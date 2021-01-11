import React, { Component } from 'react';
import Landscape from "../Landscape/Landscape";
import HaikuList from "../../features/haikus/components/HaikuList";
import './Main.module.scss';

class Main extends Component {
   constructor(props){
       super(props)
   }

   render(){
       const { homepage , haikus } = this.props
       return (
           <div className="main">
              <Landscape homepage={ homepage }/>
              <HaikuList haikus={ haikus } />
           </div>
       )
   }
}

export default Main;
