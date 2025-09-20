import arcgisjsai from './img/arcgisjsai.png'
import deckglgis from './img/deckglgis.PNG'
import dockerarcgis from './img/dockerarcgis5.png'
import leaflet from './img/leaflet.PNG'
import loveesri from './img/loveesri.PNG'
import matlab from './img/matlab.jpg'
import nextjsazure from './img/nextjsazure.PNG'
import pythonanywhere from './img/pythonanywhere.PNG'

// import weddinginv from './img/weddinginv.PNG'

export const projectsData = [
  {
    type: 'web',
    img: arcgisjsai,
    alt: 'Image of ArcGIS JS + AI project',
    title: 'ArcGIS JS + AI',
    description:
      'A proof-of-concept Svelte project demonstrating AI-powered control of ArcGIS JS SDK widgets. Users can interact with maps through natural language commands for navigation, drawing, and spatial analysis.',
    git: 'https://github.com/Suizer98/arcgisjsai',
    demo: 'https://arcgisjs-ai.vercel.app/',
    tech: [
      {
        color: 'blue',
        tech: 'Svelte'
      },
      {
        color: 'green',
        tech: 'ArcGIS JS SDK'
      },
      {
        color: 'purple',
        tech: 'AI/ML'
      },
      {
        color: 'yellow',
        tech: 'Natural Language Processing'
      },
      {
        color: 'red',
        tech: 'JavaScript'
      },
      {
        color: 'blue',
        tech: 'GIS'
      },
      {
        color: 'green',
        tech: 'Interactive Maps'
      },
      {
        color: 'purple',
        tech: 'Web Development'
      }
    ]
  },
  {
    type: 'system',
    img: dockerarcgis,
    alt: 'Image of Docker ArcGIS Enterprise AI project',
    title: 'Docker ArcGIS Enterprise AI',
    description:
      'Extends docker-arcgis-enterprise with AI capabilities, enabling natural language queries to ArcGIS services through LangChain and MCP powered by FastAPI.',
    git: 'https://github.com/Suizer98/docker-arcgis-enterprise-ai',
    demo: 'https://github.com/Suizer98/docker-arcgis-enterprise-ai',
    tech: [
      {
        color: 'blue',
        tech: 'Docker'
      },
      {
        color: 'green',
        tech: 'ArcGIS Enterprise'
      },
      {
        color: 'purple',
        tech: 'FastAPI'
      },
      {
        color: 'yellow',
        tech: 'LangChain'
      },
      {
        color: 'red',
        tech: 'MCP'
      },
      {
        color: 'blue',
        tech: 'Python'
      },
      {
        color: 'green',
        tech: 'AI/ML'
      },
      {
        color: 'purple',
        tech: 'Natural Language Processing'
      }
    ]
  },
  {
    type: 'web',
    img: loveesri,
    alt: 'Image of Love ESRI project',
    title: 'Love ESRI',
    description:
      'A project to showcase how I love ESRI products by utilising their JavaScript Developer SDK APIs. It is hosting on Netlify platform as a single tier app. It demostrates some of the cooler feature such as satellite orbiting around the Earth.',
    git: 'https://github.com/Suizer98/love-esri',
    demo: 'https://loveesri.netlify.app/',
    tech: [
      {
        color: 'green',
        tech: 'Vite'
      },
      {
        color: 'blue',
        tech: 'TypeScript'
      },
      {
        color: 'purple',
        tech: 'React'
      },
      {
        color: 'yellow',
        tech: 'TailwindCSS'
      },
      {
        color: 'blue',
        tech: 'CSS'
      },
      {
        color: 'red',
        tech: 'HTML'
      },
      {
        color: 'yellow',
        tech: 'Docker'
      },
      {
        color: 'green',
        tech: 'Ubuntu'
      },
      {
        color: 'purple',
        tech: 'Bash'
      },
      {
        color: 'blue',
        tech: 'NPM'
      },
      {
        color: 'green',
        tech: 'Netlify'
      },
      {
        color: 'blue',
        tech: 'Chakra-UI'
      }
    ]
  },
  {
    type: 'web',
    img: deckglgis,
    alt: 'Image of DeckGLGIS project',
    title: 'DeckGLGIS',
    description:
      'This project is an UpWork freelance job to show POC of 3D volume computation happening in ReactTS + DeckGL Web app for CrystallBall company. Backend is comprise of Django + Geoserver + Postgres.',
    git: 'https://github.com/Suizer98/DeckGLGIS',
    demo: 'https://github.com/Suizer98/DeckGLGIS',
    tech: [
      {
        color: 'green',
        tech: 'Vite'
      },
      {
        color: 'blue',
        tech: 'TypeScript'
      },
      {
        color: 'purple',
        tech: 'React'
      },
      {
        color: 'yellow',
        tech: 'TailwindCSS'
      },
      {
        color: 'blue',
        tech: 'CSS'
      },
      {
        color: 'red',
        tech: 'HTML'
      },
      {
        color: 'yellow',
        tech: 'Docker'
      },
      {
        color: 'green',
        tech: 'Ubuntu'
      },
      {
        color: 'purple',
        tech: 'Bash'
      },
      {
        color: 'blue',
        tech: 'NPM'
      },
      {
        color: 'green',
        tech: 'Django'
      },
      {
        color: 'blue',
        tech: 'Chakra-UI'
      }
    ]
  },
  // {
  //   id: 2,
  //   type: 'web',
  //   img: weddinginv,
  //   alt: 'Wedding Invitation App',
  //   title: 'Wedding Invitation App',
  //   description:
  //     'Simple wedding invitation ecard demonstrated by light weights full stacks development (web tier, app tier, database tier)',
  //   git: 'https://github.com/Suizer98/weddinginvitation',
  //   demo: 'https://suizerlyciawedding.netlify.app/',
  //   tech: [
  //     {
  //       id: 1,
  //       color: 'green',
  //       tech: 'Vite'
  //     },
  //     {
  //       id: 2,
  //       color: 'blue',
  //       tech: 'TypeScript'
  //     },
  //     {
  //       id: 3,
  //       color: 'yellow',
  //       tech: 'React'
  //     },
  //     {
  //       id: 4,
  //       color: 'green',
  //       tech: 'FastAPI'
  //     },
  //     {
  //       id: 5,
  //       color: 'yellow',
  //       tech: 'Python'
  //     },
  //     {
  //       id: 6,
  //       color: 'blue',
  //       tech: 'Docker'
  //     },
  //     {
  //       id: 7,
  //       color: 'purple',
  //       tech: 'Ubuntu'
  //     },
  //     {
  //       id: 8,
  //       color: 'green',
  //       tech: 'Bash'
  //     },
  //     {
  //       id: 9,
  //       color: 'blue',
  //       tech: 'Heroku'
  //     },
  //     {
  //       id: 10,
  //       color: 'green',
  //       tech: 'Netlify'
  //     },
  //     {
  //       id: 11,
  //       color: 'blue',
  //       tech: 'PostgreSQL'
  //     },
  //     {
  //       id: 12,
  //       color: 'yellow',
  //       tech: 'Ant-D'
  //     }
  //   ]
  // },
  {
    type: 'web',
    img: nextjsazure,
    alt: 'Image of Next.js App for Azure project',
    title: 'NextjsAzure',
    description:
      'This is a Next.js project consisting of an OpenLayer Map that shows a beautiful windy style layer. The main goal of this website is to showcase a complete workflow of auto deploy pipeline to Microsoft Azure platform using Github Action pipeline.',
    git: 'https://github.com/Suizer98/nextjsazure',
    demo: 'https://nextjsazure.vercel.app/',
    tech: [
      {
        color: 'blue',
        tech: 'Next.js'
      },
      {
        color: 'green',
        tech: 'TypeScript'
      },
      {
        color: 'yellow',
        tech: 'OpenLayers'
      },
      {
        color: 'purple',
        tech: 'Docker'
      },
      {
        color: 'blue',
        tech: 'Azure'
      },
      {
        color: 'red',
        tech: 'SQL Server'
      },
      {
        color: 'green',
        tech: 'Vercel'
      },
      {
        color: 'purple',
        tech: 'GitHub Actions'
      }
    ]
  },
  {
    type: 'web',
    img: leaflet,
    alt: 'Image of Mapdemo project',
    title: 'Simple Web Map demo',
    description:
      "This is a sample static website project using leaflet library. I was required to complete this project within 24 hours for a company's interview. It consists of basic Leaftlet features.",
    git: 'https://github.com/Suizer98/mapdemo',
    demo: 'https://suizer98.github.io/mapdemo/',
    tech: [
      {
        color: 'green',
        tech: 'Leaftletjs'
      },
      {
        color: 'blue',
        tech: 'JS'
      },
      {
        color: 'yellow',
        tech: 'CSS'
      },
      {
        color: 'red',
        tech: 'HTML'
      },
      {
        color: 'purple',
        tech: 'GitHub Actions'
      }
    ]
  },
  {
    type: 'web',
    img: pythonanywhere,
    alt: 'Image of DjangoGIS project',
    title: 'DjangoGIS',
    description:
      'This project was created for participation to Grab Geo*Star Competition in my university final year. It is organised by the Grab that develop the largest super-app for ride-hailing, food delivery etc. in Sourtheast Asia.',
    git: 'https://github.com/Suizer98/djangogis',
    demo: 'http://tey.pythonanywhere.com/',
    tech: [
      {
        color: 'green',
        tech: 'Django'
      },
      {
        color: 'blue',
        tech: 'Sqlite3'
      },
      {
        color: 'yellow',
        tech: 'JS'
      },
      {
        color: 'blue',
        tech: 'CSS'
      },
      {
        color: 'red',
        tech: 'HTML'
      },
      {
        color: 'purple',
        tech: 'openrouteservice'
      },
      {
        color: 'blue',
        tech: 'pythonanywhere'
      }
    ]
  },
  {
    type: 'data',
    img: matlab,
    alt: 'Image of MATLAB Satellite Orbit Computation project',
    title: 'MATLAB Satellite Orbit Computation',
    description:
      'Orbit computation of satellites coordinates using MATLAB. Using RINEX data acquired from GPS receiver through satellites signals, created functions to extract numerical data from RINEX files, converted them into 3D Cartesian coordinates, then visualised their orbits in figure.',
    git: 'https://github.com/Suizer98/rinexpos',
    demo: 'https://github.com/Suizer98/rinexpos',
    tech: [
      {
        color: 'blue',
        tech: 'MATLAB'
      },
      {
        color: 'green',
        tech: 'RINEX'
      },
      {
        color: 'purple',
        tech: 'GPS'
      },
      {
        color: 'yellow',
        tech: 'Satellite'
      },
      {
        color: 'red',
        tech: 'Orbit Computation'
      },
      {
        color: 'blue',
        tech: '3D Visualization'
      },
      {
        color: 'green',
        tech: 'Cartesian Coordinates'
      },
      {
        color: 'purple',
        tech: 'GNSS'
      }
    ]
  }
]
