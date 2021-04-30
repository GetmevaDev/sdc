import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SectionHeader from "../components/DigitalCaseSubmission/SectionHeader/SectionHeader"
import { ContentBlock } from "../components/DigitalCaseSubmission/ContentBlock/ContentBlock"


const DigitalCaseSubmission = ({data}) => {
  return(
    <Layout>
        <SectionHeader />
        <ContentBlock
          content={data.strapiDigitalCaseSubmissions}
          navigation={data.navigation.Nav_item}
        />
    </Layout>
  )
}

export default DigitalCaseSubmission
export const queryDigitalCaseSubmission = graphql`
    query DigitalCaseSubmissionQuery($slug: String){
        strapiDigitalCaseSubmissions(slug: {eq: $slug}){
            Image {
                alternativeText
                url
            }
            Title
            Text
            slug
        }
        navigation: strapiNavigationStudioAccepted {
            Nav_item {
                Link_Page
                Name_Page
                id
            }
        }
    }
`