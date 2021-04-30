import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import { Content } from "./Content"
import { Navigation } from "./Navigation"

export function ContentBlock({content, navigation}){


  const data = useStaticQuery(graphql`
      {
          strapiDigitalCaseSubmissionPage {
              Title_Content_block
              Subtitle_Content_block
          }
      }
  `)

  return(
    <section className={'section-content'}>
      <h2 className="title-block">{data.strapiDigitalCaseSubmissionPage.Title_Content_block}</h2>
      <p className="subtitle-block">{data.strapiDigitalCaseSubmissionPage.Subtitle_Content_block}</p>
      <div className={`row container`}>
        <Navigation data={navigation} />
        <Content data={content} />
      </div>
    </section>
  )
}