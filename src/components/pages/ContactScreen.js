import React from "react";

import { Footer } from "../share/Footer";
import { Header } from "../share/Header";
import { TitleBlock } from "../blocks/TitleBlock";

export const ContactScreen = () => {
  return (
    <>
      <Header dark={true} />
      <main className="main" id="main">
        <TitleBlock title="Contactenos" className="col" />
        <div className="content row">
        </div>
      </main>
      <Footer />
    </>
  );
};
