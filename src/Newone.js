import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import famous from './Part1';


export default function Newone() {
  return (
    <Container>
      {famous.map((pla) => (
        <div key={pla.id} className='my-5'>
          <Row className='places'>
            <Col sm={6} className='light'>
              <h5>{pla.heading}</h5>
              <p>{pla.description1}</p>
              <p>{pla.description2}</p>
              <p>{pla.description3}</p>
              <p className='fit'>{pla.description4}</p>
            </Col>
            <Col sm={6}>
              <div className='imggs-main'>
                <img src={require(`./images/${pla.image}`)} className='double' alt={pla.name} />
              </div>
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
}
