import React, { useContext } from 'react';
import { About } from "./About";
import { CallToAction } from "./CallToAction";
import { ServicesTemplate } from "./ServicesTemplate";
import { Facilities } from "./Facilities";
import { Footer } from "./Footer";
import { HeaderCarousel } from "./HeaderCarousel";

export const IndexTemplate = () => {

  return (
    //Plantilla de la home con los componentes necesarios.
    <React.Fragment>
      <HeaderCarousel />
      <About />
      <CallToAction />
      <Facilities />
      <ServicesTemplate />
      <Footer />
    </React.Fragment>
  )
}
