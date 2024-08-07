import classes from './BottomBar.module.css'

function BottomBar() {
  let copyYear = new Date().getFullYear()

  return (
    <aside className={classes.bottom}>
      <div className={classes.left}>
        <p className={classes.copy}>
          <span className={classes.span}>&copy;{copyYear} Sui Zer. </span>
          <span className={classes.span}>Line 19, Column 98</span>
        </p>
      </div>
      <div className={classes.right}>
        <p>Mariana Theme</p>
        <p>
          <i className="fa-solid fa-code-branch"></i>main
        </p>
        <p>Spaces: 4</p>
      </div>
    </aside>
  )
}

export default BottomBar
