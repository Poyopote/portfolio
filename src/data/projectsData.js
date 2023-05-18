// projectsData.js

// import { EnvelopeOpenIcon } from '@heroicons/react/24/solid';

const projectsData = [
    {
      id: 1,
      title: "Portfolio",
      description: "Description du projet Portfolio.",
      icons: "Portfolio-mouv_mauve_1.svg",
      links: {
        website: "https://poyopote.github.io/Portfolio/",
        github: "https://github.com/Poyopote/Portfolio/tree/main",
      },
      media: [
        {
          type: "image",
          source: "Portfolio-princial.png",
        },
        {
          type: "image",
          source: "Portfolio-folio-moi.gif",
        },
      ],
    },
    {
      id: 2,
      title: "Kabuki",
      description: "Description du projet Kabuki.",
      // icons: ["icon-kabuki1.svg", "icon-kabuki2.svg"],
      // links: {
      //   website: "https://exemple.com/kabuki",
      //   github: "https://github.com/exemple/kabuki",
      // },
      media: [
        {
          type: "image",
          source: "kabuki-Affiche.jpg",
        },
        
      ],
    },
    {
      id: 3,
      title: "Flow",
      description: "Description du projet Flow.",
      // icons: ["icon-flow1.svg", "icon-flow2.svg"],

      media: [
        {
          type: "image",
          source: "Flow-logo.jpg",
        },
        {
          type: "image",
          source: "Flow-maquette.jpg",
        },
      ],
    },
    {
      id: 4,
      title: "Ré.édifica",
      description: "Description du projet Ré.édifica.",
      icons: ["Reedifica-logo_complet.svg", "Reedifica-logo_favicon.svg"],
      // links: {
      //   website: "https://exemple.com/reedifica",
      //   github: "https://github.com/exemple/reedifica",
      // },
      media: [
        {
          type: "image",
          source: "Reedifica-img01.gif",
        },
        {
          type: "image",
          source: "Reedifica-img02.gif",
        },
        {
          type: "video",
          source: "Reedifica-video.mp4",
        },
      ],
    },
    {
      id: 5,
      title: "Sakadanse",
      description: "Description du projet Sakadanse.",
      // icons: ["icon-sakadanse1.svg", "icon-sakadanse2.svg"],
      links: {
        website: "https://www.figma.com/proto/zkezjcMUCYKNskYFf1ajS1/Sakadanse?type=design&node-id=3-8&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A8",
        // github: "https://github.com/exemple/sakadanse",
      },
      media: [
        {
          type: "image",
          source: "Sakadanse-Desktop01.jpg",
        },
        {
          type: "image",
          source: "Sakadanse-Desktop02.jpg",
        },

      ],
    },
  ];
  
  export default projectsData;
  