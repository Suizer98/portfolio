import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'

import classes from './Home.module.css'

function Home() {
  return (
    <section className={classes.home}>
      <div>
        <h1>Tey Sui Zer</h1>
        <span className={classes.job}>
          <Typewriter
            options={{
              strings: [
                'Full Stack Software Engineer',
                'Geomatics Engineering',
                'Ex Land Surveyor',
                'Passionate about GIS and Geomatics',
                'Web technologies euthanist',
                'A cat lover'
              ],
              autoStart: true,
              loop: true,
              delay: '0.1',
              pauseFor: 2000
            }}
          />
        </span>
        <div className={classes.buttons}>
          <Link to="/contact" className={classes.link}>
            Contact
          </Link>
          <Link to="/projects" className={classes.link}>
            Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home
