// projectsData.js
import { EnvelopeOpenIcon } from '@heroicons/react/24/solid';

const images = (require.context('../assets/svg', false, /\.svg$/));

const projectsData = [
    {
      id: 1,
      title: "Portfolio",
      description: "Description du projet Portfolio.",
      // icons: { type: "svg", source: images(`Portfolio-mouv_mauve_1.svg`)},
      links: [
        { label: "Website", url: "https://poyopote.github.io/Portfolio/"},
        { label: "GitHub", url: "https://github.com/Poyopote/Portfolio/tree/main"},
      ],
      media: [
        {
          type: "image",
          source: require("../assets/img/Portfolio-princial.png"),
        },
        {
          type: "image",
          source: require("../assets/img/Portfolio-folio-moi.gif"),
        },
      ],
    },
    {
      id: 2,
      title: "Kabuki",
      description: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in f",
      // icons: ["icon-kabuki1.svg", "icon-kabuki2.svg"],
      // links: {
      //   label: "Website", url: "https://exemple.com/kabuki",
      //   label: "GitHub", url: "https://github.com/exemple/kabuki",
      // },
      media: [
        {
          type: "image",
          source: require("../assets/img/kabuki-Affiche.jpg"),
        },
        
      ],
    },
    {
      id: 3,
      title: "Flow",
      description: "Description du projet Flow.",

      media: [
        {
          type: "image",
          source: require("../assets/img/Flow-logo.jpg"),
        },
        {
          type: "image",
          source: require("../assets/img/Flow-maquette.jpg"),
        },
      ],
    },
    {
      id: 4,
      title: "Ré.édifica",
      description: "Description du projet Ré.édifica.",
      icons: [
        { type: "hero", component: EnvelopeOpenIcon },
        { type: "svg", source: images(`./Reedifica-logo_complet.svg`) },
        { type: "svg", source: images(`./Reedifica-logo_favicon.svg`) }
      ],
      media: [
        {
          type: "image",
          source: require("../assets/img/Reedifica-img01.gif"),
        },
        {
          type: "image",
          source: require("../assets/img/Reedifica-img02.gif"),
        },
        {
          type: "video",
          source: require("../assets/video/Reedifica-video.mp4"),
        },
      ],
    },
    {
      id: 5,
      title: "Sakadanse",
      description: "Description du projet Sakadanse.",
      // icons: ["icon-sakadanse1.svg", "icon-sakadanse2.svg"],
      links: {
        label: "Website", url: "https://www.figma.com/proto/zkezjcMUCYKNskYFf1ajS1/Sakadanse?type=design&node-id=3-8&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A8",
        // label: "GitHub", url: "https://github.com/exemple/sakadanse",
      },
      media: [
        {
          type: "image",
          source: require("../assets/img/Sakadanse-Desktop01.jpg"),
        },
        {
          type: "image",
          source: require("../assets/img/Sakadanse-Desktop02.jpg"),
        },

      ],
    },
  ];
  
  export default projectsData;
  