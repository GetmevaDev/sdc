import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import classesSectionDescription from "../../HomePageComponents/SectionDescription/sectionDescriptio.module.scss"
import classes from "./sectionBeforeAfter.module.scss"
import ReactMarkdown from "react-markdown"



export default function SectionNewSpecial(){


  const data = useStaticQuery(graphql`
      {
          strapiBeforeAndAfter {
              Before_After {
                  Title
                  Text
                  Image {
                      alternativeText
                      url
                  }
              }
          }
      }
  `)

  return(
    <>
      {
        data.strapiBeforeAndAfter.Before_After.map(elem =>(
          <section className={classes.sectionBeforeAfter} >
            <div className={`row mw1640 ${classes.flexStyles} `}>
              <div className={classesSectionDescription.imageDescription}>
                <img
                  src={elem.Image[0].url}
                  alt={elem.Image[0].alternativeText}
                />
              </div>
              {
                elem && elem !== null ? (
                  <div className={classesSectionDescription.textContainer}>
                    <h2>{elem.Title}</h2>
                    <ReactMarkdown
                      source={elem.Text}
                    />

                  </div>


                ) : null
              }


            </div>
          </section>
        ))
      }

      </>
  )
}