import { Suspense, lazy } from 'react'
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'

import BottomBar from '../bottom-bar/BottomBar'
import Home from '../home/Home'
import Loading from '../loading/Loading'
import TopBar from '../top-bar/TopBar'
import Wrapper from '../wrapper/Wrapper'
import classes from './Sublime.module.css'

const Projects = lazy(() => import('../projects/Projects'))
const About = lazy(() => import('../about/About'))
const Contact = lazy(() => import('../contact/Contact'))

const router = createBrowserRouter([
  {
    path: '/portfolio',
    element: <Wrapper comp={<Home />} />
  },
  {
    path: '*',
    loader: () => redirect('/portfolio')
  },
  {
    path: 'about',
    element: <Wrapper comp={<About />} />
  },
  {
    path: 'projects',
    element: <Wrapper comp={<Projects />} />
  },
  {
    path: 'contact',
    element: <Wrapper comp={<Contact />} />
  }
])

function Sublime() {
  return (
    <div className={classes.mainContainer}>
      <TopBar />
      <main className={classes.contentArea}>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router}></RouterProvider>
        </Suspense>
      </main>
      <BottomBar />
    </div>
  )
}

export default Sublime
