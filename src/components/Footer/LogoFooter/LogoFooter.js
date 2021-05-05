import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import classes from "./logoFooter.module.scss"


const LogoFooter = () =>{

  const data = useStaticQuery(graphql`
      {
          strapiLogo {
              Logo_Footer {
                  alternativeText
                  url
              }
          }
      }
  `)
  return(
    <div className={classes.logoFooter}>
      <img src={data.strapiLogo.Logo_Footer[0].url} alt={data.strapiLogo.Logo_Footer[0].alternativeText} />
    </div>
  )
}

export default LogoFooter