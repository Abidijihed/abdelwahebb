import React from "react";
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
import "./Home.css"
import film5 from '../assets/lastfilm5.mp4'
import film4 from '../assets/lastfilm4.mp4'
import film3 from '../assets/lastfilm3.mp4'
import film2 from '../assets/lastfilm2.mp4'
export function Home() {

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('http://cinematunisien.com/wp-content/uploads/2022/01/Abdelwaheb-Bouden-11.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12" id="realisateur">
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
                Mon cinéma est d’inspiration philosophique, esthétique et écologique.



              </Typography>

            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <br /><br /> <br /><br />

          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <Typography
                variant="h2"
                color="blue-gray"
                className="mb-6 font-black"

                fontWeight="300"
              >
                Mes films



              </Typography>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Le réveil de l’instinct
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Une jeune et belle femme s’arrête au bord d’une clairière donnant sur la mer. La vue du haut de la montagne l’émerveille. Elle passe un agréable moment à admirer la mer et le paysage environnant. Elle se régale de fruits et se repose par terre. Elle enlève par la suite ses vêtements, met ses deux pièces et quitte la clairière. Elle se baigne dans la mer. Quand elle regagne la clairière, elle est surprise de trouver un jeune homme avec qui elle discutera pendant longtemps. Alors qu’elle lui parle de nature, de beauté, d’amour et de liberté, il lui parle de son projet de construction d’un complexe touristique et beaucoup d’argent à gagner !
              </Typography>
              <Button>Edit</Button>
            </div>
            <div className="mx-auto mt-8 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                {/* <CardHeader className=""> */}
                <p style={{ textAlign: "center" ,color:"black" ,size:"12px"}}> Bandes annonce
                du quatrième film de <br/>Abdelwaheb Bouden
                </p>
                {/* </CardHeader> */}
                <CardBody>
                  <video width="320" height="240" controls>
                    <source src={film5} type="video/mp4" />
                  </video>

                </CardBody>
              </Card>

            </div>
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">

              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Quand la mer séduit la montagne
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Une jeune et belle femme passe une grande partie de la matinée à se baigner seule dans une mer calme, puis elle s’installe au sommet d’une montagne pour avoir une vue agréable sur la mer. Elle rencontre un jeune homme de passage. Ils s’attirent l’un vers l’autre sans qu’ils révèlent leurs sentiments, mais leurs projets de vie sont divergents. Quels choix vont-ils faire -chacun de son côté- après une longue discussion ?
              </Typography>
              <Button>Edit</Button>
            </div>
            <div className="mx-auto mt-8 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">

              <Card className="shadow-lg shadow-gray-500/10">
                {/* <CardHeader className=""> */}
                <p style={{ textAlign: "center" ,color:"black" ,size:"12px"}}> Bandes annonce
                du troisième film de <br/>Abdelwaheb Bouden
                </p>
                {/* </CardHeader> */}
                <CardBody>
                  <video width="320" height="240" controls>
                    <source src={film4} type="video/mp4" />
                  </video>

                </CardBody>
              </Card>
            </div>
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">

              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Ce réel qui m'échappe
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Une charmante femme fait une randonnée solitaire sur une plage déserte. Elle trouve un parasol et une canne à pêche installés au bord de l’eau. Elle se baigne puis elle s’allonge pour bronzer. Un jeune homme vient de loin et s’arrête prés de la canne à pêche et du parasol. Elle comprends qu’elle s’est installé dans son territoire  à lui. Que vont-ils faire, chacun de son coté, pour se faire séduire. Ils finissent par prendre un rendez-vous amoureux dans la cabane au coucher du soleil.              </Typography>
              <Button>Edit</Button>
            </div>
            <div className="mx-auto mt-8 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">

              <Card className="shadow-lg shadow-gray-500/10">
                {/* <CardHeader className=""> */}
                <p style={{ textAlign: "center" ,color:"black" ,size:"12px"}}> Bandes annonce
                du deuxième film de <br/>Abdelwaheb Bouden
                </p>
                {/* </CardHeader> */}
                <CardBody>
                  <video width="320" height="240" controls>
                    <source src={film3} type="video/mp4" />
                  </video>

                </CardBody>
              </Card>
            </div>
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">

              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                La mer aussi aime le blues
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
              Un jeune homme fait la pêche pour le plaisir. Il passe une matinée sur une plage déserte et ensoleillée dans le calme et la sérénité sans pouvoir pêcher de poissons. Une belle et jeune femme arrive seule. Ils sympathisent et passent la journée ensemble a s’amuser et à jouer. Mais à la fin de la journée, la jeune femme semble choisir une suite personnelle à cette belle aventure amoureuse.
               </Typography>
              <Button>Edit</Button>
            </div>
            <div className="mx-auto mt-8 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">

              <Card className="shadow-lg shadow-gray-500/10">
                {/* <CardHeader className=""> */}
                <p style={{ textAlign: "center" ,color:"black" ,size:"12px"}}> Bandes annonce
                du premier film de <br/>Abdelwaheb Bouden
                </p>
                {/* </CardHeader> */}
                <CardBody>
                  <video width="320" height="240" controls>
                    <source src={film2} type="video/mp4" />
                  </video>

                </CardBody>
              </Card>
            </div>
          </div>

        </div>
      </section>

      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
        <PageTitle heading="Mon cinéma">
           
          </PageTitle><br />
          <PageTitle heading="Conception et Style" id="consetpion">
          Mon cinéma est d’inspiration philosophique,<br/> esthétique et écologique.

          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
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
