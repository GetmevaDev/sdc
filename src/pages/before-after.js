import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Layout from "../components/layout"
import SectionHeader from "../components/Services/SectionHeader/SectionHeader"
import SectionBookAnAppointment  from "../components/HomePageComponents/SectionBookAnAppointment/SectionBookAnAppointment"
import SectionForm from "../components/HomePageComponents/SectionForm/SectionForm"
import SectionNewSpecial from "../components/BeforeAfter/SectionBeforeAfter/SectionBeforeAfter"
import SEO from "../components/seo"



const BeforeAfter = ({ data }) =>{

  return(
    <Layout>
      <SEO seo={data.seo.SE0_Before_After} />
      <SectionHeader

      title={data.strapiBeforeAndAfter.Title}
      background={data.strapiBeforeAndAfter.Backgroun_Section_Header[0].url}
      />
      <SectionNewSpecial />
      <SectionBookAnAppointment />
      <SectionForm />
    </Layout>
  )
}


export default BeforeAfter
export const dataBeforeAndAfter = graphql`
    {
        strapiBeforeAndAfter {
            Title
            Backgroun_Section_Header {
                alternativeText
                url
            }
        }
        seo: strapiBeforeAndAfter {
            SE0_Before_After {
                Description
                Image_Url
                Title
            }
        }
    }
`