import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import classes from "./sectionQuantity.module.scss"
import Image1 from "../../../images/Group12.png"
import Image2 from "../../../images/Group13.png"
import Image3 from "../../../images/toothache 1.png"
import Image4 from "../../../images/instagram 2.png"



export default function SectionQuantity(){
  const data = useStaticQuery(graphql`
      {
          strapiAboutUsPage {
              SectionQuantity {
                  Dentist
                  Happy_Clients
                  Teeth_Pulled
                  Instagram_Followers
                  Backgroun_Section {
                      alternativeText
                      url
                  }
              }
          }
      }
  `);

  return(
    <section className={classes.sectionQuantity} style={{
      background: `url("${data.strapiAboutUsPage.SectionQuantity.Backgroun_Section[0].url}")`,
      marginBottom: 150
    }}>

      <div className={`container row ${classes.flexStyle}`}>
        <div data-aos-delay="1000" data-aos="fade-up" className={`block-items row ${classes.blockItems_flexStyle}`}>
          <div className={classes.blockImage}>
            <img
              src={Image1}
              alt={Image1}
            />
          </div>
          <div>
            <h2>{data.strapiAboutUsPage.SectionQuantity.Dentist}</h2>
            <h3>Dentist</h3>
          </div>

        </div>
        <div data-aos-delay="1300" data-aos="fade-up" className={`block-items row ${classes.blockItems_flexStyle}`}>
          <div className={classes.blockImage}>
            <img
              src={Image2}
              alt={Image2}
            />
          </div>
          <div>
            <h2>{data.strapiAboutUsPage.SectionQuantity.Happy_Clients}</h2>
            <h3>Happy Clients</h3>
          </div>

        </div>
        <div data-aos-delay="1600" data-aos="fade-up" className={`block-items row ${classes.blockItems_flexStyle}`}>
          <div className={classes.blockImage}>
            <img
              src={Image3}
              alt={Image3}
            />
          </div>
          <div>
            <h2>{data.strapiAboutUsPage.SectionQuantity.Teeth_Pulled}</h2>
            <h3>Teeth Pulled
            </h3>
          </div>

        </div>
        <div data-aos-delay="1900" data-aos="fade-up" className={`block-items row ${classes.blockItems_flexStyle}`}>
          <div className={classes.blockImage}>
            <img
              src={Image4}
              alt={Image4}
            />
          </div>
          <div>
            <h2>{data.strapiAboutUsPage.SectionQuantity.Instagram_Followers}</h2>
            <h3>Instagram Followers</h3>
          </div>

        </div>
      </div>

    </section>
  )
}