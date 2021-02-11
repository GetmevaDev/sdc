import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Layout from "../components/layout"
import SectionHeader from "../components/Services/SectionHeader/SectionHeader"
import SectionBookAnAppointment
  from "../components/HomePageComponents/SectionBookAnAppointment/SectionBookAnAppointment"
import SectionForm from "../components/HomePageComponents/SectionForm/SectionForm"
import SectionSocial from "../components/Reviews/SectionSocial/SectionSocial"
import SectionComments from "../components/Reviews/SectionComments/SectionComments"
import SEO from "../components/seo"



const Reviews = ({ data }) =>{
  return(
    <Layout>
      <SEO seo={data.seo.SEO_Blog_Page} />
      <SectionHeader
      title={data.strapiReviews.Title}
      background={data.strapiReviews.Background_Section_Header[0].url}
      />
      <SectionSocial />
      <SectionComments />
      <SectionBookAnAppointment />
      <SectionForm />
    </Layout>
  )
}

export default Reviews
export const queryReviews = graphql`
    {
        strapiReviews {
            Title
            Background_Section_Header {
                url
                alternativeText
            }
        }
        seo: strapiReviews {
            SEO_Reviews {
                Description
                Image_Url
                Title
            }
        }
    }
`