import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import classes from "./sectionQuantity.module.scss"
import Image1 from "../../../images/Icon1.png"
import Image2 from "../../../images/Icon2.png"
import Image3 from "../../../images/Icon3.png"
import Image4 from "../../../images/Smile.svg"



export default function SectionQuantity(){
  const data = useStaticQuery(graphql`
      {
          strapiAboutUsPage {
              SectionQuantity {
                  Dental_Technicians
                  Happy_Clients
                  Crowns_Delivered
                  Smiles_Created
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
            <h2>{data.strapiAboutUsPage.SectionQuantity.Dental_Technicians}</h2>
            <h3>Dental Technicians</h3>
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
            <h2>{data.strapiAboutUsPage.SectionQuantity.Crowns_Delivered}</h2>
            <h3>Crowns Delivered
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
            <h2>{data.strapiAboutUsPage.SectionQuantity.Smiles_Created}</h2>
            <h3>Smiles Created</h3>
          </div>

        </div>
      </div>

    </section>
  )
}