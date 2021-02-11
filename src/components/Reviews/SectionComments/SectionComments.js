import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import ImagePhoto from "../../../images/Group2353546457.png"
import classes from "./sectionComments.module.scss"

export default function SectionComments(){

  const data = useStaticQuery(graphql`
      {
          allStrapiComments(skip: 1) {
              edges {
                  node {
                      Name
                      Comment
                      Photo {
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
        <h2 className={classes.sectionTitle}>Reviews</h2>
        <span className={classes.sectionSubtitle}>Check What Our Clients Say about us</span>


        <div className={`container row ${classes.flexStyles}`}>
          {
            data.allStrapiComments.edges.map((comment,i) => (
              <div className={`${classes.cardComment} demo-box-${i}`}>
                <div className={`${classes.nameAndPhoto} row`}>
                  <img
                    src={comment.node.Photo.length === 0 ?
                      ImagePhoto : comment.node.Photo[0].url}
                    alt={comment.node.Photo.length === 0 ?
                       'Photo' : comment.node.Photo[0].alternativeText} />
                  <div className="name">
                    <h4>{comment.node.Name}</h4>
                    <span>Patient</span>
                  </div>
                </div>
                <p>{comment.node.Comment}</p>
              </div>
            ))
          }

        </div>
      </section>
  )
}