import deckglgis from './img/deckglgis.PNG'
import leaflet from './img/leaflet.PNG'
import loveesri from './img/loveesri.PNG'
import nextjsazure from './img/nextjsazure.PNG'
import pythonanywhere from './img/pythonanywhere.PNG'
import weddinginv from './img/weddinginv.PNG'

export const projectsData = [
  {
    id: 1,
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
        id: 1,
        color: 'green',
        tech: 'Vite'
      },
      {
        id: 2,
        color: 'blue',
        tech: 'TypeScript'
      },
      {
        id: 3,
        color: 'purple',
        tech: 'React'
      },
      {
        id: 4,
        color: 'yellow',
        tech: 'TailwindCSS'
      },
      {
        id: 5,
        color: 'blue',
        tech: 'CSS'
      },
      {
        id: 6,
        color: 'red',
        tech: 'HTML'
      },
      {
        id: 7,
        color: 'yellow',
        tech: 'Docker'
      },
      {
        id: 8,
        color: 'green',
        tech: 'Ubuntu'
      },
      {
        id: 9,
        color: 'purple',
        tech: 'Bash'
      },
      {
        id: 10,
        color: 'blue',
        tech: 'NPM'
      },
      {
        id: 11,
        color: 'green',
        tech: 'Netlify'
      },
      {
        id: 12,
        color: 'blue',
        tech: 'Chakra-UI'
      }
    ]
  },
  {
    id: 2,
    type: 'web',
    img: weddinginv,
    alt: 'Wedding Invitation App',
    title: 'Wedding Invitation App',
    description:
      'Simple wedding invitation ecard demonstrated by light weights full stacks development (web tier, app tier, database tier)',
    git: 'https://github.com/Suizer98/weddinginvitation',
    demo: 'https://suizerlyciawedding.netlify.app/',
    tech: [
      {
        id: 1,
        color: 'green',
        tech: 'Vite'
      },
      {
        id: 2,
        color: 'blue',
        tech: 'TypeScript'
      },
      {
        id: 3,
        color: 'yellow',
        tech: 'React'
      },
      {
        id: 4,
        color: 'green',
        tech: 'FastAPI'
      },
      {
        id: 5,
        color: 'yellow',
        tech: 'Python'
      },
      {
        id: 6,
        color: 'blue',
        tech: 'Docker'
      },
      {
        id: 7,
        color: 'purple',
        tech: 'Ubuntu'
      },
      {
        id: 8,
        color: 'green',
        tech: 'Bash'
      },
      {
        id: 9,
        color: 'blue',
        tech: 'Heroku'
      },
      {
        id: 10,
        color: 'green',
        tech: 'Netlify'
      },
      {
        id: 11,
        color: 'blue',
        tech: 'PostgreSQL'
      },
      {
        id: 12,
        color: 'yellow',
        tech: 'Ant-D'
      }
    ]
  },
  {
    id: 3,
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
        id: 1,
        color: 'blue',
        tech: 'Next.js'
      },
      {
        id: 2,
        color: 'green',
        tech: 'TypeScript'
      },
      {
        id: 3,
        color: 'yellow',
        tech: 'OpenLayers'
      },
      {
        id: 4,
        color: 'purple',
        tech: 'Docker'
      },
      {
        id: 5,
        color: 'blue',
        tech: 'Azure'
      },
      {
        id: 6,
        color: 'red',
        tech: 'SQL Server'
      },
      {
        id: 7,
        color: 'green',
        tech: 'Vercel'
      },
      {
        id: 8,
        color: 'purple',
        tech: 'GitHub Actions'
      }
    ]
  },
  {
    id: 4,
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
        id: 1,
        color: 'green',
        tech: 'Leaftletjs'
      },
      {
        id: 2,
        color: 'blue',
        tech: 'JS'
      },
      {
        id: 3,
        color: 'yellow',
        tech: 'CSS'
      },
      {
        id: 4,
        color: 'red',
        tech: 'HTML'
      },
      {
        id: 5,
        color: 'purple',
        tech: 'GitHub Actions'
      }
    ]
  },
  {
    id: 5,
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
        id: 1,
        color: 'green',
        tech: 'Django'
      },
      {
        id: 2,
        color: 'blue',
        tech: 'Sqlite3'
      },
      {
        id: 3,
        color: 'yellow',
        tech: 'JS'
      },
      {
        id: 4,
        color: 'blue',
        tech: 'CSS'
      },
      {
        id: 5,
        color: 'red',
        tech: 'HTML'
      },
      {
        id: 6,
        color: 'purple',
        tech: 'openrouteservice'
      },
      {
        id: 7,
        color: 'blue',
        tech: 'pythonanywhere'
      }
    ]
  },
  {
    id: 6,
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
        id: 1,
        color: 'green',
        tech: 'Vite'
      },
      {
        id: 2,
        color: 'blue',
        tech: 'TypeScript'
      },
      {
        id: 3,
        color: 'purple',
        tech: 'React'
      },
      {
        id: 4,
        color: 'yellow',
        tech: 'TailwindCSS'
      },
      {
        id: 5,
        color: 'blue',
        tech: 'CSS'
      },
      {
        id: 6,
        color: 'red',
        tech: 'HTML'
      },
      {
        id: 7,
        color: 'yellow',
        tech: 'Docker'
      },
      {
        id: 8,
        color: 'green',
        tech: 'Ubuntu'
      },
      {
        id: 9,
        color: 'purple',
        tech: 'Bash'
      },
      {
        id: 10,
        color: 'blue',
        tech: 'NPM'
      },
      {
        id: 11,
        color: 'green',
        tech: 'Django'
      },
      {
        id: 12,
        color: 'blue',
        tech: 'Chakra-UI'
      }
    ]
  }
]
