import React from 'react'
import { Link } from "react-router-dom";

export const FooterMenu = (props) => {
  return (
    <>
      <ul {...props}>
        <li role="menuitem" className="menu__item menu__item--about">
          <Link to="/nosotros">Nosotros</Link>
        </li>
        <li role="menuitem" className="menu__item menu__item--activities">
          <Link to="/actividades">Actividades</Link>
        </li>
        <li role="menuitem" className="menu__item menu__item--contact">
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </>
  );
};
