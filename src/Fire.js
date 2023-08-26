import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import boxes from './Volts';

export default function Fire() {
  return (
    <Container>
      {boxes.map((pla) => (
        <div key={pla.id} className='my-5'>
              <h3 className='text-center my-5 pt-5 '>{pla.title}</h3>
          <h3 className='text-center start2'>Tourist Place Visit</h3>
          <Row >
            <Col sm={2}>
              <div className='imggs-main'>
                <img src={require(`./images/${pla.image1}`)} className='triple' alt={pla.name} />
              </div>
            </Col>
            <Col sm={10} className="tight">
              <h5>{pla.heading1}</h5>
              <p>{pla.description1}</p>
              <p className='vibe'>{pla.description2}</p>
            </Col>
          </Row>
          <Row>
            <Col sm={10} className="tight">
              <h5>{pla.heading2}</h5>
              <p>{pla.description3}</p>
              <p className='vibe'>{pla.description4}</p>
            </Col>
            <Col sm={2}>
              <div className='imggs-main'>
                <img src={require(`./images/${pla.image2}`)} className='triple' alt={pla.name} />
              </div>
            </Col>
          </Row>
          <Row>
          <Col sm={2}>
              <div className='imggs-main'>
                <img src={require(`./images/${pla.image3}`)} className='triple' alt={pla.name} />
              </div>
            </Col>
          <Col sm={10}className="tight">
              <h5 >{pla.heading3}</h5>
              <p>{pla.description5}</p>
              <p  className='vibe'>{pla.description6}</p>
            </Col>
          </Row>
          <Row>
          <Col sm={10}className="tight">
              <h5 >{pla.heading4}</h5>
              <p>{pla.description7}</p>
              <p className='vibe'>{pla.description8}</p>
            </Col>
          <Col sm={2}>
              <div className='imggs-main'>
                <img src={require(`./images/${pla.image4}`)} className='triple' alt={pla.name} />
              </div>
            </Col>
          </Row>

        </div>
      ))}
    </Container>
  );
}
