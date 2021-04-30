import React, {useEffect} from "react"
import ReactMarkdown from "react-markdown"
import { graphql, Link, useStaticQuery } from "gatsby"
import classes from "./sectionHeader.module.scss"
import Aos from "aos"
import "aos/dist/aos.css"
import Arrow from "../../../images/Arrow 1.svg"

export default function SectionHeader(){
  useEffect(() => {
    Aos.init({duration: 700})
  },[])

  const data = useStaticQuery(graphql`
      {
          strapiHomePage {
              Section_Header {
                  id
                  Title_Subtitles
                  Links {
                      id
                      Link
                      Name_Link
                  }
                  Background {
                      alternativeText
                      url
                  }
              }
          }
      }
  `)

  const Title_Subtitles = data.strapiHomePage.Section_Header.Title_Subtitles;

  return(
    <section className={classes.sectionHeader} style={{
      background: `url("${data.strapiHomePage.Section_Header.Background[0].url}")`
    }}>
      <div className={`container row ${classes.justifyContent}`} style={{
        height: `100%`,
        justifyContent: `center`,
        flexDirection: 'column',
        alignItems: `flex-end`,
      }}>
              <ReactMarkdown
              source={Title_Subtitles} />
              <div>
                {
                  data.strapiHomePage.Section_Header.Links.map(item =>(
                    <a style={{zIndex: 16}} key={item.id} className={classes.link} href={item.Link}>{item.Name_Link} <img src={Arrow} alt="" /></a>
                  ))
                }
              </div>
      </div>
    </section>
  )
}