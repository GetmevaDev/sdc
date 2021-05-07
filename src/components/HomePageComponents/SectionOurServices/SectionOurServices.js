import React, { useEffect } from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import ArrowLeft from "../../../images/Arrow-left.svg"
import ArrowLRight from "../../../images/Arrow-right.svg"

import classes from "./sectionOurServices.module.scss"
import Aos from "aos"
import "aos/dist/aos.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.scss';


export default function SectionOurServices(){

  SwiperCore.use([Navigation]);

  useEffect(() => {
    Aos.init({duration: 400})
  },[])

  const sectionOurServices = useStaticQuery(graphql`
      {
          strapiHomePage {
              Section_Our_Services {
                  Title
                  Subtitle
                  BackgrounSection {
                      url
                      alternativeText
                  }
              }
          }
          ourServices:  allStrapiServices {
              nodes {
                  Background_Section_Header {
                      Background {
                          alternativeText
                          url
                      }
                  }
                  Icon_for_home_page {
                      alternativeText
                      url
                  }
                  Title
                  Text
                  slug
                  id
              }
          }
          firstServices: allStrapiServices {
              nodes {
                  slug
              }
          }
      }
  `)


  const background = sectionOurServices.strapiHomePage.Section_Our_Services.BackgrounSection &&
    sectionOurServices.strapiHomePage.Section_Our_Services.BackgrounSection[0] !== null ?
    sectionOurServices.strapiHomePage.Section_Our_Services.BackgrounSection[0].url : null;

  const title = sectionOurServices.strapiHomePage.Section_Our_Services.Title;
  const subtitle = sectionOurServices.strapiHomePage.Section_Our_Services.Subtitle;

  return(
    <section data-aos-delay="200" data-aos="fade-up" className={classes.sectionOurServices} style={{
      background: `url("${background}")`,
      marginBottom: 145,
    }}>
      <div className={`container services-container`} style={{
        alignItems: 'center',
      }}>
        <div className={classes.titleServices}>
          {title && title !== null ? (
            <h2>{title}</h2>
          ) : null}

          {subtitle && subtitle !== null ? (
            <h3>{subtitle}</h3>
          ) : null}
        </div>

        <div>

          <Swiper

            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              467: {
                slidesPerView: 2,
              },
              1103:{
                slidesPerView: 4,
              }
            }}
          >
            {
              sectionOurServices.ourServices.nodes.map(item => (
                <SwiperSlide>
                  <div className={classes.servicesCard}>
                    <div className="icon-block">
                      <img
                        src={item.Icon_for_home_page[0].url}
                        alt={item.Icon_for_home_page[0].alternativeText}
                      />
                    </div>
                    <h4>{item.Title}</h4>
                    <span>{item.Text.substring(0,99)}</span>
                    {/*<Link className={classes.moreInfo} to={item.slug}>More info</Link>*/}
                  </div>
                </SwiperSlide>
              ))
            }
            <button className={`swiper-button-next`} type={`button`}>
              <img src={ArrowLRight} alt="" />

            </button>
            <button className={`swiper-button-prev`} type={`button`}>
              <img src={ArrowLeft} alt="" />
            </button>
          </Swiper>
        </div>
      </div>
    </section>
  )
}