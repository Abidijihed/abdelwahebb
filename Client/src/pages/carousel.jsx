import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function ControlledCarousel() {
  return (
    <Container>
      <Row>
        <Col>
        <img src={image1}/>
        </Col>
        <Col>
        
        <Row>
        <Col sm={4}>sm=8</Col>
        <Col  sm={8}>sm=4</Col>
      </Row></Col>
      </Row>
    </Container>
  );
}

export default ControlledCarousel;
