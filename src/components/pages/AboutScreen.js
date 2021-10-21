import React from 'react'

import { Footer } from '../share/Footer';
import { Header } from '../share/Header';
import { TitleBlock } from '../blocks/TitleBlock';

export const AboutScreen = () => {
  return (
    <>
      <Header dark={true} />
      <main className="main" id="main">
        <TitleBlock title="Nosotros" className="col"/>
        <div className="content row">
        </div>
      </main>
      <Footer />
    </>
  );
}
