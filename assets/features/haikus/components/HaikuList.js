import React, { Component } from 'react';
import { Haiku } from "./Haiku";
import './HaikuList.module.scss';

export default class HaikuList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { haikus } = this.props;


        return(
               <div className="haikusList">
                   <div className="haikusList__title">
                       Mes derniers haïkus
                   </div>
                   <hr className="haikusList__separator"/>
                   { haikus && haikus.map((h, i) => (
                       <Haiku key={ h.title + i } haiku={ h } />
                   ))}
               </div>

        )
    }
}



