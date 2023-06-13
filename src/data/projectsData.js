// projectsData.js
import { EnvelopeOpenIcon, ArrowTopRightOnSquareIcon} from '@heroicons/react/24/solid';

const images = (require.context('../assets/svg', false, /\.svg$/));


const projectsData = [
    {
      id: 1,
      title: (
        <>
          <u>Portfolio</u> - Refont
        </>
      ),
      buttonTitle: "Portfolio",
      description: (
        <>
        <ul className='tag-skill'>
          <li>HTML</li>
          <li>CSS</li>
          <li>PHP</li>
          <li>MySQL</li>
          <li>JavaScript</li>
          <li>Clip Studio Paint</li>
          <li>Photoshop</li>
        </ul>
          <p>
          Vous êtes actuellement en train de visiter mon portfolio, 
          mais avant d'arriver au résultat que vous visualisez, 
          ce site a fait l'objet d'une <u>refonte complète</u>. À l'origine, 
          il s'agissait d'un site réalisé pendant ma licence, 
          où j'ai pu concevoir mon premier site.
          
          </p>
          <p>
            Le travail était évalué à différentes étapes de conception, notamment en ce qui concerne :
            la sémantique et le respect des <strong>normes <a href='https://www.w3.org/' target='_blank'  rel="noreferrer" >W3C <sup><ArrowTopRightOnSquareIcon className='inline-block h-4 w-4'/></sup></a></strong>
            , un site <strong>responsive</strong> et <strong>multilingue</strong>
            , <strong>back office modulable</strong>
            , des <strong>animations</strong> en CSS et /ou JavaScript
            , un <strong>design ergonomique</strong> et <strong>accessible</strong>
            , utilisation intelligente d'<strong>outils graphiques</strong>
</p>
          <p>Cet exercice a été ma première initiation à la conception d'un projet web,
           et m'a permis d'apprendre à gérer mon temps et mes priorités.
            J'ai présenté ce travail lors d'une <u>soutenance</u>,
             et bien qu'il ait été apprécié pour un premier devoir,
              j'ai ressenti la nécessité d'améliorer ce produit à la fois
               sur le plan technique et visuel.
          </p>
          <p>
          Le thème précédent était celui d'une <u>main créatrice</u> cherchant à s'approprier le monde du numérique. Cependant, j'ai décidé de repenser entièrement le design et l'aspect visuel de mon portfolio dans le cadre de cette refonte avec un thème plus <u>apaisant et assuré</u>
          </p>
        </>
      ),
      
      layout: "vent",
      media: [
         require("../assets/img/Portfolio-princial.png"),
         images(`./logo.svg`),
        require("../assets/img/Portfolio-folio-moi.gif"),
        
      ],
    },
    {
      id: 2,
      title:  (
        <>
          Affiche <u>Kabuki</u>
        </>
      ),
      buttonTitle:"Kabuki",
      description: (
        <>
        <ul className='tag-skill'>
          <li>Illustrator</li>
          <li>Photoshop</li>
        </ul>
        <p>L'affiche <strong>Kabuki</strong> a été conçue comme une création publicitaire destinée à promouvoir
         le spectacle éponyme. Ce projet avait pour objectif principal de m'initier au logiciel <strong>Illustrator</strong>.
          Il m'était demandé de créer une illustration vectorielle en sélectionnant parmi plusieurs éléments iconographiques proposés,
           qui servirait ensuite de base pour la conception de l'affiche.</p>
    <p>Une fois l'illustration réalisée, j'ai intégré le résultat dans un fichier <strong>Photoshop</strong>,
     où j'ai pris en charge la conception globale de l'affiche en y ajoutant les éléments textuels et le logo.</p>
    <p>Ce qui m'a demandé des efforts particuliers, en plus de découvrir le logiciel,
     c'est de travailler sur chaque élément de manière individuelle, en les combinant ensuite.
      Et de m'essayer à des styles auxquels je ne suis pas habitué ou vers lesquels je ne suis pas naturellement attiré.
       Grâce à ce projet, j'ai acquis de <u>nouvelles compétences</u> et j'ai pu repousser mes limites en tant que concepteur graphique.</p>
  
        </>
      ),
     media:  require("../assets/img/kabuki-Affiche.jpg"),
     layout : "solitaire"
    
    },
    {
      id: 3,
      buttonTitle: "Flow",
      title: 
      (
        <>
          <u>Flow,</u> musique en streaming
        </>
      ),
      description: (
        <>
        <ul className='tag-skill'>
          <li>Illustrator</li>
          <li>Photoshop</li>
        </ul>
          <p><strong>Flow</strong> est un <u>mini-projet</u> de maquette réalisé dans le cadre du module de design interactif.
           L'objectif était de créer une <strong>maquette sur Photoshop</strong> et de présenter une plateforme de musique en streaming similaire à <strong>Spotify ou Deezer</strong>.
            L'idée n'était pas de concevoir un design ambitieux, mais d’illustrer des éléments de sites facilement reconnaissables 
          et intuitifs, en incluant des <strong>interactions telles qu'un en-tête, une bannière, une navigation, un pied de page, des boutons, etc.</strong></p>
          <p>
          Le nom "Flow" trouve son origine dans plusieurs sources.
           D'une part, il évoque le <u>mouvement</u>, ce qui est parfait pour promouvoir un site de musique.
            Mais ce qui différencie <strong>Flow</strong>, c'est sa spécialisation dans la promotion de la <u>productivité au travail</u>.
             Son objectif est d'aider les utilisateurs à atteindre un état de «Flow» qui, en psychologie positive,
              représente une satisfaction optimale liée à une concentration totale.
          </p>
          <p>
          La construction de ce projet s'est déroulée en deux étapes. Tout d'abord, il y a eu la conception de la marque fictive, comprenant la création du logo, du slogan et des objectifs. Cela impliquait d'étudier les pratiques de la concurrence et d'effectuer une analyse de marché.
La deuxième étape consistait à présenter une maquette, en simulant un véritable site de musique.
          </p>
        </>
      ),
      layout: "froid",
      media: [ 
        require("../assets/img/Flow-logo1.png"),
        require("../assets/img/Flow-logo4.png"),
        require("../assets/img/Flow-maquette.jpg"),
        require("../assets/img/Flow-logo3.png"),
        require("../assets/img/Flow-logo2.png"),
      ],
    },
    {
      id: 4,
      buttonTitle: "Ré.édifica",
      title: (
      <>
      {/* <img src={Reedifica} alt="Logo du forum RP" className='h-12 inline-block bg-customSpace p-2' loading="lazy"/> */}
       <u>Ré.édifica</u>, Le forum RP
       </>
      ),
      description: (
        <>
        <ul className='tag-skill'>
          <li>HTML</li>
          <li>SASS</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>PHP</li>
          <li>Twig</li>
          <li>MySQL</li>
          <li>Axure</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>Clip Studio Paint</li>
     
        </ul>
          <p>Ré.édifica est un site construit sur les bases d'un forum RP, dont le nom trouve son origine dans le terme "réédification", symbolisant la volonté de reconstruire. L'histoire de Ré.édifica puise son inspiration dans une bande dessinée en cours de réalisation, intitulée "Chronicle of Célestins" et créée par Vensty Reverse, mon nom d'artiste.</p>
          <p>Si vous n'êtes pas familier avec le concept du RP, laissez-moi vous expliquer. Un forum RP, abréviation de "Role-Playing", est un espace virtuel où les participants peuvent incarner des personnages fictifs et interagir avec d'autres joueurs dans un monde imaginaire. Il ne faut pas confondre cela avec le terme RPG qui désigne un genre de jeu vidéo. Sur un forum RP, l'imagination des utilisateurs se réunit pour créer une histoire collaborative.</p>
          <p>Ce site a été mon projet final concluant mon année de licence, mettant en valeur les compétences acquises tout au long de mon cursus universitaire.
           Pour la réalisation de ce projet, j'ai dû prendre en compte certaines obligations et critères imposés, ce qui a influencé le choix des langages que j'ai utilisés afin de répondre aux exigences du cahier des charges et pour répondre aux objectifs fixés. </p>
        </>
      ),
      layout: "froid",
      media: [ 
       
        require("../assets/img/Reedifica-img01.gif"),
        require("../assets/img/Reedifica-img02.gif"),
        require("../assets/img/Capture d'écran 2023-06-13 134001.png"),
        // images(`./Reedifica-logo_complet.svg`),
        require("../assets/img/Reedifica-img03.gif"),

        
        
      ],
      // media: [
      //   {
      //     type: "image",
      //     source: ,
      //   },
      //   {
      //     type: "image",
      //     source: ,
      //   },
        // {
        //   type: "video",
        //   source: require("../assets/video/Reedifica-video.mp4"),
        // },
      // ],
    },
    {
      id: 5,
      buttonTitle: "Sakadanse",
      title: "Sakadanse",
      description: (
        <>
        <ul className='tag-skill'>
          <li>Figma</li>
        </ul>
          <p>Sakadanse est un projet indépendant visant à créer un site d'information événementielle axé sur la danse.
           L'objectif principal du site est de présenter les événements liés à la danse qui ont lieu dans les grandes métropoles.
            Pour ce projet, j'ai utilisé l'outil de conception Figma.
             Bien que j'aie déjà eu l'occasion d'utiliser cet outil lors de précédentes expériences scolaires et de stages,
              j'ai souhaité approfondir ma maîtrise en créant une maquette qui se rapprocherait 
              le plus possible d'un aspect professionnel, tout en étant adaptative et accessible.</p>
        </>
      ),
    layout: "carrer",
    media:  require("../assets/img/Sakadanse-Desktop01-carrer.jpg"),
    },
  ];
  
  export default projectsData;
  