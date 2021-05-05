import React from "react"
import classes from "./sectionForm.module.scss"
import Arrow from "../../../images/Arrow 1.svg"
import $ from "jquery"



class SectionForm extends React.Component{

  render(){

    return(
      <section style={{
        background: this.props.background || `#F7F6F5`
      }}>
        <div className="container">
          <h2 className={classes.sectionTitle}>{this.props.title || 'Feel free to contact us'}</h2>
          <span className={classes.sectionSubtitle}>{this.props.subtitle ||'Please fill out the form below or use our contact information provided.'}</span>

          <form className={classes.contactForm}>
            <div className={classes.formInput}>
              <input placeholder={`Your name`} type="text" name="Name" />
            </div>
            <div className={classes.formInput}>
              <input placeholder={`Your email`} type="email" name="Email" />
            </div>
            <div className={classes.formInput}>
              <input placeholder={`Your Phone`} type="tel" name="Phone" />
            </div>
            <div className={`${classes.formInput} textarea`}>
              <textarea disabled={false} placeholder={`Your Message`} name="Comment" id="" cols="30" rows="10"></textarea>
            </div>

            <button className={`link`} style={{
              marginRight: ` auto`,
              marginLeft: `auto`,
              cursor: `pointer`,
            }}>
              Send us a message
              <img src={Arrow} alt="" style={{
                marginLeft: 10
              }} />
            </button>
          </form>
        </div>
      </section>
    )
  }
}

export  default SectionForm