import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SectionHeader from "../components/Services/SectionHeader/SectionHeader"
import SectionBookAnAppointment from "../components/HomePageComponents/SectionBookAnAppointment/SectionBookAnAppointment"
import SectionForm from "../components/HomePageComponents/SectionForm/SectionForm"
import SectionList from "../components/Patients/SectionList/SectionList"
import SEO from "../components/seo"

const Patients = ({ data }) =>{

  return(
    <Layout>
      <SEO seo={data.seo.SEO_Blog_Page} />
      <SectionHeader
      title={data.strapiNewPatients.Title}
      background={data.strapiNewPatients.Background_Section_Header[0].url}
      />
      <SectionList />
      <SectionBookAnAppointment />
      <SectionForm />
    </Layout>
  )
}


export default Patients
export const dataPatient = graphql`
    {
        strapiNewPatients {
            Title
            Background_Section_Header {
                url
                alternativeText
            }
        }
        seo: strapiNewPatients {
            SEO_Patient_Page {
                Description
                Image_Url
                Title
            }
        }
    }
`