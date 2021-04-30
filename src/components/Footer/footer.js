import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import SocialMediaFooter from "./SocialMediaFooter/SocialMediaFooter"
import classes from "./footer.module.scss"
import ContactFooter from "./ContactFooter/ContactFooter"
import LogoFooter from "./LogoFooter/LogoFooter"



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
        <SocialMediaFooter />
        <LogoFooter />
        <ContactFooter />
      </div>
      <p className={classes.lastP} style={{
        textAlign: `center`,
        background: `#212121`,
        marginBottom: 0,
        paddingTop: 16,
        paddingBottom: 16,
        color: `#fff`
      }}>{data.strapiContacts.Footer_lost_text}</p>
    </footer>
  )
}