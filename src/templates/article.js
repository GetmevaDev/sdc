import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Layout from "../components/layout"
import SectionHeader from "../components/Services/SectionHeader/SectionHeader"
import SectionBookAnAppointment from "../components/HomePageComponents/SectionBookAnAppointment/SectionBookAnAppointment"
import SectionForm from "../components/HomePageComponents/SectionForm/SectionForm"
import SectionListPosts from "../components/BlogPage/SectionListPosts/SectionListPosts"
import SectionContent from "../components/ArticlePage/SectionContent/SectionContent"
import SEO from "../components/seo"


const Article = ({ data }) =>{

  return(
    <Layout>
      <SEO seo={data.pagrArticle.SEO_Home_Page} />
      <SectionHeader
        title={data.blogPage.Title}
        background={data.blogPage.Background_Section_Header[0].url}
      />
      <SectionContent
      post={data.pagrArticle}
      recentPosts={data.recentPosts.nodes}
      shortText={false}
      />
      <SectionBookAnAppointment />
      <SectionForm />
    </Layout>
  )
}


export default Article
export const query = graphql`
    query ArticleQuery($slug: String){
       pagrArticle: strapiArticles(slug: {eq: $slug}) {
            Title
            Text
           SEO_Articles {
               Description
               Image_Url
               Title
           }
            Image {
                alternativeText
                url
            }
            author {
                username
            }
           category_post {
               Name_Category
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