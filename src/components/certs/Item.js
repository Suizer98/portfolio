import '../../Colors.css'
import classes from './About.module.css'

function Item({ items, title }) {
  return (
    <figure className={classes.skillItem}>
      <h3>{title}</h3>
      <div className={classes.skills}>
        {items.map((item) => (
          <img
            key={item.id}
            src={`https://skillicons.dev/icons?i=${item.icon}`}
            alt={item.icon}
            className={classes.icon}
          />
        ))}
      </div>
    </figure>
  )
}

export default Item
