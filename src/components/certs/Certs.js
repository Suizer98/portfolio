import classes from './About.module.css'
import Certifications from './Certifications'
import { CertificationsData } from './Data'

function Certs() {
  return (
    <section className={classes.about}>
      <h2>Certifications</h2>
      {/* <p className={classes.text}>
        Not just a typical software engineer proficient in the latest stacks; but also possess
        expertise in GIS, marine sciences, and related scientific domains.
      </p> */}

      {CertificationsData.map((el) => (
        <Certifications key={el.id} title={el.title} {...el} />
      ))}

      {/* {Data.map((el) => (
        <Item key={el.id} title={el.title} items={el.items} />
      ))} */}
    </section>
  )
}

export default Certs
