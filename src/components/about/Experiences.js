import '../../Colors.css'
import classes from './About.module.css'

function Experiences({ role, title, period, ...descriptions }) {
  return (
    <section className={classes.experiences}>
      <div className={classes.experienceTitle}>
        <h5>{title}</h5>
        <h7>{role}</h7>
        <h6>{period}</h6>
      </div>
      {Object.keys(descriptions)
        .filter((key) => key.startsWith('description'))
        .map((key) => (
          <p className={classes.experienceItem} key={key}>
            {descriptions[key]}
          </p>
        ))}
    </section>
  )
}

export default Experiences
