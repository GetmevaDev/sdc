import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import classes from "./sectionHeader.module.scss"


export default function SectionHeader(){

  const sectionHeader = useStaticQuery(graphql`
      {
          strapiHomePage {
              Section_Header {
                  Title
                  Subtitle
                  Background {
                      url
                      alternativeText
                  }
              }
          }
      }
  `)

  const title = sectionHeader.strapiHomePage.Section_Header.Title;
  const subtitle = sectionHeader.strapiHomePage.Section_Header.Subtitle;

  return(
    <section className={classes.sectionHeader} style={{
      background: `url("${sectionHeader.strapiHomePage.Section_Header.Background[0].url}")`
    }}>
      <div className={`container row ${classes.justifyContent}`} style={{
        height: `100%`,
        justifyContent: `center`,
        flexDirection: 'column',
        alignItems: `flex-end`,
      }}>
        {
          title && subtitle ? (
            <>
              <h2 className={classes.sectionHeader_title}>{title}</h2>
              <h3 className={classes.sectionHeader_subtitle}>{subtitle}</h3>

              </>
          ) : null
        }

      </div>
    </section>
  )
}