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
import Updatecasting from "./uppdatecasting"
import axios from 'axios';
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { CLOSING } from 'ws';
export function ControlledCarousel() {
  var token=localStorage.getItem("token")

  const [casting,setCasting]=useState([])

  useEffect(()=>{
  axios.get('https://abdelwahebbouden.com/api/get/casting/post').then((res)=>{
    setCasting(res.data)
  })
  },[])
  const deletecasting=(id)=>{
   axios.delete('https://abdelwahebbouden.com/api/delete/casting/'+id).then((res)=>{
   if (res.data === "post deleted") {
     window.location.href = "https://abdelwahebbouden.com/";
   }
   })
  }
  return (
    <Container>
  {  casting.map((el)=>{
    return (
      <>
        <Row id="origincol">
          <Col>
            {el.created_at.slice(0,10)}
            {el.imagee ? <img src={el.imagee} /> : null}
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
                <video width="400" height="400" controls>
                  <source src={el.video} type="video/mp4" />
                </video>
              </Col>
            </Row>
          </Col>
          <Row id="mybuttons">
            <Col xs={3} md={3}></Col>
            <Col xs={3} md={3}></Col>
            <Col xs={3} md={3}>
              {token !== null ? (
                <Button
                  variant="primary"
                  onClick={() => deletecasting(el.id)}
                  id="postbutton2"
                >
                  Supprimer
                </Button>
              ) : null}
            </Col>
            <Col xs={3} md={3}>
              {token !== null ? (
                <Updatecasting post={el} id="postbutton3" />
              ) : null}
            </Col>
          </Row>
        </Row>
      </>
    );
  })  }
      {token !== null ? <AddnewCasting /> : null}
    </Container>
  );
}

export default ControlledCarousel;
