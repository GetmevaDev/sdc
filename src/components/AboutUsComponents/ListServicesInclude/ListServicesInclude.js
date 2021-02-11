import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import classes from "./listServicesInclude.module.scss"

export default function ListServicesInclude(){
  const data = useStaticQuery(graphql`
      {
          strapiAboutUsPage {
              ListServicesInclude {
                  Our_Services_Include {
                      Text
                      id
                  }
                  Our_Specialties {
                      Text
                      id
                  }
                  What_we_do {
                      Text
                      id
                  }
              }
          }
      }
  `)

  return(
    <section style={{paddingTop: 0}}>
      <div className={`container row ${classes.flexStyles}`}>
        <div className="block-list">
          <h4>What we do:</h4>
          <ul>
            {
              data.strapiAboutUsPage.ListServicesInclude.What_we_do.map( list =>(
                <li className={`row ${classes.listStile}`} key={list.id}><div className={classes.dot}></div> {list.Text}</li>
              ))
            }

          </ul>
        </div>
        <div className="block-list">
          <h4>Our Services Include:</h4>
          <ul>
            {
              data.strapiAboutUsPage.ListServicesInclude.Our_Services_Include.map( list =>(
                <li className={`row ${classes.listStile}`} key={list.id}><div className={classes.dot}></div>{list.Text}</li>
              ))
            }
          </ul>
        </div>
        <div className="block-list">
          <h4>Our Specialties:</h4>
          <ul>
            {
              data.strapiAboutUsPage.ListServicesInclude.Our_Specialties.map( list =>(
                <li className={`row ${classes.listStile}`} key={list.id}><div className={classes.dot}></div>{list.Text}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}