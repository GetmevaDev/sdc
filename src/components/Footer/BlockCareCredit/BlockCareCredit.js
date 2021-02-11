import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import classes from "./blockCareCredit.module.scss"
import Star from "../../../images/Star 1.svg"

export default function BlockCareCredit(){

  const data = useStaticQuery(graphql`
      {
          strapiRating {
              Care_Credit {
                  Link
                  Image {
                      url
                      alternativeText
                  }
              }
              Voits
              Stars
              Procents
          }
      }
  `)

  return(
    <div className={classes.blockCareCard}>
      <a href={data.strapiRating.Care_Credit.Link}>
        <img
          className={classes.careCard}
          src={data.strapiRating.Care_Credit.Image[0].url} 
          alt={data.strapiRating.Care_Credit.Image[0].alternativeText} />
      </a>
      <div className={`row`} style={{
        justifyContent: `space-between`
      }}>
        <div className="block-stars">
          {
            Array.from(Array(data.strapiRating.Stars), (star, i) => {
              return (<img src={Star} key={i} alt={`Star`} />)
            })
          }

        </div>
        <div className="votes-percentage">
          <span>{data.strapiRating.Procents}</span>
          <span>{data.strapiRating.Voits} voits</span>
        </div>
      </div>
    </div>
  )
}