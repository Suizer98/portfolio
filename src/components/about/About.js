import classes from './About.module.css'
import Data from './Data'
import Item from './Item'

function About() {
  return (
    <section className={classes.about}>
      <h2>About me</h2>
      <p className={classes.text}>
        Not just a typical software engineer proficients in the latest stacks; but also possess
        expertise in GIS, marine sciences, and related scientific domains. Coming from a
        geoinformation background, I tackle spatial challenges in diverse working environments.
        Having experiences collaborating with scientists and engineers worldwide, I excel in
        managing GIS webpages and conducting researches under NUS coverages.
      </p>

      {Data.map((el) => {
        return <Item key={el.id} title={el.title} items={el.items} />
      })}
    </section>
  )
}

export default About
