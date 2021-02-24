import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import LogoFooter from "./LogoFooter/LogoFooter"
import classes from "./footer.module.scss"
import BlockCareCredit from "./BlockCareCredit/BlockCareCredit"
import ContactFooter from "./ContactFooter/ContactFooter"



export default function Footer(){

  const data = useStaticQuery(graphql`
      {
          strapiContacts {
              Footer_lost_text
          }
      }
  `)

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
      }}>{data.strapiContacts.Footer_lost_text}</p>
    </footer>
  )
}