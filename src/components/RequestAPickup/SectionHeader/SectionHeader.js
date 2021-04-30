import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import classesHomePage from "../../HomePageComponents/SectionHeader/sectionHeader.module.scss"
import classes from "../../AboutUsComponents/SectionHeader/sectionHeader.module.scss"
import ArrowLeft from "../../../images/Arrow-left.svg"


export default function SectionHeader(){

  const sectionHeader = useStaticQuery(graphql`
      {
          strapiRequestAPickup {
              Title
              Background {
                  alternativeText
                  url
              }
          }
      }
  `)

  const title = sectionHeader.strapiRequestAPickup.Title;
  return(
    <section style={{background: `url("${sectionHeader.strapiRequestAPickup.Background[0].url}")`}} className={`about-section ${classesHomePage.sectionHeader} request-a-pickup`} >
      <div className={`container row ${classesHomePage.justifyContent}`} style={{
        height: `100%`,
        justifyContent: `center`,
        flexDirection: 'column',
        alignItems: `flex-end`,
      }}>

        <h2  className={classes.sectionHeaderTitle}>{title}</h2>
        <Link className={classes.backHomeLink} to={`/`}><img src={ArrowLeft} alt="" />Back home</Link>
      </div>
    </section>
  )
}