import React from 'react';
import './Haiku.module.scss'

export const Haiku = ({ haiku }) => (
        <div className="haiku">
            <h4 className="haiku__title">{ haiku.title }</h4>
            <hr className="separator"/>
            <p className="haiku__content">{ haiku.content }</p>
        </div>
)


