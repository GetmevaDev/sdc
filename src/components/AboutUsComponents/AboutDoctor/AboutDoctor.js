import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import classesDescription from "../../HomePageComponents/SectionDescription/sectionDescriptio.module.scss"
import classes from "./aboutDoctor.module.scss"
import ReactMarkdown from "react-markdown"


export default function AboutDoctor(){

  const data = useStaticQuery(graphql`
      {
          strapiAboutUsPage {
              About_Smile_Design_Center {
                  Title
                  Subtitle
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
    <section className={classesDescription.sectionDescription} >
      <div className={`row mw1640 ${classesDescription.flexStyles} ${classes.flexStyles}`}>
        <div className={classesDescription.imageDescription}>
          <img
            src={data.strapiAboutUsPage.About_Smile_Design_Center.Photo[0].url}
            alt={data.strapiAboutUsPage.About_Smile_Design_Center.Photo[0].alternativeText}
          />
        </div>
        {
          data.strapiAboutUsPage.About_Smile_Design_Center && data.strapiAboutUsPage.About_Smile_Design_Center !== null ? (
            <div className={`${classesDescription.textContainer} ${classes.textContainer}`}>
              <h2>{data.strapiAboutUsPage.About_Smile_Design_Center.Title}</h2>
              <h3>{data.strapiAboutUsPage.About_Smile_Design_Center.Subtitle}</h3>
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