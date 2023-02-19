import React, { useState,useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddnewCasting from "./addnewcasting"
import axios from 'axios';
export function ControlledCarousel() {
  var token=localStorage.getItem("token")

  const [casting,setCasting]=useState([])
  useEffect(()=>{
  axios.get('"https://abdelwahebbouden.com/api/get/casting/post').then((res)=>{
    setCasting(res.data)
  })
  },[])
  return (
    <Container>
  {  casting.map((el)=>{
    return(
<Row>
        <Col>
          <img src={image1} />
        </Col>
        <Col>

          <Row>
            <Col sm={4}>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                {el.title}
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                {el.content}
              </Typography>
            </Col>
            <Col sm={8}>
              <video width="320" height="240" controls>
                <source src={el.video} type="video/mp4" />
              </video>
            </Col>
          
          </Row>
          </Col>
      </Row>
    )
  })  }
      {token !== null ? <AddnewCasting /> : null}
    </Container>
  );
}

export default ControlledCarousel;
