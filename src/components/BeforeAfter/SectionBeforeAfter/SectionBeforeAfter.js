import React, { useEffect } from "react"
import {graphql, useStaticQuery} from "gatsby"
import classesSectionDescription from "../../HomePageComponents/SectionDescription/sectionDescriptio.module.scss"
import classes from "./sectionBeforeAfter.module.scss"
import ReactMarkdown from "react-markdown"
import Aos from "aos"
import "aos/dist/aos.css"


export default function SectionNewSpecial(){

  useEffect(() => {
    Aos.init({duration: 400})
  },[])


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
                  data-aos-delay="1000" data-aos="fade-up"
                  src={elem.Image.length !== 0 ? elem.Image[0].url : null}
                  alt={elem.Image.length !== 0 ? elem.Image[0].alternativeText : ""}
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