import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SectionBookAnAppointment  from "../components/HomePageComponents/SectionBookAnAppointment/SectionBookAnAppointment"
import SectionForm from "../components/HomePageComponents/SectionForm/SectionForm"
import SectionComments from "../components/HomePageComponents/SectionComments/SectonComments"
import SectionHeader from "../components/AboutUsComponents/SectionHeader/SectionHeader"
import AboutDoctor from "../components/AboutUsComponents/AboutDoctor/AboutDoctor"
import ListServicesInclude from "../components/AboutUsComponents/ListServicesInclude/ListServicesInclude"
import SectionQuantity from "../components/AboutUsComponents/SectionQuantity/SectionQuantity"
import SEO from "../components/seo"


const AboutUs = ({ data }) => {

  return(
    <Layout>
      <SEO seo={data.strapiAboutUsPage.SEO_About_Us} />
      <SectionHeader />
      <AboutDoctor />
      <ListServicesInclude />
      <SectionQuantity />
      <SectionComments />
      <SectionBookAnAppointment />
      <SectionForm />
    </Layout>
  )
}

export default AboutUs
export const query = graphql`
    {
        strapiAboutUsPage {
            SEO_About_Us {
                Title
                Image_Url
                Description
            }
        }
    }
`