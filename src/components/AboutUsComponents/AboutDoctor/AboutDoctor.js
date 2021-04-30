import React, { useEffect } from "react"
import {graphql, useStaticQuery} from "gatsby"
import classesDescription from "../../HomePageComponents/SectionDescription/sectionDescriptio.module.scss"
import classes from "./aboutDoctor.module.scss"
import ReactMarkdown from "react-markdown"
import Aos from "aos"
import "aos/dist/aos.css"

export default function AboutDoctor({maxWidthImage}){

  useEffect(() => {
    Aos.init({duration: 400})
  },[])

  const data = useStaticQuery(graphql`
      {
          strapiAboutUsPage {
              About_Smile_Design_Center {
                  Title
                  Text
                  Photo {
                      alternativeText
                      url
                  }
              }
          }
      }
  `)

  return(
    <section className={classesDescription.sectionDescription}  >
      <div className={`row mw1640 ${classesDescription.flexStyles} ${classes.flexStyles}`}>
        <div
          style={{maxWidth: maxWidthImage}}
          className={classesDescription.imageDescription}>
          <img
            data-aos-delay="1000" data-aos="fade-up"
            src={data.strapiAboutUsPage.About_Smile_Design_Center.Photo[0].url}
            alt={data.strapiAboutUsPage.About_Smile_Design_Center.Photo[0].alternativeText}
          />
        </div>
        {
          data.strapiAboutUsPage.About_Smile_Design_Center && data.strapiAboutUsPage.About_Smile_Design_Center !== null ? (
            <div data-aos-delay="1000" data-aos="fade-left" className={`${classesDescription.textContainer} ${classes.textContainer}`}>
              <h2>{data.strapiAboutUsPage.About_Smile_Design_Center.Title}</h2>
              <ReactMarkdown
                source={data.strapiAboutUsPage.About_Smile_Design_Center.Text}
              />
            </div>
          ) : null
        }


      </div>
    </section>
  )
}