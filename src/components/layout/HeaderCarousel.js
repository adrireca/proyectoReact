import React from "react";
import Carousel from 'react-bootstrap/Carousel';

export const HeaderCarousel = () => {
  return (
    <React.Fragment>
      <div className="divSlider carousel-inner fondo-titulo">
        <Carousel id="carouselExampleSlidesOnly">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/carousel_familia_y_deporte.jpg"
              alt="Familia y ocio"
            />
            <Carousel.Caption>
              <h1 className="tituloSlider">Familia y ocio</h1>
              <p>Disfruta de nuestras instalaciones</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/carousel_tenis.jpg"
              alt="Tenis"
            />

            <Carousel.Caption>
              <h1 className="tituloSlider">Tenis</h1>
              <p>Disfruta de nuestras instalaciones</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/carousel_padel.jpg"
              alt="Pádel"
            />

            <Carousel.Caption>
              <h1 className="tituloSlider">Pádel</h1>
              <p>Disfruta de nuestras instalaciones</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/carousel_restauracion.jpg"
              alt="Restauración"
            />
            <Carousel.Caption>
              <h1 className="tituloSlider">Restauración</h1>
              <p>Disfruta de nuestras instalaciones</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/carousel_futbol.jpg"
              alt="Fútbol"
            />

            <Carousel.Caption>
              <h1 className="tituloSlider">Fútbol</h1>
              <p>Disfruta de nuestras instalaciones</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/carousel_gimnasio.jpg"
              alt="Gimnasio"
            />

            <Carousel.Caption>
              <h1 className="tituloSlider">Gimnasio</h1>
              <p>Disfruta de nuestras instalaciones</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </React.Fragment>
  );
};
