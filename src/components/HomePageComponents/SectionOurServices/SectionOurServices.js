import React, { useEffect } from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import Arrow from "../../../images/Arrow 1.svg"

import classes from "./sectionOurServices.module.scss"
import Aos from "aos"
import "aos/dist/aos.css"


export default function SectionOurServices(){

  useEffect(() => {
    Aos.init({duration: 400})
  },[])

  const sectionOurServices = useStaticQuery(graphql`
      {
          strapiHomePage {
              Section_Our_Services {
                  Title
                  Subtitle
                  BackgrounSection {
                      url
                      alternativeText
                  }
              }
          } 
          ourServices:  allStrapiServices(skip: 1, limit: 4) {
              nodes {   
                  Background_Section_Header {
                      Icon {
                          alternativeText
                          url
                      }
                  }
                  Title
                  Text
                  slug
                  id
              }
          }
      }
  `)


  const background = sectionOurServices.strapiHomePage.Section_Our_Services.BackgrounSection &&
    sectionOurServices.strapiHomePage.Section_Our_Services.BackgrounSection[0] !== null ?
    sectionOurServices.strapiHomePage.Section_Our_Services.BackgrounSection[0].url : null;

  const title = sectionOurServices.strapiHomePage.Section_Our_Services.Title;
  const subtitle = sectionOurServices.strapiHomePage.Section_Our_Services.Subtitle;

  return(
    <section data-aos-delay="1000" data-aos="fade-up" className={classes.sectionOurServices} style={{
      background: `url("${background}")`,
      marginBottom: 145,
    }}>
      <div className={`container row ${classes.adaptive}`} style={{
        alignItems: 'center',
      }}>
        <div className={classes.titleServices}>
          {title && title !== null ? (
            <h2>{title}</h2>
          ) : null}

          {subtitle && subtitle !== null ? (
            <h3>{subtitle}</h3>
          ) : null}

            <Link className={classes.allServices} to={`/`}>All services <img src={Arrow} alt="" /></Link>
        </div>

        <div className={`${classes.servicesCards} row`}>

          {
            sectionOurServices.ourServices.nodes.map(card => (
              <div className={classes.servicesCard}>
                <div>

                  <img
                    src={card.Background_Section_Header.Icon.length !== 0 ?
                      card.Background_Section_Header.Icon[0].url : ""}
                    alt={ card.Background_Section_Header.Icon.length !== 0 ?
                      card.Background_Section_Header.Icon[0].alternativeText : ""}
                  />
                </div>
                <h4 className={`title-card`}>{card.Title}</h4>
                <span className={`text-card`}>{card.Text.substring(0,99)}</span>
                <Link to={card.slug}>More info</Link>
              </div>
            ))
          }

        </div>
      </div>
    </section>
  )
}