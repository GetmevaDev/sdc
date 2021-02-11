import React, { useState } from "react"
import { Link } from "gatsby"
import classes from "../../BlogPage/SectionListPosts/sectionListPosts.module.scss"
import Image from "../../../images/Group2353546457.png"
import Loupe from "../../../images/loupe (1) 1.svg"
import Note from "../../../images/note 1.svg"



export default function SectionContent({ post, recentPosts, shortText }){

  const [searchTerm, setSearchTerm] = useState("");


  return(
    <section>
      <div className={`container row ${classes.flexStyles}`}>

            <div className={`${classes.blockPosts} row`}>
              <div className="left">
                <img src={post.Image[0].url} alt={post.Image[0].alternativeText} />
              </div>
              <div className={classes.right}>
                <h3>{post.Title}</h3>
                <div className="block-author row">
                  <img className={classes.imageIcon} src={Image} alt="" />
                  <span className={classes.author}>Posted by <a href="">{post.author.username}</a> on July 13, 2019</span>
                </div>
                <p className={classes.text}>{ shortText ?  post.Text.substring(0,247).concat('...') : post.Text}</p>
                <div className={`${classes.categoryAndLink} row`}>
                  <span><img src={Note} alt="" />{post.category_post.Name_Category}</span>
                </div>
              </div>
            </div>



        <div className={classes.blockSearch}>
          <div className={classes.blockInput}>
            <input
              type="text"
              placeholder={`Search`}
              onChange={(event => {
                setSearchTerm(event.target.value)
              })}
            />
            <img src={Loupe} alt="" />
          </div>


          <span>Recent Posts</span>
          <ul>
            {
              recentPosts.map(li => (
                <li><Link to={'#'}>{li.Title}</Link></li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}