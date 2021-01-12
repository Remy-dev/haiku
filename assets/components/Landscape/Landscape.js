import React from 'react';
import LandscapeImage from '../../assets/images/fisherman-2739115_1280.jpg';
import './Landscape.module.scss';

const Landscape = ({ homepage }) => {
      return (
        <div className="landscape">
              <h2 className="landscape__title">Mon blog pour partager ma passion des haïkus</h2>
                <hr className="landscape__separator"/>
              <p className="landscape__presentation">{ homepage.presentation }</p>
        </div>
      )
}

export default Landscape;
