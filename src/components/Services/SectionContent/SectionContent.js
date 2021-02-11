import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import classesDescription from "../../HomePageComponents/SectionDescription/sectionDescriptio.module.scss"
import classes from "../../AboutUsComponents/AboutDoctor/aboutDoctor.module.scss"
import classesContent from "./sectionContent.module.scss"
import ReactMarkdown from "react-markdown"



export default function SectionContent({ dataServices }){



  return(
    <section className={classesContent.sectionContent } >
      <div className={`row mw1640 ${classesDescription.flexStyles} ${classes.flexStyles}`}>
        <div className={classesContent.imageContent}>
          <img
            src={dataServices.Image.length !== 0 ?
              dataServices.Image[0].url : ""}
            alt={dataServices.Image.length !== 0 ?
              dataServices.Image[0].alternativeText : ""}
          />
        </div>
        {
          dataServices && dataServices !== null ? (
            <div className={`${classesDescription.textContainer} ${classes.textContainer} ${classesContent.textContainer}`}>
              <h2>{dataServices.Title}</h2>
              <ReactMarkdown
                source={dataServices.Text}
              />
            </div>


          ) : null
        }


      </div>
      <div className={`container ${classesContent.mw690}`}>
        <Link to={`/`} className={classesContent.linkContactUs}>If you haven’t seen a dentist in a long time, or if you are having a problem with your teeth,
          call Dr. Sapozhnik at +1 (914) 734-9557 to schedule your dental visit.</Link>
      </div>
    </section>
  )
}