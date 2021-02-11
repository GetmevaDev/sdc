import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import classes from "./sectionSocial.module.scss"


export default function SectionSocial() {

  const data = useStaticQuery(graphql`
      {
          strapiReviews {
              Leave_a_Review {
                  Social {
                      id
                      Name
                      Link
                      Image {
                          alternativeText
                          url
                      }
                  }
              }
          }
      }
  `)

  return(
    <section>
      <h2 className={classes.sectionTitle}>
        Leave a Review
      </h2>
      <span className={classes.sectionSubtitle}>
            We are happy to have you as a patient and hope you enjoy your visit.
            We’d love to hear about your experience and let others to know it too! Please leave us a review.
        </span>
      <div className={`container row ${classes.flexStyles}`}>
        {
          data.strapiReviews.Leave_a_Review.Social.map(link => (
            <a key={link.id} href={link.Link} className={classes.socialCard}>
              <img src={link.Image[0].url} alt={link.Image[0].alternativeText} />
              <h4>{link.Name}</h4>
            </a>
          ))
        }

      </div>
    </section>
  )
}