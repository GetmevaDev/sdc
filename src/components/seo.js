/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import { Location } from "@reach/router"

function SEO({ seo, location }) {
  const common = useStaticQuery(graphql`
      {
          strapiCommonMetaData {
              OG_Locale
              OG_Site_Name
              OG_Type
          }
      }
  `)



  return (
    <Helmet
      htmlAttributes={{ lang: "en", prefix: `og: http://ogp.me/ns#` }}
      title={seo !== undefined ? seo.Title : ""}
      meta={[
        {
          name: `description`,
          content: seo !== undefined ? seo.Description : "",
        },
        {
          property: `og:title`,
          content: seo !== undefined ? seo.Title : "",
        },
        {
          property: `og:locale`,
          content: common.strapiCommonMetaData.OG_Locale,
        },
        {
          property: `og:description`,
          content: seo !== undefined ? seo.Description : "",
        },
        {
          property: `og:type`,
          content: common.strapiCommonMetaData.OG_Type,
        },
        {
          property: `og:site_name`,
          content: common.strapiCommonMetaData.OG_Site_Name,
        },
        {
          property: `og:url`,
          content: location.href,
        },
        {
          property: `og:image`,
          content: seo !== undefined && seo.Image_Url !== null ? seo.Image_Url : "",
        },
        {
          property: `og:image:secure_url`,
          content: seo !== undefined ? seo.Image_Url : "",
        },
        {
          property: `og:image:width`,
          content: seo !== undefined ? seo.Image_Width : "",
        },
        {
          property: `og:image:height`,
          content: seo !== undefined ? seo.Image_Height : "",
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: seo !== undefined ? seo.Title : "",
        },
        {
          name: `twitter:description`,
          content: seo !== undefined ? seo.Description : "",
        },
      ]}
    >

    </Helmet>
  )
}

export default props => (
  <Location>{locationProps => <SEO {...locationProps} {...props} />}</Location>
)
