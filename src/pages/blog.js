import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Layout from "../components/layout"
import SectionHeader from "../components/Services/SectionHeader/SectionHeader"
import SectionBookAnAppointment from "../components/HomePageComponents/SectionBookAnAppointment/SectionBookAnAppointment"
import SectionForm from "../components/HomePageComponents/SectionForm/SectionForm"
import SectionListPosts from "../components/BlogPage/SectionListPosts/SectionListPosts"
import SEO from "../components/seo"

const Blog = ({ data }) =>{

  return(
    <Layout>
        <SEO seo={data.seo.SEO_Blog_Page} />
      <SectionHeader
      title={data.blogPage.Title}
      background={data.blogPage.Background_Section_Header[0].url}
      />
      <SectionListPosts
      posts={data.posts.nodes}
      recentPosts={data.recentPosts.nodes}
      shortText={true}
      />
      <SectionBookAnAppointment />
      <SectionForm />
    </Layout>
  )
}


export default Blog
export const query = graphql`
    {
        seo: strapiBlogPage {
            SEO_Blog_Page {
                Description
                Image_Url
                Title
            }
        }
        blogPage: strapiBlogPage {
            Title
            Background_Section_Header {
                alternativeText
                url
            }
        }
        posts: allStrapiArticles {
            nodes {
                Title
                Text
                slug
                createdAt(formatString: "MMM D Y")
                category_article {
                    Name_Category
                }
                author {
                    id
                    username
                }
              
                Image {
                    url
                    alternativeText
                }
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