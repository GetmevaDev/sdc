import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import classes from "./logoFooter.module.scss"


export default function LogoFooter(){

  const data = useStaticQuery(graphql`
      {
          strapiLogo {
              Site_Logo {
                  alternativeText
                  url
              }
              Text
          }
      }
  `)

  return(
    <div className={classes.blockLogoFooter}>
      <img src={data.strapiLogo.Site_Logo[0].url} alt={data.strapiLogo.Site_Logo[0].alternativeText} />
      <p>{data.strapiLogo.Text}</p>
    </div>
  )
}