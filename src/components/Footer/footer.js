import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import LogoFooter from "./LogoFooter/LogoFooter"
import classes from "./footer.module.scss"
import BlockCareCredit from "./BlockCareCredit/BlockCareCredit"
import ContactFooter from "./ContactFooter/ContactFooter"



export default function Footer(){



  return(
    <footer className={classes.footer}>
      <div className={`container row ${classes.flexStyles}`} style={{
        paddingTop: 100,
        paddingBottom: 100
      }}>
        <LogoFooter />
        <BlockCareCredit />
        <ContactFooter />
      </div>
      <p className={classes.lastP} style={{
        textAlign: `center`,
        background: `#093F7D`,
        marginBottom: 0,
        paddingTop: 16,
        paddingBottom: 16,
        color: `#fff`
      }}>2020 Smile Design Center of Westchester, ALL RIGHTS RESERVED.</p>
    </footer>
  )
}