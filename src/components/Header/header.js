import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import NavMenuButton from "./NavigationMenu/NavMenu"
import Logo from "./Logo/Logo"
import NumberPhone from "./NumberPhone/NumberPhone"

import classes from "./header.module.scss"




const Header = ( { children, func } ) => {


  return(
      <header className={`site-header`} style={{
        background: `#0C488E`,
      }}>

        <div className={`container row ${classes.rowReverse}`} style={{
          justifyContent: `space-between`,
          alignItems: `center`,
        }}>

          <NavMenuButton
            click={func}
          />
          <Logo />
          <NumberPhone />
        </div>
        {children}


      </header>
    )

}






export default Header
