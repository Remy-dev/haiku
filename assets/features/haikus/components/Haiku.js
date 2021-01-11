import React from 'react';




export const Haiku = ({ haiku }) => {


    return (
       <div className="haiku">
           <h6>{ haiku.title }</h6>
           <p>{ haiku.content }</p>
       </div>
    );

}


