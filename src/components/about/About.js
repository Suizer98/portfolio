import classes from './About.module.css'
import { Data, ExperiencesData } from './Data'
import Experiences from './Experiences'
import Item from './Item'

function About() {
  return (
    <section className={classes.about}>
      <h2>About me</h2>
      <p className={classes.text}>
        My cross-disciplinary expertises enables me to excel in both domains, 
        from collecting real world GIS data, processing them to developing innovative software 
        solutions tailored to meet spatial data needs. My knowledges and skills allow me to bridge 
        the gap between geomatics engineering and gis software development.
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
