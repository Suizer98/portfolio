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
      'A project to showcase how I love ESRI products by utilising their JavaScript SDK APIs. It is hosting on loveesri.netlify.app as a single tier app.',
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
        color: 'blue',
        tech: 'React'
      },
      {
        id: 4,
        color: 'blue',
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
        color: 'blue',
        tech: 'Docker'
      },
      {
        id: 8,
        color: 'orange',
        tech: 'Ubuntu'
      },
      {
        id: 9,
        color: 'green',
        tech: 'Bash'
      },
      {
        id: 10,
        color: 'red',
        tech: 'NPM'
      },
      {
        id: 11,
        color: 'green',
        tech: 'Netlify'
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
        color: 'blue',
        tech: 'React'
      },
      {
        id: 4,
        color: 'blue',
        tech: 'FastAPI'
      },
      {
        id: 5,
        color: 'blue',
        tech: 'Python'
      },
      {
        id: 6,
        color: 'blue',
        tech: 'Docker'
      },
      {
        id: 7,
        color: 'orange',
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
      }
    ]
  },
  {
    id: 3,
    type: 'web',
    img: nextjsazure,
    alt: 'Image of Next.js App for Azure project',
    title: 'Next.js App for Azure',
    description:
      'This is a Next.js project consisting of an OpenLayer Map that shows a beautiful windy style layer. The main goal of this website is to showcase a complete workflow of auto deploy pipeline to Microsoft Azure platform using Github Action pipeline jobs, Docker login and push image to Azure Container Registry, and deploy image as web app service on Azure Web App Service, Azure Container Instance App, Azure Ubuntu VM.',
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
        color: 'blue',
        tech: 'OpenLayers'
      },
      {
        id: 3,
        color: 'blue',
        tech: 'Docker'
      },
      {
        id: 4,
        color: 'blue',
        tech: 'Azure'
      },
      {
        id: 5,
        color: 'red',
        tech: 'SQL Server'
      },
      {
        id: 6,
        color: 'blue',
        tech: 'GitHub Actions'
      }
    ]
  },
  {
    id: 4,
    type: 'web',
    img: leaflet,
    alt: 'Image of Mapdemo project',
    title: 'Mapdemo',
    description:
      "This is a sample repo project using leaflet library. I was required to complete this project within 24 hours for a company's interview. The website is accessible on: https://suizer98.github.io/mapdemo/",
    git: 'https://github.com/Suizer98/mapdemo',
    demo: 'https://suizer98.github.io/mapdemo/',
    tech: [
      {
        id: 1,
        color: 'green',
        tech: 'Leafletjs'
      },
      {
        id: 2,
        color: 'blue',
        tech: 'Leaflet APIs'
      },
      {
        id: 3,
        color: 'blue',
        tech: 'CSS'
      },
      {
        id: 4,
        color: 'red',
        tech: 'HTML'
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
      'The website is hosted with free on: http://tey.pythonanywhere.com/. This website is hosted on pythonanywhere free tier server. When inactive, the website shutdown automatically. The live deployment will only be triggered after you access the website. If you see this message, refresh the page again.',
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
        color: 'blue',
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
        color: 'blue',
        tech: 'openrouteservice'
      }
    ]
  }
]
