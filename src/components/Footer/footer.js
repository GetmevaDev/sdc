import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import SocialMediaFooter from "./SocialMediaFooter/SocialMediaFooter"
import classes from "./footer.module.scss"
import ContactFooter from "./ContactFooter/ContactFooter"
import LogoFooter from "./LogoFooter/LogoFooter"
import LogoM from "../../images/111.svg"



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
      <div className={`container`} style={{
        paddingTop: 100,
        paddingBottom: 100
      }}>
        <div className={`row ${classes.flexStyles}`}>
          <SocialMediaFooter />
          <LogoFooter />
          <ContactFooter />
        </div>
        <div className={`row manufacturer`}>
          <div className={`row adaptive-m`} style={{
            alignItems: `center`,
            marginLeft: 55,
            marginTop: 23,
          }}>
            <img src={LogoM} alt="" />
            <p>Web Design & Digital Marketing <br/>
              by <a href="">Robert Gerov Media</a></p>
          </div>
        </div>
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