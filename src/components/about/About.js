import classes from './About.module.css'
import { Data, ExperiencesData } from './Data'
import Experiences from './Experiences'
import Item from './Item'

function About() {
  return (
    <section className={classes.about}>
      <h2>About me</h2>
      <p className={classes.text}>
        Not just a typical software engineer proficients in the latest stacks; but also possess
        expertise in GIS, marine sciences, and related scientific domains. Having experiences
        collaborating with scientists and engineers worldwide, I excel in developing GIS web
        services and challenges
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
