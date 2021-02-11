import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SectionHeader from "../components/Services/SectionHeader/SectionHeader"
import SectionForm from "../components/HomePageComponents/SectionForm/SectionForm"
import SectionContact from "../components/ContactPage/SectionContacts/SectionContacts"
import SEO from "../components/seo"


const ContactsPage = ({ data }) => {
  return(
    <Layout>
      <SEO seo={data.seo.SEO_Blog_Page} />
      <SectionHeader
      title={data.pageContact.Title_Page}
      background={data.pageContact.Background_SectionHeader[0].url}
      />
        <SectionContact />
      <SectionForm
        background={'transparent'}
      title={'Send Us An Email'}
      subtitle={`Please fill out the form below or use our contact information provided.`}
      />
    </Layout>
  )
}

export default ContactsPage;
export const dataContact = graphql`
    {
       pageContact: strapiContacts {
            Title_Page
            Background_SectionHeader {
                alternativeText
                url
            }
        }
        seo: strapiContacts {
            SEO_Contact_Page {
                Description
                Image_Url
                Title
            }
        }
    }
`