import React from 'react';
import { SobreNosotros } from "../layout/SobreNosotros";
import { Heroe } from "../layout/Heroe";
import { Servicios } from "../layout/Servicios";
import { Instalaciones } from "../layout/Instalaciones";
import { Footer } from "../layout/Footer";

export const Inicio = () => {
  return (
    //Plantilla de la home con los componentes necesarios.
    <React.Fragment>
        <SobreNosotros/>
          <Heroe/>
          <Instalaciones/>
          <Servicios/>
          <Footer/>
    </React.Fragment>
  )
}
