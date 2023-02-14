import React,{useEffect,useState} from "react";
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
import Carousel from './carousel'
import AddnewPost from './addpost'
import axios from "axios";
export function Home() {
const [data,setData]=useState([])
useEffect(()=>{
axios.get('http://www.abdelwahebbouden.com/api/get/allpost').then((res)=>{
  setData(res.data)
})
},[])
  return (
    <>
    {console.log(data)}
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
           {data.map((el)=>{
            return(
              <div className="mycard">
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
              {/* <Button>Edit</Button> */}
            </div>
            <div className="mx-auto mt-8 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                {/* <CardHeader className=""> */}
                <p style={{ textAlign: "center", color: "black", size: "12px" }}> Bande annonce
                  du quatrième film de <br />Abdelwaheb Bouden
                </p>
                {/* </CardHeader> */}
                <CardBody>
                  <video width="320" height="240" controls>
                    <source src={el.video} type="video/mp4" />
                  </video>

                </CardBody>
              </Card>
              </div>
              </div>
            )
           }) }
            </div>
            </div>
</section>
       <AddnewPost/> 
      <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
            <Typography
              variant="h2"
              className="mb-3 font-bold"
              color="blue-gray"
             
            >
              Nature, beauté, amour et liberté
            </Typography>
            </div>
                <Carousel />
      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Mon cinéma">

          </PageTitle><br />
          <PageTitle heading="Conception et Style" id="consetpion">
            Mon cinéma est d’inspiration philosophique,<br /> esthétique et écologique.

          </PageTitle><br /><br />
          <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
            <Typography
              variant="h1"
              className="mb-3 font-bold"
              color="blue-gray"
              id="naturetitle"
            >
              1.Nature
            </Typography><br />
            <Typography
              variant="h3"
              className="mb-3 font-bold"
              color="blue-gray"
              id='titlenatur'
            >
              La compagne
            </Typography>
            <Typography className="mb-8 font-normal text-blue-gray-500">
              Dès mon enfance, je trouvais la nature plus attrayante et plus amicale que la société traditionaliste, conservatrice et autoritaire dans laquelle je vivais. Je me souviens toujours de ces moments de plaisir, d’apaisement et de liberté que je passais dans le verger paternel situé en pleine compagne à plusieurs kilomètres de ma vielle ville natale où je vivais avec ma famille. Je trouvais auprès de la verdure, des arbres et des animaux le calme et la sérénité. Je passais mon temps à me promener et à jouer sans que personne ne venait me déranger.
              Mon père -auquel je rends un hommage vibrant- était un homme particulièrement tolérant. Il aimait la nature et la vie en pleine air malgré son appartenance à la ville et à son mode de vie. Il nous ramenait fréquemment à la compagne pour changer d’atmosphère. Se promener et jouer en plein air et au soleil sans le contrôle d’une autorité étaient pour l’enfant puis l’adolescent que j’étais un moment de libération et d’émerveillement, quasi exotique.
              Pendant la saison des fruits en été, je me régalais d’abricots, de pêches, de pommes, de poires, de figues et de raisins que je cueillais directement des arbres et que je mangeais sans les laver en me contentant de les essuyer. Les fruits de l’époque n’étaient pas traités dans toute la région. Ils avaient un goût succulent et l’odeur parfumée naturellement des pommes se sentaient sur une longue distance, loin des pommiers.
              Les couchers du soleil derrière les montagnes lointaines me fascinaient particulièrement. Je passais la soirée à m’émerveiller de la vue des étoiles et du silence régnant.
            </Typography>


          </div><br />
          <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">

            <Typography
              variant="h3"
              className="mb-3 font-bold"
              color="blue-gray"
              id='titlenatur'
            >
              La mer
            </Typography>
            <Typography className="mb-8 font-normal text-blue-gray-500">
              Je me souviens aussi de ce lointain espace d’évasion en plein air situé à plusieurs kilomètres de ma ville natale et qui constituait pour l’enfant, l’adolescent et le jeune lycéen que j’étais le deuxième lieu de liberté, d’apaisement et d’émerveillement : la mer et la plage d’une ville côtière où ma famille passait chaque année les vacances d’été.
              Mon rythme de vie quotidien était simple et régulier. Pendant toute la période des vacances, je me réveillais à l’aube et j’allais seul à la plage alors que les membres de la famille continuaient à dormir. Le torse nu et habillé en simple maillot, je parcourais pieds nus et en peu de temps les deux rues qui séparaient la maison familiale de la mer. Ma joie était toujours grande d’arriver à la mer avant le lever du soleil, avant que l’eau ne devienne agitée et avant l’arrivée des baigneurs à la plage.
              La mer me fascinait et m’étonnait à la fois. Je m’asseyais sur le rocher le plus avancé à l’intérieur de la mer en tournant le dos à la ville et ses habitants qui sommeillaient encore à cette heure précoce de la journée. La vision d’une mer calme, limpide et luisante comme un miroir, sans ondulations ni la moindre brise me fascinait. Je m’émerveillais de la sensation visuelle de sa couleur bleuâtre à multiples nuances et de son étendue à perte de vue. Les moments les plus merveilleux étaient de trouver la mer à mon arrivée très tôt à l’aube, calme, limpide et presque incolore et au mieux blanchâtre tellement immobile comme si elle sommeillait encore. La lumière de l’aube semblait surprendre la mer pour l’inciter à se réveiller de sa somnolence nocturne. Elle la révélait à mon regard comme une nouvelle naissance. Sa surface apparaissait comme une immense glace et il m’arrivait de la survoler vers l’horizon lointain, juste pendant un laps de temps d’un rêve éveillé. Après un moment, assez bref parfois, assez long d’autres fois et sous l’effet de la brise, la mer prenait une forme plus mouvementée, en passant de la couleur blanchâtre aux différentes nuances du bleu.
              Le silence régnant m’apaisait et la solitude me réconfortait. Les oiseaux semblaient recevoir l’apparition du jour avec joie. Leur gazouillement sporadique animait l’atmosphère.
              Je passais beaucoup de temps à regarder la mer et m’énivrer d’air frai avant de faire mon premier plongeon. Je me régalais de baignades dans son eau limpide et tonifiante sans me soucier du passage du temps. Je me reposais après pour contempler la mer et admirer sa beauté et son immensité.
              Je n’étais pas du genre à méditer devant la mer pour chercher une quelconque vision métaphysique au-delà de ce que je voyais. La mer était pour l’enfant, l’adolescent et le jeune lycéen solitaire et indépendant que j’étais cette merveilleuse réalité existentielle et esthétique qui fascinait mon regard, épanouissait mon corps et faisait vibrer ma sensibilité.
              J’assistais au lever du soleil avec émerveillement et je me plaisais à suivre le bel astre dans sa montée lente et progressive au-dessus de l’horizon. Je revenais par la suite à la baignade pour une longue durée avant de rentrer à la maison à la fin de la matinée, une fois les baigneurs et les baigneuses commençaient à affluer et encombrer la plage.
              Je revenais au bord de la mer à la fin de la journée, presque quotidiennement, pour me promener et assister avec émerveillement au spectacle émouvant de cette même mer devenue agitée l’après-midi par l’effet de l’air frai et tonifiant venu de l’est. Je m’attardais jusque la tombée de la nuit à m’émerveiller et m’étonner à la fois de cette fascinante mer qui changeait de couleurs, d’allure et de style en une seule journée.
              Mon approche de la mer est spontanément existentielle et esthétique et nullement métaphysique. Le plaisir sensoriel que j’éprouvais par les baignades dans cette eau de mer limpide et tonifiante où mon corps se sentait libre comme un poisson, ainsi que la fascination visuelle par son immensité, ses nuances de couleurs, ses différents styles et allures, ont fait de moi un esthète émerveillé et bon vivant plutôt qu’un spirituel et un métaphysicien contemplatif et pensif.
              Cet émerveillement par la nature en général et la mer en particulier s’est formé en moi dès ma toute petite enfance et m’a accompagné au cours des âges de ma vie jusqu’à présent avec intensité et étonnement toujours renouvelés en continuité.
            </Typography>


          </div><br />
          <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">

            <Typography
              variant="h3"
              className="mb-3 font-bold"
              color="blue-gray"
              id='titlenatur'
            >
              La salle obscure
            </Typography>
            <Typography className="mb-8 font-normal text-blue-gray-500">
              Le troisième espace d’évasion était différent des espaces précédents, mais il remplissait presque la même fonction que la compagne et la mer : la salle obscure où on projetait des images de rêve ! cette unique salle de cinéma de la vieille ville où l’adolescent que j’étais aimait aller voir un film western presque chaque dimanche pour vivre un moment de rêve éveillé. Les chevauchées indiennes en pleine nature américaine le fascinaient et l’émerveillaient.
            </Typography>


          </div><br />
          <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">

            <Typography
              variant="h3"
              className="mb-4 font-bold"
              color="blue-gray"
              id='titlenatur'
            >
              Le club des lumières
            </Typography>
            <Typography className="mb-8 font-normal text-blue-gray-500">
              Coming soon...
            </Typography>


          </div><br />
          <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">

            <Typography
              variant="h3"
              className="mb-4 font-bold"
              color="blue-gray"
              id='titlenatur'
            >
              La Fédération du militantisme
            </Typography>
            <Typography className="mb-8 font-normal text-blue-gray-500">
              Coming soon...
            </Typography>


          </div><br />
          <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">

            <Typography
              variant="h3"
              className="mb-4 font-bold"
              color="blue-gray"
              id='titlenatur'
            >
              Evasion
            </Typography>
            <Typography className="mb-8 font-normal text-blue-gray-500">
              Coming soon...
            </Typography>


          </div><br /><br /><br />
          <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
            <Typography
              variant="h1"
              className="mb-3 font-bold"
              color="blue-gray"
              id="naturetitle"
            >
              2. Nature, art<br /> et philosophie
            </Typography><br />
            <Typography
              variant="h3"
              className="mb-3 font-bold"
              color="blue-gray"
              id='titlenatur'
            >
              Peinture
            </Typography>
            <Typography className="mb-8 font-normal text-blue-gray-500">
              Devenu élève à l’unique lycée de ma ville natale, j’ai découvert avec plaisir l’art de la peinture. Je peignais des paysages et des couchers de soleil sur la mer. La nature et la mer surtout constituaient évidemment le thème privilégié de mes tableaux. J’ai fait spontanément la jonction entre deux passions, la nature et la peinture. Je trouvais dans la nature et dans la peinture une dimension existentielle et esthétique qui me faisait rêver.
            </Typography>


          </div><br />
          <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">

            <Typography
              variant="h3"
              className="mb-4 font-bold"
              color="blue-gray"
              id='titlenatur'
            >
              Cinéma
            </Typography>
            <Typography className="mb-8 font-normal text-blue-gray-500">
              Parallèlement à la peinture, j’étais émerveillé par les beaux paysages des plaines et des canyons de la nature américaine dans le cinéma westerns que j’apercevais comme d’immenses tableaux à l’échelle naturelle. J’éprouvais de l’admiration et de la sympathie envers les indiens que je voyais plus proches de la nature que les autres personnages d’allure citadine. Je ne prêtais pas beaucoup d’attention aux histoires racontées. Ce qui m’attirait le plus c’étaient les paysages naturels et les chevauchées indiennes. Un western sans les paysages sauvages et sans les chevauchées des indiens ne satisfaisait pas l’adolescent que j’étais.
              Aussitôt ai-je appris la constitution d’un club de cinéastes amateurs dans ma ville natale que je n’ai pas hésité à y adhérer et ma passion de la peinture s’est mutée progressivement vers le cinéma et la photographie sans perdre le lien esthétique et émotionnel avec mon art de départ. J’ai pu réaliser trois films courts en noir et blanc avec pellicule en argentique.
            </Typography>


          </div><br />
          <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">

            <Typography
              variant="h3"
              className="mb-4 font-bold"
              color="blue-gray"
              id='titlenatur'
            >
              Philosophie
            </Typography>
            <Typography className="mb-8 font-normal text-blue-gray-500">
              Ma conception du cinéma est essentiellement esthétique fondée sur le beau dans un sens philosophique, en ce sens que le beau constitue la valeur centrale de l’oeuvre d’art. Mon cinéma est style plus que thème à traiter et histoire à raconter.<br />
              Renouer avec la nature et sa première dimension existentielle de la vie au delà de l’agitation événementielle au sein de la société est l’orientation de recherche philosophique, esthétique et écologique du cinéma que j’espère contribuer à mettre en œuvre progressivement d’un film à l’autre. Je me concentre sur des moments dans la vie où rien ne se passe ou presque, des moments considérés en général comme non événementiels, des moments de temps de repos. Une séquence de contemplation de la mer sur une plage déserte suivie d’une baignade tranquille dans une eau calme, limpide et sans grand monde est considéré en général comme un non-événement cinématographique par rapport à une séquence à de poursuite de voitures à couper le souffle avec fusillades et tueries suivies d’une enquête policière à grand suspense.<br />
              Je considère que la séquence de la contemplation de la mer et de la baignade révèle l’intensité et la permanence de l’existence dans sa plus grande simplicité et profondeur existentielle à la fois. Vivre en harmonie avec la nature et son temps naturel dans la lenteur et l’apaisement est le sens premier et profond de l’existence. Ce qui n’est pas donné à la grande majorité des personnes prises dans le tourbillon de la vie sociale et professionnelle.<br />
              C’est la nature et son rythme de vie, comme donnée première et fondamentale de l’existence, qui inspire ma philosophie de la vie et du cinéma.<br />
              La problématique pour l’humanité aujourd’hui est dans la fuite en avant incontrôlée qui la met en danger, car il est devenu évident qu’il est indispensable, même vital, de rester dans les limites de la nature, tout en construisant son propre foyer humain et social avec liberté et créativité dans la durabilité et le sens de la modernité.
              La société met de plus en plus la nature et son rythme de vie en sourdine pour développer sans cesse son rythme à elle accéléré qu’elle ne contrôle plus.<br />
              Mes films sont l’expression de moments d’existence harmonieuse avec la nature et non la narration d’une histoire chargée d’événements et connectés au mode de vie social accéléré et accentué par des violences et des drames artificiels prétendus l’expression de la réalité.
              Mon inclinaison envers la nature n’exclue pas mon adhésion à la modernité, celle au service de la préservation et le développement de la vie naturelle et humaine vers le meilleur.<br />
              Cette philosophie existentielle est essentiellement esthétique. Ma conception de l’esthétique est philosophique en ce sens que je considère la beauté comme le cœur battant de la vie et la finalité de l’art. L’esthétique n’est pas une simple apparence décorative et ornementale ou un habillage et un maquillage. La beauté d’une actrice n’est pas seulement un physique mais aussi une présence, un regard, un geste, une démarche, une voix, une parole, une façon d’être, un charme, une sensibilité, une sensualité, un jeu, un non-dit et un non-vu.
              L’expression du beau existentiel est une finalité essentielle et de premier ordre de ma vie, de ma philosophie et de mon cinéma. Les dimensions philosophiques et écologiques en sont le prolongement.<br />
              Le cinéma est pour moi un style de création d’images plus qu’une histoire à raconter.<br />
              J’aime user de plans séquences , fixes et larges. Je conçois les plans comme des tableaux de peinture et comme des photographies artistiques. J’évite de disséquer les séquences en plusieurs plans et en différentes valeurs de plans pour approcher la réalité dans son ensemble.
              Pas de musique d’accompagnement que je considère comme artificielle. Je préfère le bruitage naturel issus du contenu de l’image même.
            </Typography>


          </div><br /><br />
          <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
            <Typography
              variant="h1"
              className="mb-3 font-bold"
              color="blue-gray"
              id="naturetitle"
            >
              3. Nature, <br />écologie et modernité
            </Typography><br />

            <Typography className="mb-8 font-normal text-blue-gray-500">
              J’ai découvert l’écologie et sa dimension civilisationnelle au quartier latin à Paris quand je faisais mes études de philosophie à La Sorbonne et de cinéma à Vincennes au milieu des années 1970. Les belles années d’une nouvelle vie de liberté et de découverte du mode de vie occidental !
              Je me souviens encore de la déception que j’ai eue en apprenant progressivement que la nature n’était pas ce qu’imaginait l’enfant, puis l’adolescent et même le jeune lycéen que j’étais ! En effet, j’avais une conception sentimentale d’une nature parfaite et imperturbable. L’écologie m’a enseigné la vulnérabilité et la fragilité de la nature. Elle a autant besoin que nous de protection, d’entretien et de soin. Ma déception était grande, moi qui croyais à la toute-puissance de la nature et à son invulnérabilité. Ma naïveté enfantine était ma source de joie et de bonheur tandis que ma lucidité écologique était devenue pour moi une source d’inquiétude et de déception. Je persévère dans mon émerveillement devant la beauté épanouissante de la nature, émerveillement taché de tristesse et de peine par la pollution qu’on lui fait subir de jour en jour et de plus en plus.
            </Typography>


          </div><br />
          <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
            <Typography
              variant="h1"
              className="mb-3 font-bold"
              color="blue-gray"
              id="naturetitle"
            >
              4. Cinéma <br/> de non-violence
            </Typography><br />

            <Typography className="mb-8 font-normal text-blue-gray-500">
              La violence est le véritable thème et style du cinéma commercial.
              Ériger la violence en spectacle m’a toujours indigné et révolté.
              Coming soon...
            </Typography>


          </div><br /><br />
          <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
            <Typography
              variant="h1"
              className="mb-3 font-bold"
              color="blue-gray"
              id="naturetitle"
            >
              5. Cinéma indépendant
            </Typography><br />

            <Typography className="mb-8 font-normal text-blue-gray-500">
              J’ai constitué ma petite société de production cinématographique pour la production de mes propres films afin d’être libre et autonome vis-à-vis des exigences, des contraintes et des contrariétés de la profession.
              J’ai cherché dès le départ à exprimer mes idées et réaliser mon propre style artistique.<br/>
              Je suis cinéaste indépendant en ce sens que j’écris mes films, les réalise et les produis par moi-même, de l’idée jusqu’à la phase finale de la postproduction.<br/>
              Mes films sont des longs métrages de fiction, conçus à partir d’idées simples, produits à petits budgets et financés par mes propres moyens.<br/>
              Je travaille avec une petite équipe dans un seul décors naturel où la mer est omniprésente. Je fais moi-même les repérages et les castings.<br/>
              L’autonomie financière, l’austérité dans la production ainsi que la simplicité dans les choix artistiques et thématiques sont à l’origine de la possibilité de réalisation de mes films.<br/>
              Je ne subordonne pas l’art à l’économie. Je me souci en premier lieu de création artistique et d’expression philosophique, indépendamment des impératifs commerciaux et des exigences du public.<br/>
              Mon désir ultime est l’expression de mon émerveillement devant la beauté et la communication de ma libre pensée pour une vie humaine de liberté, d’équité, de paix, en harmonie avec la nature et la modernité.
            </Typography>


          </div><br /><br /><br/><br/>
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
