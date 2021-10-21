import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/img/svg/logo-ligth.svg";
import { FooterMenu } from '../navigation/FooterMenu';

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__top">
        <div className="footer__bottom-wrapper row">
          <div className="footer__top-left col-xs-12 col-sm-6">
            <Link role="link" title="MS App" className="footer__logo" to="/">
              <img src={logo} alt="MS App" />
            </Link>
          </div>
          <div className="footer__top-right col-xs-12 col-sm-6">
            <ul className="menu menu--networks">
              <li className="menu__item menu__item--facebook">
                <Link to="/nosotros"></Link>
              </li>
              <li className="menu__item menu__item--linkedin">
                <Link to="/actividades"></Link>
              </li>
              <li className="menu__item menu__item--twitter">
                <Link to="/contacto"></Link>
              </li>
              <li className="menu__item menu__item--instagram">
                <Link to="/contacto"></Link>
              </li>
              <li className="menu__item menu__item--youtube">
                <Link to="/contacto"></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom row">
        <nav role="navigation" className="footer__bottom-left col-xs-12 col-sm-3">
          <h4>SOBRE NOSOTROS</h4>
          <FooterMenu className="menu menu--main-footer" />
        </nav>
        <div className="footer__bottom-right col-xs-12 col-sm-9">
          <h4>ENCUÉNTRANOS</h4>
          <p>
            Avenida Costanera. <br /> Las colinas 1234, Costanera.
          </p>
          <a href="tel:+56912345678" title="Número de contacto">
            +56 9 1234 5678
          </a>
        </div>
      </div>
    </footer>
  );
}
