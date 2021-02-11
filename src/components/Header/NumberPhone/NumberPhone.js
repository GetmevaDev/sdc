import React from "react"
import {graphql, useStaticQuery} from "gatsby"

import classes from "./numberPhone.module.scss"

export default function NumberPhone(){

  const contact = useStaticQuery(graphql`
      {
          strapiContacts {
              Number_Phone
              Book_An_Appointment
          }
      }
  `)

  const number = contact.strapiContacts.Number_Phone;
  const appointment = contact.strapiContacts.Book_An_Appointment;


  return(
    <div className={classes.contact}>
          <a className={classes.number} href={`tel:${number}`}>{number}</a>
          <a className={classes.link} href={appointment}>Book An Appointment </a>

    </div>
  )
}