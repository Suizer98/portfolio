import classes from './About.module.css'
import { Data, ExperiencesData } from './Data'
import Experiences from './Experiences'
import Item from './Item'

function About() {
  return (
    <section className={classes.about}>
      <h2>Certifications</h2>
      {/* <p className={classes.text}>
        Not just a typical software engineer proficient in the latest stacks; but also possess
        expertise in GIS, marine sciences, and related scientific domains.
      </p> */}

      {ExperiencesData.map((el) => (
        <Experiences key={el.id} title={el.title} {...el} />
      ))}

      {/* {Data.map((el) => (
        <Item key={el.id} title={el.title} items={el.items} />
      ))} */}
    </section>
  )
}

export default About
