import React, { Component } from 'react';
import {Haiku} from "./Haiku";
import './HaikuList.module.scss';

export default class HaikuList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { haikus } = this.props;
        console.log('render haiku list ', haikus);
        return (
            <>
                <h4 className="haikus__title">mes derniers haikus</h4>
                <ul className="haikus__list">
                    { haikus && haikus.map((haiku, index) => (

                        <Haiku key={ haiku.title + index } haiku={ haiku } />
                    ))}
                </ul>
            </>
        )
    }
}


