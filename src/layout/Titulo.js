import React from "react";
import Carousel from 'react-bootstrap/Carousel';

export const Titulo = () => {
  return (
    <React.Fragment>
        <div className="divSlider carousel-inner fondo-titulo">
        <Carousel id="carouselExampleSlidesOnly">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/INICIO_slider1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="tituloSlider">Sportclub</h1>
          <p>Disfruta de nuestras instalaciones</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/INICIO_slider2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 className="tituloSlider">Sportclub</h1>
          <p>Disfruta de nuestras instalaciones</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/INICIO_slider3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className="tituloSlider">Sportclub</h1>
          <p>Disfruta de nuestras instalaciones</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </React.Fragment>
  );
};
