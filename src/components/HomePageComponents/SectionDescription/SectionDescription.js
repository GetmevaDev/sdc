import React, { useEffect } from "react"
import {graphql, useStaticQuery} from "gatsby"
import ReactMarkdown from "react-markdown"

import classes from "./sectionDescriptio.module.scss"
import Aos from "aos"
import "aos/dist/aos.css"

export default function SectionDescription(){

  useEffect(() => {
    Aos.init({duration: 400})
  },[])

  const description = useStaticQuery(graphql`
      {
          strapiHomePage {
              Description {
                  Title
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
        <section  className={classes.sectionDescription} >
          <div className={`row mw1640 ${classes.flexStyles}`}>
            <div className={classes.imageDescription}>
              <img data-aos-delay="200" data-aos="fade-up" src={description.strapiHomePage.Description.Image[0].url} alt={description.strapiHomePage.Description.Image[0].alternativeText} />
            </div>
            {
              description.strapiHomePage.Description && description.strapiHomePage.Description !== null ? (
                  <div data-aos-delay="200" data-aos="fade-left" className={classes.textContainer}>
                    <h2>{description.strapiHomePage.Description.Title}</h2>
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