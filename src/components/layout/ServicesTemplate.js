import { Container } from "@mui/material";
import React from "react";

export const ServicesTemplate = () => {

  return (
    <React.Fragment>

      <div className="wrapper">
        <Container className="divServicios container px-5 py-5">
        <h2 className="pb-2 border-bottom">Servicios</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="divServicio feature col">
              <img src="./img/tennis-3-svgrepo-com.svg" alt="Icono tenis" />
              <h3 className="fs-5 pt-3">Clases de tenis</h3>
              <p>
                Pistas de tenis de tierra batida, dura y de césped.
              </p>
            </div>
            <div className="divServicio feature col">
              <img src="./img/padel_sport_icon_141873.svg" alt="Icono padel" />
              <h3 className="fs-5 pt-3">Clases de pádel</h3>
              <p>
                Pistas de pádel modernas.
              </p>
            </div>
            <div className="divServicio feature col">
              <img src="./img/soccer-ball-svgrepo-com.svg" alt="Icono fútbol" />
              <h3 className="fs-5 pt-3">Clases de fútbol</h3>
              <p>
                Campo de fútbol de césped natural.
              </p>
            </div>
            <div className="divServicio feature col">
              <img src="./img/restaurant-svgrepo-com.svg" alt="Icono restauración" />
              <h3 className="fs-5 pt-3">Restauración</h3>
              <p>
                Disfruta de dos bares cafeterías abiertos todo el año.
              </p>
            </div>
            <div className="divServicio feature col">
              <img src="./img/gym-svgrepo-com.svg" alt="Icono parking" />
              <h3 className="fs-5 pt-3">Gimnasio</h3>
              <p>
                Completamente equipado para mantenerte en forma.
              </p>
            </div>
            <div className="divServicio feature col">
              <img src="./img/park-outdoors-tree-bench-svgrepo-com.svg" alt="Icono ocio" />
              <h3 className="fs-5 pt-3">Zonas de ocio</h3>
              <p>
                Zonas verdes y de ocio para pasar el día con toda tu familia y amigos.
              </p>
            </div>
          </div>
        </Container>
      </div>

    </React.Fragment>
  );
};
