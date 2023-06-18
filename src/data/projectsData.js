// projectsData.js
import { ArrowSmallRightIcon, ArrowTopRightOnSquareIcon} from '@heroicons/react/24/solid';
import Reedifica from '../assets/svg/Reedifica-logo_favicon.svg';
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
          <li className='portfolio'><a href='https://www.figma.com/proto/BE0eBnZI6Ngq9lMA89FcXt/Untitled?type=design&node-id=101-4&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=101%3A4' target='_blank'  rel="noreferrer"><img src={images(`./Portfolio-mouv_mauve_1.svg`)} width="30" height="30" alt="Logo du forum RP" className='h-6 inline-block' loading="lazy"/> Voir aperçu <ArrowSmallRightIcon className='inline-block h-6 w-6' /></a></li>
          <li className='github-link'><a href='https://github.com/Poyopote/Portfolio/tree/react-update' target='_blank'  rel="noreferrer">Github <i className="devicon-github-original"></i></a></li>
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
            , des <strong>animations</strong> en <abbr title="Cascading Style Sheets">CSS</abbr> et/ou <abbr title="JavaScript">JS</abbr>
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
      
      layout: "List",
      media: [
        require("../assets/img/menu-contact.png"),
         require("../assets/img/Portfolio-princial.png"),
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
     layout : "Single"
    
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
      layout: "Grid",
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
          <li className='reedifica'><a href={require("../assets/img/Reedifica-index-.png")} target='_blank'  rel="noreferrer"><img src={Reedifica} alt="Logo du forum RP" className='h-6 inline-block' loading="lazy"/> Voir aperçu<ArrowSmallRightIcon className='inline-block h-6 w-6' /></a></li>
     
        </ul>
        <p><strong>Ré.édifica</strong> est un site construit sur les bases d'un forum <abbr title="Role-Playing">RP</abbr>, dont le nom trouve son origine dans le terme <u>"réédification"</u>, symbolisant la volonté de reconstruire. L'histoire de <strong>Ré.édifica</strong> puise son inspiration dans une bande dessinée en cours de réalisation, intitulée "Chronicle of Célestins" et créée par Vensty Reverse, mon nom d'artiste.</p>

<details>
  <summary>Qu'est-ce que le <strong>RP</strong> (Role-Playing) ?</summary>
  <p>Sur un forum RP, les participants peuvent incarner des personnages fictifs et interagir avec d'autres joueurs dans un monde imaginaire. Il ne faut pas confondre cela avec le terme RPG qui désigne un genre de jeu vidéo. L'imagination des utilisateurs se réunit sur un forum RP pour créer une histoire collaborative.</p>
</details>

<p>Ce site a été mon <u>projet final</u> concluant mon année de licence, mettant en valeur les <u>compétences acquises</u> tout au long de mon cursus universitaire. Pour la réalisation de ce projet, j'ai dû prendre en compte certaines obligations et critères imposés, ce qui a influencé le choix des langages que j'ai utilisés afin de répondre aux exigences du <strong>cahier des charges</strong> et pour atteindre les objectifs fixés.</p>

        </>
      ),
      layout: "List",
      media: [ 
        images(`./Reedifica-logo_complet.svg`),
        require("../assets/img/Reedifica-img02.webp"),
        require("../assets/img/Reedifica-img03.webp"),

      ],

    },
    {
      id: 5,
      buttonTitle: "Sakadanse",
      title: "Sakadanse",
      description: (
        <>
        <ul className='tag-skill'>
          <li>Figma</li>
          <li className='sakadanse'><a href='' target='_blank'  rel="noreferrer">Voir maquette <ArrowSmallRightIcon className='inline-block h-6 w-6' /></a></li>

        </ul>
          <p><strong>Sakadanse</strong> est un <u>projet indépendant</u> visant à créer un site <strong>d'information événementielle</strong> axé sur la <strong>danse</strong>.
           L'objectif principal du site est de présenter les événements liés à la danse qui ont lieu dans les <u>grandes métropoles</u>.
            Pour ce projet, j'ai utilisé l'outil de conception Figma.
             Bien que j'aie déjà eu l'occasion d'utiliser cet outil lors de <u>précédentes expériences scolaires et de stages</u>,
              j'ai souhaité <u>approfondir ma maîtrise</u> en créant une maquette qui se rapprocherait 
              le plus possible d'un aspect professionnel, tout en étant <strong>adaptative et accessible</strong>.</p>
        </>
      ),
    layout: "Square",
    media:  require("../assets/img/Sakadanse-Desktop01-square.jpg"),
    },
  ];
  
  export default projectsData;
  