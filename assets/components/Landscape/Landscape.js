import React from 'react';
import LandscapeImage from '../../assets/images/fisherman-2739115_1280.jpg';
import './Landscape.module.scss';
const Landscape = ({ homepage }) => {
     console.log(homepage);
      return (
          <div className="landscape">
             <img src={LandscapeImage} alt="Smiley face" width="300px" height="300px" />
                 { homepage && homepage.map( (h, index) => (
                     <p className="landscape__presentation">
                         {h.presentation}
                     </p>
                 )) }

          </div>
      )
}

export default Landscape;
