import React from 'react';
import { Link } from "react-router-dom";

import logoLigth from '../../assets/img/svg/logo-ligth.svg';
import logoDark from "../../assets/img/svg/logo-dark.svg";
import { HeaderMenu } from '../navigation/HeaderMenu';

export const Header = ({dark}) => {
  let logo = dark ? logoDark : logoLigth;

  return (
    <header className={`header ${dark ? 'header--white' : 'header--transparent'}`} id="header">
      <div className="row header__wrapper">
        <div className="header__left col">
          <Link role="link" title="MS App" className="header__logo" to="/">
            <img src={logo} alt="MS App" />
          </Link>
        </div>
        <div className="header__right col">
          <nav role="navigation" className="header__menu">
            <HeaderMenu className="menu--main-header" />
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  dark: false,
};
