import React from "react"
import {graphql, useStaticQuery} from "gatsby"

import classes from "./numberPhone.module.scss"
import CallIcon from "../../../images/phone-call (3).svg"

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
          <a className={classes.number} href={`tel:${number}`}>
            <span>{number}</span>
            <span><img src={CallIcon} alt={CallIcon} />Call Us</span>
          </a>
          <a className={classes.link} href={appointment}>Book An Appointment </a>

    </div>
  )
}