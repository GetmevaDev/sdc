import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import classes from "./logoFooter.module.scss"


const LogoFooter = () =>{

  const data = useStaticQuery(graphql`
      {
          strapiLogo {
              Site_Logo {
                  alternativeText
                  url
              }
          }
      }
  `)
  return(
    <div className={classes.logoFooter}>
      <img src={data.strapiLogo.Site_Logo[0].url} alt={data.strapiLogo.Site_Logo[0].alternativeText} />
    </div>
  )
}

export default LogoFooter