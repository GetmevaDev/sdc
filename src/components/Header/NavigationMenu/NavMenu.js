import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import Arrow from "../../../images/Arrow 1.svg"

import classes from "./navMenu.module.scss"





export default function NavMenuButton({ click }){

    return(

      <button onClick={click} className={classes.buttonMenu}><span>Menu</span><img src={Arrow} alt="Arrow" /></button>

    )
}