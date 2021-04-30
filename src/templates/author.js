import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SectionHeader from "../components/Services/SectionHeader/SectionHeader"
import SectionBookAnAppointment from "../components/HomePageComponents/SectionBookAnAppointment/SectionBookAnAppointment"
import SectionForm from "../components/HomePageComponents/SectionForm/SectionForm"
import SectionListPosts from "../components/BlogPage/SectionListPosts/SectionListPosts"
import SEO from "../components/seo"


const Author = ({ data }) =>{
  return(
    <Layout>
      <SEO seo={data.seo.SEO_Blog_Page} />
      <SectionHeader
        title={data.blogPage.Title}
        background={data.blogPage.Background_Section_Header[0].url}
      />
      <SectionListPosts
        posts={data.authorPage.articles}
        recentPosts={data.recentPosts.nodes}
        author={data.authorPage.username}
        shortText={true}
      />
      <SectionBookAnAppointment />
      <SectionForm />
    </Layout>
  )
}


export default Author
export const queryAuthor = graphql`
    query UserTemplate($username: String) {
        seo:  strapiArticles {
            SEO_Articles {
                Description
                Image_Url
                Title
            }
        }
    
       authorPage: strapiUsers(username: { eq: $username}) {
            id
            username
            articles {
                Title
                slug
                createdAt(formatString: "MMM D Y")
                Text
                author
                category_article
                Image {
                    alternativeText
                    url
                }
            }
        }
        blogPage: strapiBlogPage {
            Title
            Background_Section_Header {
                alternativeText
                url
            }
        }
        recentPosts: allStrapiArticles(limit: 4) {
            nodes {
                Title
                Text
                author {
                    username
                }
                Image {
                    url
                    alternativeText
                }
                createdAt
            }
        }
    }
`