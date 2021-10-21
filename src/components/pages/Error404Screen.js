import React from 'react'

import logo404 from "../../assets/img/svg/404.svg";

import { Footer } from "../share/Footer";
import { Header } from "../share/Header";


export const Error404Screen = () => {

  return (
    <>
      <Header dark={true} />
      <main className="main" id="main">
        <div className="content row">
          <img className="img_responsive" src={logo404} alt="Página no encontrada" />
        </div>
      </main>
      <Footer />
    </>
  );
}
