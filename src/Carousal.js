import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {  Container } from 'react-bootstrap';
import caro1  from './images/banner.1.jpg';
import caro2 from './images/pic1.jpeg';
import caro3 from './images/pic2.jpeg';
import caro4 from './images/pic3.jpeg';
import caro5 from './images/pic4.jpeg';


const imageStyle = {
    width: '100%',
    height: '600px',
  };
  
  const itemStyle = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };


function Carousal() {
  return (
    <div className='section1'>
        <div className="volt">
        <Container>

        <Carousel>
      <Carousel.Item interval={1000}  style={itemStyle} >
      <img src={caro1} alt="Carousel 1" style={imageStyle}/>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} style={itemStyle} >
      <img src={caro2} alt="Carousel 1" style={imageStyle}/>
      
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={itemStyle} >
      <img src={caro3} alt="Carousel 1" style={imageStyle}/>
       
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item   style={itemStyle} >
      <img src={caro4} alt="Carousel 1" style={imageStyle} />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item >
      
      <Carousel.Item interval={1000}   style={itemStyle} >
      <img src={caro5} alt="Carousel 1"style={imageStyle} />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>


        </div>

    </div>
  )
}

export default Carousal;