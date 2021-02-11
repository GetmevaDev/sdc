import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import classes from "./sectionBookAnAppointment.module.scss"





export default function SectionBookAnAppointment(){


  const link = useStaticQuery(graphql`
      {
          strapiContacts {
              Book_An_Appointment
          }
      }
  `)

    return(
      <section className={classes.sectionAnAppointment}>
        <div className={`container row ${classes.flexStyles}`}>
            <h2>Call or Email to book
              an appointment today!</h2>
          <a href={link.strapiContacts.Book_An_Appointment}>Book An Appointment</a>
        </div>
      </section>
    )
}