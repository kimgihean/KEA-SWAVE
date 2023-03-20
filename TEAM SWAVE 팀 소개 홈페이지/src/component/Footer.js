import React from 'react';
import classes from "./css/Footer.module.css";
const footer = () => {
  return (
  <div className={classes.Footer} style={{
    marginTop: "10%"
  }}>
    <ul className={classes.ul}>
      <li className={classes.li}><a href="https://github.com/kimgihean/KEA-SWAVE" className={classes.A}>Github</a></li>
      <li>
        <p>👋</p>
      </li>
    </ul>
  </div>
  )
}

export default footer