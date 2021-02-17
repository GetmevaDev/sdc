import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import classesHomePage from "../../HomePageComponents/SectionHeader/sectionHeader.module.scss"
import classes from "./sectionHeader.module.scss"
import ArrowLeft from "../../../images/Arrow-left.svg"


export default function SectionHeader(){

  const sectionHeader = useStaticQuery(graphql`
      {
          strapiAboutUsPage {
              Title
              Background_Section_Header {
                  alternativeText
                  url
              }
          }
      }
  `)

  const title = sectionHeader.strapiAboutUsPage.Title;


  return(
    <section className={classesHomePage.sectionHeader} style={{
      background: `url("${sectionHeader.strapiAboutUsPage.Background_Section_Header[0].url}")`
    }}>
      <div className={`container row ${classesHomePage.justifyContent}`} style={{
        height: `100%`,
        justifyContent: `center`,
        flexDirection: 'column',
        alignItems: `flex-end`,
      }}>

        <h2 data-aos-delay="600" data-aos="fade-left" className={classes.sectionHeaderTitle}>{title}</h2>
        <Link className={classes.backHomeLink} to={`/`}><img src={ArrowLeft} alt="" /> Back home</Link>
      </div>
    </section>
  )
}