import React from "react"
import ReactMarkdown from "react-markdown"




export function Content({data}){
    return(
      <div className={`block-content row`}>
        {
          data.Image ?  <div className="block-image">
            <img src={data.Image[0].url} alt={data.Image[0].alternativeText} />
          </div> : null
        }

          <div className="block-text">
            <h2>{data.Title}</h2>
            <ReactMarkdown
            source={data.Text}
            />
          </div>
      </div>
    )
}