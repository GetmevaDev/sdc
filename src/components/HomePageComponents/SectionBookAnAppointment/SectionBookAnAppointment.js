import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import classes from "./sectionBookAnAppointment.module.scss"
import sectionHeaderClasses from "../SectionHeader/sectionHeader.module.scss"
import Arrow from "../../../images/Arrow 1.svg"


export default function SectionBookAnAppointment(){


  const data = useStaticQuery(graphql`
      {
          strapiContacts {
              Background_Book_An_Appointment{
                url 
              }
          }
          links: strapiHomePage {
              Section_Header {
                  Links {
                      id
                      Link
                      Name_Link
                  }
              }
          }
      }
  `)

    return(
      <section style={{
        background: `#787D88 url("${data.strapiContacts.Background_Book_An_Appointment[0].url}") center no-repeat`,
        backgroundSize: `cover`,
      }} className={classes.sectionAnAppointment}>
        <div className={`container row ${classes.flexStyles}`}>
          {
              data.links.Section_Header.Links.map(item => (
                <a key={item.id} className={sectionHeaderClasses.link} href={item.Link}>
                  {item.Name_Link}
                  <img src={Arrow} alt="" />
                </a>
              ))
          }
        </div>
      </section>
    )
}