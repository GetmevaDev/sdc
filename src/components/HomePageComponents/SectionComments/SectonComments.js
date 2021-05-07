import React, { useEffect } from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import classesSectionDescription from "../SectionDescription/sectionDescriptio.module.scss"
import classes from "./sectionCommens.module.scss"

import Arrow from "../../../images/Arrow 1.svg"
import ImagePhoto from "../../../images/Group2353546457.png"
import Aos from "aos"
import "aos/dist/aos.css"


export default function  SectionComments (){
  useEffect(() => {
    Aos.init({duration: 400})
  },[])

  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

  const SectionComment = useStaticQuery(graphql`
      {
         homPageElement: strapiHomePage {
              Section_Comments {
                  Title
                  Subtitle
                  Image {
                      alternativeText
                      url
                  }
              }
          }
          comment: allStrapiComments {
              edges {
                  node {
                      Name
                      Comment
                      
                  }
              }
          }
      }
  `)

    return(



            <section className={classes.sectionComment}>
              <div className={`row row-reverse mw1640 ${classesSectionDescription.flexStyles}`}>
                <div className={classesSectionDescription.imageDescription} >
                  <img
                    data-aos-delay="200"
                    data-aos="fade-up"
                    src={SectionComment.homPageElement.Section_Comments.Image[0].url}
                    alt={SectionComment.homPageElement.Section_Comments.Image[0].alternativeText}
                  />
                </div>

                <div data-aos-delay="200" data-aos="fade-right" className={classesSectionDescription.textContainer} >
                  <div className="hidden" style={{overflow: "hidden", paddingBottom: 50}}>
                    <h2>{SectionComment.homPageElement.Section_Comments.Title}</h2>
                    <h3>{SectionComment.homPageElement.Section_Comments.Subtitle}</h3>

                    <Swiper
                      spaceBetween={50}
                      slidesPerView={1}

                      pagination={{ clickable: true }}
                    >
                      {
                        SectionComment.comment.edges.map(comment => (

                          <SwiperSlide>
                            <p>{comment.node.Comment}</p>
                            <div className={`row`} style={{
                              alignItems: `center`
                            }}>
                              <img
                                className={classes.photoPatient}
                                src={comment.node.Photo === undefined ?
                                  ImagePhoto : comment.node.Photo[0].url}
                                alt={comment.node.Photo === undefined ?
                                  'Photo' : comment.node.Photo[0].alternativeText} />
                              <h4 className={classes.name}>{comment.node.Name}</h4>
                            </div>
                          </SwiperSlide>


                        ))
                      }


                    </Swiper>


                  </div>
                  <Link className={`link`} to={`/reviews`}>More review <img src={Arrow} alt="" /></Link>
                </div>




              </div>
            </section>


    )

}