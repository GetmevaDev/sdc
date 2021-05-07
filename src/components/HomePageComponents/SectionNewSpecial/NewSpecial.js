import React, { useEffect } from "react"
import {graphql, useStaticQuery} from "gatsby"
import classesSectionDescription from "../SectionDescription/sectionDescriptio.module.scss"
import classes from "./newSpecial.module.scss"
import ReactMarkdown from "react-markdown"
import Aos from "aos"
import "aos/dist/aos.css"


export default function SectionNewSpecial(){

  useEffect(() => {
    Aos.init({duration: 400})
  },[])

  const data = useStaticQuery(graphql`
      {
          strapiHomePage {
              Section_Special {
                  Title
                  Text
                  Subtitle
                  Image {
                      url
                      alternativeText
                  }
              }
          }
      }
  `)

  return(
    <section className={classes.sectionSpecial} >
      <div className={`row mw1640 ${classesSectionDescription.flexStyles}`}>
        <div className={classesSectionDescription.imageDescription}>
          <img data-aos-delay="200" data-aos="fade-up" src={data.strapiHomePage.Section_Special.Image[0].url} alt={data.strapiHomePage.Section_Special.Image[0].alternativeText} />
        </div>
        {
          data.strapiHomePage.Section_Special && data.strapiHomePage.Section_Special !== null ? (
            <div data-aos-delay="200" data-aos="fade-left" className={classesSectionDescription.textContainer}>
              <h2>{data.strapiHomePage.Section_Special.Title}</h2>
              <h3>{data.strapiHomePage.Section_Special.Subtitle}</h3>
              <ReactMarkdown
                source={data.strapiHomePage.Section_Special.Text}
              />
            </div>
          ) : null
        }


      </div>
    </section>
  )
}