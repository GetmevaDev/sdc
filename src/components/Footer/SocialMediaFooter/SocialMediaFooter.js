import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import classes from "./socialMediaFooter.scss";
import classesTwo from "../ContactFooter/contactFooter.module.scss"



export default function SocialMediaFooter(){

  const data = useStaticQuery(graphql`
      {
          strapiLogo {
              Site_Logo {
                  alternativeText
                  url
              }
              Text
          }
          list: strapiContacts {
              Location {
                  Name_Location
                  Link
              }
              Number_Phone
              Second_Phone
              Email
              Social_Media {
                  Name
                  Link
                  id
              }
          }
      }
  `)

  return(
    <div className={classes.blockLogoFooter}>

      <div className={classesTwo.socialMedia}>
        <ul className={`row`}>
          {
            data.list.Social_Media.map(item => (
              <li className={classesTwo.listSocial}>
                <a href={item.Link}>
                  <span className={`fa fa-${item.Name}`}></span>
                </a>
              </li>
            ))
          }
        </ul>
      </div>
      <p className={classesTwo.text} style={{
        color: `rgba(255, 255, 255, 0.6)`,
        maxWidth: 344,
      }}>{data.strapiLogo.Text}</p>
    </div>
  )
}