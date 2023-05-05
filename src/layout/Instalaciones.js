import { Container } from '@mui/material';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const Instalaciones = () => {
  return (
    <React.Fragment>

      <Container className='divNuestrasInstalaciones'>
        <h2 className='mb-4 text-center'>Nuestras instalaciones</h2>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src="./img/pista_tenis.jpg" />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="./img/pista_padel.jpg" />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="./img/pista_futbol.jpg" />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="./img/pista_futbolSala.jpg" />
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
      </Container>

    </React.Fragment>
  )
}
