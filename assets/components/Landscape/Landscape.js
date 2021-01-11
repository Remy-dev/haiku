import React from 'react';
import LandscapeImage from '../../assets/images/fisherman-2739115_1280.jpg';
import './Landscape.module.scss';

const Landscape = ({ homepage }) => {
      return (
        <div className="landscape">
              <img className="landscape__photo" width="30%" height="auto" src={LandscapeImage} alt="image/fisherman" />
              <p className="landscape__presentation">{ homepage.presentation }</p>
        </div>
      )
}

export default Landscape;
