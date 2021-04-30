import React from "react"
import {graphql, Link } from "gatsby"
import "../scss/main.scss"

import Layout from "../components/layout"
import SectionHeader from "../components/HomePageComponents/SectionHeader/SectionHeader"
import SectionDescription from "../components/HomePageComponents/SectionDescription/SectionDescription"
import Image from "../components/image"
import SEO from "../components/seo"
import SectionOurServices from "../components/HomePageComponents/SectionOurServices/SectionOurServices"
import SectionComments from "../components/HomePageComponents/SectionComments/SectonComments"
import SectionNewSpecial from "../components/HomePageComponents/SectionNewSpecial/NewSpecial"
import SectionBookAnAppointment from "../components/HomePageComponents/SectionBookAnAppointment/SectionBookAnAppointment"
import SectionForm from "../components/HomePageComponents/SectionForm/SectionForm"


const IndexPage = ({ data }) => (
  <Layout>
      <SEO seo={data.strapiHomePage.SEO_Home_Page} />
    <SectionHeader />
    <SectionDescription />
    {/*<SectionOurServices />*/}
    <SectionComments />
    <SectionNewSpecial />
    <SectionBookAnAppointment />
    <SectionForm />
  </Layout>
)

export default IndexPage
export const query = graphql`
    {
        strapiHomePage {
            SEO_Home_Page {
                Title
                Image_Url
                Description
            }
        }
    }
`