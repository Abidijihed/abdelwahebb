import React, { useEffect, useState } from "react";
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
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import "./Home.css";
import film5 from "../assets/lastfilm5.mp4";
import film4 from "../assets/lastfilm4.mp4";
import film3 from "../assets/lastfilm3.mp4";
import film2 from "../assets/lastfilm2.mp4";
import Carousel from "./carousel";
import AddnewPost from "./addpost";
import AddanewPostText from "./addnewtext"
import Ubdate from './ubdate'
import axios from "axios";
export function Home() {
  const [data, setData] = useState([]);
  const [datatext,setDatatext]=useState([])
  var token=localStorage.getItem("token")
  const getdata=()=>{
    axios.get("https://abdelwahebbouden.com/api/get/allpostText").then((res) => {
      setDatatext(res.data);
    });
    
  }
  useEffect(() => {
    axios.get("https://abdelwahebbouden.com/api/get/allpost").then((res) => {
      setData(res.data);
    });
    getdata()
  }, []);
  const deletepost=(id)=>{
    axios.delete("https://abdelwahebbouden.com/api/get/deletePstText/"+id).then((res)=>{
      if (res.data === "post deleted") {
        window.location.href = "https://abdelwahebbouden.com/";
      }
    });
  }
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('http://cinematunisien.com/wp-content/uploads/2022/01/Abdelwaheb-Bouden-11.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div
              className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12"
              id="realisateur"
            >
              <Typography
                variant="h2"
                color="white"
                className="mb-6 font-black"
                fontFamily="Segoe Script !important"
                fontWeight="600"
              >
                Réalisateur
              </Typography>

              <Typography
                variant="h5"
                color="white"
                className="mb-6 font-black"
                fontWeight="400"
              >
                Mon cinéma est d’inspiration philosophique, esthétique et
                écologique.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <br />
          <br />
          <br />
          <br />
          <br />
          <Typography
            id="mesfilm"
            variant="h2"
            color="blue-gray"
            className="mb-6 font-black"
            fontWeight="300"
          >
            Mes films
          </Typography>
          <div className="mt-32 flex flex-wrap items-center">
            {data.map((el) => {
              return (
                <>
                  <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
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
                  </div>
                  <div className="mx-auto mt-8 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                    <Card className="shadow-lg shadow-gray-500/10">
                      <p
                        style={{
                          textAlign: "center",
                          color: "black",
                          size: "12px",
                        }}
                      >
                        {`Bande annonce du ${el.numberr} film de`} <br />
                        Abdelwaheb Bouden
                      </p>

                      <CardBody>
                        <video width="320" height="240" controls>
                          <source src={el.video} type="video/mp4" />
                        </video>
                      </CardBody>
                    </Card>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      {token.length > 0 ? <AddnewPost /> : null}

      <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
        <Typography variant="h2" className="mb-3 font-bold" color="blue-gray">
          Nature, beauté, amour et liberté
        </Typography>
      </div>
      <Carousel />
      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Mon cinéma"></PageTitle>
          <br />
          <PageTitle heading="Conception et Style" id="consetpion">
            Mon cinéma est d’inspiration philosophique,
            <br /> esthétique et écologique.
          </PageTitle>
          <br />
          <br />
          {datatext.map((el) => {
            return (
              <>
                <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                  <Typography
                    variant="h1"
                    className="mb-3 font-bold"
                    color="blue-gray"
                    id="naturetitle"
                  >
                    {el.bigTitle}
                  </Typography>
                  <br />
                  <Typography
                    variant="h3"
                    className="mb-3 font-bold"
                    color="blue-gray"
                    id="titlenatur"
                  >
                    {el.title}
                  </Typography>
                  <Typography className="mb-8 font-normal text-blue-gray-500">
                    {el.content}
                  </Typography>
                </div>
                {token.length > 0 ? <Ubdate post={el} /> : null}
                {token.length > 0 ? (
                  <Button
                    variant="primary"
                    onClick={() => deletepost(el.id)}
                    id="postbutton2"
                  >
                    delete
                  </Button>
                ) : null}
              </>
            );
          })}

          <br />
          <br />
          {token.length > 0 ? <AddanewPostText /> : null}

          <br />
          <br />
          <PageTitle heading="Want to contact us?">
            Complete this form and we will get back to you .
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Full Name" />
              <Input variant="standard" size="lg" label="Email Address" />
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={8} />
            <Button variant="gradient" size="lg" className="mt-8">
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
