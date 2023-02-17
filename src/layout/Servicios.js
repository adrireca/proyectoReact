import React from "react";

export const Servicios = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="divServicios container px-4 py-5" id="featured-3">
          <h2 className="pb-2 border-bottom">Servicios</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="feature col">
              <h3 className="fs-2">Clase de tenis</h3>
              <p>
                Pistas de tenis de tierra batida, dura y de césped.
              </p>
            </div>
            <div className="feature col">
              <h3 className="fs-2">Clase de pádel</h3>
              <p>
                Pistas de pádel modernas.
              </p>
            </div>
            <div className="feature col">
              <h3 className="fs-2">Clases de fútbol</h3>
              <p>
                Campo de fútbol de césped natural.
              </p>
            </div>
            <div className="feature col">
              <h3 className="fs-2">Restauración</h3>
              <p>
              Disfruta de dos bares cafeterías abiertos todo el año.
              </p>
            </div>
            <div className="feature col">
              <h3 className="fs-2">Parking privado</h3>
              <p>
              Aparcamiento privado para 150 vehículos.
              </p>
            </div>
            <div className="feature col">
              <h3 className="fs-2">Zonas de ocio</h3>
              <p>
                Zonas verdes y de ocio para pasar el día con toda tu familia y amigos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
