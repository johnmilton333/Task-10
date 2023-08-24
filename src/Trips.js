import React from 'react';
import { Col, Container, Row, Button, Card } from 'react-bootstrap';
import location from './Collections'; // Removed '.js' extension as it's not needed

export default function Places() {
    return (
        <div>
            <Container>
                {location.map((pla) => (
                    <div key={pla.id} className='my-5'>
                        <h1 id={pla.title}>{pla.name}</h1>
                        <Row className='places'>
                            <Col sm={6}>
                                <div className='imggs-main'>
                                    <img src={require(`./images/${pla.image}`)} className='imggs-main' alt={pla.name} />
                                </div>
                            </Col>
                            <Col sm={6} className='light'>
                                <h5>{pla.heading}</h5>
                                <p>{pla.description1}</p>
                                <p>{pla.description2}</p>
                            </Col>
                        </Row>
                        <h3 className='text-center my-5 pt-5'>Must Visit Places in {pla.title}</h3>
                        <Row>
                            <div className='place-visit-list mb-3'>
                                {Object.keys(pla).map((key, index) => {
                                    if (key.startsWith('visit')) {
                                        const visit = pla[key];
                                        return (
                                            <div key={key}>
                                                {index === 0 && <h1>Must Visit Places: {visit['vis-name']}</h1>}
                                                <Card style={{ width: '18rem'}}>

                                                    <Card.Img variant="top" src={require(`./images/${visit['vis-img']}`)} />
                                                    <Card.Body>
                                                        <Card.Title>{visit['vis-name']}</Card.Title>
                                                        <Card.Text>{visit['vis-des']}</Card.Text>
                                                        <Button variant="primary">Read More</Button>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        </Row>
                    </div>
                ))}
            </Container>
        </div>
    );
}

