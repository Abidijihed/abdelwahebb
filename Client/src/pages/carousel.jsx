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
export function ControlledCarousel() {
  var token=localStorage.getItem("token")

  const [casting,setCasting]=useState([])
  const [imagecasting, setImagecasting] = useState([]);
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

  //  <Col xs={3} md={3}>
  //                   xs=12 md=8
  //                 </Col>
  //                 <Col xs={3} md={3}>
  //                   xs=6 md=3
  //                 </Col>
  return (
    <Container>
      <Row >
        <Col>hello</Col>
        {casting.map((el) => {
          return (
            <>
              <Col>
                <Row id="origincol">
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
                <Row id="mybuttons">
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
              </Col>
            </>
          );
        })}
      
      </Row>

      {token !== null ? <AddnewCasting /> : null}
    </Container>
  );
}

export default ControlledCarousel;
