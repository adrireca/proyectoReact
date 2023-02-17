import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const Instalaciones = () => {
  return (
    <React.Fragment>
        <div className='container divNuestrasInstalaciones'>
          <h1>Nuestras instalaciones</h1>
        <Row xs={1} md={3} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src="./img/wimbledon-pistas.jpg" />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="./img/padel1.jpg" />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="./img/futbol1.jpg" />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="./img/futbolSala1.jpg" />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="./img/piscina.jpg" />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="./img/zona_ocio.jpg" />
          </Card>
        </Col>
    </Row>
    </div>

    </React.Fragment>
  )
}
