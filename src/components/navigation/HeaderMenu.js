import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

export const HeaderMenu = ({ className }) => {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <button
        type="button"
        onClick={openMenu}
        className={`burgermenu ${open ? "burgermenu--open" : ""} hide-sm`}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul
        role="menu"
        className={`menu ${open ? "menu--open" : ""} ${className}`}
      >
        <li role="menuitem" className="menu__item menu__item--about">
          <NavLink activeClassName="link-active" to="/nosotros">
            Nosotros
          </NavLink>
        </li>
        <li role="menuitem" className="menu__item menu__item--activities">
          <NavLink activeClassName="link-active" to="/actividades">
            Actividades
          </NavLink>
        </li>
        <li role="menuitem" className="menu__item menu__item--contact">
          <NavLink activeClassName="link-active" to="/contactenos">
            Contacto
          </NavLink>
        </li>
      </ul>
    </>
  );
};
