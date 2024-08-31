import { Link } from 'react-router-dom'

import classes from './Sidebar.module.css'

function Sidebar() {
  return (
    <aside className={classes.sidebar}>
      <p className={classes.folders}>Folders</p>
      <p className={classes.folder}>
        <i className="fa-solid fa-folder-open"></i>Portfolio
      </p>
      <ul className={classes.sideNav}>
        <li>
          <Link className={classes.navItem} to="/portfolio">
            <i className="fa-brands fa-python"></i>Home.py
          </Link>

          <Link className={classes.navItem} to="/about">
            <i className="fa-brands fa-react"></i>About.tsx
          </Link>

          <Link className={classes.navItem} to="/projects">
            <i className="fa-brands fa-css3"></i>Projects.css
          </Link>

          <Link className={classes.navItem} to="/certs">
            <i className="fa-brands fa-js"></i>Certs.js
          </Link>

          <Link className={classes.navItem} to="/contact">
            <i className="fa-brands fa-html5"></i>Contact.html
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
