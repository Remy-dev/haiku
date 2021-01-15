import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.module.scss';

export const Footer = () => (

        <div className="footer">
            <div className="footer__link">
                <Link to="/whoAmI" className="footer__link">Qui suis-je</Link>
                <Link to="/contact" className="footer__link">Contact</Link>
            </div>

            <div className="footer__copyright">
                <span>Copyright &copy; Véronique Manchon - auteur du blog</span>
            </div>
        </div>

)
