import classes from './TopBar.module.css'

function TopBar() {
  return (
    <div className={classes.top}>
      <div className={classes.dots}>
        <div className={classes.dot}></div>
        <div className={classes.dot}></div>
        <div className={classes.dot}></div>
      </div>
      <div className={classes.titleContainer}>
        <img
          src="https://skillicons.dev/icons?i=sublime"
          alt="Sublime Text Icon"
          className={classes.icon}
        />
        <p className={classes.title}>Sublime Text</p>
      </div>
      <div></div>
    </div>
  )
}

export default TopBar
