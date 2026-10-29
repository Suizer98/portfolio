import classes from './About.module.css'
import { Data, ExperiencesData } from './Data'
import Experiences from './Experiences'
import Item from './Item'

function About() {
  return (
    <section className={classes.about}>
      <h2>About me</h2>
      <p className={classes.text}>
        I am a software engineer specialising in full-stack web development, with a strong
        foundation in GIS and geomatics engineering. My passionate curiosity drives me to develop
        innovative, scalable, and user-centric software solutions that integrate modern web
        technologies to address complex real-world challenges.
      </p>

      <p className={classes.text}>
        Through my experience at Esri, a global leader in GIS technology, I have developed expertise
        in building and implementing software solutions that address complex geospatial challenges.
        My cross-disciplinary background in geomatics engineering and full-stack software
        development lets me bridge the gap between spatial data and software, transforming
        geospatial data into actionable insights.
      </p>

      {ExperiencesData.map((el, index) => (
        <Experiences key={index} title={el.title} {...el} />
      ))}

      {Data.map((el, index) => (
        <Item key={index} title={el.title} items={el.items} />
      ))}
    </section>
  )
}

export default About
