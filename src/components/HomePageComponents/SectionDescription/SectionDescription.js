import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import ReactMarkdown from "react-markdown"

import classes from "./sectionDescriptio.module.scss"


export default function SectionDescription(){

  const description = useStaticQuery(graphql`
      {
          strapiHomePage {
              Description {
                  Title
                  Subtitle
                  Text
                  Image {
                      url
                      alternativeText
                  }
              }
          }
      }
  `)


  return(
    <>
    {
      description.strapiHomePage ? (
        <section className={classes.sectionDescription} >
          <div className={`row mw1640 ${classes.flexStyles}`}>
            <div className={classes.imageDescription}>
              <img src={description.strapiHomePage.Description.Image[0].url} alt={description.strapiHomePage.Description.Image[0].alternativeText} />
            </div>
            {
              description.strapiHomePage.Description && description.strapiHomePage.Description !== null ? (
                  <div className={classes.textContainer}>
                    <h2>{description.strapiHomePage.Description.Title}</h2>
                    <h3>{description.strapiHomePage.Description.Subtitle}</h3>
                    <ReactMarkdown
                      source={description.strapiHomePage.Description.Text}
                    />
                  </div>


              ) : null
            }


          </div>
        </section>
      ) : null
    }
    </>
  )
}