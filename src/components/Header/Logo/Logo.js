import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"

import classes from "./logo.module.scss"

export default function Logo() {

  const logo = useStaticQuery(graphql`
      {
          strapiLogo {
              Site_Logo {
                  url
                  alternativeText
              }
          }
      }
  `)


  return(
      <Link className={classes.logoLink} to={`/`}>
        {
          logo.strapiLogo.Site_Logo &&  logo.strapiLogo.Site_Logo !== null ?(
            <img src={logo.strapiLogo.Site_Logo[0].url} alt={logo.strapiLogo.Site_Logo[0].alternativeText} />
          ) : null
        }
      </Link>
  )
}