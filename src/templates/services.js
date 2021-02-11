import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SectionHeader from "../components/Services/SectionHeader/SectionHeader"
import SectionBookAnAppointment from "../components/HomePageComponents/SectionBookAnAppointment/SectionBookAnAppointment"
import SectionForm from "../components/HomePageComponents/SectionForm/SectionForm"
import SectionContent from "../components/Services/SectionContent/SectionContent"
import SEO from "../components/seo"



const Services = ({ data }) =>{

  return(
    <Layout>
      <SEO seo={data.strapiServices.SEO_Blog_Page} />
        <SectionHeader
        title={data.strapiServices.Title}
        background={data.strapiServices.Background_Section_Header.Background.length !== 0 ?
          data.strapiServices.Background_Section_Header.Background[0].url : ""}
        />
        <SectionContent
        dataServices={data.strapiServices}
        />
      <SectionBookAnAppointment />
      <SectionForm />
    </Layout>
  )
}


export default Services
export const queryServices = graphql`
    query ServicesQuery($slug: String){
        strapiServices(slug: {eq: $slug}){
            Title
            Text
            SEO_Services {
                Description
                Image_Url
                Title
            }
            Background_Section_Header {
                Background {
                    url
                    alternativeText
                }
            }
            Image {
                alternativeText
                url
            }
        }
    }
`