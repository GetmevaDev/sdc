import React, { useEffect } from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import classesHomePage from "../../HomePageComponents/SectionHeader/sectionHeader.module.scss"
import classes from "../../AboutUsComponents/SectionHeader/sectionHeader.module.scss"
import ArrowLeft from "../../../images/Arrow-left.svg"
import Aos from "aos"
import "aos/dist/aos.css"

export default function SectionHeader({ title, background }){
  useEffect(() => {
    Aos.init({duration: 700})
  },[])
  return(
    <section className={classesHomePage.sectionHeader} style={{
      background: `#98a3c4 url("${background && background !== null ?
        background : null
      }")`
    }}>
      <div className={`container row ${classesHomePage.justifyContent}`} style={{
        height: `100%`,
        justifyContent: `center`,
        flexDirection: 'column',
        alignItems: `flex-end`,
      }}>

        <h2 data-aos-delay="1000" data-aos="fade-left" className={classes.sectionHeaderTitle}>{title}</h2>
        <Link className={classes.backHomeLink} to={`/`}><img src={ArrowLeft} alt="" /> Back home</Link>
      </div>
    </section>
  )
}