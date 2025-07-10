import '../../Colors.css'
import classes from './About.module.css'

function Certifications({ name, title, distributor, credential, ...descriptions }) {
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
        <h7>{name}</h7>
        <h6>{distributor}</h6>
        {credential && renderDescription(credential)}
        {Object.keys(descriptions)
          .filter((key) => key.startsWith('description'))
          .map((key) => renderDescription(descriptions[key]))}
      </div>
    </section>
  )
}

export default Certifications
