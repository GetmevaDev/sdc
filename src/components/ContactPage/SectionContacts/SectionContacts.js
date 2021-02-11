import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import Map from "../../../images/maps 1.svg"
import Calendar from "../../../images/calendar 1.svg"
import PhoneNumber from "../../../images/phone-call (2) 1.svg"
import classes from "./sectionStyleContacts.module.scss"



export default function SectionContact(){


  const data = useStaticQuery(graphql`
      {
          strapiContacts {
              Location {
                  Text_Location
                  Link
              }
              Work_Days {
                  Days
                  Time
                  id
              }
              Number_Phone
              Second_Phone
              Email
          }
      }
  `)
  return(
    <section style={{
      paddingBottom: 0,
      paddingTop: 0,
      marginTop: -100
    }}>
      <div className={`container row ${classes.flexStyles}`}>
        <div className={classes.contactCard}>
          <div className={classes.imageIcon}>
            <img src={Map} alt="map" />
          </div>
          <Link to={data.strapiContacts.Location.Link}>{data.strapiContacts.Location.Text_Location}</Link>
        </div>
        <div className={classes.contactCard}>
          <div className={classes.imageIcon}>
            <img src={Calendar} alt="Calendar" />
          </div>
          {
            data.strapiContacts.Work_Days.map(item => (
              <div className={classes.dayAndTime} key={item.id}>
                <span className={classes.bold}>{item.Days}</span> <span>{item.Time}</span>
              </div>
            ))
          }

        </div>
        <div className={classes.contactCard}>
          <div className={classes.imageIcon}>
            <img src={PhoneNumber} alt="Phone Number" />
          </div>
          <a href={`mailto:${data.strapiContacts.Email}`}>{data.strapiContacts.Email}</a>
          <a className={classes.bold} href={`tel:${data.strapiContacts.Number_Phone}`}>{data.strapiContacts.Number_Phone}</a>
          <a className={classes.bold} href={`tel:${data.strapiContacts.Second_Phone}`}>{data.strapiContacts.Second_Phone}</a>
        </div>


      </div>
    </section>
  )
}