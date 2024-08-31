import '../../Colors.css'
import classes from './About.module.css'

function Experiences({ role, title, period, ...descriptions }) {
  const renderDescription = (url) => (
    <p className={classes.experienceItem} key={url}>
      <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
        Credential URL
      </a>
    </p>
  )

  return (
    <section className={classes.experiences}>
      <div className={classes.experienceTitle}>
        <h5>{title}</h5>
        <h7>{role}</h7>
        <h6>{period}</h6>
        {Object.keys(descriptions)
          .filter((key) => key.startsWith('description'))
          .map((key) => renderDescription(descriptions[key]))}
      </div>
    </section>
  )
}

export default Experiences
