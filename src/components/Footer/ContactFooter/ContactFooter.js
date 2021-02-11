import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import classes from "./contactFooter.module.scss"
import Clock from "../../../images/clock.svg"
import Clock2 from "../../../images/clock2.svg"


export default function ContactFooter(){

  const data = useStaticQuery(graphql`
      {
          strapiContacts {
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
    <div className={classes.contactsFooter}>
      <div className={classes.socialMedia}>
        <ul className={`row`}>
          {
            data.strapiContacts.Social_Media.map(item => (
              <li>
                <a href={item.Link}><span className={`fa fa-${item.Name}`}></span></a>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="contact-data">
        <div className={classes.location}>
          <img src={Clock} alt="" />
          <a href={data.strapiContacts.Location.Link}>{data.strapiContacts.Location.Name_Location}</a>
        </div>
        <div className={classes.phoneAndEmail}>
            <div className="icon">
              <img src={Clock2} alt="" />
            </div>
          <div>
            <a href={`tel:${data.strapiContacts.Number_Phone}`}>P:{data.strapiContacts.Number_Phone}</a>
            <a href={`tel:${data.strapiContacts.Second_Phone}`}>F:{data.strapiContacts.Second_Phone}</a>
            <a href={`mailto:${data.strapiContacts.Email}`}>{data.strapiContacts.Email}</a>
          </div>
        </div>
      </div>
    </div>
  )
}