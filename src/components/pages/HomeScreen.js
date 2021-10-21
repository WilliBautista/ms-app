import React from 'react'

import { HeroSlider } from '../blocks/HeroSlider'
import { Footer } from '../share/Footer'
import { Header } from '../share/Header'

export const HomeScreen = () => {

  return (
    <>
      <Header />
      <main className="main" id="main">
        <HeroSlider />
      </main>
      <Footer />
    </>
  );
}
